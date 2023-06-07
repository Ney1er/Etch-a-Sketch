const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
let rainbowMode = false;
let eraserMode = false;
let colorMode = false;
const modes = [rainbowMode, eraserMode, colorMode];

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove("dark");
    });

    if (button.id === "rainbow") {
      rainbow();
      button.classList.add("dark");
    } else if (button.id === "eraser") {
      eraser();
      button.classList.add("dark");
    } else if (button.id === "clear"){
      clear()
    }
  });
});



function createGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
    };
  };
};

function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function rainbow() {
  rainbowMode = true;

  if (rainbowMode === false) {
    return
  }

  for (let i = 0; i < modes.length; i++) {
    if (modes[i] === true && modes[i] !== rainbowMode) {
      modes[i] = false;
    }
  }

  const grids = container.querySelectorAll('.grid-item');

  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = getRandomColor()
    });
  });
};

function eraser() {
  eraserMode = true;

  if (eraserMode === false) {
    return
  }

  for (let i = 0; i < modes.length; i++) {
    if (modes[i] === true && modes[i] !== eraserMode) {
      modes[i] = false;
    }
  }

  const grids = container.querySelectorAll('.grid-item');
  const whiteEraser = `rgb(${255}, ${255}, ${255})`


  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = whiteEraser;

    });
  });
};

function clear() {
  const childArray = Array.from(container.childNodes);

  childArray.forEach(child => {
    container.removeChild(child);
  });
  createGrid()

}


createGrid();





