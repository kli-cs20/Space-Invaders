// Function Collection

function moveInvaders() {
    moveForward();

    if (count === 5) {
        grid[1] = [0, 0, 0, 4, 3, 4, 0, 0, 0];
    } else if (count === 6) {
        grid[1] = [0, 0, 2, 2, 0, 2, 2, 0, 0];
    } else if (count === 7) {
        grid[1] = [0, 4, 2, 3, 4, 3, 2, 4, 0];
    }
}

function shiftRight(i) {
    for (let col = NUM_COLS; col >= 0; col--) {
        grid[i][col + 1] = grid[i][col];
    }
}

function shiftLeft(i) {
    for (let col = 0; col < NUM_COLS; col++) {
        grid[i][col - 1] = grid[i][col];
    }
}

function moveForward() {
    for (let col = 0; col < NUM_COLS; col++) {
        for (let row = NUM_ROWS - 3; row >= 0; row--) {
            grid[row + 1][col] = grid[row][col];

        }
    }
}


function updateGrid() {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            let thisBox = grid[row][col];
            let cellId = "cell" + row + "-" + col;
            let thisId = document.getElementById(cellId);
            if (thisBox === 0) {
                thisId.className = "";
            } else if (thisBox === 1) {
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