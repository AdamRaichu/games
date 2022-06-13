function loadMap(mapObject) {
  document.getElementById("d").innerHTML = mapObject.text;
  window.player = new PLAYER(new MAP(mapObject.matrix, document.getElementById("target"), mapObject.portals), mapObject.x, mapObject.y);
  player.map.generate();

  document.addEventListener("keydown", movePlayer);
  document.getElementById("main").style.display = "block";
  document.getElementById("victory").style.display = "none";
}

function movePlayer(event) {
  player.move(directions[event.key]);
}

function retry() {

}

function paramsToObject(entries) {
  const result = {};
  for (const [key, value] of entries) { // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

var mapObject = LEVEL_MAPS[paramsToObject(new URLSearchParams(location.search.substring(1))).map];
if (mapObject === undefined) {
  mapObject = LEVEL_MAPS.map1;
}
loadMap(mapObject);