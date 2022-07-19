// Space Invaders Game

// Global Variables
const NUM_ROWS = 9;
const NUM_COLS = 13;

// Create array to represent a grid
let grid = createGridArray();

// Add player to the grid array
let player = {
    row: 8,
    col: 6
}

grid[player.row][player.col] = 1;

// Create divs to model the grid array
createDivGrid(grid);

// GRID FUNCTIONS

function createGridArray() {
    // Create and return a grid array
    return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 2, 2, 3, 3, 4, 3, 3, 2, 2, 0, 0],
             [0, 0, 4, 4, 2, 4, 2, 4, 2, 4, 4, 0, 0],
             [0, 0, 3, 2, 3, 4, 2, 4, 3, 2, 3, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ];
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2d array
            let divEl = document.createElement("div");

            // Add an id to each divEl
            divEl.id = "cell" + row  +  "-" + col;

            // Add appropriate class to each div element
            if (grid[row][col] === 1) {
                divEl.className = "player";
            } else if (grid[row][col] === 2) {
                divEl.className = "cyan";
            } else if (grid[row][col] === 3) {
                divEl.className = "purple";
            } else if (grid[row][col] === 4) {
                divEl.className = "orange";
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col; 

            // Add div to container
            document.getElementById("gameboard").append(divEl);
        }
    }
}

