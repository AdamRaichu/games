//  /tycoon/game.js
var GAME = function () {
  if (localStorage.currency) {
    this.currency = localStorage.getVar("currency")
  } else {
    this.currency = 100
  }
}

GAME.prototype.update = function() {
  document.getElementById("status_counter").innerText = this.currency
  localStorage.setVar("currency", this.currency)
}

GAME.prototype.earn = function (amount) {
  this.currency += amount
}

var buttons = {
  click: document.getElementById("buttons:click")
}

var Game = new GAME()
setInterval(Game.update(), 1000)
