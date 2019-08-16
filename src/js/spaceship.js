export default class Spaceship {

    constructor() {
        //Grab canvas 
        this.canvas = document.getElementById("splash"); 
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //bind functions
        this.drawSpaceship = this.drawSpaceship.bind(this); 
        this.drawMissle = this.drawMissle.bind(this); 
        this.animateMissle = this.animateMissle.bind(this); 

        //Initialize spaceship
        this.ship = new Image(); 
        this.ship.src = "src/assets/blackspaceship.png"; 

        //initialize position 
        this.x = 780; 
        this.y = 550; 

        //initialize dx
        // this.dx = 10; 
        this.dy = -20; 

    }

    drawSpaceship() {
        debugger
        this.ctx.drawImage(this.ship, 730, 550, 100, 100);
    }

    drawMissle() {
        debugger
        this.ctx.beginPath(); 
        this.ctx.moveTo(this.x,this.y); 
        this.ctx.lineTo(this.x, this.y+17); 
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 6; 
        this.ctx.stroke(); 
        debugger
    }

    animateMissle() {
        this.y += this.dy; 
        this.drawMissle(); 
        if (this.y === 500) {
            this.y = 550;
        }
    }

    draw() {
        // setInterval(this.animateMissle, 10)
        this.animateMissle();
    }


}