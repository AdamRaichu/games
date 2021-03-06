var LEVEL_MAPS = {
  map1: {
    mapName: "map1",
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
    mapName: "map2",
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
    mapName: "map3",
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
    mapName: "map4",
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
  },
  map5: {
    mapName: "map5",
    text: "You may need to go back and forth between portals to get everything you need.",
    matrix: [
      ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "p", "1", "p", "0", "0", "k", "1"],
      ["1", "0", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "p", "1", "p", "0", "||", "@", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 2,
    portals: [
      {
        from: [2, 1],
        to: [5, 3]
      },
      {
        from: [4, 1],
        to: [1, 3]
      },
      {
        from: [2, 3],
        to: [5, 1]
      },
      {
        from: [4, 3],
        to: [1, 1]
      }
    ]
  },
  map6: {
    mapName: "map6",
    text: "Some portals are only one way. There is no way to tell them apart from regular portals.\nUse the retry button below if you get stuck.\n<details><summary>Hint</summary><p>You don't need to open every door to win the level.</p></details>",
    matrix: [
      ["1", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "0", "0", "0", "0", "0", "1"],
      ["1", "0", "1", "1", "0", "1", "k", "1"],
      ["1", "0", "0", "1", "0", "1", "||", "1"],
      ["1", "0", "0", "0", "1", "p", "0", "1"],
      ["1", "1", "1", "0", "0", "1", "||", "1"],
      ["1", "p", "0", "0", "0", "1", "@", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: [
      {
        from: [1, 6],
        to: [6, 4]
      },
      {
        from: [5, 4],
        to: [6, 4]
      }
    ]
  },
  map7: {
    mapName: "map7",
    text: "The walls on this map are invisible. See if you can find your way to the exit.",
    matrix: [
      ["1", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "0", "0", "0", "i", "0", "1"],
      ["1", "i", "0", "i", "0", "0", "0", "1"],
      ["1", "0", "0", "0", "i", "i", "0", "1"],
      ["1", "0", "i", "0", "i", "0", "0", "1"],
      ["1", "i", "0", "0", "0", "i", "i", "1"],
      ["1", "0", "0", "i", "0", "0", "@", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: []
  },
  map8: {
    mapName: "map8",
    text: "You only have one key. You will probably need to <button onclick='retry()'>retry</button> this level several times.",
    matrix: [
      ["1", "1", "1", "1", "1", "1", "1", "1"],
      ["1", "0", "i", "0", "i", "0", "0", "1"],
      ["1", "k", "0", "0", "||", "0", "i", "1"],
      ["1", "0", "i", "i", "i", "0", "0", "1"],
      ["1", "0", "||", "0", "i", "i", "||", "1"],
      ["1", "0", "i", "0", "0", "0", "i", "1"],
      ["1", "0", "||", "i", "i", "0", "@", "1"],
      ["1", "1", "1", "1", "1", "1", "1", "1"]
    ],
    x: 1,
    y: 1,
    portals: []
  }
};

const _LEVEL_MAPS = JSON.stringify(LEVEL_MAPS);