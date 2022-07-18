// Run Space Invaders Game

// Global Variables
let leftCol = 2;
let rightCol = 6;
let direction = "right";

setInterval(game, 1000);


let count = 0;
function game() {
    moveInvaders();

    updateGrid();
    
    count++
    console.log(count)
}
