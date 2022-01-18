setInterval(function() {
  buttons.click.setAttribute("onclick", "Game.clickEvents.default(); Game.update(); this.blur()")
  buttons.buy1.setAttribute("onclick", "Game.clickEvents.buy1(); Game.update(); this.blur()")
}, 100);
