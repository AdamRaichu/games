module.exports = function () {
  const fs = require("fs");

  try {
    var content = fs.readFileSync("maze/maps.js", "utf8")
  } catch (err) {
    if (err) {
      console.error("[!!! ----- validation.js failed ----- !!!]");
      console.error(err);
      return false;
    }
  }

  eval(content);

  var keys = Object.keys(LEVEL_MAPS);
  for (var c = 0; c < keys.length; c++) {
    var o = LEVEL_MAPS[keys[c]];
    if (o.mapName !== keys[c]) {
      console.error(`LEVEL_MAPS["${keys[c]}"].mapName DOES NOT equal "${keys[c]}"`);
      return {
        isValid: false,
        reason: `LEVEL_MAPS["${keys[c]}"].mapName DOES NOT equal "${keys[c]}". In other words, I forgot to change an important value while copy-pasting.`
      };
    } else {
      console.debug(`LEVEL_MAPS["${keys[c]}"].mapName does equal "${keys[c]}"`)
    }

    for (var c2 = 1; c2 < o.matrix.length; c2++) {
      if (o.matrix[c2].length !== o.matrix[c2 - 1].length) {
        console.error(`LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length DOES NOT equal LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length`)
        return {
          isValid: false,
          reason: `LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length DOES NOT equal LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length. In other words, one of the maps has rows of inequal length.`
        };
      } else {
        console.debug(`LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length does equal LEVEL_MAPS["${keys[c]}"].matrix[${c2 - 1}].length`)
      }
    }
  }

  return {
    isValid: true,
    reason: "All checks passed."
  };
}