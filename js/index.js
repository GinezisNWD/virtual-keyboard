import { init, initKeyboard } from "./keyboard-render.js"
init()
initKeyboard()

const renderedKeys = document.querySelectorAll('.keyboard__key')
const textArea = document.querySelector('.keyboard__input')
const capsLockKey = document.querySelector('.keyboard__key_caps-lock');
const serviceKeys = ['Backspace', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp',
	'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ArrowLeft',
	'ArrowDown', 'ArrowRight', 'ControlRight',]
let isCapsActive = false


document.addEventListener('keydown', function (e) {
	console.log(e)
	if (e.code === 'Tab') {
		e.preventDefault()
	}
	if (e.code === 'CapsLock') {
		isCapsActive = !isCapsActive
	}
	renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.add('_active')

})

document.addEventListener('keyup', function (e) {
	if (e.code === 'CapsLock') {
		if (isCapsActive) {
			capsLockKey.classList.add('_active')
		} else {
			capsLockKey.classList.remove('_active')
		}
	} else {
		renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.remove('_active')
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
	if (e.code === 'Tab') {
		eKey = '\t'
	}
	e.preventDefault()
	textArea.focus();

	textArea.value += eKey
})