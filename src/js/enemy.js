export default class Enemey {

    constructor() {
        this.createAsteroid = this.createAsteroid.bind(this); 
        this.animateAsteroid = this.animateAsteroid.bind(this);
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600; 
        this.canvas.height = 800; 
        this.ctx = this.canvas.getContext("2d");
        this.x = 0; 
        this.y = 0; 
        this.dx = 2; 
        this.dy = -2; 

        setInterval(this.animateAsteroid, 10);
    }
    
    
    createAsteroid() {
        // debugger
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const asteroid = new Image(); 
        // asteroid.src = "https://latex-racer.s3.amazonaws.com/asteroid.png";
        asteroid.src = "src/assets/asteroid.png"
        asteroid.onload = () => {
            // this.ctx.imageSmoothingEnabled = true; 
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            this.ctx.drawImage(asteroid, this.x, this.y)  
        };
    }

    animateAsteroid() {
        debugger
        this.x += this.dx; 
        this.y += this.dy; 
        if (this.x > this.canvas.width || this. x < 0) {
            debugger
            this.dx = -this.dx; 
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.dy = -this.dy; 
        }
        this.createAsteroid(); 
    }




}