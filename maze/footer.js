{
  var b = document.querySelectorAll("#footer button");
  for (var c4 = 0; c4 < b.length; c4++) {
    b[c4].addEventListener("click", function () {
      createPopup(this.dataset.html);
    });
  }
}