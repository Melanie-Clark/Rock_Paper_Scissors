// ----Player One Moves----
let playerOneMoveOneType;
let playerOneMoveOneValue;

let playerOneMoveTwoType;
let playerOneMoveTwoValue;

let playerOneMoveThreeType;
let playerOneMoveThreeValue;

// ----Player Two Moves----
let playerTwoMoveOneType;
let playerTwoMoveOneValue;

let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;

let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

// ----Set Moves Function----
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};
