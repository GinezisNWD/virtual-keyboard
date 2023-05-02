import { init, initKeyboard } from "./keyboard-render.js"
import { keysToUpperCase, switcLanguage } from "./keyboard-key-functions.js"
import { en, enShift, ru, ruShift } from './keyboard-languages.js'
init()
initKeyboard()

const renderedKeys = document.querySelectorAll('.keyboard__key')
const textArea = document.querySelector('.keyboard__input')
const capsLockKey = document.querySelector('.keyboard__key_caps-lock');
const serviceKeys = ['Delete', 'CapsLock', 'Enter', 'ShiftLeft',
	'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight',]
let isCapsActive = false
let isEnglish = true


document.addEventListener('keydown', function (e) {
	console.log(e)
	if (e.code === 'Tab') {
		e.preventDefault()
	}
	if (e.code === 'CapsLock') {
		isCapsActive = !isCapsActive
		keysToUpperCase(isCapsActive, renderedKeys)
	}
	if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
		if (!isEnglish) {
			switcLanguage(renderedKeys, ruShift)
		} else {
			switcLanguage(renderedKeys, enShift)
		}
	}

	if (e.shiftKey && e.altKey) {
		isEnglish = !isEnglish
		if (!isEnglish) {
			switcLanguage(renderedKeys, ruShift)
		} else {
			switcLanguage(renderedKeys, enShift)
		}
		keysToUpperCase(isCapsActive, renderedKeys)
	}
	try {
		renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.add('_active')
	} catch (error) { }
})

document.addEventListener('keyup', function (e) {
	if (e.code === 'CapsLock') {
		if (isCapsActive) {
			capsLockKey.classList.add('_active')
		} else {
			capsLockKey.classList.remove('_active')
		}
	} else {
		try {
			renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.remove('_active')
		} catch (error) { }

	}

	if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
		if (!isEnglish) {
			switcLanguage(renderedKeys, ru)
		} else {
			switcLanguage(renderedKeys, en)
		}
		keysToUpperCase(isCapsActive, renderedKeys)
	}

})


renderedKeys.forEach(elem => elem.addEventListener('mousedown', function (e) {
	e.preventDefault()

	const customEvent = new KeyboardEvent('keydown', {
		key: e.target.innerHTML,
		bubbles: true,
		code: e.target.getAttribute('value'),
	})

	textArea.dispatchEvent(customEvent)
}))

renderedKeys.forEach(elem => elem.addEventListener('mouseup', function (e) {
	e.preventDefault()

	const customEvent = new KeyboardEvent('keyup', {
		key: e.target.innerHTML,
		bubbles: true,
		code: e.target.getAttribute('value')
	})

	textArea.dispatchEvent(customEvent)
}))

textArea.addEventListener('keydown', function (e) {
	let eKey = e.key
	if (serviceKeys.includes(e.code)) {
		return
	}
	if (e.code === 'Backspace') {
		if (e.isTrusted) {
			return
		}
		textArea.value = textArea.value.slice(0, -1)
		return
	}
	if (e.code === 'Tab') {
		eKey = '\t'
	}
	if (e.code === 'ArrowUp') {
		eKey = '▲'
	}
	if (e.code === 'ArrowLeft') {
		eKey = '◄'
	}
	if (e.code === 'ArrowDown') {
		eKey = '▼'
	}
	if (e.code === 'ArrowRight') {
		eKey = '►'
	}
	e.preventDefault()
	textArea.focus();

	textArea.value += eKey
})