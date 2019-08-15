/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layout = __webpack_require__(/*! ./js/layout */ "./src/js/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _game = __webpack_require__(/*! ./js/game */ "./src/js/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var background = new _layout2.default();
    // const enemey = new Enemy(); 
    // const enemey2 = new Enemy(); 
    var game = new _game2.default();
    game.start();
    // function draw() {
    //     // loops through enenmies and draws
    // }

    // requestAnimationFrame(draw)

    // const game = new Game()
    // game.start()

    // for (let i = 0; i < 3; i ++) {
    //     Array.push(new Enemey())
    // }
});

/***/ }),

/***/ "./src/js/enemy.js":
/*!*************************!*\
  !*** ./src/js/enemy.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemey = function () {
    function Enemey() {
        _classCallCheck(this, Enemey);

        //bind functions
        this.drawEnemies = this.drawEnemies.bind(this);
        this.drawAsteroid = this.drawAsteroid.bind(this);
        // this.drawAlien = this.drawAlien.bind(this);
        this.animateEnemies = this.animateEnemies.bind(this);
        this.draw = this.draw.bind(this);

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //set initial positions of asteroid and alien
        this.x = Math.floor(Math.random() * (this.canvas.width - 300));
        this.y = Math.floor(Math.random() * (this.canvas.height - 300));
        this.x_alien = Math.floor(Math.random() * (this.canvas.width - 300));
        this.y_alien = Math.floor(Math.random() * (this.canvas.height - 300));

        //set delta values for animation 
        this.dx = 2;
        this.dy = -2;
        this.dx_alien = -3;
        this.dy_alien = 3;

        //initialize alien and asteroid photos 
        this.asteroid = new Image();
        this.asteroid.src = "src/assets/asteroid.png";
        this.alien = new Image();
        this.alien.src = "src/assets/silverufo.png";

        // Initialize latex 
        this.latexArr = ["\\frac{d}{dx}c^n=nx^{n-1}", "\\frac{\\partial y}{\\partial x}", "\\frac{d}{dx}c^n=nx^{n-1}", "\\frac{d}{dx}e^{ax}=a\\,e^{ax}", "\\frac{d}{dx}\\ln(x)=\\frac{1}{x}", "\\frac{d}{dx}\\sin x=\\cos x", "\\bigcup_{i=1}^{n}{X_i}", "\\bigcap_{i=1}^{n}{X_i}", "\\int_{0}^{\\pi} \\sin x \\, dx = 2", "\\left(x-1\\right)\\left(x+3\\right)", "\\lim_{a \\rightarrow b}", "\\bigvee_a^b x", "\\sum_a^b x"];
        this.latex = this.latexArr[Math.floor(Math.random() * this.latexArr.length)];
        // this.latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3";

        // this.animateAsteroid();
        // setInterval(this.animateAsteroid, 50);
    }

    _createClass(Enemey, [{
        key: "draw",
        value: function draw() {
            this.animateEnemies();
        }
    }, {
        key: "drawEnemies",
        value: function drawEnemies() {
            // debugger
            // var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)"
            // var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3"
            // this.ctx.clearRect(this.x, this.y, this.asteroid.width, this.asteroid.height);
            // this.ctx.clearRect(this.x_alien, this.y_alien, this.alien.width, this.alien.height);
            // const asteroid = new Image(); 
            // asteroid.src = "src/assets/asteroid.png"; 
            // const alien = new Image(); 
            // alien.src = "src/assets/silverufo.png"
            // asteroid.onload = () => {
            // this.ctx.imageSmoothingEnabled = true; 
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            // this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256)  
            // this.ctx.font = "30px Arial";
            // this.ctx.fillStyle = "aquamarine";
            // this.ctx.fillText(latex, this.x-20, this.y+130);
            this.drawAsteroid();
            // this.drawAlien();
            // };
            // alien.onload = ( () => {
            // this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250);
            // this.ctx.font = "30px Arial";
            // this.ctx.fillStyle = "aquamarine"; 
            // this.ctx.fillText(latex2, this.x_alien-20, this.y_alien+150);
            // })
        }
    }, {
        key: "drawAsteroid",
        value: function drawAsteroid() {
            this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(this.latex, this.x - 20, this.y + 130);
        }

        // drawAlien() {
        //     this.ctx.drawImage(this.alien, this.x_alien, this.y_alien, 250, 250);
        //     this.ctx.font = "30px Arial";
        //     this.ctx.fillStyle = "aquamarine";
        //     this.ctx.fillText(this.latex2, this.x_alien - 20, this.y_alien + 150);
        // }


    }, {
        key: "animateEnemies",
        value: function animateEnemies() {
            this.x += this.dx;
            this.y += this.dy;
            this.x_alien += this.dx_alien;
            this.y_alien += this.dy_alien;
            if (this.x > this.canvas.width - 256 || this.x < 0) {
                this.dx = -this.dx;
            }
            if (this.y > this.canvas.height - 256 || this.y < 0) {
                this.dy = -this.dy;
            }
            if (this.x_alien > this.canvas.width - 250 || this.x_alien < 0) {
                this.dx_alien = -this.dx_alien;
            }
            if (this.y_alien > this.canvas.height - 250 || this.y_alien < 0) {
                this.dy_alien = -this.dy_alien;
            }
            this.drawEnemies();
            // requestAnimationFrame(this.animateEnemies);
        }
    }]);

    return Enemey;
}();

exports.default = Enemey;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enemy = __webpack_require__(/*! ./enemy */ "./src/js/enemy.js");

