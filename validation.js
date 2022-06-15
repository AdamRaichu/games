module.exports = function () {
  const fs = require("fs");

  fs.readFile("maze/maps.js", (err, buff) => {
    if (err) {
      console.error("[!!! ----- validation.js failed ----- !!!]");
      console.error(err);
      return;
    }

    var content = buff.toString();
    eval(content);

    var keys = Object.keys(LEVEL_MAPS);
    for (c = 0; c < keys.length; c++) {
      var o = LEVEL_MAPS[keys[c]];
      if (o.mapName !== keys[c]) {
        console.error(`LEVEL_MAPS["${keys[c]}"].mapName does not equal "${keys[c]}"`);
      } else {
        console.debug(`LEVEL_MAPS["${keys[c]}"].mapName does equal "${keys[c]}"`)
      }
    }
  })
}