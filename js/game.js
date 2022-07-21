// Run Space Invaders Game

// Global Variables
let leftCol = 2;
let rightCol = 10;
let frontRow = 3;
let enemyArray = [];
let direction = "right";


// Enemy Portion
setInterval(invaders, 2000);
let count = 0;


function invaders() {
    moveInvaders();

    updateGrid();
    recordInvaders();
    
    count++
}

// Player Movement + Shooting
setInterval(playGame, 100);

function playGame() {

    // moveBullets();
    // drawBullets();

    updateGrid();

}

