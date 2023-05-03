function keysToUpperCase(state, array) {
	const letters = [...array].filter(elem => !elem.classList.contains('keyboard__key_service'))
	if (state) {
		letters.forEach(elem => elem.innerHTML = elem.innerHTML.toUpperCase())
	} else { letters.forEach(elem => elem.innerHTML = elem.innerHTML.toLowerCase()) }
}

function switcLanguage(currentLeng, leng) {
	const currentLengCopy = [...currentLeng]
	currentLengCopy.forEach((elem, index) => { elem.innerHTML = leng[index] })
}


function getCursorPosition(elem) {
	let cursorPos = null;
	if (document.selection) {
		let range = document.selection.createRange();
		range.moveStart('textedit', -1);
		cursorPos = range.text.length;
	}
	else {
		cursorPos = elem.selectionStart;
	}
	return cursorPos
}
export { keysToUpperCase, switcLanguage, getCursorPosition }