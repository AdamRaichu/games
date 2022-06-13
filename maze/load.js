function loadMap(mapObject) {
  document.getElementById("d").innerHTML = mapObject.text;
  window.player = new PLAYER(new MAP(mapObject.mapName, mapObject.matrix, document.getElementById("target"), mapObject.portals), mapObject.x, mapObject.y);
  player.map.generate();

  document.addEventListener("keydown", movePlayer);
  document.getElementById("main").style.display = "block";
  document.getElementById("victory").style.display = "none";
}

function movePlayer(event) {
  player.move(directions[event.key]);
}

function retry() {
  loadMap(JSON.parse(LEVEL_MAPS)[player.map.mapName])
}

function paramsToObject(entries) {
  const result = {};
  for (const [key, value] of entries) { // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

var defaultMap = LEVEL_MAPS[paramsToObject(new URLSearchParams(location.search.substring(1))).map];
if (defaultMap === undefined) {
  defaultMap = LEVEL_MAPS.map1;
}
loadMap(defaultMap);