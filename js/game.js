// Run Space Invaders Game

// Global Variables
let leftCol = 2;
let rightCol = 10;
let frontRow = 3;
let direction = "right";


// Enemy Portion
// setInterval(invaders, 2000);
let count = 0;
invaders();

function invaders() {
    moveInvaders();

    updateGrid();
    
    count++
}

// Player Movement + Shooting
setInterval(playGame, 250);

function playGame() {
    bulletCollisions();

    moveBullets();

    drawBullets();

}

