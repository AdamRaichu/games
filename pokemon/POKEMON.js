//includes MOVE, POKEMON, Electabuzz and Pikachu

var MOVE = function (cost, name, damage, text) {
	this.cost = cost
	this.name = name
	this.damage = damage
	this.text = text
}

var POKEMON = function (name, type, hp, stage, moveCount, movesArray, weakness, resistance, retreat) {
	
	this.name = name
	this.type = type
	this.hp = hp
	this.stage = stage
	this.moveCount = moveCount
	this.movesArray = movesArray
	this.retreat = retreat
	
	this.imageURL = "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/07/pokemon-unite-pikachu-and-others.jpg"
	
	console.log("Pokémon: " + this.name + " has been created.")
}

POKEMON.prototype.assignImage = function (imageURL) {
	this.imageURL = imageURL
}

POKEMON.prototype.makeActive = function () {
	pokeCard.main.classList.add(typeToString(this.type))
	pokeCard.name.innerText = this.name
	pokeCard.hp.innerText = this.hp
	pokeCard.icon.classList = [typeToString(this.type)]
	
	pokeCard.moves.move1.cost.innerHTML = ""
	appendIcons(this.movesArray[0].cost, pokeCard.moves.move1.cost)
	pokeCard.moves.move1.name.innerText = this.movesArray[0].name
	pokeCard.moves.move1.damage.innerText = this.movesArray[0].damage
	pokeCard.moves.move1.text.innerText = this.movesArray[0].text
	
	if (this.moveCount >= 2) {
		pokeCard.moves.move2.cost.innerHTML = ""
		appendIcons(this.movesArray[1].cost, pokeCard.moves.move2.cost)
		pokeCard.moves.move2.name.innerText = this.movesArray[1].name
		pokeCard.moves.move2.damage.innerText = this.movesArray[1].damage
		pokeCard.moves.move2.text.innerText = this.movesArray[1].text
	}
	
	pokeCard.portrait.style.backgroundImage = 'url(' + this.imageURL + ')'
}
