import { easyArr } from "./easy_arr";
var enemy_count = 0; 

export default class Enemy {


    constructor(asteroid) {
        //bind functions
        enemy_count++; 

        this.drawAsteroid = this.drawAsteroid.bind(this);
        // this.drawAlien = this.drawAlien.bind(this);
        this.animateEnemies = this.animateEnemies.bind(this);

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600; 
        this.canvas.height = 800; 
        this.ctx = this.canvas.getContext("2d");

        //set initial positions of asteroid
        const pos = [[0,0], [720, 0], [1300, 0]];
        this.random = enemy_count%3; 
        [this.x, this.y] = pos[this.random];

        //set delta values for animation 
        if (this.random === 0) {
            this.dx = .5; 
            this.dy = -.417;
        } else if (this.random === 1) {
            this.dx = 0; 
            this.dy = .5; 
        } else {
            this.dx = -.33; 
            this.dy = -.33
        }

        //initialize alien and asteroid photos 
        // this.asteroid = new Image();
        // this.asteroid.src = "src/assets/asteroid.png";
        this.asteroid = asteroid;
        // this.alien = new Image();
        // this.alien.src = "src/assets/silverufo.png"

        if (enemy_count < 50) {
            this.latexArr = easyArr; 
        } else {
            this.latexArr = 
            ["\\frac{d}{dx}c^n=nx^{n-1}", 
            "\\frac{\\partial y}{\\partial x}", 
            "\\frac{d}{dx}c^n=nx^{n-1}", 
            "\\frac{d}{dx}e^{ax}=a\\,e^{ax}",
            "\\frac{d}{dx}\\ln(x)=\\frac{1}{x}",
            "\\frac{d}{dx}\\sin x=\\cos x",
            "\\bigcup_{i=1}^{n}{X_i}",
            "\\bigcap_{i=1}^{n}{X_i}",
            "\\int_{0}^{\\pi} \\sin x \\ dx = 2",
            "\\left(x-1\\right)\\left(x+3\\right)",
            "\\lim_{a \\rightarrow b}",
            "\\bigvee_a^b x", 
            "\\sum_a^b x"]
        }

        // Initialize latex 
        this.latex = this.latexArr[Math.floor(Math.random() * this.latexArr.length)];


    }

    // draw() {
    //     this.animateEnemies();
    // }
    
    
    // drawEnemies() {
    //     // debugger
    //     // var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)"
    //     // var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3"
    //     // this.ctx.clearRect(this.x, this.y, this.asteroid.width, this.asteroid.height);
    //     // this.ctx.clearRect(this.x_alien, this.y_alien, this.alien.width, this.alien.height);
    //     // const asteroid = new Image(); 
    //     // asteroid.src = "src/assets/asteroid.png"; 
    //     // const alien = new Image(); 
    //     // alien.src = "src/assets/silverufo.png"
    //     // asteroid.onload = () => {
    //         // this.ctx.imageSmoothingEnabled = true; 
    //         // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
    //         // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
    //     // this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256)  
    //     // this.ctx.font = "30px Arial";
    //     // this.ctx.fillStyle = "aquamarine";
    //     // this.ctx.fillText(latex, this.x-20, this.y+130);
    //     this.drawAsteroid();
    //     // this.drawAlien();
    //     // };
    //     // alien.onload = ( () => {
    //     // this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250);
    //     // this.ctx.font = "30px Arial";
    //     // this.ctx.fillStyle = "aquamarine"; 
    //     // this.ctx.fillText(latex2, this.x_alien-20, this.y_alien+150);
    //     // })
    // }

    drawAsteroid() {
        this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 150, 170)
        this.ctx.font = "30px Times New Roman";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.latex, this.x + 75, this.y + 85);
    }

    // drawAlien() {
    //     this.ctx.drawImage(this.alien, this.x_alien, this.y_alien, 250, 250);
    //     this.ctx.font = "30px Arial";
    //     this.ctx.fillStyle = "aquamarine";
    //     this.ctx.fillText(this.latex2, this.x_alien - 20, this.y_alien + 150);
    // }



    

    animateEnemies() {
        this.x += this.dx; 
        this.y += this.dy; 
        if (this.x > this.canvas.width - 256 || this.x < 0) {
            this.dx = -this.dx; 
        }
        if (this.y > this.canvas.height- 256 || this.y < 0) {
            this.dy = -this.dy; 
        }
        this.drawAsteroid(); 
        // requestAnimationFrame(this.animateEnemies);
    }

}