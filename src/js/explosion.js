export default class Explosion {
    constructor(x, y) {
        this.animateExplosion = this.animateExplosion.bind(this); 
        this.drawExplosion = this.drawExplosion.bind(this); 
        this.draw = this.draw.bind(this); 


        this.img = new Image (); 
        this.img.src = "src/assets/explosion.png";

        //initialize canvas 
        const canvas = document.getElementById("splash");
        canvas.width = 1600;
        canvas.height = 800;
        this.ctx = canvas.getContext("2d");
        this.x = x; 
        this.y = y; 
        this.sx = 0; 
        this.sy = 0; 
        this.dx = 256; 
        this.dy = 256; 
        this.animateExplosion(); 
    }

    drawExplosion() {
       this.explosion = this.ctx.drawImage(this.img, this.sx, this.sy, 256, 256, this.x-75, this.y, 256, 256)
    }


    draw() {
        this.sx += this.dx; 
        if (this.sx === 2048) {
            this.sx = 0; 
            this.sy += this.dy;
        }
        if (this.sy === 1536 && this.sx === 2048) {
            this.stopAnimation(); 
        }
        this.drawExplosion()
        this.test = requestAnimationFrame(this.draw)
    }   
    
    animateExplosion() {
    //    this.animation = setInterval(this.draw, 1000/60);
        this.draw();
    }

    stopAnimation() {
        // window.clearInterval(this.animation);
        this.sx = 0; 
        this.sy = 0; 
    }
}