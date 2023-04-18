const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gridSize = 20; // the size of each cell in pixels
const numRows = canvas.height / gridSize;
const numCols = canvas.width / gridSize;

let grid = [];

for (let i = 0; i < numRows; i++) {
  let row = [];
  for (let j = 0; j < numCols; j++) {
    row.push(Math.round(Math.random()));
  }
  grid.push(row);
}

function render() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === 0) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        }
    }
}

function update() {
    let newGrid = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j < numCols; j++) {
            let numNeighbors = countNeighbors(i, j);
            let isAlive = grid[i][j];

            if (isAlive && (numNeighbors < 2 || numNeighbors > 3)) {
                row.push(0);
            } else if (!isAlive && numNeighbors === 3) {
                row.push(1);
            } else {
                row.push(isAlive);
            }
        }
        newGrid.push(row);
    }
    grid = newGrid;
    render();
    setTimeout(update, 100);
}
  
function countNeighbors(row, col) {
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i === row && j === col) {
                continue;
            }
            if (i < 0 || i >= numRows || j < 0 || j >= numCols) {
                continue;
            }
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
}

update();
  