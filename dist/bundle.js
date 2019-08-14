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
            // debugger
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var asteroid = new Image();
            var alien = new Image();
            // asteroid.src = "https://latex-racer.s3.amazonaws.com/asteroid.png";
            asteroid.src = "src/assets/asteroid.png";
            alien.src = "src/assets/silverufo.png";
            // asteroid.onload = () => {
            // this.ctx.imageSmoothingEnabled = true; 
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
            this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256);
            // };
            // alien.onload = ( () => {
            this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250);
            // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJhY2tncm91bmQiLCJMYXlvdXQiLCJlbmVtZXkiLCJFbmVteSIsIkVuZW1leSIsImNyZWF0ZUFzdGVyb2lkIiwiZHJhd0FzdGVyb2lkIiwiYmluZCIsImFuaW1hdGVBc3Rlcm9pZCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJ4X2FsaWVuIiwieV9hbGllbiIsImR4IiwiZHkiLCJkeF9hbGllbiIsImR5X2FsaWVuIiwic2V0SW50ZXJ2YWwiLCJjbGVhclJlY3QiLCJhc3Rlcm9pZCIsIkltYWdlIiwiYWxpZW4iLCJzcmMiLCJkcmF3SW1hZ2UiLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiY2xvc2VQYXRoIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IExheW91dCBmcm9tICcuL2pzL2xheW91dCc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9qcy9lbmVteSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBMYXlvdXQoKTtcbiAgICBjb25zdCBlbmVtZXkgPSBuZXcgRW5lbXkoKTsgXG59KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW1leSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmFuaW1hdGVBc3Rlcm9pZCA9IHRoaXMuYW5pbWF0ZUFzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnggPSAwOyBcbiAgICAgICAgdGhpcy55ID0gMDsgXG4gICAgICAgIHRoaXMueF9hbGllbiA9IDgwMDsgXG4gICAgICAgIHRoaXMueV9hbGllbiA9IDUwMDsgXG4gICAgICAgIHRoaXMuZHggPSAyOyBcbiAgICAgICAgdGhpcy5keSA9IC0yOyBcbiAgICAgICAgdGhpcy5keF9hbGllbiA9IC0zOyBcbiAgICAgICAgdGhpcy5keV9hbGllbiA9IDM7IFxuXG4gICAgICAgIHNldEludGVydmFsKHRoaXMuYW5pbWF0ZUFzdGVyb2lkLCAxMCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdBc3Rlcm9pZCgpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBhc3Rlcm9pZCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgY29uc3QgYWxpZW4gPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIC8vIGFzdGVyb2lkLnNyYyA9IFwiaHR0cHM6Ly9sYXRleC1yYWNlci5zMy5hbWF6b25hd3MuY29tL2FzdGVyb2lkLnBuZ1wiO1xuICAgICAgICBhc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7IFxuICAgICAgICBhbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG4gICAgICAgIC8vIGFzdGVyb2lkLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7IFxuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDYsIDQ5LCAyMTAsIDE5MCwgdGhpcy54LCB0aGlzLnksIDY0LCA3MC43Myk7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQwLCA1MCwgMTcwLCAxNzAsIHRoaXMueCwgdGhpcy55LCAyNTYsIDI1NikgIFxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBhbGllbi5vbmxvYWQgPSAoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShhbGllbiwgdGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIDI1MCwgMjUwKVxuICAgICAgICAvLyB9KVxuXG4gICAgfVxuXG4gICAgXG5cbiAgICBhbmltYXRlQXN0ZXJvaWQoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7IFxuICAgICAgICB0aGlzLnhfYWxpZW4gKz0gdGhpcy5keF9hbGllbjsgXG4gICAgICAgIHRoaXMueV9hbGllbiArPSB0aGlzLmR5X2FsaWVuOyBcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoIC0yNTYgfHwgdGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jYW52YXMuaGVpZ2h0LSAyNTYgfHwgdGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54X2FsaWVuID4gdGhpcy5jYW52YXMud2lkdGgtMjUwIHx8IHRoaXMueF9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHhfYWxpZW4gPSAtdGhpcy5keF9hbGllblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnlfYWxpZW4gPiB0aGlzLmNhbnZhcy5oZWlnaHQtMjUwIHx8IHRoaXMueV9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHlfYWxpZW4gPSAtdGhpcy5keV9hbGllblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkKCk7IFxuICAgIH1cblxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9