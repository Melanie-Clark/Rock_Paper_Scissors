const MOVE_TYPES = ['rock', 'paper', 'scissors'];
const COMPUTER_PLAYER_MODE = 'computer';
const HUMAN_PLAYER_MODE = 'human';
const PLAYER_ONE = 'Player One';
const PLAYER_TWO = 'Player Two';
const TIE = 'Tie';
const VIEW_TRANSITION_TIME = 300;

const $ROUND_SOUND = document.createElement('audio');
$ROUND_SOUND.setAttribute('src', './audio/round.wav');
const $WIN_SOUND = document.createElement('audio');
$WIN_SOUND.setAttribute('src', './audio/win.wav');
const $MOVE_TYPE_SOUND = document.createElement('audio');
$MOVE_TYPE_SOUND.setAttribute('src', './audio/move-type-select.wav');
const $BUTTON_SOUND = document.createElement('audio');
$BUTTON_SOUND.setAttribute('src', './audio/button-click.wav');
