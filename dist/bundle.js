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

        // Initialize latex 
        this.latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)";
        this.latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3";

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
            this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(this.latex, this.x - 20, this.y + 130);
        }
    }, {
        key: "drawAlien",
        value: function drawAlien() {
            this.ctx.drawImage(this.alien, this.x_alien, this.y_alien, 250, 250);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(this.latex2, this.x_alien - 20, this.y_alien + 150);
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
        this.enemeyArr = [];
        this.populateEnemies();

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
            debugger;
            if (this.field.verify === true) {
                debugger;
                this.enemeyArr.splice(this.field.index, 1);
            }
            for (var i = 0; i < this.enemeyArr.length; i++) {
                this.enemeyArr[i].draw();
            }
        }
    }, {
        key: 'start',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0IiwiZ2FtZSIsIkdhbWUiLCJzdGFydCIsIkVuZW1leSIsImRyYXdFbmVtaWVzIiwiYmluZCIsImRyYXdBc3Rlcm9pZCIsImRyYXdBbGllbiIsImFuaW1hdGVFbmVtaWVzIiwiZHJhdyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJ4X2FsaWVuIiwieV9hbGllbiIsImR4IiwiZHkiLCJkeF9hbGllbiIsImR5X2FsaWVuIiwiYXN0ZXJvaWQiLCJJbWFnZSIsInNyYyIsImFsaWVuIiwibGF0ZXgiLCJsYXRleDIiLCJkcmF3SW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJwb3B1bGF0ZUVuZW1pZXMiLCJyZW5kZXJFbmVtaWVzIiwiZW5lbWV5QXJyIiwiZmllbGQiLCJJbnB1dCIsImlucHV0IiwiZSIsImVudGVyUHJlc3NlZCIsImkiLCJwdXNoIiwiRW5lbXkiLCJjbGVhclJlY3QiLCJ2ZXJpZnkiLCJzcGxpY2UiLCJpbmRleCIsImxlbmd0aCIsInNldEludGVydmFsIiwib25DaGFuZ2UiLCJhcnIiLCJrZXlDb2RlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFrZUxheW91dCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtR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QixLQUFLVyxLQUFMLENBQVdlLEtBQWhDLEVBQXVDO0FBQ25DO0FBQ0EsNkJBQUtmLEtBQUwsQ0FBV2UsS0FBWCxHQUFtQixFQUFuQjtBQUNBLDZCQUFLTixLQUFMLEdBQWFOLENBQWI7QUFDQSw2QkFBS0ksTUFBTCxHQUFjLElBQWQ7QUFDSDtBQUNKO0FBQ0o7QUFDUjs7O21DQUdVO0FBQ1BTLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFLakIsS0FBTCxDQUFXN0MsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQzhDLENBQUQsRUFBTztBQUN4QyxvQkFBSUEsRUFBRWEsT0FBRixLQUFjLElBQWxCLEVBQXdCO0FBQ3BCRSw0QkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDSDtBQUNERCx3QkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDSCxhQUxEO0FBTUg7Ozs7OztrQkFsQ2dCbEIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBMUMsTTtBQUNqQixzQkFBYztBQUFBOztBQUNWLGFBQUs2RCxVQUFMO0FBQ0g7Ozs7cUNBR1k7QUFDVCxnQkFBTWxELFNBQVNkLFNBQVNlLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBRCxtQkFBT0UsS0FBUCxHQUFlLElBQWY7QUFDQUYsbUJBQU9HLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxnQkFBSUMsTUFBTUosT0FBT0ssVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELGdCQUFJK0MsU0FBSjtBQUNBL0MsZ0JBQUlnRCxHQUFKLENBQVEsR0FBUixFQUFhLEVBQWIsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsSUFBSTdDLEtBQUs4QyxFQUFoQztBQUNBakQsZ0JBQUlxQixTQUFKLEdBQWdCLEtBQWhCO0FBQ0FyQixnQkFBSWtELFNBQUo7QUFDQWxELGdCQUFJbUQsSUFBSjtBQUNIOzs7Ozs7a0JBaEJnQmxFLE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vanMvbGF5b3V0JztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBMYXlvdXQoKTtcbiAgICAvLyBjb25zdCBlbmVtZXkgPSBuZXcgRW5lbXkoKTsgXG4gICAgLy8gY29uc3QgZW5lbWV5MiA9IG5ldyBFbmVteSgpOyBcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgZ2FtZS5zdGFydCgpXG4gICAgLy8gZnVuY3Rpb24gZHJhdygpIHtcbiAgICAvLyAgICAgLy8gbG9vcHMgdGhyb3VnaCBlbmVubWllcyBhbmQgZHJhd3NcbiAgICAvLyB9XG5cbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdylcblxuICAgIC8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpXG4gICAgLy8gZ2FtZS5zdGFydCgpXG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKyspIHtcbiAgICAvLyAgICAgQXJyYXkucHVzaChuZXcgRW5lbWV5KCkpXG4gICAgLy8gfVxuXG59KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW1leSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmRyYXdFbmVtaWVzID0gdGhpcy5kcmF3RW5lbWllcy5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3QXN0ZXJvaWQgPSB0aGlzLmRyYXdBc3Rlcm9pZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdBbGllbiA9IHRoaXMuZHJhd0FsaWVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVuZW1pZXMgPSB0aGlzLmFuaW1hdGVFbmVtaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpOyBcblxuICAgICAgICAvL2dldCBhbmQgc2V0IGNhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7IFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA4MDA7IFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL3NldCBpbml0aWFsIHBvc2l0aW9ucyBvZiBhc3Rlcm9pZCBhbmQgYWxpZW5cbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aC0zMDApKSk7IFxuICAgICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLmhlaWdodCAtIDMwMCkpKTsgXG4gICAgICAgIHRoaXMueF9hbGllbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMud2lkdGggLSAzMDApKSk7IFxuICAgICAgICB0aGlzLnlfYWxpZW4gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLmhlaWdodCAtIDMwMCkpKTsgXG5cbiAgICAgICAgLy9zZXQgZGVsdGEgdmFsdWVzIGZvciBhbmltYXRpb24gXG4gICAgICAgIHRoaXMuZHggPSAyOyBcbiAgICAgICAgdGhpcy5keSA9IC0yOyBcbiAgICAgICAgdGhpcy5keF9hbGllbiA9IC0zOyBcbiAgICAgICAgdGhpcy5keV9hbGllbiA9IDM7IFxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBhbGllbiBhbmQgYXN0ZXJvaWQgcGhvdG9zIFxuICAgICAgICB0aGlzLmFzdGVyb2lkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuYXN0ZXJvaWQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdGVyb2lkLnBuZ1wiO1xuICAgICAgICB0aGlzLmFsaWVuID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuYWxpZW4uc3JjID0gXCJzcmMvYXNzZXRzL3NpbHZlcnVmby5wbmdcIlxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgbGF0ZXggXG4gICAgICAgIHRoaXMubGF0ZXggPSBcIlxcXFxsZWZ0KFxcXFxmcmFjezF9e1xcXFxzcXJ0e3h9fVxcXFxyaWdodClcIjtcbiAgICAgICAgdGhpcy5sYXRleDIgPSBcIkYoeCkmPVxcXFxpbnReYV9iXFxcXGZyYWN7MX17M314XjNcIjtcblxuICAgICAgICAvLyB0aGlzLmFuaW1hdGVBc3Rlcm9pZCgpO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbCh0aGlzLmFuaW1hdGVBc3Rlcm9pZCwgNTApO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVuZW1pZXMoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhd0VuZW1pZXMoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIHZhciBsYXRleCA9IFwiXFxcXGxlZnQoXFxcXGZyYWN7MX17XFxcXHNxcnR7eH19XFxcXHJpZ2h0KVwiXG4gICAgICAgIC8vIHZhciBsYXRleDIgPSBcIkYoeCkmPVxcXFxpbnReYV9iXFxcXGZyYWN7MX17M314XjNcIlxuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuYXN0ZXJvaWQud2lkdGgsIHRoaXMuYXN0ZXJvaWQuaGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCB0aGlzLmFsaWVuLndpZHRoLCB0aGlzLmFsaWVuLmhlaWdodCk7XG4gICAgICAgIC8vIGNvbnN0IGFzdGVyb2lkID0gbmV3IEltYWdlKCk7IFxuICAgICAgICAvLyBhc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7IFxuICAgICAgICAvLyBjb25zdCBhbGllbiA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYWxpZW4uc3JjID0gXCJzcmMvYXNzZXRzL3NpbHZlcnVmby5wbmdcIlxuICAgICAgICAvLyBhc3Rlcm9pZC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDYsIDQ5LCAyMTAsIDE5MCwgdGhpcy54LCB0aGlzLnksIDY0LCA3MC43Myk7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQwLCA1MCwgMTcwLCAxNzAsIHRoaXMueCwgdGhpcy55LCAyNTYsIDI1NikgIFxuICAgICAgICAvLyB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleCwgdGhpcy54LTIwLCB0aGlzLnkrMTMwKTtcbiAgICAgICAgdGhpcy5kcmF3QXN0ZXJvaWQoKTtcbiAgICAgICAgdGhpcy5kcmF3QWxpZW4oKTtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gYWxpZW4ub25sb2FkID0gKCAoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhbGllbiwgdGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIDI1MCwgMjUwKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjsgXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KGxhdGV4MiwgdGhpcy54X2FsaWVuLTIwLCB0aGlzLnlfYWxpZW4rMTUwKTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBkcmF3QXN0ZXJvaWQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFzdGVyb2lkLCA0MCwgNTAsIDE3MCwgMTcwLCB0aGlzLngsIHRoaXMueSwgMjU2LCAyNTYpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMubGF0ZXgsIHRoaXMueCAtIDIwLCB0aGlzLnkgKyAxMzApO1xuICAgIH1cblxuICAgIGRyYXdBbGllbigpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMubGF0ZXgyLCB0aGlzLnhfYWxpZW4gLSAyMCwgdGhpcy55X2FsaWVuICsgMTUwKTtcbiAgICB9XG5cblxuXG4gICAgXG5cbiAgICBhbmltYXRlRW5lbWllcygpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7IFxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keTsgXG4gICAgICAgIHRoaXMueF9hbGllbiArPSB0aGlzLmR4X2FsaWVuOyBcbiAgICAgICAgdGhpcy55X2FsaWVuICs9IHRoaXMuZHlfYWxpZW47IFxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5jYW52YXMud2lkdGggLTI1NiB8fCB0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQtIDI1NiB8fCB0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhfYWxpZW4gPiB0aGlzLmNhbnZhcy53aWR0aC0yNTAgfHwgdGhpcy54X2FsaWVuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keF9hbGllbiA9IC10aGlzLmR4X2FsaWVuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueV9hbGllbiA+IHRoaXMuY2FudmFzLmhlaWdodC0yNTAgfHwgdGhpcy55X2FsaWVuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keV9hbGllbiA9IC10aGlzLmR5X2FsaWVuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3RW5lbWllcygpOyBcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUVuZW1pZXMpO1xuICAgIH1cblxuXG5cblxufSIsImltcG9ydCBFbmVteSBmcm9tICcuL2VuZW15JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLnBvcHVsYXRlRW5lbWllcyA9IHRoaXMucG9wdWxhdGVFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLnJlbmRlckVuZW1pZXMgPSB0aGlzLnJlbmRlckVuZW1pZXMuYmluZCh0aGlzKTsgXG5cblxuICAgICAgICAvL2dldCBhbmQgc2V0IGNhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9Qb3B1bGF0ZSBlbmVtaWVzXG4gICAgICAgIHRoaXMuZW5lbWV5QXJyID0gW107IFxuICAgICAgICB0aGlzLnBvcHVsYXRlRW5lbWllcygpOyBcblxuICAgICAgICAvL0NyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgaW5wdXQgZmllbGQgXG4gICAgICAgIHRoaXMuZmllbGQgPSBuZXcgSW5wdXQoKTtcbiAgICAgICAgdGhpcy5maWVsZC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5lbnRlclByZXNzZWQoZSwgdGhpcy5lbmVtZXlBcnIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcG9wdWxhdGVFbmVtaWVzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmVtZXlBcnIucHVzaChuZXcgRW5lbXkoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlckVuZW1pZXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMuZmllbGQudmVyaWZ5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy5lbmVtZXlBcnIuc3BsaWNlKHRoaXMuZmllbGQuaW5kZXgsIDEpOyBcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWV5QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW1leUFycltpXS5kcmF3KCk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMucmVuZGVyRW5lbWllcywgMTApXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nLWlucHV0LWZpZWxkXCIpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVudGVyUHJlc3NlZCA9IHRoaXMuZW50ZXJQcmVzc2VkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5kZXggPSBudWxsOyBcbiAgICAgICAgdGhpcy52ZXJpZnkgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgZW50ZXJQcmVzc2VkKGUsIGFycikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0ubGF0ZXggPT09IHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gXCIxM1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9