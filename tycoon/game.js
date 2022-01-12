//  /tycoon/game.js
var GAME = function () {
  if (localStorage.currency) {
    this.currency = localStorage.getVar("currency")
  } else {
    this.currency = 100
  }
}

GAME.prototype.update = function() {
  document.getElementById("status_counter").innerHTML = this.currency
  localStorage.setVar("currency", this.currency)
  buttons.click.blur()
}

GAME.prototype.earn = function (amount) {
  this.currency += amount
}

var buttons = {
  click: document.getElementById("buttons_click")
}

var Game = new GAME()
Game.update()
