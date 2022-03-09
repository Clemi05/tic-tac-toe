# Tic Tac Toc Game

This is a code to build a tic tac toe game with HTML, CSS and JavaScript

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Click here to see live site](https://clemi05.github.io/tic-tac-toe/)
- Repository URL: [Click here to see repository](https://github.com/Clemi05/tic-tac-toe)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

In this project, I learn how to use array and object destructoring and also the every() method:

```js
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(CROSS_CLASS) ||
      cell.classList.contains(CIRCLE_CLASS)
  })
}
```

I also learned about the some() method:

```js
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
```

### Continued development

Following this project, I will continue working on small JavaScript projects (calculator or 2048 game) to exercise my self and improve my JavaScript and CSS skills. I am also gone learn more about React.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Build Tic Tac Toe with JavaScript - Tutorial](https://www.youtube.com/watch?v=Y-GkMjUZsmM&ab_channel=WebDevSimplified)
- [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array/Object Destructuring Tutorial](https://www.youtube.com/watch?v=NIq3qLaHCIs&ab_channel=WebDevSimplified)



## Author

- Github - [Clemi05](https://github.com/Clemi05)
- LinkedIn - [Clément Azalbert](https://www.twitter.com/yourusername)
