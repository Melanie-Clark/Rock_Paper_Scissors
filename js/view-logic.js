  let playerMode, currentPlayer;

  

  function startGame(playerType) {
    if (!playerType) {
      return;
    }

    playerMode = playerType;
    resetMoves(PLAYER_ONE);

    $('#game-start').fadeOut(VIEW_TRANSITION_TIME, () => {
      $('#move-selection').fadeIn(VIEW_TRANSITION_TIME);
    });
  }

  function playGame(roundNumber) {
    roundNumber = roundNumber || 1;
    const playerOneMove = getPlayerMove('Player One', roundNumber);
    const playerTwoMove = getPlayerMove('Player Two', roundNumber);
    const roundWinnerText = getWinnerText(getRoundWinner(roundNumber));

    $('#round h2').text('Round ' + roundNumber);
    if (playerMode === COMPUTER_PLAYER_MODE) {
      $('#round .player-two.move h3').text('Computer Player Move');
    } else {
      $('#round .player-two.move h3').text('Player 2 Move');
    }
    const $playerOneMove = $('#round .move').first();
    const $playerTwoMove = $('#round .move').last();
    $playerOneMove.find('.icon').attr('src', `./img/${playerOneMove.type}.svg`);
    $playerOneMove.find('.name').text(playerOneMove.type);
    $playerOneMove.find('.attack').text(playerOneMove.value + ' Attack Points');
    $playerTwoMove.find('.icon').attr('src', `./img/${playerTwoMove.type}.svg`);
    $playerTwoMove.find('.name').text(playerTwoMove.type);
    $playerTwoMove.find('.attack').text(playerTwoMove.value+ ' Attack Points');
    $('#round .winner .text').text(roundWinnerText);

    $('#round').show();
    $('#round h2').delay(1000).fadeIn(0, () => {
      $ROUND_SOUND.currentTime = 0;
      $ROUND_SOUND.play();
    });
    $('#round .moves').css("display", "flex").hide().delay(3000).fadeIn(0, () => {
      $ROUND_SOUND.currentTime = 0;
      $ROUND_SOUND.play();
    });
    $('#round .winner').delay(5000).fadeIn(0, () => {
      $ROUND_SOUND.currentTime = 0;
      $ROUND_SOUND.play();
    });
    $('#round').delay(8000).fadeOut(VIEW_TRANSITION_TIME, () => {
      $('#round h2').hide();
      $('#round .moves').hide();
      $('#round .winner').hide();
      if (roundNumber < 3) {
        playGame(roundNumber + 1);
      } else {
        const gameWinnerText = getWinnerText(getGameWinner());
        $('#winner h2').text(gameWinnerText);
        $('#winner').css("display", "flex").hide().fadeIn(
            VIEW_TRANSITION_TIME, () => $WIN_SOUND.play());
      }
    });
  }

  function resetMoves(player) {
    currentPlayer = player;
    if (player === PLAYER_ONE) {
      $('#move-selection h2').text('Player 1 Selection');
    } else {
      $('#move-selection h2').text('Player 2 Selection');
    }

    $('#move-one-type').data('type', 'rock');
    $('#move-one-type .icon').attr('src', './img/rock.svg');
    $('#move-one-type .name').text('rock');
    $('#move-two-type').data('type', 'paper');
    $('#move-two-type .icon').attr('src', './img/paper.svg');
    $('#move-two-type .name').text('paper');
    $('#move-three-type').data('type', 'scissors');
    $('#move-three-type .icon').attr('src', './img/scissors.svg');
    $('#move-three-type .name').text('scissors');
    $('#move-one-value').val(1);
    $('#move-two-value').val(1);
    $('#move-three-value').val(1);
    $('#remaining-strength').text(96);
  }

  function changeMoveType($typeElement, direction) {
    $MOVE_TYPE_SOUND.currentTime = 0;
    $MOVE_TYPE_SOUND.play();
    const $currentTypeElement = $(event.target).siblings('.type');
    const currentType = $currentTypeElement.data('type');
    let newType;
    if (direction === 'left') {
      newType = MOVE_TYPES[(MOVE_TYPES.indexOf(currentType) + 2) % 3];
    } else {
      newType = MOVE_TYPES[(MOVE_TYPES.indexOf(currentType) + 1) % 3];
    }
    const newTypeSrc = `./img/${newType}.svg`;
    $currentTypeElement.find('.icon').attr('src', newTypeSrc);
    $currentTypeElement.data('type', newType);
    $currentTypeElement.find('.name').text(newType);
  }

  function updateMoveValue(moveInput, moveInputId) {
    $MOVE_TYPE_SOUND.currentTime = 0;
    $MOVE_TYPE_SOUND.play();

    const valueIds = ['move-one-value', 'move-two-value', 'move-three-value'];
    let updatedValue = moveInput.valueAsNumber;
    const unchangedValueIds = valueIds.filter(id => id !== moveInputId);
    const unchangedValueSum = Number($('#' + unchangedValueIds[0]).val()) +
        Number($('#' + unchangedValueIds[1]).val());

    if (!updatedValue || updatedValue < 0) {
      updatedValue = 1;
      $('#' + moveInputId).val(1);
    } else if ((unchangedValueSum + updatedValue) > 99) {
      updatedValue = 99 - unchangedValueSum;
      $('#' + moveInputId).val(updatedValue);
    }
    $('#remaining-strength').text(99 - unchangedValueSum - updatedValue);
  }

  function getWinnerText(winner) {
    if (winner === PLAYER_ONE) {
      return 'Player One Won!';
    } else if (winner === PLAYER_TWO) {
      return (playerMode === COMPUTER_PLAYER_MODE) ? 'Computer Player Won!' : 'Player Two Won!';
    } else if (winner === TIE) {
      return 'Tie!';
    }
  }

  $(document).ready(() => {
    $('.button').on('click', () => {
      $BUTTON_SOUND.play();
    });

    $('.replay .button.human').on('click', () => {
      $('#winner').fadeOut(VIEW_TRANSITION_TIME, startGame.bind(null, HUMAN_PLAYER_MODE));
    });

    $('.replay .button.computer').on('click', () => {
      $('#winner').fadeOut(VIEW_TRANSITION_TIME, startGame.bind(null, COMPUTER_PLAYER_MODE));
    });

    $('#game-start .button.human').on('click', () => {
      startGame(HUMAN_PLAYER_MODE);
    });

    $('#game-start .button.computer').on('click', () => {
      startGame(COMPUTER_PLAYER_MODE);
    });

    $('.type-selection .left').on('click', () => {
      const $currentTypeElement = $(event.target).siblings('.type');
      changeMoveType($currentTypeElement, 'left');
    });

    $('.type-selection .right').on('click', () => {
      const $currentTypeElement = $(event.target).siblings('.type');
      changeMoveType($currentTypeElement, 'right');
    });

    $('.value').on('input', () => {
      updateMoveValue(event.target, event.srcElement.id);
    });

    $('.move-finalize').on('click', () => {
      setPlayerMoves(currentPlayer,
                    $('#move-one-type').data('type'),
                    Number($('#move-one-value').val()),
                    $('#move-two-type').data('type'),
                    Number($('#move-two-value').val()),
                    $('#move-three-type').data('type'),
                    Number($('#move-three-value').val()));
      $('#move-selection').fadeOut(VIEW_TRANSITION_TIME, () => {
        if (playerMode === COMPUTER_PLAYER_MODE) {
          setComputerMoves();
        }
        if (playerMode === COMPUTER_PLAYER_MODE || currentPlayer === PLAYER_TWO) {
          playGame();
        } else {
          resetMoves(PLAYER_TWO);
          $('#move-selection').fadeIn(VIEW_TRANSITION_TIME);
        }
      });
    });
  });
