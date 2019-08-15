

export default class Input {
    constructor() {
        this.input = document.getElementById("typing-input-field");
        this.onChange = this.onChange.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.enterPressed(); 
        this.onChange();

        
    }

    enterPressed() {
        this.input.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                this.input.value = "";
                console.log("You hit enter!")
            }
        })
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