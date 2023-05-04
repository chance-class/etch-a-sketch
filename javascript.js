const container = document.querySelector('.container');

let n = 16;

function createGrid () {
  for (let i = 0; i < (n * n); i++) {
    const square = document.createElement('div');
    square.classList.add('child');
    width = (700 / n);
    height = (700 / n);
    square.setAttribute('style', `width: ${width}px; height: ${height}px; background: blue;`)
    container.appendChild(square);
  }
}

createGrid();