module.exports = function () {
  const fs = require("fs");
  const core = require('@actions/core');


  // maps.js validation
  try {
    var MAPS_JS = fs.readFileSync("maze/maps.js", "utf8")
  } catch (err) {
    if (err) {
      console.error("[!!! ----- validation.js failed ----- !!!]");
      console.error(err);
      return {
        isValid: false,
        file: "validation.js",
        reason: "validation.js encountered an unexpected error when parsing maps.js"
      };
    }
  }

  eval(MAPS_JS);

  var keys = Object.keys(LEVEL_MAPS);
  for (var c = 0; c < keys.length; c++) {
    var o = LEVEL_MAPS[keys[c]];
    if (o.mapName !== keys[c]) {
      console.error(`LEVEL_MAPS["${keys[c]}"].mapName DOES NOT equal "${keys[c]}"`);
      return {
        isValid: false,
        file: "maps.js",
        reason: `LEVEL_MAPS['${keys[c]}'].mapName DOES NOT equal '${keys[c]}'. In other words, I forgot to change an important value while copy-pasting.`
      };
    } else {
      console.debug(`LEVEL_MAPS["${keys[c]}"].mapName does equal "${keys[c]}"`);
    }

    core.startGroup(`LEVEL_MAPS["${keys[c]}"] length test`);
    for (var c2 = 1; c2 < o.matrix.length; c2++) {
      if (o.matrix[c2].length !== o.matrix[c2 - 1].length) {
        console.error(`LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length DOES NOT equal LEVEL_MAPS["${keys[c]}"].matrix[${c2 - 1}].length`);
        return {
          isValid: false,
          file: "maps.js",
          reason: `LEVEL_MAPS['${keys[c]}'].matrix[${c2}].length DOES NOT equal LEVEL_MAPS['${keys[c]}'].matrix[${c2 - 1}].length. In other words, one of the maps has rows of inequal length.`
        };
      } else {
        console.debug(`LEVEL_MAPS["${keys[c]}"].matrix[${c2}].length does equal LEVEL_MAPS["${keys[c]}"].matrix[${c2 - 1}].length`);
      }
    }
    core.endGroup();
  }


  // index.html validation
  try {
    var INDEX = fs.readFileSync("maze/index.html", "utf8");
  } catch (err) {
    if (err) {
      console.error("[!!! ----- validation.js failed ----- !!!]");
      console.error(err);
      return {
        isValid: false,
        file: "validation.js",
        reason: "validation.js encountered an unexpected error when parsing index.html"
      };
    }
  }

  if (INDEX.match(/<\/option>/g).length === Object.keys(LEVEL_MAPS).length) {
    console.debug("There are as many <option> elements as there are keys under LEVEL_MAPS.");
  } else {
    console.error("The number of <option> elements DOES NOT equal the number of keys under LEVEL_MAPS.");
    return {
      isValid: false,
      file: "index.html",
      reason: "The number of <option> elements does not match the number of keys under LEVEL_MAPS."
    }
  }


  return {
    isValid: true,
    file: "validation.js",
    reason: "All checks passed."
  };
}