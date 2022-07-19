// Run Space Invaders Game

// Global Variables
let leftCol = 2;
let rightCol = 10;
let direction = "right";


// Enemy Portion
setInterval(invaders, 1000);

let count = 0;
function invaders() {
    moveInvaders();

    updateGrid();
    
    count++
}

// Player Movement + Shooting
setInterval(playGame, 250)

function playGame() {
    // Movement
    if (leftArrowPressed) {
        player.col -= 1;
    } else if (rightArrowPressed) {
        console.log("right");
    }

    // Movement Restrictions
    if (player.col < 0) {
        player.col = 12;
    } else if (player.col < 12) {
        player.col = 0;
    }

    updateGrid();

}
