// Define Vairables
let rubyValue;
let sapphireValue;
let emeraldValue;
let topazValue;
let goalValue;
let unwinnable;
let winTally = 0;
let lossTally = 0;
let currentScore = 0;

// Define funtions

function startGame() {
  //   set random values
  goalValue = Math.floor(Math.random() * 100 + 20);
  rubyValue = Math.floor(Math.random() * 12 + 1);
  sapphireValue = Math.floor(Math.random() * 12 + 1);
  emeraldValue = Math.floor(Math.random() * 12 + 1);
  topazValue = Math.floor(Math.random() * 12 + 1);
  //   post values into console.log for debuggin/transparency
  console.log(
    `goal: ${goalValue}, ruby: ${rubyValue}, sapphire: ${sapphireValue}, emerald: ${emeraldValue}, topaz: ${topazValue}`
  );
  // print proper values to let user know their score and the score they need to reach
  $("#goal").text(`${goalValue}`);
  $("#curScore").text(currentScore);
  if (
    Number.isInteger(rubyValue / 2) === true &&
    Number.isInteger(sapphireValue / 2) === true &&
    Number.isInteger(emeraldValue / 2) === true &&
    Number.isInteger(topazValue / 2) === true &&
    Number.isInteger(goalValue / 2) === false
  ) {
    console.log(`No possible win for this instance.`);
    unwinnable = 1;
  } else {
  }
}
function resetGame() {
  // sets score back to zero
  currentScore = 0;
  console.log(`---NEW GAME STARTED---`);
  //   runs startGame function again to start a new game
  unwinnable = 0;
  startGame();
}
function play(x) {
  //   adds to and displays new player score
  currentScore += x;
  $("#curScore").text(currentScore);
  // tests parameters for a win
  if (currentScore == goalValue) {
    winTally++;
    alert(`Good Work, Winner! Try for another win!`);
    $("#wins").text(winTally);
    resetGame();
    // tests parameters for a loss
  } else if (currentScore > goalValue) {
    if (unwinnable === 1) {
      lossTally++;
      alert(
        `Haha! You never stood a chance! All the gems were even, there was no way you could possibly win!`
      );
      $("#losses").text(lossTally);
      resetGame();
    } else {
      lossTally++;
      alert(`Bummer, you loser! Try again you little b****!`);
      $("#losses").text(lossTally);
      resetGame();
    }
    // allows game to continue if win/loss parameters are not met
  } else {
  }
}

// Gameplay functionality
startGame();
$("#ruby").click(function() {
  play(rubyValue);
});
$("#sapphire").click(function() {
  play(sapphireValue);
});
$("#emerald").click(function() {
  play(emeraldValue);
});
$("#topaz").click(function() {
  play(topazValue);
});
