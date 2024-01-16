const game = () => {
  let pScore = 1;
  let cScore = 1;

  //Begin the game
  const beginGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("disappear");
      match.classList.remove("disappear");
    });
  };

  //Computer play

  function computerPlay() {
    // Store the RPS values into options

    const options = ["Rock", "Paper", "Scissors"];

    // Generate a random number
    const attack = Math.floor(Math.random(options) * options.length);

    // Use the random number and then grab the index in options

    let computerChoice = options[attack];
    return computerChoice;
  }

  //Compare the match up
  function pVSc(answer, answer2) {
    const hands1 = document.querySelector(".player-hand");
    const hands2 = document.querySelector(".computer-hand");
    const result = document.querySelector(".winner");
    const count1 = document.querySelector(".p-score span");
    const count2 = document.querySelector(".c-score span");

    if (answer === answer2) {
      result.textContent = `${answer} VS ${answer2}. It\'s a Draw`;
      hands1.setAttribute("src", `/img/${answer}.png`);
      hands2.setAttribute("src", `/img/${answer2}.png`);
      return;
    } else if ((answer === "rock") & (answer2 === "paper")) {
      result.textContent = `${answer} VS ${answer2}. You lose`;
      hands1.setAttribute("src", `/img/${answer}.png`);
      hands2.setAttribute("src", `/img/${answer2}.png`);
      count2.textContent = cScore++;
      return;
    } else if ((answer === "scissors") & (answer2 === "rock")) {
      result.textContent = `${answer} VS ${answer2}. You lose!`;
      hands1.setAttribute("src", `/img/${answer}.png`);
      hands2.setAttribute("src", `/img/${answer2}.png`);
      count2.textContent = cScore + 1;
      return;
    } else if ((answer === "paper") & (answer2 === "scissors")) {
      result.textContent = `${answer} VS ${answer2}. You lose`;
      hands1.setAttribute("src", `/img/${answer}.png`);
      hands2.setAttribute("src", `/img/${answer2}.png`);
      count2.textContent = cScore++;
      return;
    } else {
      result.textContent = `${answer} VS ${answer2}. You win`;
      hands1.setAttribute("src", `/img/${answer}.png`);
      hands2.setAttribute("src", `/img/${answer2}.png`);
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
    const choices = document.querySelectorAll(".options  button");
    choices.forEach((choice) => {
      choice.addEventListener("click", function () {
        pVSc(this.textContent, computerPlay());
        gameLimit(pScore, cScore);
      });
    });
  }

  beginGame();
  play();
};

//Start the game

game();
