// Function Collection

function moveInvaders() {
    if (direction === "left") {
        if (leftCol === 1) {
            moveForward();
            direction = "right";
        } else {
            shiftLeft();
        }
    } else if (direction === "right") {
        if (rightCol === 7) {
            moveForward();
            direction = "left";
        } else {
            shiftRight();
        }
    }

    // if (count === 5) {
    //     grid[1] = [0, 0, 0, 4, 3, 4, 0, 0, 0];
    // } else if (count === 6) {
    //     grid[1] = [0, 0, 2, 2, 0, 2, 2, 0, 0];
    // } else if (count === 7) {
    //     grid[1] = [0, 4, 2, 3, 4, 3, 2, 4, 0];
    // }
}

function shiftRight() {
    for (let row = 0; row < NUM_ROWS - 1; row++) {
        for (let col = NUM_COLS; col >= 0; col--) {
            grid[row][col + 1] = grid[row][col];
        }
    }
    leftCol++;
    rightCol++;
}

function shiftLeft() {
    for (let row = 0; row < NUM_ROWS - 1; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            grid[row][col - 1] = grid[row][col];
        }
    }
    leftCol--;
    rightCol--;
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