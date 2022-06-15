const fs = require("fs");

fs.readFile("/maze/maps.js", (err, buff) => {
  if (err) {
    console.error("[!!! ----- validation.js failed ----- !!!]");
    console.error(err);
    return;
  }

  var content = buff.toString();
  console.log(content);
})