import { init, initKeyboard } from "./keyboard-render.js"
init()
initKeyboard()

const renderedKeys = document.querySelectorAll('.keyboard__key')

window.addEventListener('keydown', function (e) {
	console.log(e.code)
	console.log(e.key)
	for (let i = 0; i < renderedKeys.length; i++) {
		if (e.code === renderedKeys[i].getAttribute('value')) {
			renderedKeys[i].classList.add('_active')
		}
	}
})

window.addEventListener('keyup', function (e) {
	for (let i = 0; i < renderedKeys.length; i++) {
		if (e.code === renderedKeys[i].getAttribute('value')) {
			renderedKeys[i].classList.remove('_active')
		}
	}
})

