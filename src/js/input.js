export default class Input {
    constructor() {
        this.input = document.getElementById("typing-input-field");
        this.onChange = this.onChange.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        
        this.index = null; 
        this.verify = false; 
    }

    enterPressed(e, arr) {
            this.input.verify = false; 
            if (e.keyCode === 13) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].latex === this.input.value) {
                        this.index = i; 
                        this.verify = true; 
                    }
                }
                this.input.value = "";
            }
    }


    onChange() {
        console.log("hello")
        this.input.addEventListener("input", (e) => {
            if (e.keyCode === "13") {
                console.log("entered!");
            }
            console.log("hello");
        })
    }



}