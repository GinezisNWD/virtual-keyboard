import { init, initKeyboard } from "./keyboard-render.js"
init()
initKeyboard()

const renderedKeys = document.querySelectorAll('.keyboard__key')
const textArea = document.querySelector('.keyboard__input')


document.addEventListener('keydown', function (e) {
	console.log(e.key)
	console.log(e.code)
	if (e.code === 'Tab') {
		e.preventDefault()
	}
	renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.add('_active')

})

document.addEventListener('keyup', function (e) {
	renderedKeys[[...renderedKeys].findIndex(elem => elem.getAttribute('value') == e.code)].classList.remove('_active')
})