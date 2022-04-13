function typeToString (number) {
	if (number === 0) {
		return "grass"
	} else if (number === 1) {
		return "fire"
	} else if (number === 2) {
		return "water"
	} else if (number === 3) {
		return "electric"
	} else if (number === 4) {
		return "psychic"
	} else if (number === 5) {
		return "fighting"
	} else if (number === 6) {
		return "dark"
	} else if (number === 7) {
		return "steel"
	} else if (number === 8) {
		return "fairy"
	} else if (number === 9) {
		return "dragon"
	} else if (number === 10) {
		return "colorless"
	}
}

function appendIcons (typeArray, target) {
	for (checkList = 0; checkList < typeArray.length; checkList++) {
		var i = document.createElement("img")
		i.classList.add(typeToString(typeArray[checkList]))
		target.appendChild(i)
	}
}
