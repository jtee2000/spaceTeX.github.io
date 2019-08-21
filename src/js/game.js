import Enemy from './enemy';
import Input from './input';
import { clearInterval } from 'timers';
import Spaceship from './spaceship';
import Explosion from './explosion';

export default class Game {

    constructor() {
        //bind functions
        this.asteroid = new Image();
        this.asteroid.src = "src/assets/asteroid.png";
        this.renderEnemies = this.renderEnemies.bind(this); 
        this.populateEnemies = this.populateEnemies.bind(this);
        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //Populate enemies
        this.enemyArr = [new Enemy(this.asteroid)]; 
        setInterval(this.populateEnemies, 2000); 

        //Create new instance of input field 
        this.field = new Input();
        this.field.input.addEventListener("keydown", (e) => {
            this.field.enterPressed(e, this.enemyArr)
        });

        //instantiate score 
        this.score = document.getElementById("score"); 

        // inititialize mathfield 
        this.htmlElement = document.getElementById('mathField');
        this.mathField = MQ.MathField(this.htmlElement); 

        //initialize spaceship 
        this.spaceship = new Spaceship(); 


        //lose button 
        const lose = document.getElementById("you-lose");
        lose.addEventListener("click", () => {
            location.reload();
        })
    }

    
    
    renderEnemies() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.enemyArr.length; i++) {
            this.enemyArr[i].draw(); 
            if (this.enemyArr[i].random === 0 && (this.enemyArr[i].x >= 630 || this.enemyArr[i].y >=500)) {
                new Explosion(730, 510);
                this.end();
                document.getElementById("you-lose").style.display = "inline";
                document.getElementById("button").style.display = "inline"
            } else if (this.enemyArr[i].random === 1 && this.enemyArr[i].y >= 400) {
                new Explosion(730, 510);
                this.end();
                document.getElementById("you-lose").style.display = "inline";
                document.getElementById("button").style.display = "inline"
            } else if (this.enemyArr[i].random === 2 && (this.enemyArr[i].x <= 800 || this.enemyArr[i].y >= 550)) {
                new Explosion(730, 510);
                this.end();
                document.getElementById("you-lose").style.display = "inline";
                document.getElementById("button").style.display = "inline"
            }
        }
        this.mathField.latex(this.field.input.value);
        if (this.field.verify === true) {
            const enemy = this.enemyArr[this.field.index]
            this.score.value = `${parseInt(this.score.value, 10) + 1}`
            this.field.verify = false; 
            if (enemy.random === 0) {
                this.spaceship.drawLeft(enemy.x, enemy.y); 
            } else if (enemy.random === 1) {
                this.spaceship.drawMiddle(enemy.x, enemy.y); 
            } else {
                this.spaceship.drawRight(enemy.x, enemy.y); 
            }
            this.enemyArr.splice(this.field.index, 1); 
            // this.spaceship.animateMissle();
            new Explosion(enemy.x, enemy.y);
        }
        // if (this.enemeyArr.length === 10) {
        //     this.end(); 
        //     document.getElementById("you-lose").style.display = "inline";
        //     document.getElementById("button").style.display = "inline"
        //     console.log("You lose"); 
        // }
        this.spaceship.drawSpaceship(); 
        // this.time = requestAnimationFrame(this.renderEnemies)


    }

    populateEnemies() {
        for (let i = 0; i < 1; i++) {
            this.enemyArr.push(new Enemy(this.asteroid));
        }
    }

    start() {
        this.timer = setInterval(this.renderEnemies, 1000 / 60);
        // this.renderEnemies();
    }

    end() {
        window.clearInterval(this.timer);
        // window.cancelAnimationFrame(this.time);
    }
}