import { init, initKeyboard } from "./keyboard-render.js"
init()
initKeyboard()

const keyboarKeys = document.querySelector('.keyboard__keys')
const renderedKeys = document.querySelectorAll('.keyboard__key')
const textArea = document.querySelector('.keyboard__input')


document.addEventListener('keydown', function (e) {
	console.log(e)
	if (e.code === 'Tab') {
		e.preventDefault()
	}
	renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.add('_active')
})

document.addEventListener('keyup', function (e) {
	renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.remove('_active')
})

document.addEventListener('mousedown', function (e) {
	if (e.target.classList.contains('keyboard__key')
		|| e.target.classList.contains('keyboard__row'
			|| e.target.classList.contains('keyboard__keys'))) {
		e.preventDefault()

		const customEvent = new KeyboardEvent('keydown', {
			key: e.target.getAttribute('value'),
			bubbles: true,
			code: e.target.getAttribute('value')
		})
		console.log(e.target)
		// console.log(customEvent)

		document.dispatchEvent(customEvent)
	}
})

document.addEventListener('mouseup', function (e) {
	if (e.target.classList.contains('keyboard__key')
		|| e.target.classList.contains('keyboard__row'
			|| e.target.classList.contains('keyboard__keys'))) {
		e.preventDefault()

		const customEvent = new KeyboardEvent('keyup', {
			key: e.target.getAttribute('value'),
			bubbles: true,
			code: e.target.getAttribute('value')
		})
		// console.log(customEvent)

		document.dispatchEvent(customEvent)
	}
})

