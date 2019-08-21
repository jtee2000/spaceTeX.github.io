

export default class Explosion {
    constructor() {
        this.animateExplosion = this.animateExplosion.bind(this); 
        this.img = new Image (); 
        this.img.src = "src/assets/explosion.png";

        //initialize canvas 
        const canvas = document.getElementById("splash");
        canvas.width = 1600;
        canvas.height = 800;
        var ctx = canvas.getContext("2d");
        this.x = 0; 
        this.y = 0; 
        this.dx = 256; 
        this.dy = 256; 
    }

    drawExplosion(cutX, cutY, xpos, ypos) {
       this.explosion = this.ctx.drawImage(this.img, cutX, cutY, 256, 256, xpos, ypos, 256, 256)
    }


    draw() {
        this.x += this.dx; 
        if (this.x === 2048) {
            this.x = 0; 
            this.y += this.dy;
        }
        if (this.y === 1536 && this.x === 2048) {
            this.stopAnimation(); 
        }
        this.drawExplosion(this.x, this.y)
    }   
    
    animateExplosion() {
       this.animation = setInterval(this.explosion, 10);
    }

    stopAnimation() {
        window.clearInterval(this.animation);
    }
}