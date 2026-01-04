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
  const playerOneMove = getPlayerMove('Player One', round);
  const playerTwoMove = getPlayerMove('Player Two', round);

  if (playerOneMove.type === playerTwoMove.type) {
    console.log(playerOneMove, playerOneMove.type);
    if (playerOneMove.value > playerTwoMove.value) {
      return 'Player One';
    } else if (playerTwoMove.value > playerOneMove.value) {
      return 'Player Two';
    } else {
      console.log('The Round is a Tie');
      return 'Tie';
    }
  } else if (
    (playerOneMove.type === 'rock' && playerTwoMove.type === 'scissors') ||
    (playerOneMove.type === 'scissors' && playerTwoMove.type === 'paper') ||
    (playerOneMove.type === 'paper' && playerTwoMove.type === 'rock')
  ) {
    console.log('Player One Wins the Round');
    return 'Player One';
  } else {
    console.log('Player Two Wins the Round');
    return 'Player Two';
  }
};

function getPlayerMove(player, round) {
  const move = {};
  if (player === 'Player One') {
    switch (round) {
      case 1:
        move.type = playerOneMoveOneType;
        move.value = playerOneMoveOneValue;
        break;
      case 2:
        move.type = playerOneMoveTwoType;
        move.value = playerOneMoveTwoValue;
        break;
      case 3:
        move.type = playerOneMoveThreeType;
        move.value = playerOneMoveThreeValue;
        break;
    }
  } else {
    switch (round) {
      case 1:
        move.type = playerTwoMoveOneType;
        move.value = playerTwoMoveOneValue;
        break;
      case 2:
        move.type = playerTwoMoveTwoType;
        move.value = playerTwoMoveTwoValue;
        break;
      case 3:
        move.type = playerTwoMoveThreeType;
        move.value = playerTwoMoveThreeValue;
        break;
    }
  }
  return move;
};

const getGameWinner = () => {
  const rounds = [1,2,3];
  const playerOneWins = rounds.map(getRoundWinner).filter(winner => winner === 'Player One').length;
  const playerTwoWins = rounds.map(getRoundWinner).filter(winner => winner === 'Player Two').length;

  if (playerOneWins > playerTwoWins) {
    console.log('Player One Wins the Game');
    return 'Player One';
  } else if (playerTwoWins > playerOneWins) {
    console.log('Player Two Wins the Game');
    return 'Player Two';
  } else {
    console.log('The Game is a Tie');
    return 'Tie';
  }
};

const setComputerMoves = () => {
  const playerTwoMoveOneType = MOVE_TYPES[(Math.floor(Math.random() * (MOVE_TYPES.length)))];
  const playerTwoMoveTwoType = MOVE_TYPES[(Math.floor(Math.random() * (MOVE_TYPES.length)))];
  const playerTwoMoveThreeType = MOVE_TYPES[(Math.floor(Math.random() * (MOVE_TYPES.length)))];
  const playerTwoMoveOneValue = (Math.floor(Math.random() * 99)+1);  
  const playerTwoMoveTwoValue = (Math.floor(Math.random() * 99)+1);  
  const playerTwoMoveThreeValue = (Math.floor(Math.random() * 99)+1);  
  setPlayerMoves(
    'Player Two', 
    playerTwoMoveOneType, 
    playerTwoMoveOneValue, 
    playerTwoMoveTwoType, 
    playerTwoMoveTwoValue, 
    playerTwoMoveThreeType, 
    playerTwoMoveThreeValue
  );
};
