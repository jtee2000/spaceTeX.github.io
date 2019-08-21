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
        this.animateLeft = this.animateLeft.bind(this);
        this.animateMiddle = this.animateMiddle.bind(this);
        this.animateRight = this.animateRight.bind(this); 
        this.drawLeft = this.drawLeft.bind(this); 
        this.drawMiddle = this.drawMiddle.bind(this); 
        this.drawRight = this.drawRight.bind(this); 
        this.stopAnimation = this.stopAnimation.bind(this); 

        //Initialize spaceship
        this.ship = new Image(); 
        this.ship.src = "src/assets/blackspaceship.png"; 

        //initialize position 
        this.xl = 780; 
        this.yl = 550; 
        this.xr = 780; 
        this.yr = 550; 
        this.xm = 780; 
        this.ym = 550; 

        //initialize dxl and dyl 
        this.dxl = -60; 
        this.dyl = -50; 

        //initialize dxm and dym
        this.dxm = 0; 
        this.dym = -78; 

        //initialize dxr and dyr
        this.dyr = -50; 
        this.dxr = 60;



    }

    drawSpaceship() {
        this.ctx.drawImage(this.ship, 730, 550, 100, 100);
    }

    drawMissle(posx, posy, x,y) {
        this.ctx.beginPath(); 
        this.ctx.moveTo(posx, posy); 
        this.ctx.lineTo(posx+x, posy+y); 
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 6; 
        this.ctx.stroke(); 
    }

    animateLeft(x, y) {
        this.yl += this.dyl; 
        this.xl += this.dxl; 
        this.drawMissle(this.xl, this.yl, 20, 17); 
        if (this.xl <= x || this.yl <= y) {
            this.stopAnimation(); 
        }

    }

    animateMiddle(x, y) {
        this.ym += this.dym; 
        this.xm += this.dxm; 
        this.drawMissle(this.xm, this.ym, 0, 17); 
        if (this.ym <= y) {
            this.stopAnimation(); 
        }

    }

    animateRight(x, y) {
        this.yr += this.dyr; 
        this.xr += this.dxr
        this.drawMissle(this.xr, this.yr, -20, 17); 
        if (this.yr <= y || this.xr >= x) {
            this.stopAnimation();
        } 
    }

    drawLeft(xpos, ypos) {
        this.left = setInterval(() => {
            this.animateLeft(xpos, ypos)
        },  10);
    }

    drawMiddle(xpos, ypos) {
        this.middle = setInterval(() => {
            this.animateMiddle(xpos, ypos)
        }, 10); 
    }


    drawRight(xpos, ypos) {
        this.right = setInterval(() => {
            this.animateRight(xpos, ypos)
        }, 10)
        // this.animateMissle();
    }

    stopAnimation() {
        window.clearInterval(this.left);
        window.clearInterval(this.right);
        window.clearInterval(this.middle);
        this.xr = 780; 
        this.xm = 780; 
        this.xl = 780; 
        this.yr = 550; 
        this.ym = 550; 
        this.yl = 550; 

    }


}