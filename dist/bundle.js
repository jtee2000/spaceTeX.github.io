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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var background = new _layout2.default();
    var enemey = new _enemy2.default();
    var input = new _input2.default();
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
        this.animateAsteroid = this.animateAsteroid.bind(this);

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

        setInterval(this.animateAsteroid, 50);
    }

    _createClass(Enemey, [{
        key: "drawEnemies",
        value: function drawEnemies() {
            // debugger
            // var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)"
            // var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3"
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
            var asteroid = new Image();
            asteroid.src = "src/assets/asteroid.png";
            this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(latex, this.x - 20, this.y + 130);
        }
    }, {
        key: "drawAlien",
        value: function drawAlien() {
            var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3";
            var alien = new Image();
            alien.src = "src/assets/silverufo.png";
            this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "aquamarine";
            this.ctx.fillText(latex2, this.x_alien - 20, this.y_alien + 150);
        }
    }, {
        key: "animateAsteroid",
        value: function animateAsteroid() {
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
        }
    }]);

    return Enemey;
}();

exports.default = Enemey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0IiwiZW5lbWV5IiwiRW5lbXkiLCJpbnB1dCIsIklucHV0IiwiRW5lbWV5IiwiZHJhd0VuZW1pZXMiLCJiaW5kIiwiZHJhd0FzdGVyb2lkIiwiZHJhd0FsaWVuIiwiYW5pbWF0ZUFzdGVyb2lkIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInhfYWxpZW4iLCJ5X2FsaWVuIiwiZHgiLCJkeSIsImR4X2FsaWVuIiwiZHlfYWxpZW4iLCJzZXRJbnRlcnZhbCIsImNsZWFyUmVjdCIsImxhdGV4IiwiYXN0ZXJvaWQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImxhdGV4MiIsImFsaWVuIiwib25DaGFuZ2UiLCJlbnRlclByZXNzZWQiLCJlIiwia2V5Q29kZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1ha2VMYXlvdXQiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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QixLQUFoQjtBQUNBckIsZ0JBQUlvQyxTQUFKO0FBQ0FwQyxnQkFBSXFDLElBQUo7QUFDSDs7Ozs7O2tCQWhCZ0JwRCxNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IExheW91dCBmcm9tICcuL2pzL2xheW91dCc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9qcy9lbmVteSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9qcy9pbnB1dCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBMYXlvdXQoKTtcbiAgICBjb25zdCBlbmVtZXkgPSBuZXcgRW5lbXkoKTsgXG4gICAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXQoKTtcbn0pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbWV5IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMgPSB0aGlzLmRyYXdFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlQXN0ZXJvaWQgPSB0aGlzLmFuaW1hdGVBc3Rlcm9pZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vc2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGFzdGVyb2lkIGFuZCBhbGllblxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLndpZHRoLTMwMCkpKTsgXG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcbiAgICAgICAgdGhpcy54X2FsaWVuID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aCAtIDMwMCkpKTsgXG4gICAgICAgIHRoaXMueV9hbGllbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcblxuICAgICAgICAvL3NldCBkZWx0YSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiBcbiAgICAgICAgdGhpcy5keCA9IDI7IFxuICAgICAgICB0aGlzLmR5ID0gLTI7IFxuICAgICAgICB0aGlzLmR4X2FsaWVuID0gLTM7IFxuICAgICAgICB0aGlzLmR5X2FsaWVuID0gMzsgXG5cbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlQXN0ZXJvaWQsIDUwKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhd0VuZW1pZXMoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIHZhciBsYXRleCA9IFwiXFxcXGxlZnQoXFxcXGZyYWN7MX17XFxcXHNxcnR7eH19XFxcXHJpZ2h0KVwiXG4gICAgICAgIC8vIHZhciBsYXRleDIgPSBcIkYoeCkmPVxcXFxpbnReYV9iXFxcXGZyYWN7MX17M314XjNcIlxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIGNvbnN0IGFzdGVyb2lkID0gbmV3IEltYWdlKCk7IFxuICAgICAgICAvLyBhc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7IFxuICAgICAgICAvLyBjb25zdCBhbGllbiA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYWxpZW4uc3JjID0gXCJzcmMvYXNzZXRzL3NpbHZlcnVmby5wbmdcIlxuICAgICAgICAvLyBhc3Rlcm9pZC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDYsIDQ5LCAyMTAsIDE5MCwgdGhpcy54LCB0aGlzLnksIDY0LCA3MC43Myk7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQwLCA1MCwgMTcwLCAxNzAsIHRoaXMueCwgdGhpcy55LCAyNTYsIDI1NikgIFxuICAgICAgICAvLyB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleCwgdGhpcy54LTIwLCB0aGlzLnkrMTMwKTtcbiAgICAgICAgdGhpcy5kcmF3QXN0ZXJvaWQoKTtcbiAgICAgICAgdGhpcy5kcmF3QWxpZW4oKTtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gYWxpZW4ub25sb2FkID0gKCAoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhbGllbiwgdGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIDI1MCwgMjUwKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjsgXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KGxhdGV4MiwgdGhpcy54X2FsaWVuLTIwLCB0aGlzLnlfYWxpZW4rMTUwKTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBkcmF3QXN0ZXJvaWQoKSB7XG4gICAgICAgIHZhciBsYXRleCA9IFwiXFxcXGxlZnQoXFxcXGZyYWN7MX17XFxcXHNxcnR7eH19XFxcXHJpZ2h0KVwiXG4gICAgICAgIGNvbnN0IGFzdGVyb2lkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjsgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsYXRleCwgdGhpcy54IC0gMjAsIHRoaXMueSArIDEzMCk7XG4gICAgfVxuXG4gICAgZHJhd0FsaWVuKCkge1xuICAgICAgICB2YXIgbGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCJcbiAgICAgICAgY29uc3QgYWxpZW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYWxpZW4uc3JjID0gXCJzcmMvYXNzZXRzL3NpbHZlcnVmby5wbmdcIlxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGxhdGV4MiwgdGhpcy54X2FsaWVuIC0gMjAsIHRoaXMueV9hbGllbiArIDE1MCk7XG4gICAgfVxuXG5cblxuICAgIFxuXG4gICAgYW5pbWF0ZUFzdGVyb2lkKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDsgXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5OyBcbiAgICAgICAgdGhpcy54X2FsaWVuICs9IHRoaXMuZHhfYWxpZW47IFxuICAgICAgICB0aGlzLnlfYWxpZW4gKz0gdGhpcy5keV9hbGllbjsgXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmNhbnZhcy53aWR0aCAtMjU2IHx8IHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDsgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodC0gMjU2IHx8IHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtdGhpcy5keTsgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueF9hbGllbiA+IHRoaXMuY2FudmFzLndpZHRoLTI1MCB8fCB0aGlzLnhfYWxpZW4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4X2FsaWVuID0gLXRoaXMuZHhfYWxpZW5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55X2FsaWVuID4gdGhpcy5jYW52YXMuaGVpZ2h0LTI1MCB8fCB0aGlzLnlfYWxpZW4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5X2FsaWVuID0gLXRoaXMuZHlfYWxpZW5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdFbmVtaWVzKCk7IFxuICAgIH1cblxuXG5cblxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGluZy1pbnB1dC1maWVsZFwiKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbnRlclByZXNzZWQgPSB0aGlzLmVudGVyUHJlc3NlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVudGVyUHJlc3NlZCgpOyBcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGVudGVyUHJlc3NlZCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBoaXQgZW50ZXIhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gXCIxM1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9