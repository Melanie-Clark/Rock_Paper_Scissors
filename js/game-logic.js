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

const getRoundWinner = (round) => {
  if (playerOneMove.type === playerTwoMove.type) {
    if (playerOneMove.value > playerTwoMove.value) {
      return 'Player One';
    } else if (playerTwoMove.value > playerOneMove.value) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  } else if (
    (playerOneMove.type === 'rock' && playerTwoMove.type === 'scissors') ||
    (playerOneMove.type === 'scissors' && playerTwoMove.type === 'paper') ||
    (playerOneMove.type === 'paper' && playerTwoMove.type === 'rock')
  ) {
    return 'Player One';
  } else {
    return 'Player Two';
  }
}
