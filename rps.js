const game = () => {
  let pScore = 1;
  let cScore = 1;

  //Computer play

  function computerPlay() {
    // Store the RPS values into options

    const options = ["rock", "paper", "scissors"];

    // Generate a random number
    const attack = Math.floor(Math.random(options) * options.length);

    // Use the random number and then grab the index in options

    let computerChoice = options[attack];
    return computerChoice;
  }

  //Compare the match up
  function pVSc(answer, answer2) {
    const result = document.querySelector(".result");
    const count1 = document.querySelector(".player-score");
    const count2 = document.querySelector(".ai-score");

    // switch ((answer, answer2)) {
    //   case answer === answer2:
    //     result.textContent = `${answer} VS ${answer2}. It\'s a Draw`;
    //     // code block
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //   // code block
    // }

    if (answer === answer2) {
      result.textContent = `${answer} VS ${answer2}. It\'s a Draw`;
      return;
    } else if ((answer === "rock") & (answer2 === "paper")) {
      result.textContent = `${answer} VS ${answer2}. You lose`;
      count2.textContent = cScore++;
      return;
    } else if ((answer === "scissors") & (answer2 === "rock")) {
      result.textContent = `${answer} VS ${answer2}. You lose!`;
      count2.textContent = cScore + 1;
      return;
    } else if ((answer === "paper") & (answer2 === "scissors")) {
      result.textContent = `${answer} VS ${answer2}. You lose`;
      count2.textContent = cScore++;
      return;
    } else {
      result.textContent = `${answer} VS ${answer2}. You win`;
      count1.textContent = pScore++;
      return;
    }
  }

  //Keep scores and loop until 5 game round
  function gameLimit(score1, score2) {
    if (score1 > 5 || score2 > 5) {
      alert("Game is finished, please refresh!");
      return;
    }
  }

  //Play the match
  function play() {
    const choices = document.querySelectorAll(".selection-weapon");

    choices.forEach((choice) => {
      choice.addEventListener("click", function () {
        pVSc(this.dataset.id, computerPlay());
        gameLimit(pScore, cScore);
      });
    });
  }

  play();
};

//Start the game

game();
