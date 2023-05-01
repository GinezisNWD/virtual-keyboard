import { en, enAlt } from "./keyboard-languages.js"

function init() {
	const wrapper = document.createElement('div')
	wrapper.classList.add('wrapper')
	document.body.prepend(wrapper)

	const main = document.createElement('main')
	main.classList.add('main')
	wrapper.prepend(main)

	const container = document.createElement('div')
	container.classList.add('container')
	main.prepend(container)
}

function initKeyboard(lang = en) {
	const container = document.querySelector('.main .container')

	const keyboard = document.createElement('section')
	keyboard.classList.add('keyboard')
	container.prepend(keyboard)

	const keyboardTitle = document.createElement('h1')
	keyboardTitle.classList.add('keyboard__title')
	keyboardTitle.textContent = 'RSS Virtual Keyboard'
	keyboard.append(keyboardTitle)

	const keyboarInput = document.createElement('textarea')
	keyboarInput.classList.add('keyboard__input')
	keyboarInput.setAttribute('cols', 70)
	keyboarInput.setAttribute('rows', 12)
	keyboard.append(keyboarInput)

	const keyboarKeys = document.createElement('div')
	keyboarKeys.classList.add('keyboard__keys')
	keyboard.append(keyboarKeys)

	createButtons(lang)

}

function createButtons(array) {
	const keyboarKeys = document.querySelector('.keyboard__keys')
	for (let i = 0; i < array.length; i++) {
		const keyboardRow = document.createElement('div')
		keyboardRow.classList.add('keyboard__row')
		keyboarKeys.append(keyboardRow)
		for (let j = 0; j < array[i].length; j++) {
			const keyboardKey = document.createElement('div')
			keyboardKey.classList.add('keyboard__key')
			keyboardKey.setAttribute('value', `${array[i][j]}`)



			keyboardKey.textContent = array[i][j]
			if (array[i][j] === 'Backquote') {
				keyboardKey.textContent = '`'
			}
			if (array[i][j].startsWith('Digit')) {
				keyboardKey.textContent = parseInt(array[i][j].match(/\d+/))
			}
			if (array[i][j] === 'Minus') {
				keyboardKey.textContent = '-'
			}
			if (array[i][j] === 'Equal') {
				keyboardKey.textContent = '='
			}

			if (array[i][j].startsWith('Key')) {
				keyboardKey.textContent = array[i][j].at(3).toLowerCase()
			}

			if (array[i][j] === 'BracketLeft') {
				keyboardKey.textContent = '['
			}
			if (array[i][j] === 'BracketRight') {
				keyboardKey.textContent = ']'
			}
			if (array[i][j] === 'Backslash') {
				keyboardKey.textContent = '\\'
			}
			if (array[i][j] === 'Delete') {
				keyboardKey.textContent = 'Del'
			}
			if (array[i][j] === 'Semicolon') {
				keyboardKey.textContent = ';'
			}
			if (array[i][j] === 'Quote') {
				keyboardKey.textContent = `'`
			}
			if (array[i][j] === 'ShiftLeft' || array[i][j] === 'ShiftRight') {
				keyboardKey.textContent = 'Shift'
			}
			if (array[i][j] === 'Comma') {
				keyboardKey.textContent = ','
			}
			if (array[i][j] === 'Period') {
				keyboardKey.textContent = '.'
			}
			if (array[i][j] === 'Slash') {
				keyboardKey.textContent = '/'
			}


			if (array[i][j] === 'ControlLeft' || array[i][j] === 'ControlRight') {
				keyboardKey.textContent = 'Ctrl'
			}
			if (array[i][j] === 'MetaLeft') {
				keyboardKey.textContent = 'Win'
			}
			if (array[i][j] === 'AltLeft' || array[i][j] === 'AltRight') {
				keyboardKey.textContent = 'Alt'
			}
			if (array[i][j] === 'Space') {
				keyboardKey.textContent = ''
			}

			if (array[i][j] === 'ArrowUp' || array[i][j] === 'ArrowLeft' || array[i][j] === 'ArrowDown' || array[i][j] === 'ArrowRight') {
				keyboardKey.innerHTML = '<span></span>'
			}




			keyboardRow.append(keyboardKey)
		}
	}

	const renderedKeys = document.querySelectorAll('.keyboard__key')
	renderedKeys[13].classList.add('keyboard__key_service', 'keyboard__key_backspace')
	renderedKeys[14].classList.add('keyboard__key_service', 'keyboard__key_tab')
	renderedKeys[28].classList.add('keyboard__key_service', 'keyboard__key_del')
	renderedKeys[29].classList.add('keyboard__key_service', 'keyboard__key_caps-lock')
	renderedKeys[41].classList.add('keyboard__key_service', 'keyboard__key_enter')
	renderedKeys[42].classList.add('keyboard__key_service', 'keyboard__key_shift', 'keyboard__key_left-shift')
	renderedKeys[53].classList.add('keyboard__key_service', 'keyboard__key_up')
	renderedKeys[54].classList.add('keyboard__key_service', 'keyboard__key_shift', 'keyboard__key_right-shift')
	renderedKeys[55].classList.add('keyboard__key_service', 'keyboard__key_ctrl', 'keyboard__key_left-ctrl')
	renderedKeys[56].classList.add('keyboard__key_service', 'keyboard__key_win')
	renderedKeys[57].classList.add('keyboard__key_service', 'keyboard__key_alt', 'keyboard__key_left-alt')
	renderedKeys[58].classList.add('keyboard__key_space')
	renderedKeys[59].classList.add('keyboard__key_service', 'keyboard__key_alt', 'keyboard__key_right-alt')
	renderedKeys[60].classList.add('keyboard__key_service', 'keyboard__key_left')
	renderedKeys[61].classList.add('keyboard__key_service', 'keyboard__key_down')
	renderedKeys[62].classList.add('keyboard__key_service', 'keyboard__key_right')
	renderedKeys[63].classList.add('keyboard__key_service', 'keyboard__key_ctrl', 'keyboard__key_right-ctrl')
}



export { init, initKeyboard }