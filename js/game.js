// Run Space Invaders Game

setInterval(game, 1000);


let count = 0;
function game() {
    moveInvaders();

    updateGrid();
    
    count++
    console.log(count)
}
