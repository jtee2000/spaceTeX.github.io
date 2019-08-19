import Layout from './js/layout';
import Game from './js/game';
import Spaceship from './js/spaceship'; 

document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.getElementById("button"); 
    button.addEventListener("click", () => {
        const game = new Game(); 
        const background = new Layout();
        const splashScreen = document.getElementById("homescreen"); 
        const canvas = document.getElementById("canvas-wrapper"); 
        canvas.style.display = "block";
        splashScreen.style.display = "none"; 

        game.start();
    })
    

})