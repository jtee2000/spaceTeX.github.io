import Layout from './js/layout';
import Game from './js/game';
import Spaceship from './js/spaceship'; 

document.addEventListener('DOMContentLoaded', () => {
    const background = new Layout();
    // const enemey = new Enemy(); 
    // const enemey2 = new Enemy(); 
    // const spaceship = new Spaceship();
    // spaceship.drawSpaceship();
    const game = new Game(); 
    game.start()
    // function draw() {
    //     // loops through enenmies and draws
    // }

    // requestAnimationFrame(draw)

    // const game = new Game()
    // game.start()

    // for (let i = 0; i < 3; i ++) {
    //     Array.push(new Enemey())
    // }

})