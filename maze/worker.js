function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

loadJSON("isValid.json", function (data) {
  fName = "get isValid.json";
  console.log("\nLEVEL_MAPS validation status:\n" + JSON.stringify(data, null, 2));
  if (!data.isValid) {
    self.postMessage(JSON.stringify(data, null, 2));
  }
});