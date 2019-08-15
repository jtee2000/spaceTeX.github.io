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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0IiwiZ2FtZSIsIkdhbWUiLCJzdGFydCIsIkVuZW1leSIsImRyYXdFbmVtaWVzIiwiYmluZCIsImRyYXdBc3Rlcm9pZCIsImFuaW1hdGVFbmVtaWVzIiwiZHJhdyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJ4X2FsaWVuIiwieV9hbGllbiIsImR4IiwiZHkiLCJkeF9hbGllbiIsImR5X2FsaWVuIiwiYXN0ZXJvaWQiLCJJbWFnZSIsInNyYyIsImFsaWVuIiwibGF0ZXhBcnIiLCJsYXRleCIsImxlbmd0aCIsImRyYXdJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsInBvcHVsYXRlRW5lbWllcyIsInJlbmRlckVuZW1pZXMiLCJlbmVtZXlBcnIiLCJzZXRJbnRlcnZhbCIsImZpZWxkIiwiSW5wdXQiLCJpbnB1dCIsImUiLCJlbnRlclByZXNzZWQiLCJpIiwicHVzaCIsIkVuZW15IiwiY2xlYXJSZWN0IiwidmVyaWZ5Iiwic3BsaWNlIiwiaW5kZXgiLCJvbkNoYW5nZSIsImFyciIsImtleUNvZGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7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Q0FBV2EsS0FBWCxHQUFtQixFQUFuQjtBQUNBLDZCQUFLSixLQUFMLEdBQWFOLENBQWI7QUFDQSw2QkFBS0ksTUFBTCxHQUFjLElBQWQ7QUFDSDtBQUNKO0FBQ0o7QUFDUjs7O21DQUdVO0FBQ1BPLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFLZixLQUFMLENBQVc5QyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFDK0MsQ0FBRCxFQUFPO0FBQ3hDLG9CQUFJQSxFQUFFVyxPQUFGLEtBQWMsSUFBbEIsRUFBd0I7QUFDcEJFLDRCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNIO0FBQ0RELHdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNILGFBTEQ7QUFNSDs7Ozs7O2tCQWxDZ0JoQixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEzQyxNO0FBQ2pCLHNCQUFjO0FBQUE7O0FBQ1YsYUFBSzRELFVBQUw7QUFDSDs7OztxQ0FHWTtBQUNULGdCQUFNbEQsU0FBU2IsU0FBU2MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0FELG1CQUFPRSxLQUFQLEdBQWUsSUFBZjtBQUNBRixtQkFBT0csTUFBUCxHQUFnQixHQUFoQjtBQUNBLGdCQUFJQyxNQUFNSixPQUFPSyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUQsZ0JBQUkrQyxTQUFKO0FBQ0EvQyxnQkFBSWdELEdBQUosQ0FBUSxHQUFSLEVBQWEsRUFBYixFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixJQUFJN0MsS0FBSzhDLEVBQWhDO0FBQ0FqRCxnQkFBSXNCLFNBQUosR0FBZ0IsS0FBaEI7QUFDQXRCLGdCQUFJa0QsU0FBSjtBQUNBbEQsZ0JBQUltRCxJQUFKO0FBQ0g7Ozs7OztrQkFoQmdCakUsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9qcy9sYXlvdXQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IExheW91dCgpO1xuICAgIC8vIGNvbnN0IGVuZW1leSA9IG5ldyBFbmVteSgpOyBcbiAgICAvLyBjb25zdCBlbmVtZXkyID0gbmV3IEVuZW15KCk7IFxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyBcbiAgICBnYW1lLnN0YXJ0KClcbiAgICAvLyBmdW5jdGlvbiBkcmF3KCkge1xuICAgIC8vICAgICAvLyBsb29wcyB0aHJvdWdoIGVuZW5taWVzIGFuZCBkcmF3c1xuICAgIC8vIH1cblxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxuXG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKClcbiAgICAvLyBnYW1lLnN0YXJ0KClcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArKykge1xuICAgIC8vICAgICBBcnJheS5wdXNoKG5ldyBFbmVtZXkoKSlcbiAgICAvLyB9XG5cbn0pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbWV5IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMgPSB0aGlzLmRyYXdFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcyA9IHRoaXMuYW5pbWF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vc2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGFzdGVyb2lkIGFuZCBhbGllblxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLndpZHRoLTMwMCkpKTsgXG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcbiAgICAgICAgdGhpcy54X2FsaWVuID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aCAtIDMwMCkpKTsgXG4gICAgICAgIHRoaXMueV9hbGllbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcblxuICAgICAgICAvL3NldCBkZWx0YSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiBcbiAgICAgICAgdGhpcy5keCA9IDI7IFxuICAgICAgICB0aGlzLmR5ID0gLTI7IFxuICAgICAgICB0aGlzLmR4X2FsaWVuID0gLTM7IFxuICAgICAgICB0aGlzLmR5X2FsaWVuID0gMzsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGFsaWVuIGFuZCBhc3Rlcm9pZCBwaG90b3MgXG4gICAgICAgIHRoaXMuYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIHRoaXMuYWxpZW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBsYXRleCBcbiAgICAgICAgdGhpcy5sYXRleEFyciA9IFxuICAgICAgICBbXCJcXFxcZnJhY3tkfXtkeH1jXm49bnhee24tMX1cIiwgXG4gICAgICAgIFwiXFxcXGZyYWN7XFxcXHBhcnRpYWwgeX17XFxcXHBhcnRpYWwgeH1cIiwgXG4gICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9Y15uPW54XntuLTF9XCIsIFxuICAgICAgICBcIlxcXFxmcmFje2R9e2R4fWVee2F4fT1hXFxcXCxlXntheH1cIixcbiAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcbG4oeCk9XFxcXGZyYWN7MX17eH1cIixcbiAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcc2luIHg9XFxcXGNvcyB4XCIsXG4gICAgICAgIFwiXFxcXGJpZ2N1cF97aT0xfV57bn17WF9pfVwiLFxuICAgICAgICBcIlxcXFxiaWdjYXBfe2k9MX1ee259e1hfaX1cIixcbiAgICAgICAgXCJcXFxcaW50X3swfV57XFxcXHBpfSBcXFxcc2luIHggXFxcXCwgZHggPSAyXCIsXG4gICAgICAgIFwiXFxcXGxlZnQoeC0xXFxcXHJpZ2h0KVxcXFxsZWZ0KHgrM1xcXFxyaWdodClcIixcbiAgICAgICAgXCJcXFxcbGltX3thIFxcXFxyaWdodGFycm93IGJ9XCIsXG4gICAgICAgIFwiXFxcXGJpZ3ZlZV9hXmIgeFwiLCBcbiAgICAgICAgXCJcXFxcc3VtX2FeYiB4XCJdXG4gICAgICAgIHRoaXMubGF0ZXggPSB0aGlzLmxhdGV4QXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGF0ZXhBcnIubGVuZ3RoKV07XG4gICAgICAgIC8vIHRoaXMubGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCI7XG5cbiAgICAgICAgLy8gdGhpcy5hbmltYXRlQXN0ZXJvaWQoKTtcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlQXN0ZXJvaWQsIDUwKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVFbmVtaWVzKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdFbmVtaWVzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB2YXIgbGF0ZXggPSBcIlxcXFxsZWZ0KFxcXFxmcmFjezF9e1xcXFxzcXJ0e3h9fVxcXFxyaWdodClcIlxuICAgICAgICAvLyB2YXIgbGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCJcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLmFzdGVyb2lkLndpZHRoLCB0aGlzLmFzdGVyb2lkLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgdGhpcy5hbGllbi53aWR0aCwgdGhpcy5hbGllbi5oZWlnaHQpO1xuICAgICAgICAvLyBjb25zdCBhc3Rlcm9pZCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYXN0ZXJvaWQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdGVyb2lkLnBuZ1wiOyBcbiAgICAgICAgLy8gY29uc3QgYWxpZW4gPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIC8vIGFsaWVuLnNyYyA9IFwic3JjL2Fzc2V0cy9zaWx2ZXJ1Zm8ucG5nXCJcbiAgICAgICAgLy8gYXN0ZXJvaWQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTsgXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0MCwgNTAsIDE3MCwgMTcwLCB0aGlzLngsIHRoaXMueSwgMjU2LCAyNTYpICBcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFRleHQobGF0ZXgsIHRoaXMueC0yMCwgdGhpcy55KzEzMCk7XG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkKCk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuKCk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGFsaWVuLm9ubG9hZCA9ICggKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7IFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleDIsIHRoaXMueF9hbGllbi0yMCwgdGhpcy55X2FsaWVuKzE1MCk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgZHJhd0FzdGVyb2lkKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4LCB0aGlzLnggLSAyMCwgdGhpcy55ICsgMTMwKTtcbiAgICB9XG5cbiAgICAvLyBkcmF3QWxpZW4oKSB7XG4gICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgIC8vICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4MiwgdGhpcy54X2FsaWVuIC0gMjAsIHRoaXMueV9hbGllbiArIDE1MCk7XG4gICAgLy8gfVxuXG5cblxuICAgIFxuXG4gICAgYW5pbWF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7IFxuICAgICAgICB0aGlzLnhfYWxpZW4gKz0gdGhpcy5keF9hbGllbjsgXG4gICAgICAgIHRoaXMueV9hbGllbiArPSB0aGlzLmR5X2FsaWVuOyBcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoIC0yNTYgfHwgdGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jYW52YXMuaGVpZ2h0LSAyNTYgfHwgdGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54X2FsaWVuID4gdGhpcy5jYW52YXMud2lkdGgtMjUwIHx8IHRoaXMueF9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHhfYWxpZW4gPSAtdGhpcy5keF9hbGllblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnlfYWxpZW4gPiB0aGlzLmNhbnZhcy5oZWlnaHQtMjUwIHx8IHRoaXMueV9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHlfYWxpZW4gPSAtdGhpcy5keV9hbGllblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMoKTsgXG4gICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVFbmVtaWVzKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgRW5lbWV5IGZyb20gJy4vZW5lbXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMucG9wdWxhdGVFbmVtaWVzID0gdGhpcy5wb3B1bGF0ZUVuZW1pZXMuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMucmVuZGVyRW5lbWllcyA9IHRoaXMucmVuZGVyRW5lbWllcy5iaW5kKHRoaXMpOyBcblxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL1BvcHVsYXRlIGVuZW1pZXNcbiAgICAgICAgdGhpcy5lbmVtZXlBcnIgPSBbbmV3IEVuZW1leSgpXTsgXG4gICAgICAgIHNldEludGVydmFsKHRoaXMucG9wdWxhdGVFbmVtaWVzLCA3MDAwKTsgXG5cbiAgICAgICAgLy9DcmVhdGUgbmV3IGluc3RhbmNlIG9mIGlucHV0IGZpZWxkIFxuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IElucHV0KCk7XG4gICAgICAgIHRoaXMuZmllbGQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZW50ZXJQcmVzc2VkKGUsIHRoaXMuZW5lbWV5QXJyKVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHBvcHVsYXRlRW5lbWllcygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWV5QXJyLnB1c2gobmV3IEVuZW15KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXJFbmVtaWVzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkLnZlcmlmeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICB0aGlzLmVuZW1leUFyci5zcGxpY2UodGhpcy5maWVsZC5pbmRleCwgMSk7IFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtZXlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWV5QXJyW2ldLmRyYXcoKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5yZW5kZXJFbmVtaWVzLCAxMDApXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nLWlucHV0LWZpZWxkXCIpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVudGVyUHJlc3NlZCA9IHRoaXMuZW50ZXJQcmVzc2VkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5kZXggPSBudWxsOyBcbiAgICAgICAgdGhpcy52ZXJpZnkgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgZW50ZXJQcmVzc2VkKGUsIGFycikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0ubGF0ZXggPT09IHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gXCIxM1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9