var Electabuzz = new POKEMON(
  "Electabuzz", 
  3, 
  80, 
  0, 
  2, 
  [new MOVE(
    [3, 
     10
    ], 
    "Low Kick", 
    20, 
    ""
  ), 
  new MOVE(
    [3, 
     10, 
     10
    ], 
    "Magnetic Blast", 
    50, 
    ""
  )], 
  5, 
  null, 
  2
)
Electabuzz.assignImage("https://qph.cf2.quoracdn.net/main-qimg-9fd7e90d8781509cf5b07247f695c672-pjlq")

var Pikachu = new POKEMON(
  "Pikachu", 
  3, 
  60, 
  0, 
  1, 
  [new MOVE(
    [3], 
    "Agility", 
    10, 
    "Flip a coin. If head, prevent all effects of attack, including damage, done to this Pokemon during your opponent's next turn."
  )], 
  5, 
  null, 
  1
)

Pikachu.assignImage("https://archives.bulbagarden.net/media/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png")
