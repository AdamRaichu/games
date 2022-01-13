//  /tycoon/game.js
var GAME = function () {
  if (localStorage.currency) {
    this.currency = localStorage.getVar("currency")
  } else {
    this.currency = 100
  }
  
  if (localStorage.owned) {
    this.owned = localStorage.getVar("owned")
  } else {
    this.owned = []
  }
  for (checkList = 0; checkList < this.owned.length; checkList++) {
    this.owned[checkList].dataset.owned = true
  }
  this.clickEvents = {
    default: function(){Game.earn(1)},
    buy1: function () {
      if (buttons.buy1.dataset.owned) {
        Game.earn(5)
      } else {
        if (Game.currency >= 100) {
          Game.earn(-100)
          buttons.buy1.dataset.owned = true
        } else {
          Game.lackOfFunds()
        }
      }
    }
  }
}

GAME.prototype.update = function() {
  document.getElementById("status_counter").innerHTML = this.currency
  localStorage.setVar("currency", this.currency)
}

GAME.prototype.earn = function (amount) {
  this.currency += amount
}

var buttons = {
  click: document.getElementById("buttons_click"),
  buy1: document.getElementById("buttons_buy1")
}

Game.prototype.lackOfFunds = function () {
  //
}

var Game = new GAME()
Game.update()
