export default class Enemey {

    constructor() {
        //bind functions
        this.drawEnemies = this.drawEnemies.bind(this); 
        this.drawAsteroid = this.drawAsteroid.bind(this);
        this.drawAlien = this.drawAlien.bind(this);
        this.animateEnemies = this.animateEnemies.bind(this);
        this.draw = this.draw.bind(this); 

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600; 
        this.canvas.height = 800; 
        this.ctx = this.canvas.getContext("2d");

        //set initial positions of asteroid and alien
        this.x = Math.floor((Math.random() * (this.canvas.width-300))); 
        this.y = Math.floor((Math.random() * (this.canvas.height - 300))); 
        this.x_alien = Math.floor((Math.random() * (this.canvas.width - 300))); 
        this.y_alien = Math.floor((Math.random() * (this.canvas.height - 300))); 

        //set delta values for animation 
        this.dx = 2; 
        this.dy = -2; 
        this.dx_alien = -3; 
        this.dy_alien = 3; 

        //initialize alien and asteroid photos 
        this.asteroid = new Image();
        this.asteroid.src = "src/assets/asteroid.png";
        this.alien = new Image();
        this.alien.src = "src/assets/silverufo.png"

        // this.animateAsteroid();
        // setInterval(this.animateAsteroid, 50);
    }

    draw() {
        this.animateEnemies();
    }
    
    
    drawEnemies() {
        // debugger
        // var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)"
        // var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3"
        // this.ctx.clearRect(this.x, this.y, this.asteroid.width, this.asteroid.height);
        // this.ctx.clearRect(this.x_alien, this.y_alien, this.alien.width, this.alien.height);
        // const asteroid = new Image(); 
        // asteroid.src = "src/assets/asteroid.png"; 
        // const alien = new Image(); 
        // alien.src = "src/assets/silverufo.png"
        // asteroid.onload = () => {
            // this.ctx.imageSmoothingEnabled = true; 
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
        // this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256)  
        // this.ctx.font = "30px Arial";
        // this.ctx.fillStyle = "aquamarine";
        // this.ctx.fillText(latex, this.x-20, this.y+130);
        this.drawAsteroid();
        this.drawAlien();
        // };
        // alien.onload = ( () => {
        // this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250);
        // this.ctx.font = "30px Arial";
        // this.ctx.fillStyle = "aquamarine"; 
        // this.ctx.fillText(latex2, this.x_alien-20, this.y_alien+150);
        // })
    }

    drawAsteroid() {
        var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)"
        this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256)
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "aquamarine";
        this.ctx.fillText(latex, this.x - 20, this.y + 130);
    }

    drawAlien() {
        var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3"
        "F(x) &=\int ^ a_b\frac{ 1 } { 3 } x ^ 3"
        this.ctx.drawImage(this.alien, this.x_alien, this.y_alien, 250, 250);
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "aquamarine";
        this.ctx.fillText(latex2, this.x_alien - 20, this.y_alien + 150);
    }



    

    animateEnemies() {
        this.x += this.dx; 
        this.y += this.dy; 
        this.x_alien += this.dx_alien; 
        this.y_alien += this.dy_alien; 
        if (this.x > this.canvas.width -256 || this.x < 0) {
            this.dx = -this.dx; 
        }
        if (this.y > this.canvas.height- 256 || this.y < 0) {
            this.dy = -this.dy; 
        }
        if (this.x_alien > this.canvas.width-250 || this.x_alien < 0) {
            this.dx_alien = -this.dx_alien
        }
        if (this.y_alien > this.canvas.height-250 || this.y_alien < 0) {
            this.dy_alien = -this.dy_alien
        }
        this.drawEnemies(); 
        // requestAnimationFrame(this.animateEnemies);
    }




}