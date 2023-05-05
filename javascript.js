
const container = document.querySelector('.container');

  //Math.floor(Math.random()*16777215).toString(16);

  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


let n = 16;

function createGrid () {
  for (let i = 0; i < (n * n); i++) {
    const square = document.createElement('div');
    square.classList.add('child');
    width = (650 / n);
    height = (650 / n);
    square.setAttribute('style', `width: ${width}px; height: ${height}px;`)
    container.appendChild(square);
    square.addEventListener('mousemove', (event) => {
      event.target.style.backgroundColor = randomColor();
    });
  }
}

createGrid();

const para = document.querySelector('#para');
para.textContent = `${n} x ${n}`;

const gridSizeBtn = document.querySelector('#gridSizeBtn');

gridSizeBtn.addEventListener('click', () => {
    let input = prompt("Please enter a number 1 - 100.", `${n}`)
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
      para.textContent = `${n} x ${n}`;
    };
})



