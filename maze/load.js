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
  document.getElementById('keys').innerHTML = "";
  loadMap(JSON.parse(_LEVEL_MAPS)[player.map.mapName]);
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

fName = "web worker handler"
if (typeof (Worker) !== "undefined") {
  var w = new Worker("worker.js");
  w.onmessage = function (event) {
    var h = `
      <h1>Warning!</h1>
      <p>According to automated checks, there is a problem with the code behind this game. Here is the information passed from the validation software:</p>
      <pre class="hljs">
        <code>${hljs.highlight(event.data, {
      language: "json"
    }).value}</code>
      </pre>
    `;
    createPopup(h, {});
    w.terminate();
  }
} else {
  console.log("Web worker not supported");
}