var _enemy2 = _interopRequireDefault(_enemy);

var _input = __webpack_require__(/*! ./input */ "./src/js/input.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        var _this = this;

        _classCallCheck(this, Game);

        //bind functions
        this.populateEnemies = this.populateEnemies.bind(this);
        this.renderEnemies = this.renderEnemies.bind(this);

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //Populate enemies
        this.enemeyArr = [new _enemy2.default()];
        setInterval(this.populateEnemies, 7000);

        //Create new instance of input field 
        this.field = new _input2.default();
        this.field.input.addEventListener("keydown", function (e) {
            _this.field.enterPressed(e, _this.enemeyArr);
        });

        //instantiate score 
        this.score = document.getElementById("score");
    }

    _createClass(Game, [{
        key: 'populateEnemies',
        value: function populateEnemies() {
            for (var i = 0; i < 1; i++) {
                this.enemeyArr.push(new _enemy2.default());
            }
        }
    }, {
        key: 'renderEnemies',
        value: function renderEnemies() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if (this.field.verify === true) {
                debugger;
                this.score.value = '' + (parseInt(this.score.value, 10) + 1);
                this.field.verify = false;
                this.enemeyArr.splice(this.field.index, 1);
            }
            for (var i = 0; i < this.enemeyArr.length; i++) {
                this.enemeyArr[i].draw();
            }
        }
    }, {
        key: 'start',
        value: function start() {
            setInterval(this.renderEnemies, 100);
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
    function Input() {
        _classCallCheck(this, Input);

        this.input = document.getElementById("typing-input-field");
        this.onChange = this.onChange.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        // this.onChange();

        this.index = null;
        this.verify = false;
    }

    _createClass(Input, [{
        key: "enterPressed",
        value: function enterPressed(e, arr) {
            this.input.verify = false;
            if (e.keyCode === 13) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].latex === this.input.value) {
                        debugger;
                        this.input.value = "";
                        this.index = i;
                        this.verify = true;
                    }
                }
            }
        }
    }, {
        key: "onChange",
        value: function onChange() {
            console.log("hello");
            this.input.addEventListener("input", function (e) {
                if (e.keyCode === "13") {
                    console.log("entered!");
                }
                console.log("hello");
            });
        }
    }]);

    return Input;
}();

exports.default = Input;

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
    function Layout() {
        _classCallCheck(this, Layout);

        this.makeLayout();
    }

    _createClass(Layout, [{
        key: "makeLayout",
        value: function makeLayout() {
            var canvas = document.getElementById("splash");
            canvas.width = 1600;
            canvas.height = 800;
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(150, 75, 2, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.closePath();
            ctx.fill();
        }
    }]);

    return Layout;
}();

