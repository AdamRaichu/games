var MAP = function (matrix, targetEl) {
  this.map = matrix;
  this.target = targetEl
};
MAP.prototype.get = function (x, y) {
  return this.map[y][x]
};
MAP.prototype.generate = function () {
  this.target.innerHTML = ""
  for (c = 0; c < this.map.length; c++) {
    this.target.appendChild(document.createElement("tr"))
    for (c2 = 0; c2 < this.map[c].length; c2++) {
      this.target.children[c].appendChild(document.createElement("td"))
      this.target.children[c].children[c2].dataset.x = c2 + 1
      this.target.children[c].children[c2].dataset.y = c + 1
      this.target.children[c].children[c2].innerText = this.map[c][c2]
      if (this.target.children[c].children[c2].innerText === "1") {
        this.target.children[c].children[c2].innerText = ""
        this.target.children[c].children[c2].style.backgroundImage = "url(/images/bricks.jpg)"
      } else if (this.target.children[c].children[c2].innerText === "0") {
        this.target.children[c].children[c2].innerText = ""
      } else if (this.target.children[c].children[c2].innerText === "@") {
        this.target.children[c].children[c2].innerText = "🏆"
      } else if (this.target.children[c].children[c2].innerText === "b") {
        this.target.children[c].children[c2].style.opacity = 0
      }
    }
  }
}

var PLAYER = function (map, xPos, yPos) {
  this.map = map;
  this.x = xPos;
  this.y = yPos;

  this.map.generate()
  this.map.map[this.y][this.x] = "*"
  this.map.target.children[this.y].children[this.x].innerText = "*"
};
PLAYER.prototype.move = function (dir) {
  this.map.map[this.y][this.x] = "0"
  document.querySelector("[data-x='" + this.x + "'][data-y='" + this.y + "']").innerText = "0"
  if (dir === "up") {
    this.deltaX = 0;
    this.deltaY = -1;
  } else if (dir === "right") {
    this.deltaX = 1;
    this.deltaY = 0;
  } else if (dir === "down") {
    this.deltaX = 0;
    this.deltaY = 1;
  } else if (dir === "left") {
    this.deltaX = -1;
    this.deltaY = 0;
  } else {
    this.deltaX = 0;
    this.deltaY = 0;
  }

  if (this.map.get(this.x + this.deltaX, this.y + this.deltaY) !== 1 && this.map.get(this.x + this.deltaX, this.y + this.deltaY) !== "b") {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  if (this.map.get(this.x, this.y) === "@") {
    document.removeEventListener("keydown", movePlayer)
    alert("you win")
  }

  this.map.map[this.y][this.x] = "*"
  console.debug(this.map.map.join("\n"))
  this.map.generate()
};

var directions = {
  //arrows
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down",
  //WASD
  w: "up",
  a: "left",
  s: "down",
  d: "right"
}