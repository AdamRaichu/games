function loadMap(mapObject) {
  document.getElementById("d").innerText = mapObject.text;
  window.player = new PLAYER(new MAP(mapObject.matrix, document.getElementById("target")), 1, 1);
  player.map.generate();

  document.addEventListener("keydown", movePlayer)
}

function movePlayer(event) {
  player.move(directions[event.key])
}

function paramsToObject(entries) {
  const result = {}
  for (const [key, value] of entries) { // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

var mapObject = LEVEL_MAPS[paramsToObject(new URLSearchParams(location.search.substring(1))).map]
if (mapObject === undefined) {
  mapObject = LEVEL_MAPS.map1
}
loadMap(mapObject);