export default class Enemey {

    constructor() {
        this.createAsteroid = this.createAsteroid.bind(this); 
        this.createAsteroid(); 
        const canvas = document.getElementById("splash");
        this.ctx = canvas.getContext("2d");
    }
    
    
    createAsteroid() {
        const asteroid = new Image(); 
        // asteroid.src = "https://latex-racer.s3.amazonaws.com/asteroid.png";
        asteroid.src = "src/assets/asteroid.png"
        asteroid.onload = () => {
            this.ctx.imageSmoothingEnabled = true; 
            // this.ctx.drawImage(asteroid, 0, 0, 256, 256, 10, 10, 256 / 2, 256 / 2);
            this.ctx.drawImage(asteroid, 0, 0, asteroid.width, asteroid.height)  
        };
    }


}