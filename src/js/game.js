import Enemy from './enemy';


export default class Game {

    constructor() {
        //bind functions
        this.populateEnemies = this.populateEnemies.bind(this); 
        this.renderEnemies = this.renderEnemies.bind(this); 


        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        
        this.enemeyArr = []; 
        this.populateEnemies(); 
    }


    populateEnemies() {
        for (let i = 0; i < 1; i++) {
            this.enemeyArr.push(new Enemy())
        }
    }

    

    renderEnemies() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.enemeyArr.length; i++) {
            this.enemeyArr[i].draw(); 
        }
    }

    start() {
        setInterval(this.renderEnemies, 10)
    }
}