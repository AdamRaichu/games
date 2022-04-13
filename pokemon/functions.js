function typeToString (number) {
	if (number === 0) {
		return "grass"
	} else if (number === 3) {
		return "electric"
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
