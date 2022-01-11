//  /tycoon/game.js
var GAME = function () {
  this.currency = 100
  this.playerName = prompt("Choose a username.")
}

GAME.prototype.update = function() {
  counter.innerText = this.currency
}

GAME.prototype.earn = function (amount) {
  this.currency += amount
}

var counter = document.getElementById("status_counter")
var buttons = {
  click: document.getElementById("buttons:click")
}

setInterval(Game.update(), 1000)
