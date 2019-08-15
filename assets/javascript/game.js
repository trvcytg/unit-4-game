// Define Vairables
let rubyValue;
let sapphireValue;
let emeraldValue;
let topazValue;
let goalValue;
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
  $("#goal").html(`${goalValue}`);
  $("#curScore").html(currentScore);
}
function resetGame() {
  currentScore = 0;
  startGame();
}
function play(x) {
  currentScore += x;
  $("#curScore").text(currentScore);

  if (currentScore == goalValue) {
    winTally++;
    alert(`Good Work, Winner! Try for another win!`);
    $("#wins").html(winTally);
    resetGame();
  } else if (currentScore > goalValue) {
    lossTally++;
    alert(`Bummer, you lost! Give it another shot!`);
    $("#losses").html(lossTally);
    resetGame();
  } else {
  }
}

startGame();

// Consider creating function for this
$("#ruby").click(function() {
  play(rubyValue);
});
// $("#ruby").click(function() {
//   currentScore += rubyValue;
//   $("#curScore").text(currentScore);

//   if (currentScore == goalValue) {
//     winTally++;
//     alert(`Good Work, Winner! Try for another win!`);
//     $("#wins").html(winTally);
//     resetGame();
//   } else if (currentScore > goalValue) {
//     lossTally++;
//     alert(`Bummer, you lost! Give it another shot!`);
//     $("#losses").html(lossTally);
//     resetGame();
//   } else {
//   }
// });
$("#sapphire").click(function() {
  currentScore += sapphireValue;
  $("#curScore").text(currentScore);

  if (currentScore == goalValue) {
    winTally++;
    alert(`Good Work, Winner! Try for another win!`);
    $("#wins").html(winTally);
    resetGame();
  } else if (currentScore > goalValue) {
    lossTally++;
    alert(`Bummer, you lost! Give it another shot!`);
    $("#losses").html(lossTally);
    resetGame();
  } else {
  }
});
$("#emerald").click(function() {
  currentScore += emeraldValue;
  $("#curScore").text(currentScore);

  if (currentScore == goalValue) {
    winTally++;
    alert(`Good Work, Winner! Try for another win!`);
    $("#wins").html(winTally);
    resetGame();
  } else if (currentScore > goalValue) {
    lossTally++;
    alert(`Bummer, you lost! Give it another shot!`);
    $("#losses").html(lossTally);
    resetGame();
  } else {
  }
});
$("#topaz").click(function() {
  currentScore += topazValue;
  $("#curScore").text(currentScore);

  if (currentScore == goalValue) {
    winTally++;
    alert(`Good Work, Winner! Try for another win!`);
    $("#wins").html(winTally);
    resetGame();
  } else if (currentScore > goalValue) {
    lossTally++;
    alert(`Bummer, you lost! Give it another shot!`);
    $("#losses").html(lossTally);
    resetGame();
  } else {
  }
});

if (currentScore == goalValue) {
  winTally++;
  alert(`Good Work, Winner! Try for another win!`);
  $("#wins").html(winTally);
  resetGame();
} else if (currentScore > goalValue) {
  lossTally++;
  alert(`Bummer, you lost! Give it another shot!`);
  $("#losses").html(lossTally);
  resetGame();
} else {
}
