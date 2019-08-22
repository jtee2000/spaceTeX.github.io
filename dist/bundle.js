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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

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

var _spaceship = __webpack_require__(/*! ./js/spaceship */ "./src/js/spaceship.js");

var _spaceship2 = _interopRequireDefault(_spaceship);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

    var button = document.getElementById("button");
    button.addEventListener("click", function () {
        var game = new _game2.default();
        var background = new _layout2.default();
        var splashScreen = document.getElementById("homescreen");
        var canvas = document.getElementById("canvas-wrapper");
        canvas.style.display = "block";
        splashScreen.style.display = "none";

        game.start();
    });
});

/***/ }),

/***/ "./src/js/easy_arr.js":
/*!****************************!*\
  !*** ./src/js/easy_arr.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var easyArr = exports.easyArr = ["\\arctan", "\\angle", "\\approx", "\\arccos", "\\arcsin", "\\aleph", "\\amalg", "\\bicap", "\\bigcirc", "\\bigcup", "\\bigdot", "\\bigoplus", "\\bigotimes", "\\bigtriangledown", "\\bigtriangleup", "\\bigscup", "\\biguplus", "\\bigvee", "\\bigwedge", "\\bot", "\\cap", "\\chi", "\\circ", "\\cong", "\\coprod", "\\clubsuit", "\\epsilon", "\\equiv", "\\eta", "\\exists", "\\fbox{hello}", "\\forall", "\\frown", "\\gamma", "\\ge", "\\geq", "\\gets", "\\gg", "\\iff", "\\Im", "\\imath", "\\in", "\\i", "\\heartsuit", "\\iota", "\\int", "\\leq", "\\lfloor", "\\lim", "\\lhd", "\\ll", "\\ln", "\\lnot", "\\log", "\\longleftarrow", "\\lor", "\\lq", "\\lbrace \\rbrace", "\\kappa", "\\ker", "\\leftharpoondown", "\\leftharpoonup", "\\models", "\\mid", "\\min", "\\nearrow", "\\neq", "\\nabla", "\\mp", "\\not", "\\nu", "\\nwarrow", "\\o", "\\oint", "\\oe", "\\odot", "\\oslash", "\\otimes", "\\perp", "\\phi", "\\pi", "\\overline{text}", "\\P", "\\parallel", "\\prod", "\\prime", "\\Pr", "\\propto", "\\ps", "\\psi", "\\Re", "\\S", "\\searrow", "\\sec x", "\\rfloor", "\\rho", "\\rightarrow", "\\sf", "\\sharp", "\\sim", "\\simeq", "\\sin x", "\\sinh", "\\smallint", "\\smile", "\\spadesuit", "\\sqcap", "\\star", "\\surd", "\\swarrow", "\\tanh", "\\tau", "\\tan x", "\\theta", "\\subset", "\\subseteq", "\\succeq", "\\supset", "\\sup", "\\varphi", "\\varrho", "\\varsigma", "\\vdash", "\\vdots", "\\vec c", "\\wedge", "\\wp", "\\wr", "\\xi", "\\year", "\\unlhd", "\\triangle", "\\triangleleft", "\\triangleright", "\\v", "\\varepsilon", "\\bowtie", "\\spadesuit", "\\Diamond", "\\heartsuit"];

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _easy_arr = __webpack_require__(/*! ./easy_arr */ "./src/js/easy_arr.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var enemy_count = 0;

var Enemy = function () {
    function Enemy(asteroid) {
        _classCallCheck(this, Enemy);

        //bind functions
        enemy_count++;

        this.drawAsteroid = this.drawAsteroid.bind(this);
        // this.drawAlien = this.drawAlien.bind(this);
        this.animateEnemies = this.animateEnemies.bind(this);

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //set initial positions of asteroid
        var pos = [[0, 0], [720, 0], [1300, 0]];
        this.random = enemy_count % 3;

        //set delta values for animation 
        var _pos$random = _slicedToArray(pos[this.random], 2);

        this.x = _pos$random[0];
        this.y = _pos$random[1];
        if (this.random === 0) {
            this.dx = .5;
            this.dy = -.417;
        } else if (this.random === 1) {
            this.dx = 0;
            this.dy = .5;
        } else {
            this.dx = -.33;
            this.dy = -.33;
        }

        //initialize alien and asteroid photos 
        // this.asteroid = new Image();
        // this.asteroid.src = "src/assets/asteroid.png";
        this.asteroid = asteroid;
        // this.alien = new Image();
        // this.alien.src = "src/assets/silverufo.png"

        if (enemy_count < 50) {
            this.latexArr = _easy_arr.easyArr;
        } else {
            this.latexArr = ["\\frac{d}{dx}c^n=nx^{n-1}", "\\frac{\\partial y}{\\partial x}", "\\frac{d}{dx}c^n=nx^{n-1}", "\\frac{d}{dx}e^{ax}=a\\,e^{ax}", "\\frac{d}{dx}\\ln(x)=\\frac{1}{x}", "\\frac{d}{dx}\\sin x=\\cos x", "\\bigcup_{i=1}^{n}{X_i}", "\\bigcap_{i=1}^{n}{X_i}", "\\int_{0}^{\\pi} \\sin x \\ dx = 2", "\\left(x-1\\right)\\left(x+3\\right)", "\\lim_{a \\rightarrow b}", "\\bigvee_a^b x", "\\sum_a^b x"];
        }

        // Initialize latex 
        this.latex = this.latexArr[Math.floor(Math.random() * this.latexArr.length)];
    }

    // draw() {
    //     this.animateEnemies();
    // }


    // drawEnemies() {
    //     // debugger
    //     // var latex = "\\left(\\frac{1}{\\sqrt{x}}\\right)"
    //     // var latex2 = "F(x)&=\\int^a_b\\frac{1}{3}x^3"
    //     // this.ctx.clearRect(this.x, this.y, this.asteroid.width, this.asteroid.height);
    //     // this.ctx.clearRect(this.x_alien, this.y_alien, this.alien.width, this.alien.height);
    //     // const asteroid = new Image(); 
    //     // asteroid.src = "src/assets/asteroid.png"; 
    //     // const alien = new Image(); 
    //     // alien.src = "src/assets/silverufo.png"
    //     // asteroid.onload = () => {
    //         // this.ctx.imageSmoothingEnabled = true; 
    //         // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
    //         // this.ctx.drawImage(asteroid, 46, 49, 210, 190, this.x, this.y, 64, 70.73);
    //     // this.ctx.drawImage(asteroid, 40, 50, 170, 170, this.x, this.y, 256, 256)  
    //     // this.ctx.font = "30px Arial";
    //     // this.ctx.fillStyle = "aquamarine";
    //     // this.ctx.fillText(latex, this.x-20, this.y+130);
    //     this.drawAsteroid();
    //     // this.drawAlien();
    //     // };
    //     // alien.onload = ( () => {
    //     // this.ctx.drawImage(alien, this.x_alien, this.y_alien, 250, 250);
    //     // this.ctx.font = "30px Arial";
    //     // this.ctx.fillStyle = "aquamarine"; 
    //     // this.ctx.fillText(latex2, this.x_alien-20, this.y_alien+150);
    //     // })
    // }

    _createClass(Enemy, [{
        key: "drawAsteroid",
        value: function drawAsteroid() {
            this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 150, 170);
            this.ctx.font = "30px Times New Roman";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText(this.latex, this.x + 75, this.y + 85);
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
            if (this.x > this.canvas.width - 256 || this.x < 0) {
                this.dx = -this.dx;
            }
            if (this.y > this.canvas.height - 256 || this.y < 0) {
                this.dy = -this.dy;
            }
            this.drawAsteroid();
            // requestAnimationFrame(this.animateEnemies);
        }
    }]);

    return Enemy;
}();

exports.default = Enemy;

/***/ }),

/***/ "./src/js/explosion.js":
/*!*****************************!*\
  !*** ./src/js/explosion.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Explosion = function () {
    function Explosion(x, y) {
        _classCallCheck(this, Explosion);

        this.animateExplosion = this.animateExplosion.bind(this);
        this.drawExplosion = this.drawExplosion.bind(this);
        this.draw = this.draw.bind(this);

        this.img = new Image();
        this.img.src = "src/assets/explosion.png";

        //initialize canvas 
        var canvas = document.getElementById("splash");
        canvas.width = 1600;
        canvas.height = 800;
        this.ctx = canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.sx = 0;
        this.sy = 0;
        this.dx = 256;
        this.dy = 256;
        this.animateExplosion();
    }

    _createClass(Explosion, [{
        key: "drawExplosion",
        value: function drawExplosion() {
            this.explosion = this.ctx.drawImage(this.img, this.sx, this.sy, 256, 256, this.x - 75, this.y, 256, 256);
        }
    }, {
        key: "draw",
        value: function draw() {
            this.sx += this.dx;
            if (this.sx === 2048) {
                this.sx = 0;
                this.sy += this.dy;
            }
            if (this.sy === 1536 && this.sx === 2048) {
                this.stopAnimation();
            }
            this.drawExplosion();
            this.test = requestAnimationFrame(this.draw);
        }
    }, {
        key: "animateExplosion",
        value: function animateExplosion() {
            //    this.animation = setInterval(this.draw, 1000/60);
            this.draw();
        }
    }, {
        key: "stopAnimation",
        value: function stopAnimation() {
            // window.clearInterval(this.animation);
            this.sx = 0;
            this.sy = 0;
        }
    }]);

    return Explosion;
}();

exports.default = Explosion;

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

var _timers = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");

var _spaceship = __webpack_require__(/*! ./spaceship */ "./src/js/spaceship.js");

var _spaceship2 = _interopRequireDefault(_spaceship);

var _explosion = __webpack_require__(/*! ./explosion */ "./src/js/explosion.js");

var _explosion2 = _interopRequireDefault(_explosion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        var _this = this;

        _classCallCheck(this, Game);

        //bind functions
        this.asteroid = new Image();
        this.asteroid.src = "src/assets/asteroid.png";
        this.renderEnemies = this.renderEnemies.bind(this);
        this.populateEnemies = this.populateEnemies.bind(this);
        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //Populate enemies
        this.enemyArr = [new _enemy2.default(this.asteroid)];
        setInterval(this.populateEnemies, 2000);

        //Create new instance of input field 
        this.field = new _input2.default();
        this.field.input.addEventListener("keydown", function (e) {
            _this.field.enterPressed(e, _this.enemyArr);
        });

        //instantiate score 
        this.score = document.getElementById("score");

        // inititialize mathfield 
        this.htmlElement = document.getElementById('mathField');
        this.mathField = MQ.MathField(this.htmlElement);

        //initialize spaceship 
        this.spaceship = new _spaceship2.default();

        //lose button 
        var lose = document.getElementById("new-game");
        lose.addEventListener("click", function () {
            location.reload();
        });

        //animate explosion 
        // this.enemy_xpos = null; 
        // this.enemy_ypos = null;
    }

    _createClass(Game, [{
        key: 'renderEnemies',
        value: function renderEnemies() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < this.enemyArr.length; i++) {
                this.enemyArr[i].animateEnemies();
                if (this.enemyArr[i].random === 0 && (this.enemyArr[i].x >= 630 || this.enemyArr[i].y >= 500)) {
                    this.lose();
                } else if (this.enemyArr[i].random === 1 && this.enemyArr[i].y >= 400) {
                    this.lose();
                } else if (this.enemyArr[i].random === 2 && (this.enemyArr[i].x <= 800 || this.enemyArr[i].y >= 550)) {
                    this.lose();
                }
            }
            this.mathField.latex(this.field.input.value);
            if (this.field.verify === true) {
                var enemy = this.enemyArr[this.field.index];
                this.score.value = '' + (parseInt(this.score.value, 10) + 1);
                this.field.verify = false;
                if (enemy.random === 0) {
                    this.spaceship.drawLeft(enemy.x, enemy.y);
                } else if (enemy.random === 1) {
                    this.spaceship.drawMiddle(enemy.x, enemy.y);
                } else {
                    this.spaceship.drawRight(enemy.x, enemy.y);
                }
                this.enemyArr.splice(this.field.index, 1);
                // this.spaceship.animateMissle();
                new _explosion2.default(enemy.x, enemy.y).animateExplosion();
                // this.explosion = true; 
                // this.enemy_xpos = enemy.x; 
                // this.enemy_ypos = enemy.y; 
            }
            // if (this.explosion === true) {
            //     new Explosion(this.enemy_xpos, this.enemy_ypos); 
            // }
            this.spaceship.drawSpaceship();
            // this.animationFunction = requestAnimationFrame(this.renderEnemies);
        }
    }, {
        key: 'lose',
        value: function lose() {
            new _explosion2.default(730, 510);
            this.end();

            // cancelAnimationFrame(this.animationFunction);

            document.getElementById("you-lose").style.display = "inline";
            document.getElementById("button").style.display = "inline";
            document.getElementById("typing-input-field").style.display = "none";
            document.getElementById("mathField").style.display = "none";
            document.getElementById("score").style.display = "none";
            var your_score = document.getElementById("your-score");
            your_score.innerHTML = 'You scored ' + this.score.value + '!';
            your_score.style.display = "inline";
            document.getElementById("new-game").style.display = "inline";
        }
    }, {
        key: 'populateEnemies',
        value: function populateEnemies() {
            this.enemyArr.push(new _enemy2.default(this.asteroid));
        }
    }, {
        key: 'start',
        value: function start() {
            this.timer = setInterval(this.renderEnemies, 1000 / 60);
            this.renderEnemies();
        }
    }, {
        key: 'end',
        value: function end() {
            window.clearInterval(this.timer);
            // cancelAnimationFrame(this.animationFunction);
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
                        this.index = i;
                        this.verify = true;
                    }
                }
                this.input.value = "";
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

/***/ }),

