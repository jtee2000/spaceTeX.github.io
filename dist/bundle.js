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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var background = new _layout2.default();
    var enemey = new _enemy2.default();
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

        this.createAsteroid = this.drawAsteroid.bind(this);
        this.animateAsteroid = this.animateAsteroid.bind(this);
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.x_alien = 800;
        this.y_alien = 500;
        this.dx = 2;
        this.dy = -2;
        this.dx_alien = -3;
        this.dy_alien = 3;

        setInterval(this.animateAsteroid, 10);
    }

    _createClass(Enemey, [{
        key: "drawAsteroid",
        value: function drawAsteroid() {
            var _this = this;

            // debugger
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var asteroid = new Image();
            var alien = new Image();
            // asteroid.src = "https://latex-racer.s3.amazonaws.com/asteroid.png";
            asteroid.src = "src/assets/asteroid.png";
            alien.src = "src/assets/silverufo.png";
            asteroid.onload = function () {
                // this.ctx.imageSmoothingEnabled = true; 
                // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
                // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
                _this.ctx.drawImage(asteroid, 40, 50, 170, 170, _this.x, _this.y, 256, 256);
            };
            alien.onload = function () {
                _this.ctx.drawImage(alien, _this.x_alien, _this.y_alien, 250, 250);
            };
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
            this.drawAsteroid();
        }
    }]);

    return Enemey;
}();

exports.default = Enemey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJhY2tncm91bmQiLCJMYXlvdXQiLCJlbmVtZXkiLCJFbmVteSIsIkVuZW1leSIsImNyZWF0ZUFzdGVyb2lkIiwiZHJhd0FzdGVyb2lkIiwiYmluZCIsImFuaW1hdGVBc3Rlcm9pZCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJ4X2FsaWVuIiwieV9hbGllbiIsImR4IiwiZHkiLCJkeF9hbGllbiIsImR5X2FsaWVuIiwic2V0SW50ZXJ2YWwiLCJjbGVhclJlY3QiLCJhc3Rlcm9pZCIsIkltYWdlIiwiYWxpZW4iLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiY2xvc2VQYXRoIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztR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eUIsSUFBSjtBQUNIOzs7Ozs7a0JBaEJnQnJDLE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vanMvbGF5b3V0JztcbmltcG9ydCBFbmVteSBmcm9tICcuL2pzL2VuZW15JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IExheW91dCgpO1xuICAgIGNvbnN0IGVuZW1leSA9IG5ldyBFbmVteSgpOyBcbn0pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbWV5IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUFzdGVyb2lkID0gdGhpcy5kcmF3QXN0ZXJvaWQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuYW5pbWF0ZUFzdGVyb2lkID0gdGhpcy5hbmltYXRlQXN0ZXJvaWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwOyBcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMueCA9IDA7IFxuICAgICAgICB0aGlzLnkgPSAwOyBcbiAgICAgICAgdGhpcy54X2FsaWVuID0gODAwOyBcbiAgICAgICAgdGhpcy55X2FsaWVuID0gNTAwOyBcbiAgICAgICAgdGhpcy5keCA9IDI7IFxuICAgICAgICB0aGlzLmR5ID0gLTI7IFxuICAgICAgICB0aGlzLmR4X2FsaWVuID0gLTM7IFxuICAgICAgICB0aGlzLmR5X2FsaWVuID0gMzsgXG5cbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlQXN0ZXJvaWQsIDEwKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhd0FzdGVyb2lkKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IGFzdGVyb2lkID0gbmV3IEltYWdlKCk7IFxuICAgICAgICBjb25zdCBhbGllbiA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYXN0ZXJvaWQuc3JjID0gXCJodHRwczovL2xhdGV4LXJhY2VyLnMzLmFtYXpvbmF3cy5jb20vYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIGFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjsgXG4gICAgICAgIGFsaWVuLnNyYyA9IFwic3JjL2Fzc2V0cy9zaWx2ZXJ1Zm8ucG5nXCJcbiAgICAgICAgYXN0ZXJvaWQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTsgXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KSAgXG4gICAgICAgIH07XG4gICAgICAgIGFsaWVuLm9ubG9hZCA9ICggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBcblxuICAgIGFuaW1hdGVBc3Rlcm9pZCgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7IFxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keTsgXG4gICAgICAgIHRoaXMueF9hbGllbiArPSB0aGlzLmR4X2FsaWVuOyBcbiAgICAgICAgdGhpcy55X2FsaWVuICs9IHRoaXMuZHlfYWxpZW47IFxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5jYW52YXMud2lkdGggLTI1NiB8fCB0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQtIDI1NiB8fCB0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhfYWxpZW4gPiB0aGlzLmNhbnZhcy53aWR0aC0yNTAgfHwgdGhpcy54X2FsaWVuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keF9hbGllbiA9IC10aGlzLmR4X2FsaWVuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueV9hbGllbiA+IHRoaXMuY2FudmFzLmhlaWdodC0yNTAgfHwgdGhpcy55X2FsaWVuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keV9hbGllbiA9IC10aGlzLmR5X2FsaWVuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3QXN0ZXJvaWQoKTsgXG4gICAgfVxuXG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYWtlTGF5b3V0KCk7IFxuICAgIH1cblxuXG4gICAgbWFrZUxheW91dCgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7IFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gODAwOyBcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygxNTAsIDc1LCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=