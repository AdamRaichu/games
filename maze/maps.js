var LEVEL_MAPS = {
  map1: {
    text: "Welcome to my maze game!\nUse this map to get used to the controls. You can use either the arrow keys or WASD. When you're ready to move on, move to the 🏆 sign to complete the level.",
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, "@", 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    x: 1,
    y: 1
  },
  map2: {
    text: "A simple map to test your capabilities.",
    matrix: [
      [1, 1, 1, "b", "b", 1, 1, 1],
      [1, 0, 1, "b", "b", 1, "@", 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  x: 1,
  y: 1
};

const _LEVEL_MAPS = JSON.stringify(LEVEL_MAPS);