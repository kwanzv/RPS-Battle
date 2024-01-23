# Rock Paper Scissors
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview



### Screenshot

![RPS]("https://i.ibb.co/cb997dd/Screenshot-1.jpg")


### Links

- Live Site URL: [Add live site URL here]([https://your-live-site-url.com](https://kwanzv.github.io/RPS-Battle/))

## My process



### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

I believe I was able to implement the basic game logic quite well in the play function, by getting the 3 choices of rock,paper,scissors and then adding an event listener to all the choices, in turn, calling the callback function of playerVScomputer, which takes in the user's choice and calls computerPlay. 

The smart use of creating a player object and using the click event.id for the game logic made it easy to calculate a winner.

```js

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



```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1]([https://www.example.com](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH/hub)) - I originally made a very basic RPS game but after seeing the design on frontendmentor, I wanted to test my CSS skills and I also  refactor my code to use classes and objects, 

