// Function Collection

function moveInvaders() {
    shiftRight();
}

function shiftRight() {
    for (let col = NUM_COLS - 2; col >= 0; col--) {
        grid[0][col + 1] = grid[0][col];
    }

    for (let col = NUM_COLS - 2; col >= 0; col--) {
        grid[1][col + 1] = grid[1][col];
    }
    
    for (let col = NUM_COLS - 2; col >= 0; col--) {
        grid[2][col + 1] = grid[2][col];
    }
}


function updateGrid() {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            let thisBox = grid[row][col];
            let cellId = "cell" + row + "-" + col;
            let thisId = document.getElementById(cellId);
            if (thisBox === 1) {
                thisId.className = "player";
            } else if (thisBox === 2) {
                thisId.className = "pink";
            } else if (thisBox === 3) {
                thisId.className = "purple";
            } else if (thisBox === 4) {
                thisId.className = "orange";
            }
        }
    }
}