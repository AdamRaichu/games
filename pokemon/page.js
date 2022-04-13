var pokeCard = {
	main: document.getElementById("poke-card"),
	stage: document.getElementById("stage"),
	name: document.getElementById("name"),
	hp: document.getElementById("hp"),
	icon: document.getElementById("type-icon"),
	portrait: document.getElementById("portrait"),
	moves: {
		main: document.getElementById("moves"),
		move1: {
			main: document.getElementsByClassName("move")[0],
			cost: document.getElementsByClassName("move_cost")[0],
			name: document.getElementsByClassName("move_name")[0],
			damage: document.getElementsByClassName("move_damage")[0],
			text: document.getElementsByClassName("move_text")[0]
		},
		move2: {
			main: document.getElementsByClassName("move")[1],
			cost: document.getElementsByClassName("move_cost")[1],
			name: document.getElementsByClassName("move_name")[1],
			damage: document.getElementsByClassName("move_damage")[1],
			text: document.getElementsByClassName("move_text")[1]
		}
	}
}
