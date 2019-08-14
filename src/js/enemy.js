export default class Enemey {

    constructor() {
        this.createAsteroid = this.drawAsteroid.bind(this); 
        this.animateAsteroid = this.animateAsteroid.bind(this);
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600; 
        this.canvas.height = 800; 
        this.ctx = this.canvas.getContext("2d");
        this.x = 0; 
        this.y = 0; 
        this.x_alien = 800; 
        this.y_alien = 500; 
        this.dx = 2; 
        this.dy = -2; 
        this.dx_alien = -3; 
        this.dy_alien = 3; 

        setInterval(this.animateAsteroid, 10);
    }
    
    
    drawAsteroid() {
        // debugger
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const asteroid = new Image(); 
        const alien = new Image(); 
        // asteroid.src = "https://latex-racer.s3.amazonaws.com/asteroid.png";
        asteroid.src = "src/assets/asteroid.png"; 
        alien.src = "src/assets/silverufo.png"
        // asteroid.onload = () => {
            // this.ctx.imageSmoothingEnabled = true; 
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256)  
        // };
        // alien.onload = ( () => {
            this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250)
        // })

    }

    

    animateAsteroid() {
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
        this.drawAsteroid(); 
    }




}