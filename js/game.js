// Run Space Invaders Game

// Global Variables
let leftCol = 2;
let rightCol = 10;
let enemyArray = [];
let direction = "right";


// Enemy Portion
// setInterval(invaders, 2000);
let count = 0;
invaders();

function invaders() {
    moveInvaders();

    updateGrid();
    recordInvaders();
    
    count++
}

// Player Movement + Shooting
setInterval(playGame, 1000);

function playGame() {

    moveBullets();

    drawBullets();

}

