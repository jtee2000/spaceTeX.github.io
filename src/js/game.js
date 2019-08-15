import Enemy from './enemy';
import Input from './input';

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

        //Populate enemies
        this.enemeyArr = []; 
        this.populateEnemies(); 

        //Create new instance of input field 
        this.field = new Input();
        this.field.input.addEventListener("keydown", (e) => {
            this.field.enterPressed(e, this.enemeyArr)
        });
    }


    populateEnemies() {
        for (let i = 0; i < 1; i++) {
            this.enemeyArr.push(new Enemy());
        }
    }

    

    renderEnemies() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        debugger
        if (this.field.verify === true) {
            debugger
            this.enemeyArr.splice(this.field.index, 1); 
        }
        for (let i = 0; i < this.enemeyArr.length; i++) {
            this.enemeyArr[i].draw(); 
        }
    }

    start() {
        setInterval(this.renderEnemies, 10)
    }
}