exports.default = Layout;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0IiwiZ2FtZSIsIkdhbWUiLCJzdGFydCIsIkVuZW1leSIsImRyYXdFbmVtaWVzIiwiYmluZCIsImRyYXdBc3Rlcm9pZCIsImFuaW1hdGVFbmVtaWVzIiwiZHJhdyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJ4X2FsaWVuIiwieV9hbGllbiIsImR4IiwiZHkiLCJkeF9hbGllbiIsImR5X2FsaWVuIiwiYXN0ZXJvaWQiLCJJbWFnZSIsInNyYyIsImFsaWVuIiwibGF0ZXhBcnIiLCJsYXRleCIsImxlbmd0aCIsImRyYXdJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsInBvcHVsYXRlRW5lbWllcyIsInJlbmRlckVuZW1pZXMiLCJlbmVtZXlBcnIiLCJzZXRJbnRlcnZhbCIsImZpZWxkIiwiSW5wdXQiLCJpbnB1dCIsImUiLCJlbnRlclByZXNzZWQiLCJzY29yZSIsImkiLCJwdXNoIiwiRW5lbXkiLCJjbGVhclJlY3QiLCJ2ZXJpZnkiLCJ2YWx1ZSIsInBhcnNlSW50Iiwic3BsaWNlIiwiaW5kZXgiLCJvbkNoYW5nZSIsImFyciIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIiwibWFrZUxheW91dCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCJdLCJtYXBw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cEQsZ0JBQUlxRCxJQUFKO0FBQ0g7Ozs7OztrQkFoQmdCbkUsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9qcy9sYXlvdXQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IExheW91dCgpO1xuICAgIC8vIGNvbnN0IGVuZW1leSA9IG5ldyBFbmVteSgpOyBcbiAgICAvLyBjb25zdCBlbmVtZXkyID0gbmV3IEVuZW15KCk7IFxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyBcbiAgICBnYW1lLnN0YXJ0KClcbiAgICAvLyBmdW5jdGlvbiBkcmF3KCkge1xuICAgIC8vICAgICAvLyBsb29wcyB0aHJvdWdoIGVuZW5taWVzIGFuZCBkcmF3c1xuICAgIC8vIH1cblxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxuXG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKClcbiAgICAvLyBnYW1lLnN0YXJ0KClcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArKykge1xuICAgIC8vICAgICBBcnJheS5wdXNoKG5ldyBFbmVtZXkoKSlcbiAgICAvLyB9XG5cbn0pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbWV5IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMgPSB0aGlzLmRyYXdFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcyA9IHRoaXMuYW5pbWF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vc2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGFzdGVyb2lkIGFuZCBhbGllblxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLndpZHRoLTMwMCkpKTsgXG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcbiAgICAgICAgdGhpcy54X2FsaWVuID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aCAtIDMwMCkpKTsgXG4gICAgICAgIHRoaXMueV9hbGllbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcblxuICAgICAgICAvL3NldCBkZWx0YSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiBcbiAgICAgICAgdGhpcy5keCA9IDI7IFxuICAgICAgICB0aGlzLmR5ID0gLTI7IFxuICAgICAgICB0aGlzLmR4X2FsaWVuID0gLTM7IFxuICAgICAgICB0aGlzLmR5X2FsaWVuID0gMzsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGFsaWVuIGFuZCBhc3Rlcm9pZCBwaG90b3MgXG4gICAgICAgIHRoaXMuYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIHRoaXMuYWxpZW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBsYXRleCBcbiAgICAgICAgdGhpcy5sYXRleEFyciA9IFxuICAgICAgICBbXCJcXFxcZnJhY3tkfXtkeH1jXm49bnhee24tMX1cIiwgXG4gICAgICAgIFwiXFxcXGZyYWN7XFxcXHBhcnRpYWwgeX17XFxcXHBhcnRpYWwgeH1cIiwgXG4gICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9Y15uPW54XntuLTF9XCIsIFxuICAgICAgICBcIlxcXFxmcmFje2R9e2R4fWVee2F4fT1hXFxcXCxlXntheH1cIixcbiAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcbG4oeCk9XFxcXGZyYWN7MX17eH1cIixcbiAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcc2luIHg9XFxcXGNvcyB4XCIsXG4gICAgICAgIFwiXFxcXGJpZ2N1cF97aT0xfV57bn17WF9pfVwiLFxuICAgICAgICBcIlxcXFxiaWdjYXBfe2k9MX1ee259e1hfaX1cIixcbiAgICAgICAgXCJcXFxcaW50X3swfV57XFxcXHBpfSBcXFxcc2luIHggXFxcXCwgZHggPSAyXCIsXG4gICAgICAgIFwiXFxcXGxlZnQoeC0xXFxcXHJpZ2h0KVxcXFxsZWZ0KHgrM1xcXFxyaWdodClcIixcbiAgICAgICAgXCJcXFxcbGltX3thIFxcXFxyaWdodGFycm93IGJ9XCIsXG4gICAgICAgIFwiXFxcXGJpZ3ZlZV9hXmIgeFwiLCBcbiAgICAgICAgXCJcXFxcc3VtX2FeYiB4XCJdXG4gICAgICAgIHRoaXMubGF0ZXggPSB0aGlzLmxhdGV4QXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGF0ZXhBcnIubGVuZ3RoKV07XG4gICAgICAgIC8vIHRoaXMubGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCI7XG5cbiAgICAgICAgLy8gdGhpcy5hbmltYXRlQXN0ZXJvaWQoKTtcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlQXN0ZXJvaWQsIDUwKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVFbmVtaWVzKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdFbmVtaWVzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB2YXIgbGF0ZXggPSBcIlxcXFxsZWZ0KFxcXFxmcmFjezF9e1xcXFxzcXJ0e3h9fVxcXFxyaWdodClcIlxuICAgICAgICAvLyB2YXIgbGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCJcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLmFzdGVyb2lkLndpZHRoLCB0aGlzLmFzdGVyb2lkLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgdGhpcy5hbGllbi53aWR0aCwgdGhpcy5hbGllbi5oZWlnaHQpO1xuICAgICAgICAvLyBjb25zdCBhc3Rlcm9pZCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYXN0ZXJvaWQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdGVyb2lkLnBuZ1wiOyBcbiAgICAgICAgLy8gY29uc3QgYWxpZW4gPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIC8vIGFsaWVuLnNyYyA9IFwic3JjL2Fzc2V0cy9zaWx2ZXJ1Zm8ucG5nXCJcbiAgICAgICAgLy8gYXN0ZXJvaWQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTsgXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0MCwgNTAsIDE3MCwgMTcwLCB0aGlzLngsIHRoaXMueSwgMjU2LCAyNTYpICBcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFRleHQobGF0ZXgsIHRoaXMueC0yMCwgdGhpcy55KzEzMCk7XG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkKCk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuKCk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGFsaWVuLm9ubG9hZCA9ICggKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7IFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleDIsIHRoaXMueF9hbGllbi0yMCwgdGhpcy55X2FsaWVuKzE1MCk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgZHJhd0FzdGVyb2lkKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4LCB0aGlzLnggLSAyMCwgdGhpcy55ICsgMTMwKTtcbiAgICB9XG5cbiAgICAvLyBkcmF3QWxpZW4oKSB7XG4gICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgIC8vICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4MiwgdGhpcy54X2FsaWVuIC0gMjAsIHRoaXMueV9hbGllbiArIDE1MCk7XG4gICAgLy8gfVxuXG5cblxuICAgIFxuXG4gICAgYW5pbWF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7IFxuICAgICAgICB0aGlzLnhfYWxpZW4gKz0gdGhpcy5keF9hbGllbjsgXG4gICAgICAgIHRoaXMueV9hbGllbiArPSB0aGlzLmR5X2FsaWVuOyBcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoIC0yNTYgfHwgdGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jYW52YXMuaGVpZ2h0LSAyNTYgfHwgdGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54X2FsaWVuID4gdGhpcy5jYW52YXMud2lkdGgtMjUwIHx8IHRoaXMueF9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHhfYWxpZW4gPSAtdGhpcy5keF9hbGllblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnlfYWxpZW4gPiB0aGlzLmNhbnZhcy5oZWlnaHQtMjUwIHx8IHRoaXMueV9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHlfYWxpZW4gPSAtdGhpcy5keV9hbGllblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMoKTsgXG4gICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVFbmVtaWVzKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgRW5lbWV5IGZyb20gJy4vZW5lbXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMucG9wdWxhdGVFbmVtaWVzID0gdGhpcy5wb3B1bGF0ZUVuZW1pZXMuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMucmVuZGVyRW5lbWllcyA9IHRoaXMucmVuZGVyRW5lbWllcy5iaW5kKHRoaXMpOyBcblxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL1BvcHVsYXRlIGVuZW1pZXNcbiAgICAgICAgdGhpcy5lbmVtZXlBcnIgPSBbbmV3IEVuZW1leSgpXTsgXG4gICAgICAgIHNldEludGVydmFsKHRoaXMucG9wdWxhdGVFbmVtaWVzLCA3MDAwKTsgXG5cbiAgICAgICAgLy9DcmVhdGUgbmV3IGluc3RhbmNlIG9mIGlucHV0IGZpZWxkIFxuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IElucHV0KCk7XG4gICAgICAgIHRoaXMuZmllbGQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZW50ZXJQcmVzc2VkKGUsIHRoaXMuZW5lbWV5QXJyKVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2luc3RhbnRpYXRlIHNjb3JlIFxuICAgICAgICB0aGlzLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTsgXG4gICAgfVxuXG5cbiAgICBwb3B1bGF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW1leUFyci5wdXNoKG5ldyBFbmVteSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyRW5lbWllcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5maWVsZC52ZXJpZnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLnZhbHVlID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS52YWx1ZSwgMTApICsgMX1gXG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZlcmlmeSA9IGZhbHNlOyBcbiAgICAgICAgICAgIHRoaXMuZW5lbWV5QXJyLnNwbGljZSh0aGlzLmZpZWxkLmluZGV4LCAxKTsgXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1leUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmVtZXlBcnJbaV0uZHJhdygpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnJlbmRlckVuZW1pZXMsIDEwMClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpbmctaW5wdXQtZmllbGRcIik7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW50ZXJQcmVzc2VkID0gdGhpcy5lbnRlclByZXNzZWQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbmRleCA9IG51bGw7IFxuICAgICAgICB0aGlzLnZlcmlmeSA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICBlbnRlclByZXNzZWQoZSwgYXJyKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZlcmlmeSA9IGZhbHNlOyBcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5sYXRleCA9PT0gdGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnkgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBcIjEzXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYWtlTGF5b3V0KCk7IFxuICAgIH1cblxuXG4gICAgbWFrZUxheW91dCgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7IFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gODAwOyBcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygxNTAsIDc1LCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=