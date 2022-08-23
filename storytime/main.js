var add = document.getElementById("add-name");
var container = document.getElementById("names-container");
var story = document.getElementById("story");
var target = document.getElementById("target");

function removeName() {
  this.remove();
}
function getStory(v) {
  if (allowed.includes(v)) {
    target.innerText = stories[v][AR.randBetween(0, stories[v].length)]
  } else {
    target.innerHTML = `Sorry, but that number of names is not supported. Only the following numbers are allowed:<br>${allowed.join(",")}`
  }
}

add.addEventListener("click", function () {
  var n = document.createElement("p");
  n.classList.add("name");
  n.innerText = prompt("Pick a name")
  n.addEventListener("click", removeName);
  container.appendChild(n);
});

story.addEventListener("click", function () {
  var names = document.getElementsByClassName("name");
  getStory(names.length);
});