/***/ "./src/js/spaceship.js":
/*!*****************************!*\
  !*** ./src/js/spaceship.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spaceship = function () {
    function Spaceship() {
        _classCallCheck(this, Spaceship);

        //Grab canvas 
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //bind functions
        this.drawSpaceship = this.drawSpaceship.bind(this);
        this.drawMissle = this.drawMissle.bind(this);
        this.animateLeft = this.animateLeft.bind(this);
        this.animateMiddle = this.animateMiddle.bind(this);
        this.animateRight = this.animateRight.bind(this);
        this.drawLeft = this.drawLeft.bind(this);
        this.drawMiddle = this.drawMiddle.bind(this);
        this.drawRight = this.drawRight.bind(this);
        this.stopAnimationLeft = this.stopAnimationLeft.bind(this);
        this.stopAnimationMiddle = this.stopAnimationMiddle.bind(this);
        this.stopAnimationRight = this.stopAnimationRight.bind(this);

        //Initialize spaceship
        this.ship = new Image();
        this.ship.src = "src/assets/blackspaceship.png";

        //initialize position 
        this.xl = 790;
        this.yl = 500;
        this.xr = 790;
        this.yr = 500;
        this.xm = 790;
        this.ym = 500;

        //initialize dxl and dyl 
        this.dxl = -60;
        this.dyl = -30;

        //initialize dxm and dym
        this.dxm = 0;
        this.dym = -78;

        //initialize dxr and dyr
        this.dyr = -50;
        this.dxr = 60;
    }

    _createClass(Spaceship, [{
        key: "drawSpaceship",
        value: function drawSpaceship() {
            this.ctx.drawImage(this.ship, 750, 550, 100, 100);
        }
    }, {
        key: "drawMissle",
        value: function drawMissle(posx, posy, x, y) {
            this.ctx.beginPath();
            this.ctx.moveTo(posx, posy);
            this.ctx.lineTo(posx + x, posy + y);
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 13;
            this.ctx.shadowBlur = 100;
            this.ctx.stroke();
        }
    }, {
        key: "animateLeft",
        value: function animateLeft(x, y) {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.yl += this.dyl;
            this.xl += this.dxl;
            this.drawMissle(this.xl, this.yl, 20, 17);
            if (this.xl <= x + 128 || this.yl <= y + 256) {
                this.stopAnimationLeft();
            }
        }
    }, {
        key: "animateMiddle",
        value: function animateMiddle(x, y) {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ym += this.dym;
            this.xm += this.dxm;
            this.drawMissle(this.xm, this.ym, 0, 17);
            if (this.ym <= y + 256) {
                this.stopAnimationMiddle();
            }
        }
    }, {
        key: "animateRight",
        value: function animateRight(x, y) {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.yr += this.dyr;
            this.xr += this.dxr;
            this.drawMissle(this.xr, this.yr, -25, 17);
            if (this.yr <= y + 256 || this.xr >= x + 128) {
                this.stopAnimationRight();
            }
        }
    }, {
        key: "drawLeft",
        value: function drawLeft(xpos, ypos) {
            var _this = this;

            this.left = setInterval(function () {
                _this.animateLeft(xpos, ypos);
            }, 1000 / 60);
            // requestAnimationFrame(() => {
            //     this.animateLeft(xpos, ypos)
            // })
        }
    }, {
        key: "drawMiddle",
        value: function drawMiddle(xpos, ypos) {
            var _this2 = this;

            this.middle = setInterval(function () {
                _this2.animateMiddle(xpos, ypos);
            }, 1000 / 60);

            // requestAnimationFrame(() => {
            //     this.animateMiddle(xpos, ypos)
            // })
        }
    }, {
        key: "drawRight",
        value: function drawRight(xpos, ypos) {
            var _this3 = this;

            this.right = setInterval(function () {
                _this3.animateRight(xpos, ypos);
            }, 1000 / 60);
            // requestAnimationFrame(() => {
            //     this.animateRight(xpos, ypos)
            // })
            // this.animateMissle();
        }
    }, {
        key: "stopAnimationLeft",
        value: function stopAnimationLeft() {
            window.clearInterval(this.left);
            this.xl = 790;
            this.yl = 550;
        }
    }, {
        key: "stopAnimationMiddle",
        value: function stopAnimationMiddle() {
            window.clearInterval(this.middle);
            this.xm = 790;
            this.ym = 550;
        }
    }, {
        key: "stopAnimationRight",
        value: function stopAnimationRight() {
            window.clearInterval(this.right);
            this.xr = 790;
            this.yr = 550;
        }
    }]);

    return Spaceship;
}();

exports.default = Spaceship;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWFzeV9hcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9leHBsb3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwYWNlc2hpcC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsInNldEltbWVkaWF0ZSIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwiZG9jdW1lbnQiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIndpbmRvdyIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJpdGVtIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiR2FtZSIsImJhY2tncm91bmQiLCJMYXlvdXQiLCJzcGxhc2hTY3JlZW4iLCJjYW52YXMiLCJzdHlsZSIsImRpc3BsYXkiLCJzdGFydCIsImVhc3lBcnIiLCJlbmVteV9jb3VudCIsIkVuZW15IiwiYXN0ZXJvaWQiLCJkcmF3QXN0ZXJvaWQiLCJiaW5kIiwiYW5pbWF0ZUVuZW1pZXMiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJwb3MiLCJ4IiwieSIsImR4IiwiZHkiLCJsYXRleEFyciIsImxhdGV4IiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJFeHBsb3Npb24iLCJhbmltYXRlRXhwbG9zaW9uIiwiZHJhd0V4cGxvc2lvbiIsImRyYXciLCJpbWciLCJJbWFnZSIsInNyYyIsInN4Iiwic3kiLCJleHBsb3Npb24iLCJzdG9wQW5pbWF0aW9uIiwidGVzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlckVuZW1pZXMiLCJwb3B1bGF0ZUVuZW1pZXMiLCJlbmVteUFyciIsImZpZWxkIiwiSW5wdXQiLCJpbnB1dCIsImVudGVyUHJlc3NlZCIsInNjb3JlIiwiaHRtbEVsZW1lbnQiLCJtYXRoRmllbGQiLCJNUSIsIk1hdGhGaWVsZCIsInNwYWNlc2hpcCIsIlNwYWNlc2hpcCIsImxvc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNsZWFyUmVjdCIsInZhbHVlIiwidmVyaWZ5IiwiZW5lbXkiLCJpbmRleCIsInBhcnNlSW50IiwiZHJhd0xlZnQiLCJkcmF3TWlkZGxlIiwiZHJhd1JpZ2h0Iiwic3BsaWNlIiwiZHJhd1NwYWNlc2hpcCIsImVuZCIsInlvdXJfc2NvcmUiLCJpbm5lckhUTUwiLCJ0aW1lciIsIm9uQ2hhbmdlIiwiYXJyIiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd01pc3NsZSIsImFuaW1hdGVMZWZ0IiwiYW5pbWF0ZU1pZGRsZSIsImFuaW1hdGVSaWdodCIsInN0b3BBbmltYXRpb25MZWZ0Iiwic3RvcEFuaW1hdGlvbk1pZGRsZSIsInN0b3BBbmltYXRpb25SaWdodCIsInNoaXAiLCJ4bCIsInlsIiwieHIiLCJ5ciIsInhtIiwieW0iLCJkeGwiLCJkeWwiLCJkeG0iLCJkeW0iLCJkeXIiLCJkeHIiLCJwb3N4IiwicG9zeSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Qmx1ciIsInN0cm9rZSIsInhwb3MiLCJ5cG9zIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJQSxVQUFVQyxPQUFPQyxPQUFQLEdBQWlCLEVBQS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlDLGdCQUFKO0FBQ0EsSUFBSUMsa0JBQUo7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsVUFBTSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIO0FBQ0QsU0FBU0MsbUJBQVQsR0FBZ0M7QUFDNUIsVUFBTSxJQUFJRCxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIO0FBQ0EsYUFBWTtBQUNULFFBQUk7QUFDQSxZQUFJLE9BQU9FLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDbENMLCtCQUFtQkssVUFBbkI7QUFDSCxTQUZELE1BRU87QUFDSEwsK0JBQW1CRSxnQkFBbkI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPSSxDQUFQLEVBQVU7QUFDUk4sMkJBQW1CRSxnQkFBbkI7QUFDSDtBQUNELFFBQUk7QUFDQSxZQUFJLE9BQU9LLFlBQVAsS0FBd0IsVUFBNUIsRUFBd0M7QUFDcENOLGlDQUFxQk0sWUFBckI7QUFDSCxTQUZELE1BRU87QUFDSE4saUNBQXFCRyxtQkFBckI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPRSxDQUFQLEVBQVU7QUFDUkwsNkJBQXFCRyxtQkFBckI7QUFDSDtBQUNKLENBbkJBLEdBQUQ7QUFvQkEsU0FBU0ksVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDckIsUUFBSVQscUJBQXFCSyxVQUF6QixFQUFxQztBQUNqQztBQUNBLGVBQU9BLFdBQVdJLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNULHFCQUFxQkUsZ0JBQXJCLElBQXlDLENBQUNGLGdCQUEzQyxLQUFnRUssVUFBcEUsRUFBZ0Y7QUFDNUVMLDJCQUFtQkssVUFBbkI7QUFDQSxlQUFPQSxXQUFXSSxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9ULGlCQUFpQlMsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFNSCxDQUFOLEVBQVE7QUFDTixZQUFJO0FBQ0E7QUFDQSxtQkFBT04saUJBQWlCVSxJQUFqQixDQUFzQixJQUF0QixFQUE0QkQsR0FBNUIsRUFBaUMsQ0FBakMsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFNSCxDQUFOLEVBQVE7QUFDTjtBQUNBLG1CQUFPTixpQkFBaUJVLElBQWpCLENBQXNCLElBQXRCLEVBQTRCRCxHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0g7QUFDSjtBQUdKO0FBQ0QsU0FBU0UsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsUUFBSVgsdUJBQXVCTSxZQUEzQixFQUF5QztBQUNyQztBQUNBLGVBQU9BLGFBQWFLLE1BQWIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNYLHVCQUF1QkcsbUJBQXZCLElBQThDLENBQUNILGtCQUFoRCxLQUF1RU0sWUFBM0UsRUFBeUY7QUFDckZOLDZCQUFxQk0sWUFBckI7QUFDQSxlQUFPQSxhQUFhSyxNQUFiLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9YLG1CQUFtQlcsTUFBbkIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFPTixDQUFQLEVBQVM7QUFDUCxZQUFJO0FBQ0E7QUFDQSxtQkFBT0wsbUJBQW1CUyxJQUFuQixDQUF3QixJQUF4QixFQUE4QkUsTUFBOUIsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFPTixDQUFQLEVBQVM7QUFDUDtBQUNBO0FBQ0EsbUJBQU9MLG1CQUFtQlMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJFLE1BQTlCLENBQVA7QUFDSDtBQUNKO0FBSUo7QUFDRCxJQUFJQyxRQUFRLEVBQVo7QUFDQSxJQUFJQyxXQUFXLEtBQWY7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsYUFBYSxDQUFDLENBQWxCOztBQUVBLFNBQVNDLGVBQVQsR0FBMkI7QUFDdkIsUUFBSSxDQUFDSCxRQUFELElBQWEsQ0FBQ0MsWUFBbEIsRUFBZ0M7QUFDNUI7QUFDSDtBQUNERCxlQUFXLEtBQVg7QUFDQSxRQUFJQyxhQUFhRyxNQUFqQixFQUF5QjtBQUNyQkwsZ0JBQVFFLGFBQWFJLE1BQWIsQ0FBb0JOLEtBQXBCLENBQVI7QUFDSCxLQUZELE1BRU87QUFDSEcscUJBQWEsQ0FBQyxDQUFkO0FBQ0g7QUFDRCxRQUFJSCxNQUFNSyxNQUFWLEVBQWtCO0FBQ2RFO0FBQ0g7QUFDSjs7QUFFRCxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCLFFBQUlOLFFBQUosRUFBYztBQUNWO0FBQ0g7QUFDRCxRQUFJTyxVQUFVYixXQUFXUyxlQUFYLENBQWQ7QUFDQUgsZUFBVyxJQUFYOztBQUVBLFFBQUlRLE1BQU1ULE1BQU1LLE1BQWhCO0FBQ0EsV0FBTUksR0FBTixFQUFXO0FBQ1BQLHVCQUFlRixLQUFmO0FBQ0FBLGdCQUFRLEVBQVI7QUFDQSxlQUFPLEVBQUVHLFVBQUYsR0FBZU0sR0FBdEIsRUFBMkI7QUFDdkIsZ0JBQUlQLFlBQUosRUFBa0I7QUFDZEEsNkJBQWFDLFVBQWIsRUFBeUJPLEdBQXpCO0FBQ0g7QUFDSjtBQUNEUCxxQkFBYSxDQUFDLENBQWQ7QUFDQU0sY0FBTVQsTUFBTUssTUFBWjtBQUNIO0FBQ0RILG1CQUFlLElBQWY7QUFDQUQsZUFBVyxLQUFYO0FBQ0FILG9CQUFnQlUsT0FBaEI7QUFDSDs7QUFFRHhCLFFBQVEyQixRQUFSLEdBQW1CLFVBQVVmLEdBQVYsRUFBZTtBQUM5QixRQUFJZ0IsT0FBTyxJQUFJQyxLQUFKLENBQVVDLFVBQVVULE1BQVYsR0FBbUIsQ0FBN0IsQ0FBWDtBQUNBLFFBQUlTLFVBQVVULE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsYUFBSyxJQUFJVSxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFVBQVVULE1BQTlCLEVBQXNDVSxHQUF0QyxFQUEyQztBQUN2Q0gsaUJBQUtHLElBQUksQ0FBVCxJQUFjRCxVQUFVQyxDQUFWLENBQWQ7QUFDSDtBQUNKO0FBQ0RmLFVBQU1nQixJQUFOLENBQVcsSUFBSUMsSUFBSixDQUFTckIsR0FBVCxFQUFjZ0IsSUFBZCxDQUFYO0FBQ0EsUUFBSVosTUFBTUssTUFBTixLQUFpQixDQUFqQixJQUFzQixDQUFDSixRQUEzQixFQUFxQztBQUNqQ04sbUJBQVdZLFVBQVg7QUFDSDtBQUNKLENBWEQ7O0FBYUE7QUFDQSxTQUFTVSxJQUFULENBQWNyQixHQUFkLEVBQW1Cc0IsS0FBbkIsRUFBMEI7QUFDdEIsU0FBS3RCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtzQixLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNERCxLQUFLRSxTQUFMLENBQWVULEdBQWYsR0FBcUIsWUFBWTtBQUM3QixTQUFLZCxHQUFMLENBQVN3QixLQUFULENBQWUsSUFBZixFQUFxQixLQUFLRixLQUExQjtBQUNILENBRkQ7QUFHQWxDLFFBQVFxQyxLQUFSLEdBQWdCLFNBQWhCO0FBQ0FyQyxRQUFRc0MsT0FBUixHQUFrQixJQUFsQjtBQUNBdEMsUUFBUXVDLEdBQVIsR0FBYyxFQUFkO0FBQ0F2QyxRQUFRd0MsSUFBUixHQUFlLEVBQWY7QUFDQXhDLFFBQVF5QyxPQUFSLEdBQWtCLEVBQWxCLEMsQ0FBc0I7QUFDdEJ6QyxRQUFRMEMsUUFBUixHQUFtQixFQUFuQjs7QUFFQSxTQUFTQyxJQUFULEdBQWdCLENBQUU7O0FBRWxCM0MsUUFBUTRDLEVBQVIsR0FBYUQsSUFBYjtBQUNBM0MsUUFBUTZDLFdBQVIsR0FBc0JGLElBQXRCO0FBQ0EzQyxRQUFROEMsSUFBUixHQUFlSCxJQUFmO0FBQ0EzQyxRQUFRK0MsR0FBUixHQUFjSixJQUFkO0FBQ0EzQyxRQUFRZ0QsY0FBUixHQUF5QkwsSUFBekI7QUFDQTNDLFFBQVFpRCxrQkFBUixHQUE2Qk4sSUFBN0I7QUFDQTNDLFFBQVFrRCxJQUFSLEdBQWVQLElBQWY7QUFDQTNDLFFBQVFtRCxlQUFSLEdBQTBCUixJQUExQjtBQUNBM0MsUUFBUW9ELG1CQUFSLEdBQThCVCxJQUE5Qjs7QUFFQTNDLFFBQVFxRCxTQUFSLEdBQW9CLFVBQVVDLElBQVYsRUFBZ0I7QUFBRSxXQUFPLEVBQVA7QUFBVyxDQUFqRDs7QUFFQXRELFFBQVF1RCxPQUFSLEdBQWtCLFVBQVVELElBQVYsRUFBZ0I7QUFDOUIsVUFBTSxJQUFJaEQsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDSCxDQUZEOztBQUlBTixRQUFRd0QsR0FBUixHQUFjLFlBQVk7QUFBRSxXQUFPLEdBQVA7QUFBWSxDQUF4QztBQUNBeEQsUUFBUXlELEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQU0sSUFBSXBELEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsQ0FGRDtBQUdBTixRQUFRMkQsS0FBUixHQUFnQixZQUFXO0FBQUUsV0FBTyxDQUFQO0FBQVcsQ0FBeEMsQzs7Ozs7Ozs7Ozs7Ozs7QUN2TEMsV0FBVUMsTUFBVixFQUFrQkMsU0FBbEIsRUFBNkI7QUFDMUI7O0FBRUEsUUFBSUQsT0FBT0UsWUFBWCxFQUF5QjtBQUNyQjtBQUNIOztBQUVELFFBQUlDLGFBQWEsQ0FBakIsQ0FQMEIsQ0FPTjtBQUNwQixRQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxRQUFJQyx3QkFBd0IsS0FBNUI7QUFDQSxRQUFJQyxNQUFNTixPQUFPTyxRQUFqQjtBQUNBLFFBQUlDLGlCQUFKOztBQUVBLGFBQVNOLFlBQVQsQ0FBc0JPLFFBQXRCLEVBQWdDO0FBQzlCO0FBQ0EsWUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDQSx1QkFBVyxJQUFJQyxRQUFKLENBQWEsS0FBS0QsUUFBbEIsQ0FBWDtBQUNEO0FBQ0Q7QUFDQSxZQUFJekMsT0FBTyxJQUFJQyxLQUFKLENBQVVDLFVBQVVULE1BQVYsR0FBbUIsQ0FBN0IsQ0FBWDtBQUNBLGFBQUssSUFBSVUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxLQUFLUCxNQUF6QixFQUFpQ1UsR0FBakMsRUFBc0M7QUFDbENILGlCQUFLRyxDQUFMLElBQVVELFVBQVVDLElBQUksQ0FBZCxDQUFWO0FBQ0g7QUFDRDtBQUNBLFlBQUl3QyxPQUFPLEVBQUVGLFVBQVVBLFFBQVosRUFBc0J6QyxNQUFNQSxJQUE1QixFQUFYO0FBQ0FvQyxzQkFBY0QsVUFBZCxJQUE0QlEsSUFBNUI7QUFDQUgsMEJBQWtCTCxVQUFsQjtBQUNBLGVBQU9BLFlBQVA7QUFDRDs7QUFFRCxhQUFTUyxjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUM1QixlQUFPVCxjQUFjUyxNQUFkLENBQVA7QUFDSDs7QUFFRCxhQUFTL0MsR0FBVCxDQUFhNkMsSUFBYixFQUFtQjtBQUNmLFlBQUlGLFdBQVdFLEtBQUtGLFFBQXBCO0FBQ0EsWUFBSXpDLE9BQU8yQyxLQUFLM0MsSUFBaEI7QUFDQSxnQkFBUUEsS0FBS1AsTUFBYjtBQUNBLGlCQUFLLENBQUw7QUFDSWdEO0FBQ0E7QUFDSixpQkFBSyxDQUFMO0FBQ0lBLHlCQUFTekMsS0FBSyxDQUFMLENBQVQ7QUFDQTtBQUNKLGlCQUFLLENBQUw7QUFDSXlDLHlCQUFTekMsS0FBSyxDQUFMLENBQVQsRUFBa0JBLEtBQUssQ0FBTCxDQUFsQjtBQUNBO0FBQ0osaUJBQUssQ0FBTDtBQUNJeUMseUJBQVN6QyxLQUFLLENBQUwsQ0FBVCxFQUFrQkEsS0FBSyxDQUFMLENBQWxCLEVBQTJCQSxLQUFLLENBQUwsQ0FBM0I7QUFDQTtBQUNKO0FBQ0l5Qyx5QkFBU2pDLEtBQVQsQ0FBZXlCLFNBQWYsRUFBMEJqQyxJQUExQjtBQUNBO0FBZko7QUFpQkg7O0FBRUQsYUFBUzhDLFlBQVQsQ0FBc0JELE1BQXRCLEVBQThCO0FBQzFCO0FBQ0E7QUFDQSxZQUFJUixxQkFBSixFQUEyQjtBQUN2QjtBQUNBO0FBQ0F6RCx1QkFBV2tFLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEJELE1BQTVCO0FBQ0gsU0FKRCxNQUlPO0FBQ0gsZ0JBQUlGLE9BQU9QLGNBQWNTLE1BQWQsQ0FBWDtBQUNBLGdCQUFJRixJQUFKLEVBQVU7QUFDTk4sd0NBQXdCLElBQXhCO0FBQ0Esb0JBQUk7QUFDQXZDLHdCQUFJNkMsSUFBSjtBQUNILGlCQUZELFNBRVU7QUFDTkMsbUNBQWVDLE1BQWY7QUFDQVIsNENBQXdCLEtBQXhCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsYUFBU1UsNkJBQVQsR0FBeUM7QUFDckNQLDRCQUFvQiwyQkFBU0ssTUFBVCxFQUFpQjtBQUNqQ3pFLG9CQUFRMkIsUUFBUixDQUFpQixZQUFZO0FBQUUrQyw2QkFBYUQsTUFBYjtBQUF1QixhQUF0RDtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTRyxpQkFBVCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0EsWUFBSWhCLE9BQU9pQixXQUFQLElBQXNCLENBQUNqQixPQUFPa0IsYUFBbEMsRUFBaUQ7QUFDN0MsZ0JBQUlDLDRCQUE0QixJQUFoQztBQUNBLGdCQUFJQyxlQUFlcEIsT0FBT3FCLFNBQTFCO0FBQ0FyQixtQkFBT3FCLFNBQVAsR0FBbUIsWUFBVztBQUMxQkYsNENBQTRCLEtBQTVCO0FBQ0gsYUFGRDtBQUdBbkIsbUJBQU9pQixXQUFQLENBQW1CLEVBQW5CLEVBQXVCLEdBQXZCO0FBQ0FqQixtQkFBT3FCLFNBQVAsR0FBbUJELFlBQW5CO0FBQ0EsbUJBQU9ELHlCQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFTRyxnQ0FBVCxHQUE0QztBQUN4QztBQUNBO0FBQ0E7O0FBRUEsWUFBSUMsZ0JBQWdCLGtCQUFrQkMsS0FBS0MsTUFBTCxFQUFsQixHQUFrQyxHQUF0RDtBQUNBLFlBQUlDLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBU0MsS0FBVCxFQUFnQjtBQUNsQyxnQkFBSUEsTUFBTUMsTUFBTixLQUFpQjVCLE1BQWpCLElBQ0EsT0FBTzJCLE1BQU1FLElBQWIsS0FBc0IsUUFEdEIsSUFFQUYsTUFBTUUsSUFBTixDQUFXQyxPQUFYLENBQW1CUCxhQUFuQixNQUFzQyxDQUYxQyxFQUU2QztBQUN6Q1QsNkJBQWEsQ0FBQ2EsTUFBTUUsSUFBTixDQUFXRSxLQUFYLENBQWlCUixjQUFjOUQsTUFBL0IsQ0FBZDtBQUNIO0FBQ0osU0FORDs7QUFRQSxZQUFJdUMsT0FBT2dDLGdCQUFYLEVBQTZCO0FBQ3pCaEMsbUJBQU9nQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ04sZUFBbkMsRUFBb0QsS0FBcEQ7QUFDSCxTQUZELE1BRU87QUFDSDFCLG1CQUFPaUMsV0FBUCxDQUFtQixXQUFuQixFQUFnQ1AsZUFBaEM7QUFDSDs7QUFFRGxCLDRCQUFvQiwyQkFBU0ssTUFBVCxFQUFpQjtBQUNqQ2IsbUJBQU9pQixXQUFQLENBQW1CTSxnQkFBZ0JWLE1BQW5DLEVBQTJDLEdBQTNDO0FBQ0gsU0FGRDtBQUdIOztBQUVELGFBQVNxQixtQ0FBVCxHQUErQztBQUMzQyxZQUFJQyxVQUFVLElBQUlDLGNBQUosRUFBZDtBQUNBRCxnQkFBUUUsS0FBUixDQUFjaEIsU0FBZCxHQUEwQixVQUFTTSxLQUFULEVBQWdCO0FBQ3RDLGdCQUFJZCxTQUFTYyxNQUFNRSxJQUFuQjtBQUNBZix5QkFBYUQsTUFBYjtBQUNILFNBSEQ7O0FBS0FMLDRCQUFvQiwyQkFBU0ssTUFBVCxFQUFpQjtBQUNqQ3NCLG9CQUFRRyxLQUFSLENBQWNyQixXQUFkLENBQTBCSixNQUExQjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTMEIscUNBQVQsR0FBaUQ7QUFDN0MsWUFBSUMsT0FBT2xDLElBQUltQyxlQUFmO0FBQ0FqQyw0QkFBb0IsMkJBQVNLLE1BQVQsRUFBaUI7QUFDakM7QUFDQTtBQUNBLGdCQUFJNkIsU0FBU3BDLElBQUlxQyxhQUFKLENBQWtCLFFBQWxCLENBQWI7QUFDQUQsbUJBQU9FLGtCQUFQLEdBQTRCLFlBQVk7QUFDcEM5Qiw2QkFBYUQsTUFBYjtBQUNBNkIsdUJBQU9FLGtCQUFQLEdBQTRCLElBQTVCO0FBQ0FKLHFCQUFLSyxXQUFMLENBQWlCSCxNQUFqQjtBQUNBQSx5QkFBUyxJQUFUO0FBQ0gsYUFMRDtBQU1BRixpQkFBS00sV0FBTCxDQUFpQkosTUFBakI7QUFDSCxTQVhEO0FBWUg7O0FBRUQsYUFBU0ssK0JBQVQsR0FBMkM7QUFDdkN2Qyw0QkFBb0IsMkJBQVNLLE1BQVQsRUFBaUI7QUFDakNqRSx1QkFBV2tFLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEJELE1BQTVCO0FBQ0gsU0FGRDtBQUdIOztBQUVEO0FBQ0EsUUFBSW1DLFdBQVdDLE9BQU9DLGNBQVAsSUFBeUJELE9BQU9DLGNBQVAsQ0FBc0JsRCxNQUF0QixDQUF4QztBQUNBZ0QsZUFBV0EsWUFBWUEsU0FBU3BHLFVBQXJCLEdBQWtDb0csUUFBbEMsR0FBNkNoRCxNQUF4RDs7QUFFQTtBQUNBLFFBQUksR0FBR21ELFFBQUgsQ0FBWWxHLElBQVosQ0FBaUIrQyxPQUFPNUQsT0FBeEIsTUFBcUMsa0JBQXpDLEVBQTZEO0FBQ3pEO0FBQ0EyRTtBQUVILEtBSkQsTUFJTyxJQUFJQyxtQkFBSixFQUF5QjtBQUM1QjtBQUNBTTtBQUVILEtBSk0sTUFJQSxJQUFJdEIsT0FBT29DLGNBQVgsRUFBMkI7QUFDOUI7QUFDQUY7QUFFSCxLQUpNLE1BSUEsSUFBSTVCLE9BQU8sd0JBQXdCQSxJQUFJcUMsYUFBSixDQUFrQixRQUFsQixDQUFuQyxFQUFnRTtBQUNuRTtBQUNBSjtBQUVILEtBSk0sTUFJQTtBQUNIO0FBQ0FRO0FBQ0g7O0FBRURDLGFBQVM5QyxZQUFULEdBQXdCQSxZQUF4QjtBQUNBOEMsYUFBU3BDLGNBQVQsR0FBMEJBLGNBQTFCO0FBQ0gsQ0F6TEEsRUF5TEMsT0FBT3dDLElBQVAsS0FBZ0IsV0FBaEIsR0FBOEIsT0FBT3BELE1BQVAsS0FBa0IsV0FBbEIsZUFBdUNBLE1BQXJFLEdBQThFb0QsSUF6TC9FLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSUMsUUFBUyxPQUFPckQsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBbEMsSUFDQyxPQUFPb0QsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFEaEMsSUFFQUUsTUFGWjtBQUdBLElBQUk5RSxRQUFRa0MsU0FBU25DLFNBQVQsQ0FBbUJDLEtBQS9COztBQUVBOztBQUVBbEMsUUFBUU0sVUFBUixHQUFxQixZQUFXO0FBQzlCLFNBQU8sSUFBSTJHLE9BQUosQ0FBWS9FLE1BQU12QixJQUFOLENBQVdMLFVBQVgsRUFBdUJ5RyxLQUF2QixFQUE4Qm5GLFNBQTlCLENBQVosRUFBc0RwQixZQUF0RCxDQUFQO0FBQ0QsQ0FGRDtBQUdBUixRQUFRa0gsV0FBUixHQUFzQixZQUFXO0FBQy9CLFNBQU8sSUFBSUQsT0FBSixDQUFZL0UsTUFBTXZCLElBQU4sQ0FBV3VHLFdBQVgsRUFBd0JILEtBQXhCLEVBQStCbkYsU0FBL0IsQ0FBWixFQUF1RHVGLGFBQXZELENBQVA7QUFDRCxDQUZEO0FBR0FuSCxRQUFRUSxZQUFSLEdBQ0FSLFFBQVFtSCxhQUFSLEdBQXdCLFVBQVM3RixPQUFULEVBQWtCO0FBQ3hDLE1BQUlBLE9BQUosRUFBYTtBQUNYQSxZQUFROEYsS0FBUjtBQUNEO0FBQ0YsQ0FMRDs7QUFPQSxTQUFTSCxPQUFULENBQWlCSSxFQUFqQixFQUFxQkMsT0FBckIsRUFBOEI7QUFDNUIsT0FBS0MsR0FBTCxHQUFXRixFQUFYO0FBQ0EsT0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDRDtBQUNETCxRQUFRaEYsU0FBUixDQUFrQndGLEtBQWxCLEdBQTBCUixRQUFRaEYsU0FBUixDQUFrQnlGLEdBQWxCLEdBQXdCLFlBQVcsQ0FBRSxDQUEvRDtBQUNBVCxRQUFRaEYsU0FBUixDQUFrQm1GLEtBQWxCLEdBQTBCLFlBQVc7QUFDbkMsT0FBS0ksUUFBTCxDQUFjN0csSUFBZCxDQUFtQm9HLEtBQW5CLEVBQTBCLEtBQUtRLEdBQS9CO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBdkgsUUFBUTJILE1BQVIsR0FBaUIsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3JDckgsZUFBYW9ILEtBQUtFLGNBQWxCO0FBQ0FGLE9BQUtHLFlBQUwsR0FBb0JGLEtBQXBCO0FBQ0QsQ0FIRDs7QUFLQTdILFFBQVFnSSxRQUFSLEdBQW1CLFVBQVNKLElBQVQsRUFBZTtBQUNoQ3BILGVBQWFvSCxLQUFLRSxjQUFsQjtBQUNBRixPQUFLRyxZQUFMLEdBQW9CLENBQUMsQ0FBckI7QUFDRCxDQUhEOztBQUtBL0gsUUFBUWlJLFlBQVIsR0FBdUJqSSxRQUFRa0ksTUFBUixHQUFpQixVQUFTTixJQUFULEVBQWU7QUFDckRwSCxlQUFhb0gsS0FBS0UsY0FBbEI7O0FBRUEsTUFBSUQsUUFBUUQsS0FBS0csWUFBakI7QUFDQSxNQUFJRixTQUFTLENBQWIsRUFBZ0I7QUFDZEQsU0FBS0UsY0FBTCxHQUFzQnhILFdBQVcsU0FBUzZILFNBQVQsR0FBcUI7QUFDcEQsVUFBSVAsS0FBS1EsVUFBVCxFQUNFUixLQUFLUSxVQUFMO0FBQ0gsS0FIcUIsRUFHbkJQLEtBSG1CLENBQXRCO0FBSUQ7QUFDRixDQVZEOztBQVlBO0FBQ0FRLG1CQUFPQSxDQUFDLGlFQUFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FySSxRQUFRNEQsWUFBUixHQUF3QixPQUFPa0QsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsS0FBS2xELFlBQXJDLElBQ0MsT0FBT0YsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT0UsWUFEekMsSUFFQyxhQUFRLFVBQUtBLFlBRnJDO0FBR0E1RCxRQUFRc0UsY0FBUixHQUEwQixPQUFPd0MsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsS0FBS3hDLGNBQXJDLElBQ0MsT0FBT1osTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT1ksY0FEekMsSUFFQyxhQUFRLFVBQUtBLGNBRnZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBLElBQUlnRSxDQUFKOztBQUVBO0FBQ0FBLElBQUssWUFBVztBQUNmLFFBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsS0FBSUEsS0FBSyxJQUFJbEUsUUFBSixDQUFhLGFBQWIsR0FBVDtBQUNBLENBSEQsQ0FHRSxPQUFPN0QsQ0FBUCxFQUFVO0FBQ1g7QUFDQSxLQUFJLFFBQU95RyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDc0IsSUFBSXRCLE1BQUo7QUFDaEM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBakgsT0FBT0MsT0FBUCxHQUFpQnNJLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFyRSxTQUFTeUIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07O0FBRWhELFFBQU02QyxTQUFTdEUsU0FBU3VFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBRCxXQUFPN0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNuQyxZQUFNK0MsT0FBTyxJQUFJQyxjQUFKLEVBQWI7QUFDQSxZQUFNQyxhQUFhLElBQUlDLGdCQUFKLEVBQW5CO0FBQ0EsWUFBTUMsZUFBZTVFLFNBQVN1RSxjQUFULENBQXdCLFlBQXhCLENBQXJCO0FBQ0EsWUFBTU0sU0FBUzdFLFNBQVN1RSxjQUFULENBQXdCLGdCQUF4QixDQUFmO0FBQ0FNLGVBQU9DLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNBSCxxQkFBYUUsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7O0FBRUFQLGFBQUtRLEtBQUw7QUFDSCxLQVREO0FBWUgsQ0FmRCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pPLElBQU1DLDRCQUFVLENBQ25CLFVBRG1CLEVBRW5CLFNBRm1CLEVBR25CLFVBSG1CLEVBSW5CLFVBSm1CLEVBS25CLFVBTG1CLEVBTW5CLFNBTm1CLEVBT25CLFNBUG1CLEVBUW5CLFNBUm1CLEVBU25CLFdBVG1CLEVBVW5CLFVBVm1CLEVBV25CLFVBWG1CLEVBWW5CLFlBWm1CLEVBYW5CLGFBYm1CLEVBY25CLG1CQWRtQixFQWVuQixpQkFmbUIsRUFnQm5CLFdBaEJtQixFQWlCbkIsWUFqQm1CLEVBa0JuQixVQWxCbUIsRUFtQm5CLFlBbkJtQixFQW9CbkIsT0FwQm1CLEVBcUJuQixPQXJCbUIsRUFzQm5CLE9BdEJtQixFQXVCbkIsUUF2Qm1CLEVBd0JuQixRQXhCbUIsRUF5Qm5CLFVBekJtQixFQTBCbkIsWUExQm1CLEVBMkJuQixXQTNCbUIsRUE0Qm5CLFNBNUJtQixFQTZCbkIsT0E3Qm1CLEVBOEJuQixVQTlCbUIsRUErQm5CLGVBL0JtQixFQWdDbkIsVUFoQ21CLEVBaUNuQixTQWpDbUIsRUFrQ25CLFNBbENtQixFQW1DbkIsTUFuQ21CLEVBb0NuQixPQXBDbUIsRUFxQ25CLFFBckNtQixFQXNDbkIsTUF0Q21CLEVBdUNuQixPQXZDbUIsRUF3Q25CLE1BeENtQixFQXlDbkIsU0F6Q21CLEVBMENuQixNQTFDbUIsRUEyQ25CLEtBM0NtQixFQTRDbkIsYUE1Q21CLEVBNkNuQixRQTdDbUIsRUE4Q25CLE9BOUNtQixFQStDbkIsT0EvQ21CLEVBZ0RuQixVQWhEbUIsRUFpRG5CLE9BakRtQixFQWtEbkIsT0FsRG1CLEVBbURuQixNQW5EbUIsRUFvRG5CLE1BcERtQixFQXFEbkIsUUFyRG1CLEVBc0RuQixPQXREbUIsRUF1RG5CLGlCQXZEbUIsRUF3RG5CLE9BeERtQixFQXlEbkIsTUF6RG1CLEVBMERuQixtQkExRG1CLEVBMkRuQixTQTNEbUIsRUE0RG5CLE9BNURtQixFQTZEbkIsbUJBN0RtQixFQThEbkIsaUJBOURtQixFQStEbkIsVUEvRG1CLEVBZ0VuQixPQWhFbUIsRUFpRW5CLE9BakVtQixFQWtFbkIsV0FsRW1CLEVBbUVuQixPQW5FbUIsRUFvRW5CLFNBcEVtQixFQXFFbkIsTUFyRW1CLEVBc0VuQixPQXRFbUIsRUF1RW5CLE1BdkVtQixFQXdFbkIsV0F4RW1CLEVBeUVuQixLQXpFbUIsRUEwRW5CLFFBMUVtQixFQTJFbkIsTUEzRW1CLEVBNEVuQixRQTVFbUIsRUE2RW5CLFVBN0VtQixFQThFbkIsVUE5RW1CLEVBK0VuQixRQS9FbUIsRUFnRm5CLE9BaEZtQixFQWlGbkIsTUFqRm1CLEVBa0ZuQixrQkFsRm1CLEVBbUZuQixLQW5GbUIsRUFvRm5CLFlBcEZtQixFQXFGbkIsUUFyRm1CLEVBc0ZuQixTQXRGbUIsRUF1Rm5CLE1BdkZtQixFQXdGbkIsVUF4Rm1CLEVBeUZuQixNQXpGbUIsRUEwRm5CLE9BMUZtQixFQTJGbkIsTUEzRm1CLEVBNEZuQixLQTVGbUIsRUE2Rm5CLFdBN0ZtQixFQThGbkIsU0E5Rm1CLEVBK0ZuQixVQS9GbUIsRUFnR25CLE9BaEdtQixFQWlHbkIsY0FqR21CLEVBa0duQixNQWxHbUIsRUFtR25CLFNBbkdtQixFQW9HbkIsT0FwR21CLEVBcUduQixTQXJHbUIsRUFzR25CLFNBdEdtQixFQXVHbkIsUUF2R21CLEVBd0duQixZQXhHbUIsRUF5R25CLFNBekdtQixFQTBHbkIsYUExR21CLEVBMkduQixTQTNHbUIsRUE0R25CLFFBNUdtQixFQTZHbkIsUUE3R21CLEVBOEduQixXQTlHbUIsRUErR25CLFFBL0dtQixFQWdIbkIsT0FoSG1CLEVBaUhuQixTQWpIbUIsRUFrSG5CLFNBbEhtQixFQW1IbkIsVUFuSG1CLEVBb0huQixZQXBIbUIsRUFxSG5CLFVBckhtQixFQXNIbkIsVUF0SG1CLEVBdUhuQixPQXZIbUIsRUF3SG5CLFVBeEhtQixFQXlIbkIsVUF6SG1CLEVBMEhuQixZQTFIbUIsRUEySG5CLFNBM0htQixFQTRIbkIsU0E1SG1CLEVBNkhuQixTQTdIbUIsRUE4SG5CLFNBOUhtQixFQStIbkIsTUEvSG1CLEVBZ0luQixNQWhJbUIsRUFpSW5CLE1BakltQixFQWtJbkIsUUFsSW1CLEVBbUluQixTQW5JbUIsRUFvSW5CLFlBcEltQixFQXFJbkIsZ0JBckltQixFQXNJbkIsaUJBdEltQixFQXVJbkIsS0F2SW1CLEVBd0luQixjQXhJbUIsRUF5SW5CLFVBekltQixFQTBJbkIsYUExSW1CLEVBMkluQixXQTNJbUIsRUE0SW5CLGFBNUltQixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7QUFDQSxJQUFJQyxjQUFjLENBQWxCOztJQUVxQkMsSztBQUdqQixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNsQjtBQUNBRjs7QUFFQSxhQUFLRyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0E7QUFDQSxhQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBQXRCOztBQUVBO0FBQ0EsYUFBS1QsTUFBTCxHQUFjN0UsU0FBU3VFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZDtBQUNBLGFBQUtNLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixJQUFwQjtBQUNBLGFBQUtYLE1BQUwsQ0FBWVksTUFBWixHQUFxQixHQUFyQjtBQUNBLGFBQUtDLEdBQUwsR0FBVyxLQUFLYixNQUFMLENBQVljLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDs7QUFFQTtBQUNBLFlBQU1DLE1BQU0sQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBUSxDQUFDLEdBQUQsRUFBTSxDQUFOLENBQVIsRUFBa0IsQ0FBQyxJQUFELEVBQU8sQ0FBUCxDQUFsQixDQUFaO0FBQ0EsYUFBSzFFLE1BQUwsR0FBY2dFLGNBQVksQ0FBMUI7O0FBR0E7QUFuQmtCLHlDQWlCQ1UsSUFBSSxLQUFLMUUsTUFBVCxDQWpCRDs7QUFpQmpCLGFBQUsyRSxDQWpCWTtBQWlCVCxhQUFLQyxDQWpCSTtBQW9CbEIsWUFBSSxLQUFLNUUsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNuQixpQkFBSzZFLEVBQUwsR0FBVSxFQUFWO0FBQ0EsaUJBQUtDLEVBQUwsR0FBVSxDQUFDLElBQVg7QUFDSCxTQUhELE1BR08sSUFBSSxLQUFLOUUsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUMxQixpQkFBSzZFLEVBQUwsR0FBVSxDQUFWO0FBQ0EsaUJBQUtDLEVBQUwsR0FBVSxFQUFWO0FBQ0gsU0FITSxNQUdBO0FBQ0gsaUJBQUtELEVBQUwsR0FBVSxDQUFDLEdBQVg7QUFDQSxpQkFBS0MsRUFBTCxHQUFVLENBQUMsR0FBWDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGFBQUtaLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0E7QUFDQTs7QUFFQSxZQUFJRixjQUFjLEVBQWxCLEVBQXNCO0FBQ2xCLGlCQUFLZSxRQUFMLEdBQWdCaEIsaUJBQWhCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUtnQixRQUFMLEdBQ0EsQ0FBQywyQkFBRCxFQUNBLGtDQURBLEVBRUEsMkJBRkEsRUFHQSxnQ0FIQSxFQUlBLG1DQUpBLEVBS0EsOEJBTEEsRUFNQSx5QkFOQSxFQU9BLHlCQVBBLEVBUUEsb0NBUkEsRUFTQSxzQ0FUQSxFQVVBLDBCQVZBLEVBV0EsZ0JBWEEsRUFZQSxhQVpBLENBREE7QUFjSDs7QUFFRDtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFLRCxRQUFMLENBQWNoRixLQUFLa0YsS0FBTCxDQUFXbEYsS0FBS0MsTUFBTCxLQUFnQixLQUFLK0UsUUFBTCxDQUFjL0ksTUFBekMsQ0FBZCxDQUFiO0FBR0g7O0FBRUQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozt1Q0FFZTtBQUNYLGlCQUFLd0ksR0FBTCxDQUFTVSxTQUFULENBQW1CLEtBQUtoQixRQUF4QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxFQUFvRCxLQUFLUyxDQUF6RCxFQUE0RCxLQUFLQyxDQUFqRSxFQUFvRSxHQUFwRSxFQUF5RSxHQUF6RTtBQUNBLGlCQUFLSixHQUFMLENBQVNXLElBQVQsR0FBZ0Isc0JBQWhCO0FBQ0EsaUJBQUtYLEdBQUwsQ0FBU1ksU0FBVCxHQUFxQixPQUFyQjtBQUNBLGlCQUFLWixHQUFMLENBQVNhLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxpQkFBS2IsR0FBTCxDQUFTYyxRQUFULENBQWtCLEtBQUtOLEtBQXZCLEVBQThCLEtBQUtMLENBQUwsR0FBUyxFQUF2QyxFQUEyQyxLQUFLQyxDQUFMLEdBQVMsRUFBcEQ7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O3lDQU1pQjtBQUNiLGlCQUFLRCxDQUFMLElBQVUsS0FBS0UsRUFBZjtBQUNBLGlCQUFLRCxDQUFMLElBQVUsS0FBS0UsRUFBZjtBQUNBLGdCQUFJLEtBQUtILENBQUwsR0FBUyxLQUFLaEIsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLEdBQTdCLElBQW9DLEtBQUtLLENBQUwsR0FBUyxDQUFqRCxFQUFvRDtBQUNoRCxxQkFBS0UsRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDSDtBQUNELGdCQUFJLEtBQUtELENBQUwsR0FBUyxLQUFLakIsTUFBTCxDQUFZWSxNQUFaLEdBQW9CLEdBQTdCLElBQW9DLEtBQUtLLENBQUwsR0FBUyxDQUFqRCxFQUFvRDtBQUNoRCxxQkFBS0UsRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDSDtBQUNELGlCQUFLWCxZQUFMO0FBQ0E7QUFDSDs7Ozs7O2tCQWxJZ0JGLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNIQXNCLFM7QUFDakIsdUJBQVlaLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNkLGFBQUtZLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCcEIsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEI7QUFDQSxhQUFLcUIsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CckIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxhQUFLc0IsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVXRCLElBQVYsQ0FBZSxJQUFmLENBQVo7O0FBR0EsYUFBS3VCLEdBQUwsR0FBVyxJQUFJQyxLQUFKLEVBQVg7QUFDQSxhQUFLRCxHQUFMLENBQVNFLEdBQVQsR0FBZSwwQkFBZjs7QUFFQTtBQUNBLFlBQU1sQyxTQUFTN0UsU0FBU3VFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBTSxlQUFPVyxLQUFQLEdBQWUsSUFBZjtBQUNBWCxlQUFPWSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXYixPQUFPYyxVQUFQLENBQWtCLElBQWxCLENBQVg7QUFDQSxhQUFLRSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLa0IsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtsQixFQUFMLEdBQVUsR0FBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS1UsZ0JBQUw7QUFDSDs7Ozt3Q0FFZTtBQUNiLGlCQUFLUSxTQUFMLEdBQWlCLEtBQUt4QixHQUFMLENBQVNVLFNBQVQsQ0FBbUIsS0FBS1MsR0FBeEIsRUFBNkIsS0FBS0csRUFBbEMsRUFBc0MsS0FBS0MsRUFBM0MsRUFBK0MsR0FBL0MsRUFBb0QsR0FBcEQsRUFBeUQsS0FBS3BCLENBQUwsR0FBTyxFQUFoRSxFQUFvRSxLQUFLQyxDQUF6RSxFQUE0RSxHQUE1RSxFQUFpRixHQUFqRixDQUFqQjtBQUNGOzs7K0JBR007QUFDSCxpQkFBS2tCLEVBQUwsSUFBVyxLQUFLakIsRUFBaEI7QUFDQSxnQkFBSSxLQUFLaUIsRUFBTCxLQUFZLElBQWhCLEVBQXNCO0FBQ2xCLHFCQUFLQSxFQUFMLEdBQVUsQ0FBVjtBQUNBLHFCQUFLQyxFQUFMLElBQVcsS0FBS2pCLEVBQWhCO0FBQ0g7QUFDRCxnQkFBSSxLQUFLaUIsRUFBTCxLQUFZLElBQVosSUFBb0IsS0FBS0QsRUFBTCxLQUFZLElBQXBDLEVBQTBDO0FBQ3RDLHFCQUFLRyxhQUFMO0FBQ0g7QUFDRCxpQkFBS1IsYUFBTDtBQUNBLGlCQUFLUyxJQUFMLEdBQVlDLHNCQUFzQixLQUFLVCxJQUEzQixDQUFaO0FBQ0g7OzsyQ0FFa0I7QUFDbkI7QUFDSSxpQkFBS0EsSUFBTDtBQUNIOzs7d0NBRWU7QUFDWjtBQUNBLGlCQUFLSSxFQUFMLEdBQVUsQ0FBVjtBQUNBLGlCQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNIOzs7Ozs7a0JBbkRnQlIsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBckI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCaEMsSTtBQUVqQixvQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsYUFBS1csUUFBTCxHQUFnQixJQUFJMEIsS0FBSixFQUFoQjtBQUNBLGFBQUsxQixRQUFMLENBQWMyQixHQUFkLEdBQW9CLHlCQUFwQjtBQUNBLGFBQUtPLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQmhDLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsYUFBS2lDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQmpDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0E7QUFDQSxhQUFLVCxNQUFMLEdBQWM3RSxTQUFTdUUsY0FBVCxDQUF3QixRQUF4QixDQUFkO0FBQ0EsYUFBS00sTUFBTCxDQUFZVyxLQUFaLEdBQW9CLElBQXBCO0FBQ0EsYUFBS1gsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLEdBQXJCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLEtBQUtiLE1BQUwsQ0FBWWMsVUFBWixDQUF1QixJQUF2QixDQUFYOztBQUVBO0FBQ0EsYUFBSzZCLFFBQUwsR0FBZ0IsQ0FBQyxJQUFJckMsZUFBSixDQUFVLEtBQUtDLFFBQWYsQ0FBRCxDQUFoQjtBQUNBbkMsb0JBQVksS0FBS3NFLGVBQWpCLEVBQWtDLElBQWxDOztBQUVBO0FBQ0EsYUFBS0UsS0FBTCxHQUFhLElBQUlDLGVBQUosRUFBYjtBQUNBLGFBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQmxHLGdCQUFqQixDQUFrQyxTQUFsQyxFQUE2QyxVQUFDbkYsQ0FBRCxFQUFPO0FBQ2hELGtCQUFLbUwsS0FBTCxDQUFXRyxZQUFYLENBQXdCdEwsQ0FBeEIsRUFBMkIsTUFBS2tMLFFBQWhDO0FBQ0gsU0FGRDs7QUFJQTtBQUNBLGFBQUtLLEtBQUwsR0FBYTdILFNBQVN1RSxjQUFULENBQXdCLE9BQXhCLENBQWI7O0FBRUE7QUFDQSxhQUFLdUQsV0FBTCxHQUFtQjlILFNBQVN1RSxjQUFULENBQXdCLFdBQXhCLENBQW5CO0FBQ0EsYUFBS3dELFNBQUwsR0FBaUJDLEdBQUdDLFNBQUgsQ0FBYSxLQUFLSCxXQUFsQixDQUFqQjs7QUFFQTtBQUNBLGFBQUtJLFNBQUwsR0FBaUIsSUFBSUMsbUJBQUosRUFBakI7O0FBR0E7QUFDQSxZQUFNQyxPQUFPcEksU0FBU3VFLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBNkQsYUFBSzNHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDakM0RyxxQkFBU0MsTUFBVDtBQUNILFNBRkQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0g7Ozs7d0NBSWU7QUFDWixpQkFBSzVDLEdBQUwsQ0FBUzZDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFELE1BQUwsQ0FBWVcsS0FBckMsRUFBNEMsS0FBS1gsTUFBTCxDQUFZWSxNQUF4RDtBQUNBLGlCQUFLLElBQUk3SCxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzRKLFFBQUwsQ0FBY3RLLE1BQWxDLEVBQTBDVSxHQUExQyxFQUErQztBQUMzQyxxQkFBSzRKLFFBQUwsQ0FBYzVKLENBQWQsRUFBaUIySCxjQUFqQjtBQUNBLG9CQUFJLEtBQUtpQyxRQUFMLENBQWM1SixDQUFkLEVBQWlCc0QsTUFBakIsS0FBNEIsQ0FBNUIsS0FBa0MsS0FBS3NHLFFBQUwsQ0FBYzVKLENBQWQsRUFBaUJpSSxDQUFqQixJQUFzQixHQUF0QixJQUE2QixLQUFLMkIsUUFBTCxDQUFjNUosQ0FBZCxFQUFpQmtJLENBQWpCLElBQXFCLEdBQXBGLENBQUosRUFBOEY7QUFDMUYseUJBQUtzQyxJQUFMO0FBQ0gsaUJBRkQsTUFFTyxJQUFJLEtBQUtaLFFBQUwsQ0FBYzVKLENBQWQsRUFBaUJzRCxNQUFqQixLQUE0QixDQUE1QixJQUFpQyxLQUFLc0csUUFBTCxDQUFjNUosQ0FBZCxFQUFpQmtJLENBQWpCLElBQXNCLEdBQTNELEVBQWdFO0FBQ25FLHlCQUFLc0MsSUFBTDtBQUNILGlCQUZNLE1BRUEsSUFBSSxLQUFLWixRQUFMLENBQWM1SixDQUFkLEVBQWlCc0QsTUFBakIsS0FBNEIsQ0FBNUIsS0FBa0MsS0FBS3NHLFFBQUwsQ0FBYzVKLENBQWQsRUFBaUJpSSxDQUFqQixJQUFzQixHQUF0QixJQUE2QixLQUFLMkIsUUFBTCxDQUFjNUosQ0FBZCxFQUFpQmtJLENBQWpCLElBQXNCLEdBQXJGLENBQUosRUFBK0Y7QUFDbEcseUJBQUtzQyxJQUFMO0FBQ0g7QUFDSjtBQUNELGlCQUFLTCxTQUFMLENBQWU3QixLQUFmLENBQXFCLEtBQUt1QixLQUFMLENBQVdFLEtBQVgsQ0FBaUJhLEtBQXRDO0FBQ0EsZ0JBQUksS0FBS2YsS0FBTCxDQUFXZ0IsTUFBWCxLQUFzQixJQUExQixFQUFnQztBQUM1QixvQkFBTUMsUUFBUSxLQUFLbEIsUUFBTCxDQUFjLEtBQUtDLEtBQUwsQ0FBV2tCLEtBQXpCLENBQWQ7QUFDQSxxQkFBS2QsS0FBTCxDQUFXVyxLQUFYLFNBQXNCSSxTQUFTLEtBQUtmLEtBQUwsQ0FBV1csS0FBcEIsRUFBMkIsRUFBM0IsSUFBaUMsQ0FBdkQ7QUFDQSxxQkFBS2YsS0FBTCxDQUFXZ0IsTUFBWCxHQUFvQixLQUFwQjtBQUNBLG9CQUFJQyxNQUFNeEgsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQix5QkFBS2dILFNBQUwsQ0FBZVcsUUFBZixDQUF3QkgsTUFBTTdDLENBQTlCLEVBQWlDNkMsTUFBTTVDLENBQXZDO0FBQ0gsaUJBRkQsTUFFTyxJQUFJNEMsTUFBTXhILE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDM0IseUJBQUtnSCxTQUFMLENBQWVZLFVBQWYsQ0FBMEJKLE1BQU03QyxDQUFoQyxFQUFtQzZDLE1BQU01QyxDQUF6QztBQUNILGlCQUZNLE1BRUE7QUFDSCx5QkFBS29DLFNBQUwsQ0FBZWEsU0FBZixDQUF5QkwsTUFBTTdDLENBQS9CLEVBQWtDNkMsTUFBTTVDLENBQXhDO0FBQ0g7QUFDRCxxQkFBSzBCLFFBQUwsQ0FBY3dCLE1BQWQsQ0FBcUIsS0FBS3ZCLEtBQUwsQ0FBV2tCLEtBQWhDLEVBQXVDLENBQXZDO0FBQ0E7QUFDQSxvQkFBSWxDLG1CQUFKLENBQWNpQyxNQUFNN0MsQ0FBcEIsRUFBdUI2QyxNQUFNNUMsQ0FBN0IsRUFBZ0NZLGdCQUFoQztBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUJBQUt3QixTQUFMLENBQWVlLGFBQWY7QUFDQTtBQUVIOzs7K0JBRU07QUFDSCxnQkFBSXhDLG1CQUFKLENBQWMsR0FBZCxFQUFtQixHQUFuQjtBQUNBLGlCQUFLeUMsR0FBTDs7QUFFQTs7QUFFQWxKLHFCQUFTdUUsY0FBVCxDQUF3QixVQUF4QixFQUFvQ08sS0FBcEMsQ0FBMENDLE9BQTFDLEdBQW9ELFFBQXBEO0FBQ0EvRSxxQkFBU3VFLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NPLEtBQWxDLENBQXdDQyxPQUF4QyxHQUFrRCxRQUFsRDtBQUNBL0UscUJBQVN1RSxjQUFULENBQXdCLG9CQUF4QixFQUE4Q08sS0FBOUMsQ0FBb0RDLE9BQXBELEdBQThELE1BQTlEO0FBQ0EvRSxxQkFBU3VFLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNPLEtBQXJDLENBQTJDQyxPQUEzQyxHQUFxRCxNQUFyRDtBQUNBL0UscUJBQVN1RSxjQUFULENBQXdCLE9BQXhCLEVBQWlDTyxLQUFqQyxDQUF1Q0MsT0FBdkMsR0FBaUQsTUFBakQ7QUFDQSxnQkFBTW9FLGFBQWFuSixTQUFTdUUsY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUNBNEUsdUJBQVdDLFNBQVgsbUJBQXFDLEtBQUt2QixLQUFMLENBQVdXLEtBQWhEO0FBQ0FXLHVCQUFXckUsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsUUFBM0I7QUFDQS9FLHFCQUFTdUUsY0FBVCxDQUF3QixVQUF4QixFQUFvQ08sS0FBcEMsQ0FBMENDLE9BQTFDLEdBQW9ELFFBQXBEO0FBQ0g7OzswQ0FFaUI7QUFDZCxpQkFBS3lDLFFBQUwsQ0FBYzNKLElBQWQsQ0FBbUIsSUFBSXNILGVBQUosQ0FBVSxLQUFLQyxRQUFmLENBQW5CO0FBQ0g7OztnQ0FFTztBQUNKLGlCQUFLaUUsS0FBTCxHQUFhcEcsWUFBWSxLQUFLcUUsYUFBakIsRUFBaUMsT0FBSyxFQUF0QyxDQUFiO0FBQ0EsaUJBQUtBLGFBQUw7QUFDSDs7OzhCQUVLO0FBQ0Z2RSxtQkFBT0csYUFBUCxDQUFxQixLQUFLbUcsS0FBMUI7QUFDQTtBQUNIOzs7Ozs7a0JBckhnQjVFLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOQWlELEs7QUFDakIscUJBQWM7QUFBQTs7QUFDVixhQUFLQyxLQUFMLEdBQWEzSCxTQUFTdUUsY0FBVCxDQUF3QixvQkFBeEIsQ0FBYjtBQUNBLGFBQUsrRSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2hFLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxhQUFLc0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCdEMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7O0FBRUEsYUFBS3FELEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0YsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7OztxQ0FFWW5NLEMsRUFBR2lOLEcsRUFBSztBQUNiLGlCQUFLNUIsS0FBTCxDQUFXYyxNQUFYLEdBQW9CLEtBQXBCO0FBQ0EsZ0JBQUluTSxFQUFFa04sT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ2xCLHFCQUFLLElBQUk1TCxJQUFJLENBQWIsRUFBZ0JBLElBQUkyTCxJQUFJck0sTUFBeEIsRUFBZ0NVLEdBQWhDLEVBQXFDO0FBQ2pDLHdCQUFJMkwsSUFBSTNMLENBQUosRUFBT3NJLEtBQVAsS0FBaUIsS0FBS3lCLEtBQUwsQ0FBV2EsS0FBaEMsRUFBdUM7QUFDbkMsNkJBQUtHLEtBQUwsR0FBYS9LLENBQWI7QUFDQSw2QkFBSzZLLE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFDSjtBQUNELHFCQUFLZCxLQUFMLENBQVdhLEtBQVgsR0FBbUIsRUFBbkI7QUFDSDtBQUNSOzs7bUNBR1U7QUFDUGlCLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFLL0IsS0FBTCxDQUFXbEcsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ25GLENBQUQsRUFBTztBQUN4QyxvQkFBSUEsRUFBRWtOLE9BQUYsS0FBYyxJQUFsQixFQUF3QjtBQUNwQkMsNEJBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0g7QUFDREQsd0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0gsYUFMRDtBQU1IOzs7Ozs7a0JBaENnQmhDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQS9DLE07QUFDakIsc0JBQWM7QUFBQTs7QUFDVixhQUFLZ0YsVUFBTDtBQUNIOzs7O3FDQUdZO0FBQ1QsZ0JBQU05RSxTQUFTN0UsU0FBU3VFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBTSxtQkFBT1csS0FBUCxHQUFlLElBQWY7QUFDQVgsbUJBQU9ZLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxnQkFBSUMsTUFBTWIsT0FBT2MsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELGdCQUFJa0UsU0FBSjtBQUNBbEUsZ0JBQUltRSxHQUFKLENBQVEsR0FBUixFQUFhLEVBQWIsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsSUFBSTVJLEtBQUs2SSxFQUFoQztBQUNBcEUsZ0JBQUlZLFNBQUosR0FBZ0IsS0FBaEI7QUFDQVosZ0JBQUlxRSxTQUFKO0FBQ0FyRSxnQkFBSXNFLElBQUo7QUFDSDs7Ozs7O2tCQWhCZ0JyRixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUF3RCxTO0FBRWpCLHlCQUFjO0FBQUE7O0FBQ1Y7QUFDQSxhQUFLdEQsTUFBTCxHQUFjN0UsU0FBU3VFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZDtBQUNBLGFBQUtNLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixJQUFwQjtBQUNBLGFBQUtYLE1BQUwsQ0FBWVksTUFBWixHQUFxQixHQUFyQjtBQUNBLGFBQUtDLEdBQUwsR0FBVyxLQUFLYixNQUFMLENBQVljLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDs7QUFFQTtBQUNBLGFBQUtzRCxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUIzRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLGFBQUsyRSxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0IzRSxJQUFoQixDQUFxQixJQUFyQixDQUFsQjtBQUNBLGFBQUs0RSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUI1RSxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLGFBQUs2RSxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUI3RSxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLGFBQUs4RSxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0I5RSxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLGFBQUt1RCxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY3ZELElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxhQUFLd0QsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCeEQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxhQUFLeUQsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWV6RCxJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsYUFBSytFLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCL0UsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxhQUFLZ0YsbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJoRixJQUF6QixDQUE4QixJQUE5QixDQUEzQjtBQUNBLGFBQUtpRixrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QmpGLElBQXhCLENBQTZCLElBQTdCLENBQTFCOztBQUVBO0FBQ0EsYUFBS2tGLElBQUwsR0FBWSxJQUFJMUQsS0FBSixFQUFaO0FBQ0EsYUFBSzBELElBQUwsQ0FBVXpELEdBQVYsR0FBZ0IsK0JBQWhCOztBQUVBO0FBQ0EsYUFBSzBELEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsR0FBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsR0FBVjs7QUFFQTtBQUNBLGFBQUtDLEdBQUwsR0FBVyxDQUFDLEVBQVo7QUFDQSxhQUFLQyxHQUFMLEdBQVcsQ0FBQyxFQUFaOztBQUVBO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxhQUFLQyxHQUFMLEdBQVcsQ0FBQyxFQUFaOztBQUVBO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLENBQUMsRUFBWjtBQUNBLGFBQUtDLEdBQUwsR0FBVyxFQUFYO0FBSUg7Ozs7d0NBRWU7QUFDWixpQkFBSzFGLEdBQUwsQ0FBU1UsU0FBVCxDQUFtQixLQUFLb0UsSUFBeEIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkMsRUFBd0MsR0FBeEMsRUFBNkMsR0FBN0M7QUFDSDs7O21DQUVVYSxJLEVBQU1DLEksRUFBTXpGLEMsRUFBRUMsQyxFQUFHO0FBQ3hCLGlCQUFLSixHQUFMLENBQVNrRSxTQUFUO0FBQ0EsaUJBQUtsRSxHQUFMLENBQVM2RixNQUFULENBQWdCRixJQUFoQixFQUFzQkMsSUFBdEI7QUFDQSxpQkFBSzVGLEdBQUwsQ0FBUzhGLE1BQVQsQ0FBZ0JILE9BQU94RixDQUF2QixFQUEyQnlGLE9BQU14RixDQUFqQztBQUNBLGlCQUFLSixHQUFMLENBQVMrRixXQUFULEdBQXVCLEtBQXZCO0FBQ0EsaUJBQUsvRixHQUFMLENBQVNnRyxTQUFULEdBQXFCLEVBQXJCO0FBQ0EsaUJBQUtoRyxHQUFMLENBQVNpRyxVQUFULEdBQXNCLEdBQXRCO0FBQ0EsaUJBQUtqRyxHQUFMLENBQVNrRyxNQUFUO0FBRUg7OztvQ0FFVy9GLEMsRUFBR0MsQyxFQUFHO0FBQ2Q7QUFDQSxpQkFBSzRFLEVBQUwsSUFBVyxLQUFLTSxHQUFoQjtBQUNBLGlCQUFLUCxFQUFMLElBQVcsS0FBS00sR0FBaEI7QUFDQSxpQkFBS2QsVUFBTCxDQUFnQixLQUFLUSxFQUFyQixFQUF5QixLQUFLQyxFQUE5QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztBQUNBLGdCQUFJLEtBQUtELEVBQUwsSUFBVzVFLElBQUcsR0FBZCxJQUFxQixLQUFLNkUsRUFBTCxJQUFXNUUsSUFBSSxHQUF4QyxFQUE2QztBQUN6QyxxQkFBS3VFLGlCQUFMO0FBQ0g7QUFFSjs7O3NDQUVheEUsQyxFQUFHQyxDLEVBQUc7QUFDaEI7QUFDQSxpQkFBS2dGLEVBQUwsSUFBVyxLQUFLSSxHQUFoQjtBQUNBLGlCQUFLTCxFQUFMLElBQVcsS0FBS0ksR0FBaEI7QUFDQSxpQkFBS2hCLFVBQUwsQ0FBZ0IsS0FBS1ksRUFBckIsRUFBeUIsS0FBS0MsRUFBOUIsRUFBa0MsQ0FBbEMsRUFBcUMsRUFBckM7QUFDQSxnQkFBSSxLQUFLQSxFQUFMLElBQVdoRixJQUFFLEdBQWpCLEVBQXNCO0FBQ2xCLHFCQUFLd0UsbUJBQUw7QUFDSDtBQUVKOzs7cUNBRVl6RSxDLEVBQUdDLEMsRUFBRztBQUNmO0FBQ0EsaUJBQUs4RSxFQUFMLElBQVcsS0FBS08sR0FBaEI7QUFDQSxpQkFBS1IsRUFBTCxJQUFXLEtBQUtTLEdBQWhCO0FBQ0EsaUJBQUtuQixVQUFMLENBQWdCLEtBQUtVLEVBQXJCLEVBQXlCLEtBQUtDLEVBQTlCLEVBQWtDLENBQUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQSxnQkFBSSxLQUFLQSxFQUFMLElBQVc5RSxJQUFFLEdBQWIsSUFBb0IsS0FBSzZFLEVBQUwsSUFBVzlFLElBQUksR0FBdkMsRUFBNEM7QUFDeEMscUJBQUswRSxrQkFBTDtBQUNIO0FBQ0o7OztpQ0FFUXNCLEksRUFBTUMsSSxFQUFNO0FBQUE7O0FBQ2pCLGlCQUFLQyxJQUFMLEdBQVk5SSxZQUFZLFlBQU07QUFDMUIsc0JBQUtpSCxXQUFMLENBQWlCMkIsSUFBakIsRUFBdUJDLElBQXZCO0FBQ0gsYUFGVyxFQUVSLE9BQUssRUFGRyxDQUFaO0FBR0E7QUFDQTtBQUNBO0FBQ0g7OzttQ0FFVUQsSSxFQUFNQyxJLEVBQU07QUFBQTs7QUFDbkIsaUJBQUtFLE1BQUwsR0FBYy9JLFlBQVksWUFBTTtBQUM1Qix1QkFBS2tILGFBQUwsQ0FBbUIwQixJQUFuQixFQUF5QkMsSUFBekI7QUFDSCxhQUZhLEVBRVgsT0FBSyxFQUZNLENBQWQ7O0FBSUE7QUFDQTtBQUNBO0FBQ0g7OztrQ0FHU0QsSSxFQUFNQyxJLEVBQU07QUFBQTs7QUFDbEIsaUJBQUtHLEtBQUwsR0FBYWhKLFlBQVksWUFBTTtBQUMzQix1QkFBS21ILFlBQUwsQ0FBa0J5QixJQUFsQixFQUF3QkMsSUFBeEI7QUFDSCxhQUZZLEVBRVYsT0FBSyxFQUZLLENBQWI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7NENBRW1CO0FBQ2hCL0ksbUJBQU9HLGFBQVAsQ0FBcUIsS0FBSzZJLElBQTFCO0FBQ0EsaUJBQUt0QixFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLQyxFQUFMLEdBQVUsR0FBVjtBQUNIOzs7OENBRXFCO0FBQ2xCM0gsbUJBQU9HLGFBQVAsQ0FBcUIsS0FBSzhJLE1BQTFCO0FBQ0EsaUJBQUtuQixFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLQyxFQUFMLEdBQVUsR0FBVjtBQUNIOzs7NkNBRW9CO0FBQ2pCL0gsbUJBQU9HLGFBQVAsQ0FBcUIsS0FBSytJLEtBQTFCO0FBQ0EsaUJBQUt0QixFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLQyxFQUFMLEdBQVUsR0FBVjtBQUNIOzs7Ozs7a0JBL0lnQnpDLFMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vanMvbGF5b3V0JztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgU3BhY2VzaGlwIGZyb20gJy4vanMvc3BhY2VzaGlwJzsgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7IFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgTGF5b3V0KCk7XG4gICAgICAgIGNvbnN0IHNwbGFzaFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXNjcmVlblwiKTsgXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXdyYXBwZXJcIik7IFxuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc3BsYXNoU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgICAgICAgZ2FtZS5zdGFydCgpO1xuICAgIH0pXG4gICAgXG5cbn0pIiwiZXhwb3J0IGNvbnN0IGVhc3lBcnIgPSBbXG4gICAgXCJcXFxcYXJjdGFuXCIsXG4gICAgXCJcXFxcYW5nbGVcIiwgXG4gICAgXCJcXFxcYXBwcm94XCIsXG4gICAgXCJcXFxcYXJjY29zXCIsIFxuICAgIFwiXFxcXGFyY3NpblwiLCBcbiAgICBcIlxcXFxhbGVwaFwiLCBcbiAgICBcIlxcXFxhbWFsZ1wiLCBcbiAgICBcIlxcXFxiaWNhcFwiLCBcbiAgICBcIlxcXFxiaWdjaXJjXCIsIFxuICAgIFwiXFxcXGJpZ2N1cFwiLCBcbiAgICBcIlxcXFxiaWdkb3RcIiwgXG4gICAgXCJcXFxcYmlnb3BsdXNcIiwgXG4gICAgXCJcXFxcYmlnb3RpbWVzXCIsIFxuICAgIFwiXFxcXGJpZ3RyaWFuZ2xlZG93blwiLCBcbiAgICBcIlxcXFxiaWd0cmlhbmdsZXVwXCIsIFxuICAgIFwiXFxcXGJpZ3NjdXBcIiwgXG4gICAgXCJcXFxcYmlndXBsdXNcIiwgXG4gICAgXCJcXFxcYmlndmVlXCIsIFxuICAgIFwiXFxcXGJpZ3dlZGdlXCIsIFxuICAgIFwiXFxcXGJvdFwiLCBcbiAgICBcIlxcXFxjYXBcIiwgXG4gICAgXCJcXFxcY2hpXCIsIFxuICAgIFwiXFxcXGNpcmNcIiwgXG4gICAgXCJcXFxcY29uZ1wiLCBcbiAgICBcIlxcXFxjb3Byb2RcIiwgXG4gICAgXCJcXFxcY2x1YnN1aXRcIiwgXG4gICAgXCJcXFxcZXBzaWxvblwiLCBcbiAgICBcIlxcXFxlcXVpdlwiLCBcbiAgICBcIlxcXFxldGFcIiwgXG4gICAgXCJcXFxcZXhpc3RzXCIsIFxuICAgIFwiXFxcXGZib3h7aGVsbG99XCIsIFxuICAgIFwiXFxcXGZvcmFsbFwiLCBcbiAgICBcIlxcXFxmcm93blwiLCBcbiAgICBcIlxcXFxnYW1tYVwiLCBcbiAgICBcIlxcXFxnZVwiLCBcbiAgICBcIlxcXFxnZXFcIiwgXG4gICAgXCJcXFxcZ2V0c1wiLCBcbiAgICBcIlxcXFxnZ1wiLCBcbiAgICBcIlxcXFxpZmZcIiwgXG4gICAgXCJcXFxcSW1cIiwgXG4gICAgXCJcXFxcaW1hdGhcIiwgXG4gICAgXCJcXFxcaW5cIiwgXG4gICAgXCJcXFxcaVwiLCBcbiAgICBcIlxcXFxoZWFydHN1aXRcIiwgXG4gICAgXCJcXFxcaW90YVwiLCBcbiAgICBcIlxcXFxpbnRcIiwgXG4gICAgXCJcXFxcbGVxXCIsIFxuICAgIFwiXFxcXGxmbG9vclwiLFxuICAgIFwiXFxcXGxpbVwiLCBcbiAgICBcIlxcXFxsaGRcIiwgXG4gICAgXCJcXFxcbGxcIiwgXG4gICAgXCJcXFxcbG5cIiwgXG4gICAgXCJcXFxcbG5vdFwiLCBcbiAgICBcIlxcXFxsb2dcIiwgXG4gICAgXCJcXFxcbG9uZ2xlZnRhcnJvd1wiLCBcbiAgICBcIlxcXFxsb3JcIiwgXG4gICAgXCJcXFxcbHFcIiwgXG4gICAgXCJcXFxcbGJyYWNlIFxcXFxyYnJhY2VcIiwgXG4gICAgXCJcXFxca2FwcGFcIiwgXG4gICAgXCJcXFxca2VyXCIsIFxuICAgIFwiXFxcXGxlZnRoYXJwb29uZG93blwiLCBcbiAgICBcIlxcXFxsZWZ0aGFycG9vbnVwXCIsIFxuICAgIFwiXFxcXG1vZGVsc1wiLCBcbiAgICBcIlxcXFxtaWRcIiwgXG4gICAgXCJcXFxcbWluXCIsIFxuICAgIFwiXFxcXG5lYXJyb3dcIiwgXG4gICAgXCJcXFxcbmVxXCIsIFxuICAgIFwiXFxcXG5hYmxhXCIsIFxuICAgIFwiXFxcXG1wXCIsIFxuICAgIFwiXFxcXG5vdFwiLCBcbiAgICBcIlxcXFxudVwiLCBcbiAgICBcIlxcXFxud2Fycm93XCIsIFxuICAgIFwiXFxcXG9cIiwgXG4gICAgXCJcXFxcb2ludFwiLCBcbiAgICBcIlxcXFxvZVwiLCBcbiAgICBcIlxcXFxvZG90XCIsIFxuICAgIFwiXFxcXG9zbGFzaFwiLCBcbiAgICBcIlxcXFxvdGltZXNcIiwgXG4gICAgXCJcXFxccGVycFwiLCBcbiAgICBcIlxcXFxwaGlcIiwgXG4gICAgXCJcXFxccGlcIiwgXG4gICAgXCJcXFxcb3ZlcmxpbmV7dGV4dH1cIiwgXG4gICAgXCJcXFxcUFwiLCBcbiAgICBcIlxcXFxwYXJhbGxlbFwiLCBcbiAgICBcIlxcXFxwcm9kXCIsIFxuICAgIFwiXFxcXHByaW1lXCIsIFxuICAgIFwiXFxcXFByXCIsIFxuICAgIFwiXFxcXHByb3B0b1wiLCBcbiAgICBcIlxcXFxwc1wiLCBcbiAgICBcIlxcXFxwc2lcIiwgXG4gICAgXCJcXFxcUmVcIiwgXG4gICAgXCJcXFxcU1wiLCBcbiAgICBcIlxcXFxzZWFycm93XCIsIFxuICAgIFwiXFxcXHNlYyB4XCIsIFxuICAgIFwiXFxcXHJmbG9vclwiLCBcbiAgICBcIlxcXFxyaG9cIiwgXG4gICAgXCJcXFxccmlnaHRhcnJvd1wiLCBcbiAgICBcIlxcXFxzZlwiLCBcbiAgICBcIlxcXFxzaGFycFwiLCBcbiAgICBcIlxcXFxzaW1cIiwgXG4gICAgXCJcXFxcc2ltZXFcIiwgXG4gICAgXCJcXFxcc2luIHhcIiwgXG4gICAgXCJcXFxcc2luaFwiLCBcbiAgICBcIlxcXFxzbWFsbGludFwiLFxuICAgIFwiXFxcXHNtaWxlXCIsIFxuICAgIFwiXFxcXHNwYWRlc3VpdFwiLCBcbiAgICBcIlxcXFxzcWNhcFwiLCBcbiAgICBcIlxcXFxzdGFyXCIsIFxuICAgIFwiXFxcXHN1cmRcIiwgXG4gICAgXCJcXFxcc3dhcnJvd1wiLCBcbiAgICBcIlxcXFx0YW5oXCIsIFxuICAgIFwiXFxcXHRhdVwiLCBcbiAgICBcIlxcXFx0YW4geFwiLCBcbiAgICBcIlxcXFx0aGV0YVwiLCBcbiAgICBcIlxcXFxzdWJzZXRcIiwgXG4gICAgXCJcXFxcc3Vic2V0ZXFcIiwgXG4gICAgXCJcXFxcc3VjY2VxXCIsIFxuICAgIFwiXFxcXHN1cHNldFwiLCBcbiAgICBcIlxcXFxzdXBcIiwgXG4gICAgXCJcXFxcdmFycGhpXCIsXG4gICAgXCJcXFxcdmFycmhvXCIsIFxuICAgIFwiXFxcXHZhcnNpZ21hXCIsIFxuICAgIFwiXFxcXHZkYXNoXCIsIFxuICAgIFwiXFxcXHZkb3RzXCIsIFxuICAgIFwiXFxcXHZlYyBjXCIsIFxuICAgIFwiXFxcXHdlZGdlXCIsIFxuICAgIFwiXFxcXHdwXCIsIFxuICAgIFwiXFxcXHdyXCIsIFxuICAgIFwiXFxcXHhpXCIsIFxuICAgIFwiXFxcXHllYXJcIiwgXG4gICAgXCJcXFxcdW5saGRcIiwgXG4gICAgXCJcXFxcdHJpYW5nbGVcIiwgXG4gICAgXCJcXFxcdHJpYW5nbGVsZWZ0XCIsIFxuICAgIFwiXFxcXHRyaWFuZ2xlcmlnaHRcIiwgXG4gICAgXCJcXFxcdlwiLCBcbiAgICBcIlxcXFx2YXJlcHNpbG9uXCIsIFxuICAgIFwiXFxcXGJvd3RpZVwiLCBcbiAgICBcIlxcXFxzcGFkZXN1aXRcIiwgXG4gICAgXCJcXFxcRGlhbW9uZFwiLCBcbiAgICBcIlxcXFxoZWFydHN1aXRcIlxuXSIsImltcG9ydCB7IGVhc3lBcnIgfSBmcm9tIFwiLi9lYXN5X2FyclwiO1xudmFyIGVuZW15X2NvdW50ID0gMDsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcblxuXG4gICAgY29uc3RydWN0b3IoYXN0ZXJvaWQpIHtcbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICBlbmVteV9jb3VudCsrOyBcblxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcyA9IHRoaXMuYW5pbWF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2dldCBhbmQgc2V0IGNhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7IFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA4MDA7IFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL3NldCBpbml0aWFsIHBvc2l0aW9ucyBvZiBhc3Rlcm9pZFxuICAgICAgICBjb25zdCBwb3MgPSBbWzAsMF0sIFs3MjAsIDBdLCBbMTMwMCwgMF1dO1xuICAgICAgICB0aGlzLnJhbmRvbSA9IGVuZW15X2NvdW50JTM7IFxuICAgICAgICBbdGhpcy54LCB0aGlzLnldID0gcG9zW3RoaXMucmFuZG9tXTtcblxuICAgICAgICAvL3NldCBkZWx0YSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiBcbiAgICAgICAgaWYgKHRoaXMucmFuZG9tID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLjU7IFxuICAgICAgICAgICAgdGhpcy5keSA9IC0uNDE3O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZG9tID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gMDsgXG4gICAgICAgICAgICB0aGlzLmR5ID0gLjU7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5keCA9IC0uMzM7IFxuICAgICAgICAgICAgdGhpcy5keSA9IC0uMzNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBhbGllbiBhbmQgYXN0ZXJvaWQgcGhvdG9zIFxuICAgICAgICAvLyB0aGlzLmFzdGVyb2lkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuYXN0ZXJvaWQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdGVyb2lkLnBuZ1wiO1xuICAgICAgICB0aGlzLmFzdGVyb2lkID0gYXN0ZXJvaWQ7XG4gICAgICAgIC8vIHRoaXMuYWxpZW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5hbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG5cbiAgICAgICAgaWYgKGVuZW15X2NvdW50IDwgNTApIHtcbiAgICAgICAgICAgIHRoaXMubGF0ZXhBcnIgPSBlYXN5QXJyOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGF0ZXhBcnIgPSBcbiAgICAgICAgICAgIFtcIlxcXFxmcmFje2R9e2R4fWNebj1ueF57bi0xfVwiLCBcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7XFxcXHBhcnRpYWwgeX17XFxcXHBhcnRpYWwgeH1cIiwgXG4gICAgICAgICAgICBcIlxcXFxmcmFje2R9e2R4fWNebj1ueF57bi0xfVwiLCBcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9ZV57YXh9PWFcXFxcLGVee2F4fVwiLFxuICAgICAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcbG4oeCk9XFxcXGZyYWN7MX17eH1cIixcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9XFxcXHNpbiB4PVxcXFxjb3MgeFwiLFxuICAgICAgICAgICAgXCJcXFxcYmlnY3VwX3tpPTF9XntufXtYX2l9XCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdjYXBfe2k9MX1ee259e1hfaX1cIixcbiAgICAgICAgICAgIFwiXFxcXGludF97MH1ee1xcXFxwaX0gXFxcXHNpbiB4IFxcXFwgZHggPSAyXCIsXG4gICAgICAgICAgICBcIlxcXFxsZWZ0KHgtMVxcXFxyaWdodClcXFxcbGVmdCh4KzNcXFxccmlnaHQpXCIsXG4gICAgICAgICAgICBcIlxcXFxsaW1fe2EgXFxcXHJpZ2h0YXJyb3cgYn1cIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ3ZlZV9hXmIgeFwiLCBcbiAgICAgICAgICAgIFwiXFxcXHN1bV9hXmIgeFwiXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBsYXRleCBcbiAgICAgICAgdGhpcy5sYXRleCA9IHRoaXMubGF0ZXhBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sYXRleEFyci5sZW5ndGgpXTtcblxuXG4gICAgfVxuXG4gICAgLy8gZHJhdygpIHtcbiAgICAvLyAgICAgdGhpcy5hbmltYXRlRW5lbWllcygpO1xuICAgIC8vIH1cbiAgICBcbiAgICBcbiAgICAvLyBkcmF3RW5lbWllcygpIHtcbiAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAvLyAgICAgLy8gdmFyIGxhdGV4ID0gXCJcXFxcbGVmdChcXFxcZnJhY3sxfXtcXFxcc3FydHt4fX1cXFxccmlnaHQpXCJcbiAgICAvLyAgICAgLy8gdmFyIGxhdGV4MiA9IFwiRih4KSY9XFxcXGludF5hX2JcXFxcZnJhY3sxfXszfXheM1wiXG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5hc3Rlcm9pZC53aWR0aCwgdGhpcy5hc3Rlcm9pZC5oZWlnaHQpO1xuICAgIC8vICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIHRoaXMuYWxpZW4ud2lkdGgsIHRoaXMuYWxpZW4uaGVpZ2h0KTtcbiAgICAvLyAgICAgLy8gY29uc3QgYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTsgXG4gICAgLy8gICAgIC8vIGFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjsgXG4gICAgLy8gICAgIC8vIGNvbnN0IGFsaWVuID0gbmV3IEltYWdlKCk7IFxuICAgIC8vICAgICAvLyBhbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG4gICAgLy8gICAgIC8vIGFzdGVyb2lkLm9ubG9hZCA9ICgpID0+IHtcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7IFxuICAgIC8vICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDYsIDQ5LCAyMTAsIDE5MCwgdGhpcy54LCB0aGlzLnksIDY0LCA3MC43Myk7XG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KSAgXG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAvLyAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7XG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KGxhdGV4LCB0aGlzLngtMjAsIHRoaXMueSsxMzApO1xuICAgIC8vICAgICB0aGlzLmRyYXdBc3Rlcm9pZCgpO1xuICAgIC8vICAgICAvLyB0aGlzLmRyYXdBbGllbigpO1xuICAgIC8vICAgICAvLyB9O1xuICAgIC8vICAgICAvLyBhbGllbi5vbmxvYWQgPSAoICgpID0+IHtcbiAgICAvLyAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgIC8vICAgICAvLyB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiOyBcbiAgICAvLyAgICAgLy8gdGhpcy5jdHguZmlsbFRleHQobGF0ZXgyLCB0aGlzLnhfYWxpZW4tMjAsIHRoaXMueV9hbGllbisxNTApO1xuICAgIC8vICAgICAvLyB9KVxuICAgIC8vIH1cblxuICAgIGRyYXdBc3Rlcm9pZCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYXN0ZXJvaWQsIDQwLCA1MCwgMTcwLCAxNzAsIHRoaXMueCwgdGhpcy55LCAxNTAsIDE3MClcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBUaW1lcyBOZXcgUm9tYW5cIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4LCB0aGlzLnggKyA3NSwgdGhpcy55ICsgODUpO1xuICAgIH1cblxuICAgIC8vIGRyYXdBbGllbigpIHtcbiAgICAvLyAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAvLyAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMubGF0ZXgyLCB0aGlzLnhfYWxpZW4gLSAyMCwgdGhpcy55X2FsaWVuICsgMTUwKTtcbiAgICAvLyB9XG5cblxuXG4gICAgXG5cbiAgICBhbmltYXRlRW5lbWllcygpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7IFxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keTsgXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDI1NiB8fCB0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQtIDI1NiB8fCB0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkKCk7IFxuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlRW5lbWllcyk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUV4cGxvc2lvbiA9IHRoaXMuYW5pbWF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3RXhwbG9zaW9uID0gdGhpcy5kcmF3RXhwbG9zaW9uLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTsgXG5cblxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSAoKTsgXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwic3JjL2Fzc2V0cy9leHBsb3Npb24ucG5nXCI7XG5cbiAgICAgICAgLy9pbml0aWFsaXplIGNhbnZhcyBcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA4MDA7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7IFxuICAgICAgICB0aGlzLnN4ID0gMDsgXG4gICAgICAgIHRoaXMuc3kgPSAwOyBcbiAgICAgICAgdGhpcy5keCA9IDI1NjsgXG4gICAgICAgIHRoaXMuZHkgPSAyNTY7IFxuICAgICAgICB0aGlzLmFuaW1hdGVFeHBsb3Npb24oKTsgXG4gICAgfVxuXG4gICAgZHJhd0V4cGxvc2lvbigpIHtcbiAgICAgICB0aGlzLmV4cGxvc2lvbiA9IHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5zeCwgdGhpcy5zeSwgMjU2LCAyNTYsIHRoaXMueC03NSwgdGhpcy55LCAyNTYsIDI1NilcbiAgICB9XG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5keDsgXG4gICAgICAgIGlmICh0aGlzLnN4ID09PSAyMDQ4KSB7XG4gICAgICAgICAgICB0aGlzLnN4ID0gMDsgXG4gICAgICAgICAgICB0aGlzLnN5ICs9IHRoaXMuZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3kgPT09IDE1MzYgJiYgdGhpcy5zeCA9PT0gMjA0OCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0V4cGxvc2lvbigpXG4gICAgICAgIHRoaXMudGVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gICAgfSAgIFxuICAgIFxuICAgIGFuaW1hdGVFeHBsb3Npb24oKSB7XG4gICAgLy8gICAgdGhpcy5hbmltYXRpb24gPSBzZXRJbnRlcnZhbCh0aGlzLmRyYXcsIDEwMDAvNjApO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBzdG9wQW5pbWF0aW9uKCkge1xuICAgICAgICAvLyB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIHRoaXMuc3ggPSAwOyBcbiAgICAgICAgdGhpcy5zeSA9IDA7IFxuICAgIH1cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgeyBjbGVhckludGVydmFsIH0gZnJvbSAndGltZXJzJztcbmltcG9ydCBTcGFjZXNoaXAgZnJvbSAnLi9zcGFjZXNoaXAnO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tICcuL2V4cGxvc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vYmluZCBmdW5jdGlvbnNcbiAgICAgICAgdGhpcy5hc3Rlcm9pZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjtcbiAgICAgICAgdGhpcy5yZW5kZXJFbmVtaWVzID0gdGhpcy5yZW5kZXJFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLnBvcHVsYXRlRW5lbWllcyA9IHRoaXMucG9wdWxhdGVFbmVtaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL1BvcHVsYXRlIGVuZW1pZXNcbiAgICAgICAgdGhpcy5lbmVteUFyciA9IFtuZXcgRW5lbXkodGhpcy5hc3Rlcm9pZCldOyBcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5wb3B1bGF0ZUVuZW1pZXMsIDIwMDApOyBcblxuICAgICAgICAvL0NyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgaW5wdXQgZmllbGQgXG4gICAgICAgIHRoaXMuZmllbGQgPSBuZXcgSW5wdXQoKTtcbiAgICAgICAgdGhpcy5maWVsZC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5lbnRlclByZXNzZWQoZSwgdGhpcy5lbmVteUFycilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9pbnN0YW50aWF0ZSBzY29yZSBcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7IFxuXG4gICAgICAgIC8vIGluaXRpdGlhbGl6ZSBtYXRoZmllbGQgXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0aEZpZWxkJyk7XG4gICAgICAgIHRoaXMubWF0aEZpZWxkID0gTVEuTWF0aEZpZWxkKHRoaXMuaHRtbEVsZW1lbnQpOyBcblxuICAgICAgICAvL2luaXRpYWxpemUgc3BhY2VzaGlwIFxuICAgICAgICB0aGlzLnNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTsgXG5cblxuICAgICAgICAvL2xvc2UgYnV0dG9uIFxuICAgICAgICBjb25zdCBsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZVwiKTtcbiAgICAgICAgbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvL2FuaW1hdGUgZXhwbG9zaW9uIFxuICAgICAgICAvLyB0aGlzLmVuZW15X3hwb3MgPSBudWxsOyBcbiAgICAgICAgLy8gdGhpcy5lbmVteV95cG9zID0gbnVsbDtcbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICByZW5kZXJFbmVtaWVzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmVteUFycltpXS5hbmltYXRlRW5lbWllcygpOyBcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyW2ldLnJhbmRvbSA9PT0gMCAmJiAodGhpcy5lbmVteUFycltpXS54ID49IDYzMCB8fCB0aGlzLmVuZW15QXJyW2ldLnkgPj01MDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5lbXlBcnJbaV0ucmFuZG9tID09PSAxICYmIHRoaXMuZW5lbXlBcnJbaV0ueSA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmVteUFycltpXS5yYW5kb20gPT09IDIgJiYgKHRoaXMuZW5lbXlBcnJbaV0ueCA8PSA4MDAgfHwgdGhpcy5lbmVteUFycltpXS55ID49IDU1MCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0aEZpZWxkLmxhdGV4KHRoaXMuZmllbGQuaW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5maWVsZC52ZXJpZnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5lbmVteUFyclt0aGlzLmZpZWxkLmluZGV4XVxuICAgICAgICAgICAgdGhpcy5zY29yZS52YWx1ZSA9IGAke3BhcnNlSW50KHRoaXMuc2NvcmUudmFsdWUsIDEwKSArIDF9YFxuICAgICAgICAgICAgdGhpcy5maWVsZC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZW5lbXkucmFuZG9tID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd0xlZnQoZW5lbXkueCwgZW5lbXkueSk7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmVteS5yYW5kb20gPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC5kcmF3TWlkZGxlKGVuZW15LngsIGVuZW15LnkpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1JpZ2h0KGVuZW15LngsIGVuZW15LnkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5lbXlBcnIuc3BsaWNlKHRoaXMuZmllbGQuaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuc3BhY2VzaGlwLmFuaW1hdGVNaXNzbGUoKTtcbiAgICAgICAgICAgIG5ldyBFeHBsb3Npb24oZW5lbXkueCwgZW5lbXkueSkuYW5pbWF0ZUV4cGxvc2lvbigpO1xuICAgICAgICAgICAgLy8gdGhpcy5leHBsb3Npb24gPSB0cnVlOyBcbiAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlfeHBvcyA9IGVuZW15Lng7IFxuICAgICAgICAgICAgLy8gdGhpcy5lbmVteV95cG9zID0gZW5lbXkueTsgXG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRoaXMuZXhwbG9zaW9uID09PSB0cnVlKSB7XG4gICAgICAgIC8vICAgICBuZXcgRXhwbG9zaW9uKHRoaXMuZW5lbXlfeHBvcywgdGhpcy5lbmVteV95cG9zKTsgXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1NwYWNlc2hpcCgpOyBcbiAgICAgICAgLy8gdGhpcy5hbmltYXRpb25GdW5jdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlckVuZW1pZXMpO1xuXG4gICAgfVxuXG4gICAgbG9zZSgpIHtcbiAgICAgICAgbmV3IEV4cGxvc2lvbig3MzAsIDUxMCk7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdS1sb3NlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGluZy1pbnB1dC1maWVsZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0aEZpZWxkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICAgICAgICBjb25zdCB5b3VyX3Njb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5b3VyLXNjb3JlXCIpO1xuICAgICAgICB5b3VyX3Njb3JlLmlubmVySFRNTCA9IGBZb3Ugc2NvcmVkICR7dGhpcy5zY29yZS52YWx1ZX0hYDsgXG4gICAgICAgIHlvdXJfc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7IFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1nYW1lXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgfVxuXG4gICAgcG9wdWxhdGVFbmVtaWVzKCkge1xuICAgICAgICB0aGlzLmVuZW15QXJyLnB1c2gobmV3IEVuZW15KHRoaXMuYXN0ZXJvaWQpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMucmVuZGVyRW5lbWllcywgIDEwMDAvNjApO1xuICAgICAgICB0aGlzLnJlbmRlckVuZW1pZXMoKTtcbiAgICB9XG5cbiAgICBlbmQoKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAvLyBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpbmctaW5wdXQtZmllbGRcIik7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW50ZXJQcmVzc2VkID0gdGhpcy5lbnRlclByZXNzZWQuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5kZXggPSBudWxsOyBcbiAgICAgICAgdGhpcy52ZXJpZnkgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgZW50ZXJQcmVzc2VkKGUsIGFycikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0ubGF0ZXggPT09IHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gXCIxM1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZXNoaXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vR3JhYiBjYW52YXMgXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7IFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmRyYXdTcGFjZXNoaXAgPSB0aGlzLmRyYXdTcGFjZXNoaXAuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd01pc3NsZSA9IHRoaXMuZHJhd01pc3NsZS5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5hbmltYXRlTGVmdCA9IHRoaXMuYW5pbWF0ZUxlZnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlTWlkZGxlID0gdGhpcy5hbmltYXRlTWlkZGxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0ID0gdGhpcy5hbmltYXRlUmlnaHQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd0xlZnQgPSB0aGlzLmRyYXdMZWZ0LmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdNaWRkbGUgPSB0aGlzLmRyYXdNaWRkbGUuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd1JpZ2h0ID0gdGhpcy5kcmF3UmlnaHQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbkxlZnQgPSB0aGlzLnN0b3BBbmltYXRpb25MZWZ0LmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb25NaWRkbGUgPSB0aGlzLnN0b3BBbmltYXRpb25NaWRkbGUuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvblJpZ2h0ID0gdGhpcy5zdG9wQW5pbWF0aW9uUmlnaHQuYmluZCh0aGlzKTsgXG5cbiAgICAgICAgLy9Jbml0aWFsaXplIHNwYWNlc2hpcFxuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIHRoaXMuc2hpcC5zcmMgPSBcInNyYy9hc3NldHMvYmxhY2tzcGFjZXNoaXAucG5nXCI7IFxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBwb3NpdGlvbiBcbiAgICAgICAgdGhpcy54bCA9IDc5MDsgXG4gICAgICAgIHRoaXMueWwgPSA1MDA7IFxuICAgICAgICB0aGlzLnhyID0gNzkwOyBcbiAgICAgICAgdGhpcy55ciA9IDUwMDsgXG4gICAgICAgIHRoaXMueG0gPSA3OTA7IFxuICAgICAgICB0aGlzLnltID0gNTAwOyBcblxuICAgICAgICAvL2luaXRpYWxpemUgZHhsIGFuZCBkeWwgXG4gICAgICAgIHRoaXMuZHhsID0gLTYwOyBcbiAgICAgICAgdGhpcy5keWwgPSAtMzA7IFxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBkeG0gYW5kIGR5bVxuICAgICAgICB0aGlzLmR4bSA9IDA7IFxuICAgICAgICB0aGlzLmR5bSA9IC03ODsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGR4ciBhbmQgZHlyXG4gICAgICAgIHRoaXMuZHlyID0gLTUwOyBcbiAgICAgICAgdGhpcy5keHIgPSA2MDtcblxuXG5cbiAgICB9XG5cbiAgICBkcmF3U3BhY2VzaGlwKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zaGlwLCA3NTAsIDU1MCwgMTAwLCAxMDApO1xuICAgIH1cblxuICAgIGRyYXdNaXNzbGUocG9zeCwgcG9zeSwgeCx5KSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyBcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvc3gsIHBvc3kpOyBcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvc3grICh4KSwgcG9zeSsoeSkpOyBcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxMzsgXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSAxMDA7IFxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTsgXG5cbiAgICB9XG5cbiAgICBhbmltYXRlTGVmdCh4LCB5KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy55bCArPSB0aGlzLmR5bDsgXG4gICAgICAgIHRoaXMueGwgKz0gdGhpcy5keGw7IFxuICAgICAgICB0aGlzLmRyYXdNaXNzbGUodGhpcy54bCwgdGhpcy55bCwgMjAsIDE3KTsgXG4gICAgICAgIGlmICh0aGlzLnhsIDw9IHggKzEyOCB8fCB0aGlzLnlsIDw9IHkgKyAyNTYpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbkxlZnQoKTsgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFuaW1hdGVNaWRkbGUoeCwgeSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMueW0gKz0gdGhpcy5keW07IFxuICAgICAgICB0aGlzLnhtICs9IHRoaXMuZHhtOyBcbiAgICAgICAgdGhpcy5kcmF3TWlzc2xlKHRoaXMueG0sIHRoaXMueW0sIDAsIDE3KTsgXG4gICAgICAgIGlmICh0aGlzLnltIDw9IHkrMjU2KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb25NaWRkbGUoKTsgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFuaW1hdGVSaWdodCh4LCB5KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy55ciArPSB0aGlzLmR5cjsgXG4gICAgICAgIHRoaXMueHIgKz0gdGhpcy5keHJcbiAgICAgICAgdGhpcy5kcmF3TWlzc2xlKHRoaXMueHIsIHRoaXMueXIsIC0yNSwgMTcpOyBcbiAgICAgICAgaWYgKHRoaXMueXIgPD0geSsyNTYgfHwgdGhpcy54ciA+PSB4ICsgMTI4KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb25SaWdodCgpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGRyYXdMZWZ0KHhwb3MsIHlwb3MpIHtcbiAgICAgICAgdGhpcy5sZWZ0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlTGVmdCh4cG9zLCB5cG9zKVxuICAgICAgICB9LCAgMTAwMC82MCk7XG4gICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGVMZWZ0KHhwb3MsIHlwb3MpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgZHJhd01pZGRsZSh4cG9zLCB5cG9zKSB7XG4gICAgICAgIHRoaXMubWlkZGxlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlTWlkZGxlKHhwb3MsIHlwb3MpXG4gICAgICAgIH0sIDEwMDAvNjApOyBcblxuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRlTWlkZGxlKHhwb3MsIHlwb3MpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG5cbiAgICBkcmF3UmlnaHQoeHBvcywgeXBvcykge1xuICAgICAgICB0aGlzLnJpZ2h0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlUmlnaHQoeHBvcywgeXBvcylcbiAgICAgICAgfSwgMTAwMC82MClcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0ZVJpZ2h0KHhwb3MsIHlwb3MpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0ZU1pc3NsZSgpO1xuICAgIH1cblxuICAgIHN0b3BBbmltYXRpb25MZWZ0KCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmxlZnQpO1xuICAgICAgICB0aGlzLnhsID0gNzkwO1xuICAgICAgICB0aGlzLnlsID0gNTUwOyBcbiAgICB9XG5cbiAgICBzdG9wQW5pbWF0aW9uTWlkZGxlKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm1pZGRsZSk7XG4gICAgICAgIHRoaXMueG0gPSA3OTA7IFxuICAgICAgICB0aGlzLnltID0gNTUwOyBcbiAgICB9XG5cbiAgICBzdG9wQW5pbWF0aW9uUmlnaHQoKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMucmlnaHQpO1xuICAgICAgICB0aGlzLnhyID0gNzkwOyBcbiAgICAgICAgdGhpcy55ciA9IDU1MDtcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=