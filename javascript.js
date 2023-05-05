
const container = document.querySelector('.container');

let n = 16;

function createGrid () {
  for (let i = 0; i < (n * n); i++) {
    const square = document.createElement('div');
    square.classList.add('child');
    width = (700 / n);
    height = (700 / n);
    square.setAttribute('style', `width: ${width}px; height: ${height}px;`)
    container.appendChild(square);
    square.addEventListener('mousemove', (event) => {
      event.target.style.backgroundColor = 'black';
    });
  }
}

createGrid();


const gridSizeBtn = document.querySelector('#gridSizeBtn');

gridSizeBtn.addEventListener('click', () => {
    let input = prompt("Please enter a number 1 - 100.", `${n} x ${n}`)
    if (isNaN(input)) {
      alert('Please enter a digit. Try again.');
    } else if (input === '' || input === undefined || input === '0') {
      alert('Your input does not work. Try again.');
    } else if (input > 100) {
      alert('Your number is too high. Try again.');
    } else if (input > 0 && input <= 100) {
      n = input;
      //const squares = document.querySelectorAll('.child');
      let squares = document.querySelectorAll('.child');
      for (const item of squares) {
        item.remove();
      }
      createGrid();
    };
})



