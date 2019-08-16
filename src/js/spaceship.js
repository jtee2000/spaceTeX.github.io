export default class Spaceship {

    constructor() {
        //Grab canvas 
        this.canvas = document.getElementById("splash"); 
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //bind functions
        this.drawSpaceship = this.drawSpaceship.bind(this); 

        //Initialize spaceship
        this.ship = new Image(); 
        this.ship.src = "src/assets/spaceship.png"; 

    }

    drawSpaceship() {
        debugger
        this.ctx.drawImage(this.ship, 0, 0, 100, 100)
    }


}