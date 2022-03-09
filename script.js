/* Variables */
const CROSS_CLASS = 'cross';
const CIRCLE_CLASS = 'circle';

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn;

startGame()

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
}

function handleClick(event) {
  // place the cross Mark or circle Mark
  const cell = event.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : CROSS_CLASS;
  placeMark(cell, currentClass)
  // Check for Win
  // Check for Draw
  // Switch turns between cross and circle
  swapTurns()
  setBoardHoverClass()
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(CROSS_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(CROSS_CLASS);
  }

}
