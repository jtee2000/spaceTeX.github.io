export default class Layout {
    constructor() {
        this.makeLayout(); 
    }


    makeLayout() {
        const canvas = document.getElementById("splash");
        canvas.width = 1600; 
        canvas.height = 800; 
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 75, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.closePath();
        ctx.fill();
    }
}