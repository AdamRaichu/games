importScripts("https://code.jquery.com/jquery-3.6.0.min.js");

$.getJSON("isValid.json", function (data) {
  fName = "get isValid.json";
  console.log("\nLEVEL_MAPS validation status:\n" + JSON.stringify(data, null, 2));
  if (!data.isValid) {
    self.postMessage(JSON.stringify(data, null, 2));
  }
});