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

function createPopup(HTML, options) {
  if (typeof options !== "object") {
    options = {};
  }

  var dim = document.createElement("div");
  dim.classList.add("popup-dimmer");
  if (typeof options.dim === "object") {
    if (typeof options.dim.color === "string") {
      dim.style.backgroundColor = options.dim.color;
    }
  }
  document.body.appendChild(dim);

  var wrapper = document.createElement("div");
  wrapper.classList.add("popup-wrapper");

  var popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = HTML;
  if (typeof options.popup === "object") {
    if (typeof options.popup.color === "string") {
      popup.style.backgroundColor = options.popup.color
    }
  }
  wrapper.appendChild(popup);

  var dismiss = document.createElement("div");
  dismiss.classList.add("popup-dismiss");
  var dismissButton = document.createElement("button");
  dismissButton.innerText = "x";
  dismiss.appendChild(dismissButton);
  wrapper.appendChild(dismiss);

  document.body.appendChild(wrapper);

  dismissButton.addEventListener("click", function () {
    dim.remove();
    wrapper.remove();
  })
}

$.getJSON("isValid.json", function (data) {
  console.log("LEVEL_MAPS validation status:\n" + JSON.stringify(data, null, 2));
  if (!data.isValid) {
    var h = `
      <h1>Warning!</h1>
      <p>According to automated checks, there is a problem with the code behind this game. Here is the information passed from the validation software:</p>
      <pre class="hljs">
        <code>${hljs.highlight(JSON.stringify(data, null, 2), {
      language: "json"
    }).value}</code>
      </pre>
    `;
    createPopup(h, {});
  }
})