function keysToUpperCase(state, array) {
	const letters = [...array].filter(elem => !elem.classList.contains('keyboard__key_service'))
	// console.log(letters)
	// console.log(letters[16].classList.contains('keyboard__key'))
	if (state) {
		letters.forEach(elem => elem.innerHTML = elem.innerHTML.toUpperCase())
	} else { letters.forEach(elem => elem.innerHTML = elem.innerHTML.toLowerCase()) }

}

export { keysToUpperCase }