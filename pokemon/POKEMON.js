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
	
	if (this.moveCount >= 2) {
		pokeCard.moves.move2.cost.innerHTML = ""
		appendIcons(this.movesArray[1].cost, pokeCard.moves.move2.cost)
		pokeCard.moves.move2.name.innerText = this.movesArray[1].name
		pokeCard.moves.move2.damage.innerText = this.movesArray[1].damage
	}
	
	pokeCard.portrait.style.backgroundImage = 'url(' + this.imageURL + ')'
}

var Electabuzz = new POKEMON("Electabuzz", 3, 80, 0, 2, [new MOVE([3, 10],"Low Kick", 20, ""), new MOVE([3, 10, 10], "Magnetic Blast", 50, "")], 5, null, 2)
var Pikachu = new POKEMON("Pikachu", 3, 60, 0, 1, [new MOVE([3], "Agility", 10, "Flip a coin. If head, prevent all effects of attack, including damage, done to this Pokemon during your opponent's next turn.")], 5, null, 1)

Electabuzz.assignImage("https://qph.cf2.quoracdn.net/main-qimg-9fd7e90d8781509cf5b07247f695c672-pjlq")
Pikachu.makeActive()
