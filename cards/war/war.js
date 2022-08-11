// DEFINITIONS
var card = {
  suits: ["♠", "♥", "♦", "♣"],
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  sort: {
    "A": 14,
    "K": 13,
    "Q": 12,
    "J": 11,
    10: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2
  },
  getValue: function (c) {
    var m;
    if (c.length === 2) {
      m = c[0];
    } else {
      m = c[0] + c[1];
    }
    return card.sort[m];
  }
}

function DECK() {
  this.deck = [];
  for (c1 = 0; c1 < card.suits.length; c1++) {
    for (c2 = 0; c2 < card.values.length; c2++) {
      this.deck.push(`${card.values[c2]}${card.suits[c1]}`)
    }
  }
}

DECK.prototype.shuffle = function () {
  var d = [];
  for (c3 = this.deck.length - 1; c3 > -1; c3--) {
    var i = AR.randBetween(0, c3);
    d.push(this.deck[i]);
    this.deck.splice(i, 1);
  }
  this.deck = d;
}

var pile = [];

function turn() {
  // If a hand is empty, shuffle the discard and copy those cards to the hand.
  // Then empty the discard.
  if (player.hand.length === 0) {
    player.discard.shuffle();
    player.hand = player.discard.deck;
    player.discard.deck = [];
  }
  if (bot.hand.length === 0) {
    bot.discard.shuffle();
    bot.hand = bot.discard.deck;
    bot.discard.deck = [];
  }

  // Flip a card over and put it "in the middle".
  var b = bot.hand.pop();
  var p = player.hand.pop();
  pile.push(b);
  pile.push(p);
  // log the cards
  stats.bot.played.push(b);
  stats.player.played.push(p);


  // Compare the cards.
  if (card.getValue(b) === card.getValue(p)) {
    // They're the same. Time for a war.
    console.log("WAR");
    // Make sure neither player has run out of cards.
    pile.push(bot.hand.pop());
    pile.push(player.hand.pop())
    if (checkForShuffle()) {
      gameOver();
      return // Someone ran out of cards.
    }
    pile.push(bot.hand.pop());
    pile.push(player.hand.pop())
    if (checkForShuffle()) {
      gameOver();
      return
    }
    pile.push(bot.hand.pop());
    pile.push(player.hand.pop())
    if (checkForShuffle()) {
      gameOver();
      return
    }
    turn();
  } else {
    // There is a clear winner. Add the `pile` to the winner's discard.
    if (card.getValue(b) > card.getValue(p)) {
      bot.discard.deck = bot.discard.deck.concat(pile);
    } else {
      player.discard.deck = player.discard.deck.concat(pile);
    }
    pile = [];
  }
}

var stats = {
  bot: {
    played: []
  },
  player: {
    played: []
  }
};

function gameOver() {
  console.log("Game over.");
  document.getElementById("turn1").remove();
  alert(`Game over\n\nSomeone wins.`);
}

function checkForShuffle() {
  // This functions makes sure that for wars the players actually have cards to play.
  if (bot.hand.length === 0) {
    if (bot.discard.deck.length === 0) {
      return true
    } else {
      bot.discard.shuffle();
      bot.hand = bot.discard.deck;
      bot.discard.deck = [];
    }
  }
  if (player.hand.length === 0) {
    if (player.discard.deck.length === 0) {
      return true
    } else {
      player.discard.shuffle();
      player.hand = bot.discard.deck;
      player.discard.deck = [];
    }
  }
  return false
}


// ACTIONS
var d = new DECK();
d.shuffle();
var bot = {
  discard: new DECK(),
  hand: []
}
var player = {
  discard: new DECK(),
  hand: []
}

bot.discard.deck = [];
bot.hand = d.deck.splice(26);
player.discard.deck = [];
player.hand = d.deck.splice(0);

document.getElementById("turn1").addEventListener("click", turn)