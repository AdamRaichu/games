var MAP = function (matrix, targetEl) {
  this.map = matrix;
  this.target = targetEl;
};
MAP.prototype.get = function (x, y) {
  return this.map[y][x];
};
MAP.prototype.generate = function () {
  this.target.innerHTML = "";
  for (var c = 0; c < this.map.length; c++) {
    this.target.appendChild(document.createElement("tr"));
    for (var c2 = 0; c2 < this.map[c].length; c2++) {
      this.target.children[c].appendChild(document.createElement("td"));
      var e = this.target.children[c].children[c2];
      e.dataset.x = c2 + 1;
      e.dataset.y = c + 1;
      e.innerText = this.map[c][c2];
      if (e.innerText === "1") {
        e.innerText = "";
        e.style.backgroundImage = "url(/images/bricks.jpg)";
      } else if (e.innerText === "0") {
        e.innerText = "";
      } else if (e.innerText === "@") {
        e.innerText = "🏆";
      } else if (e.innerText === "b") {
        e.style.opacity = 0;
      } else if (e.innerText === "k") {
        e.innerText = "🗝️";
      }
    }
  }
};

var PLAYER = function (map, xPos, yPos) {
  this.map = map;
  this.x = xPos;
  this.y = yPos;
  this.keys = 0;

  this.map.generate();
  this.map.map[this.y][this.x] = "*";
  this.map.target.children[this.y].children[this.x].innerText = "*";

  console.info("Playing with the developer console may cause images to blink. For best play, keep this closed.");
};
PLAYER.prototype.move = function (dir) {
  this.map.map[this.y][this.x] = "0";
  document.querySelector("[data-x='" + this.x + "'][data-y='" + this.y + "']").innerText = "0";
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

  if (this.map.get(this.x + this.deltaX, this.y + this.deltaY) !== 1) {
    if (this.map.get(this.x + this.deltaX, this.y + this.deltaY) === "||" && this.keys > 0) {
      document.getElementById("keys").lastElementChild.remove();
      this.keys--;
    }
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  if (this.map.get(this.x, this.y) === "k") {
    this.keys++;
    var k = document.createElement("img");
    k.classList.add("key");
    document.getElementById("keys").appendChild(k);
  }

  if (this.map.get(this.x, this.y) === "@") {
    document.removeEventListener("keydown", movePlayer);

    LEVEL_MAPS = JSON.parse(_LEVEL_MAPS);
    document.getElementById("main").style.display = "none";
    document.getElementById("victory").style.display = "block";
    return;
  }

  this.map.map[this.y][this.x] = "*";
  console.debug(this.map.map.join("\n"));
  this.map.generate();
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
};