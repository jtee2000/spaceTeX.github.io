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

var _enemy = __webpack_require__(/*! ./js/enemy */ "./src/js/enemy.js");

var _enemy2 = _interopRequireDefault(_enemy);

var _input = __webpack_require__(/*! ./js/input */ "./src/js/input.js");

var _input2 = _interopRequireDefault(_input);

var _game = __webpack_require__(/*! ./js/game */ "./src/js/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var background = new _layout2.default();
    // const enemey = new Enemy(); 
    // const enemey2 = new Enemy(); 

    var input = new _input2.default();

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
        this.drawAlien = this.drawAlien.bind(this);
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
            this.drawAlien();
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
            var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)";
            this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(latex, this.x - 20, this.y + 130);
        }
    }, {
        key: "drawAlien",
        value: function drawAlien() {
            var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3";
            "F(x) &=\int ^ a_b\frac{ 1 } { 3 } x ^ 3";
            this.ctx.drawImage(this.alien, this.x_alien, this.y_alien, 250, 250);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(latex2, this.x_alien - 20, this.y_alien + 150);
        }
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        //bind functions
        this.populateEnemies = this.populateEnemies.bind(this);
        this.renderEnemies = this.renderEnemies.bind(this);

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        this.enemeyArr = [];
        this.populateEnemies();
    }

    _createClass(Game, [{
        key: "populateEnemies",
        value: function populateEnemies() {
            for (var i = 0; i < 1; i++) {
                this.enemeyArr.push(new _enemy2.default());
            }
        }
    }, {
        key: "renderEnemies",
        value: function renderEnemies() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < this.enemeyArr.length; i++) {
                this.enemeyArr[i].draw();
            }
        }
    }, {
        key: "start",
        value: function start() {
            setInterval(this.renderEnemies, 10);
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
        this.enterPressed();
        this.onChange();
    }

    _createClass(Input, [{
        key: "enterPressed",
        value: function enterPressed() {
            var _this = this;

            this.input.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    _this.input.value = "";
                    console.log("You hit enter!");
                }
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0IiwiaW5wdXQiLCJJbnB1dCIsImdhbWUiLCJHYW1lIiwic3RhcnQiLCJFbmVtZXkiLCJkcmF3RW5lbWllcyIsImJpbmQiLCJkcmF3QXN0ZXJvaWQiLCJkcmF3QWxpZW4iLCJhbmltYXRlRW5lbWllcyIsImRyYXciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwieF9hbGllbiIsInlfYWxpZW4iLCJkeCIsImR5IiwiZHhfYWxpZW4iLCJkeV9hbGllbiIsImFzdGVyb2lkIiwiSW1hZ2UiLCJzcmMiLCJhbGllbiIsImxhdGV4IiwiZHJhd0ltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwibGF0ZXgyIiwicG9wdWxhdGVFbmVtaWVzIiwicmVuZGVyRW5lbWllcyIsImVuZW1leUFyciIsImkiLCJwdXNoIiwiRW5lbXkiLCJjbGVhclJlY3QiLCJsZW5ndGgiLCJzZXRJbnRlcnZhbCIsIm9uQ2hhbmdlIiwiZW50ZXJQcmVzc2VkIiwiZSIsImtleUNvZGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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S0FBUCxHQUFlLElBQWY7QUFDQUYsbUJBQU9HLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxnQkFBSUMsTUFBTUosT0FBT0ssVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELGdCQUFJd0MsU0FBSjtBQUNBeEMsZ0JBQUl5QyxHQUFKLENBQVEsR0FBUixFQUFhLEVBQWIsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsSUFBSXRDLEtBQUt1QyxFQUFoQztBQUNBMUMsZ0JBQUlvQixTQUFKLEdBQWdCLEtBQWhCO0FBQ0FwQixnQkFBSTJDLFNBQUo7QUFDQTNDLGdCQUFJNEMsSUFBSjtBQUNIOzs7Ozs7a0JBaEJnQjdELE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vanMvbGF5b3V0JztcbmltcG9ydCBFbmVteSBmcm9tICcuL2pzL2VuZW15JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2pzL2lucHV0JztcbmltcG9ydCBFbmVtZXkgZnJvbSAnLi9qcy9lbmVteSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgTGF5b3V0KCk7XG4gICAgLy8gY29uc3QgZW5lbWV5ID0gbmV3IEVuZW15KCk7IFxuICAgIC8vIGNvbnN0IGVuZW1leTIgPSBuZXcgRW5lbXkoKTsgXG5cbiAgICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dCgpO1xuXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7IFxuICAgIGdhbWUuc3RhcnQoKTtcbiAgICAvLyBmdW5jdGlvbiBkcmF3KCkge1xuICAgIC8vICAgICAvLyBsb29wcyB0aHJvdWdoIGVuZW5taWVzIGFuZCBkcmF3c1xuICAgIC8vIH1cblxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxuXG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKClcbiAgICAvLyBnYW1lLnN0YXJ0KClcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArKykge1xuICAgIC8vICAgICBBcnJheS5wdXNoKG5ldyBFbmVtZXkoKSlcbiAgICAvLyB9XG5cbn0pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbWV5IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMgPSB0aGlzLmRyYXdFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcyA9IHRoaXMuYW5pbWF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vc2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGFzdGVyb2lkIGFuZCBhbGllblxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLndpZHRoLTMwMCkpKTsgXG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcbiAgICAgICAgdGhpcy54X2FsaWVuID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aCAtIDMwMCkpKTsgXG4gICAgICAgIHRoaXMueV9hbGllbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcblxuICAgICAgICAvL3NldCBkZWx0YSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiBcbiAgICAgICAgdGhpcy5keCA9IDI7IFxuICAgICAgICB0aGlzLmR5ID0gLTI7IFxuICAgICAgICB0aGlzLmR4X2FsaWVuID0gLTM7IFxuICAgICAgICB0aGlzLmR5X2FsaWVuID0gMzsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGFsaWVuIGFuZCBhc3Rlcm9pZCBwaG90b3MgXG4gICAgICAgIHRoaXMuYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIHRoaXMuYWxpZW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG5cbiAgICAgICAgLy8gdGhpcy5hbmltYXRlQXN0ZXJvaWQoKTtcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlQXN0ZXJvaWQsIDUwKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVFbmVtaWVzKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdFbmVtaWVzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB2YXIgbGF0ZXggPSBcIlxcXFxsZWZ0KFxcXFxmcmFjezF9e1xcXFxzcXJ0e3h9fVxcXFxyaWdodClcIlxuICAgICAgICAvLyB2YXIgbGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCJcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLmFzdGVyb2lkLndpZHRoLCB0aGlzLmFzdGVyb2lkLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgdGhpcy5hbGllbi53aWR0aCwgdGhpcy5hbGllbi5oZWlnaHQpO1xuICAgICAgICAvLyBjb25zdCBhc3Rlcm9pZCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYXN0ZXJvaWQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdGVyb2lkLnBuZ1wiOyBcbiAgICAgICAgLy8gY29uc3QgYWxpZW4gPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIC8vIGFsaWVuLnNyYyA9IFwic3JjL2Fzc2V0cy9zaWx2ZXJ1Zm8ucG5nXCJcbiAgICAgICAgLy8gYXN0ZXJvaWQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTsgXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0MCwgNTAsIDE3MCwgMTcwLCB0aGlzLngsIHRoaXMueSwgMjU2LCAyNTYpICBcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFRleHQobGF0ZXgsIHRoaXMueC0yMCwgdGhpcy55KzEzMCk7XG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkKCk7XG4gICAgICAgIHRoaXMuZHJhd0FsaWVuKCk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGFsaWVuLm9ubG9hZCA9ICggKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7IFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleDIsIHRoaXMueF9hbGllbi0yMCwgdGhpcy55X2FsaWVuKzE1MCk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgZHJhd0FzdGVyb2lkKCkge1xuICAgICAgICB2YXIgbGF0ZXggPSBcIlxcXFxsZWZ0KFxcXFxmcmFjezF9e1xcXFxzcXJ0e3h9fVxcXFxyaWdodClcIlxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsYXRleCwgdGhpcy54IC0gMjAsIHRoaXMueSArIDEzMCk7XG4gICAgfVxuXG4gICAgZHJhd0FsaWVuKCkge1xuICAgICAgICB2YXIgbGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCJcbiAgICAgICAgXCJGKHgpICY9XFxpbnQgXiBhX2JcXGZyYWN7IDEgfSB7IDMgfSB4IF4gM1wiXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsYXRleDIsIHRoaXMueF9hbGllbiAtIDIwLCB0aGlzLnlfYWxpZW4gKyAxNTApO1xuICAgIH1cblxuXG5cbiAgICBcblxuICAgIGFuaW1hdGVFbmVtaWVzKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDsgXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5OyBcbiAgICAgICAgdGhpcy54X2FsaWVuICs9IHRoaXMuZHhfYWxpZW47IFxuICAgICAgICB0aGlzLnlfYWxpZW4gKz0gdGhpcy5keV9hbGllbjsgXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmNhbnZhcy53aWR0aCAtMjU2IHx8IHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDsgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodC0gMjU2IHx8IHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtdGhpcy5keTsgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueF9hbGllbiA+IHRoaXMuY2FudmFzLndpZHRoLTI1MCB8fCB0aGlzLnhfYWxpZW4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4X2FsaWVuID0gLXRoaXMuZHhfYWxpZW5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55X2FsaWVuID4gdGhpcy5jYW52YXMuaGVpZ2h0LTI1MCB8fCB0aGlzLnlfYWxpZW4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5X2FsaWVuID0gLXRoaXMuZHlfYWxpZW5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdFbmVtaWVzKCk7IFxuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlRW5lbWllcyk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IEVuZW15IGZyb20gJy4vZW5lbXknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vYmluZCBmdW5jdGlvbnNcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUVuZW1pZXMgPSB0aGlzLnBvcHVsYXRlRW5lbWllcy5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5yZW5kZXJFbmVtaWVzID0gdGhpcy5yZW5kZXJFbmVtaWVzLmJpbmQodGhpcyk7IFxuXG5cbiAgICAgICAgLy9nZXQgYW5kIHNldCBjYW52YXNcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxNjAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA4MDA7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIFxuICAgICAgICB0aGlzLmVuZW1leUFyciA9IFtdOyBcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUVuZW1pZXMoKTsgXG4gICAgfVxuXG5cbiAgICBwb3B1bGF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW1leUFyci5wdXNoKG5ldyBFbmVteSgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXJFbmVtaWVzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtZXlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWV5QXJyW2ldLmRyYXcoKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5yZW5kZXJFbmVtaWVzLCAxMClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nLWlucHV0LWZpZWxkXCIpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVudGVyUHJlc3NlZCA9IHRoaXMuZW50ZXJQcmVzc2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW50ZXJQcmVzc2VkKCk7IFxuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZW50ZXJQcmVzc2VkKCkge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhpdCBlbnRlciFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBcIjEzXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYWtlTGF5b3V0KCk7IFxuICAgIH1cblxuXG4gICAgbWFrZUxheW91dCgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7IFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gODAwOyBcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygxNTAsIDc1LCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=