function loadMap(mapObject) {
  document.getElementById("d").innerText = mapObject.text;
  window.player = new PLAYER(new MAP(mapObject.matrix, document.getElementById("target")), 1, 1);
  player.map.generate();
  document.addEventListener("keydown", function (event) {
    player.move(directions[event.key])
  })
}

function paramsToObject(entries) {
  const result = {}
  for (const [key, value] of entries) { // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}
loadMap(LEVEL_MAPS[paramsToObject(new URLSearchParams(location.search.substring(1))).map]);