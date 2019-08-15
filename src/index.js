import Layout from './js/layout';
import Enemy from './js/enemy';
import Input from './js/input';
import Enemey from './js/enemy';
import Game from './js/game';

document.addEventListener('DOMContentLoaded', () => {
    const background = new Layout();
    // const enemey = new Enemy(); 
    // const enemey2 = new Enemy(); 

    const input = new Input();

    const game = new Game(); 
    game.start();
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