var LEVEL_MAPS = {
  map1: {
    text: "Welcome to my maze game!\nUse this map to get used to the controls. You can use the arrow keys, the WASD keys, or the direction buttons above to control your character. When you're ready to move on, move to the 🏆 sign to complete the level.",
    matrix: [
      ["1", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "0", "0", "0", "0", "0", "@", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: []
  },
  map2: {
    text: "A simple map to test your capabilities.",
    matrix: [
      ["1", "1", "1", "b", "b", "1", "1", "1"],
      ["1", "0", "1", "b", "b", "1", "@", "1"],
      ["1", "0", "1", "1", "1", "1", "0", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: []
  },
  map3: {
    text: "Some mazes will have locked doors. Collect keys to unlock them.",
    matrix: [
      ["1", "1", "1", "1", "b", "1", "1", "1"],
      ["1", "1", "0", "1", "b", "1", "@", "1"],
      ["1", "1", "0", "1", "1", "1", "0", "1"],
      ["1", "k", "0", "0", "||", "0", "0", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: []
  },
  map4: {
    text: "Some levels will have portals which teleport you to other locations on the map.",
    matrix: [
      ["1", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "0", "0", "p", "1", "@", "1"],
      ["1", "1", "1", "1", "1", "1", "0", "1"],
      ["1", "p", "0", "0", "0", "0", "0", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: [
      {
        from: [4, 1],
        to: [2, 3]
      },
      {
        from: [1, 3],
        to: [3, 1]
      }
    ]
  }
};

const _LEVEL_MAPS = JSON.stringify(LEVEL_MAPS);