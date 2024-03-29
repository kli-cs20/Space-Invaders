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
        if (rightCol === NUM_COLS - 2) {
            moveForward();
            direction = "left";
        } else {
            shiftRight();
        }
    }
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
    checkGameOver();
    frontRow++
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
                thisId.className = "cyan";
            } else if (thisBox === 3) {
                thisId.className = "purple";
            } else if (thisBox === 4) {
                thisId.className = "orange";
            } else if (thisBox === 5) {
                thisId.className = "bullet";
            }
        }
    }
}

function recordInvaders() {
    enemyArray = [];
    for (let r = 0; r < NUM_ROWS - 1; r++) {
        for (let c = 0; c < NUM_COLS; c++) {
            let thisBox = grid[r][c];
            if (thisBox !== 0) {
                enemyArray.push({row: r, col: c});
            }
        }
    }
}

function checkGameOver() {
    if (frontRow === 7) {
        alert("Game Over");
    }
}

// Player-Controlled Elements
document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    if (e.keyCode === 39) { // Right arrow key
        updatePlayer(player.row, player.col + 1);
    } else if (e.keyCode === 37) { // Left arrow key
        updatePlayer(player.row, player.col - 1);
    } else if (e.keyCode === 32) {
        createBullet(player.col);
    }
}


function updatePlayer(newRow, newCol) {
    // Wrap-Around Movement preventing col of -1
    if (newCol === -1) {
        newCol = 12
    } else if (newCol === 13) {
        newCol = 0;
    }

    // Remove player class from current location
    let cellId = "cell8" + "-" + player.col;
    document.getElementById(cellId).className = "";

    // Set grid array to 0 for current location
    grid[player.row][player.col] = 0;

    // Update player location
    player.row = newRow;
    player.col = newCol;
            
    // Update class and grid
    cellId = "cell8" + "-" + player.col;
    document.getElementById(cellId).className = "player";
    grid[player.row][player.col] = 1;
}

let bullets = [];

function createBullet(setCol) {
    bullets.push({row: 8, col: setCol});
}

function drawBullets() {
    for (let i = 0; i < bullets.length; i++) {
        let thisBullet = bullets[i];
        let cellId = "cell" + thisBullet.row + "-" + thisBullet.col

        grid[thisBullet.row][thisBullet.col] = 5;
        document.getElementById(cellId).className = "bullet";
    }
}

function moveBullets() {
    for (let i = 0; i < bullets.length; i++) {

        // Clear previous space
        let thisBullet = bullets[i];
        let cellId = "cell" + thisBullet.row + "-" + thisBullet.col;
        document.getElementById(cellId).className = "";
        grid[thisBullet.row][thisBullet.col] = 0;

        // Update row #
        bullets[i].row = bullets[i].row - 1;

        bulletCollisions()


        cellId = "cell" + thisBullet.row + "-" + thisBullet.col;
        document.getElementById(cellId).className = "bullet";
        grid[thisBullet.row][thisBullet.col] = 5;

    }
}

function bulletCollisions() {
    for (let i = 0; i < bullets.length; i++) {
        let thisBullet = bullets[i];

        // Off the screen
        if (thisBullet.row < 0) {
            bullets.splice(bullets.indexOf(thisBullet), 1);
        }

        for (let i = 0; i < enemyArray.length; i++) {
            let thisInvader = JSON.stringify(enemyArray[i]);
            let theBullet = JSON.stringify(thisBullet);
            if (thisInvader === theBullet) {
                defeatEnemy(enemyArray[i].row, enemyArray[i].col);
                bullets.splice(bullets.indexOf(thisBullet), 1);
                enemyArray.splice(enemyArray.indexOf(enemyArray[i]), 1);
            }
        }
        
    }
}

function defeatEnemy(row, col) {
    grid[row][col] = 0;
}


