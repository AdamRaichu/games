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
    for (var c = 0; c < keys.length; c++) {
      var o = LEVEL_MAPS[keys[c]];
      if (o.mapName !== keys[c]) {
        console.error(`LEVEL_MAPS["${keys[c]}"].mapName DOES NOT equal "${keys[c]}"`);
      } else {
        console.debug(`LEVEL_MAPS["${keys[c]}"].mapName does equal "${keys[c]}"`)
      }

      for (var c2 = 1; c2 < o.matrix.length; c2++) {
        if (o.matrix[c2].length !== o.matrix[c2 - 1].length) {
          console.error(`LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length DOES NOT equal LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length`)
        } else {
          console.debug(`LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length does equal LEVEL_MAPS["${keys[c]}"].matrix[${c2 - 1}].length`)
        }
      }
    }
  })
}