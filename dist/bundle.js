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
        this.alien = new Image();
        this.alien.src = "src/assets/silverufo.png";

        if (enemy_count < 50) {
            this.latexArr = _easy_arr.easyArr;
        } else {
            this.latexArr = ["\\frac{d}{dx}c^n=nx^{n-1}", "\\frac{\\partial y}{\\partial x}", "\\frac{d}{dx}c^n=nx^{n-1}", "\\frac{d}{dx}e^{ax}=a\\,e^{ax}", "\\frac{d}{dx}\\ln(x)=\\frac{1}{x}", "\\frac{d}{dx}\\sin x=\\cos x", "\\bigcup_{i=1}^{n}{X_i}", "\\bigcap_{i=1}^{n}{X_i}", "\\int_{0}^{\\pi} \\sin x \\ dx = 2", "\\left(x-1\\right)\\left(x+3\\right)", "\\lim_{a \\rightarrow b}", "\\bigvee_a^b x", "\\sum_a^b x"];
        }

        // Initialize latex 
        this.latex = this.latexArr[Math.floor(Math.random() * this.latexArr.length)];
    }

    _createClass(Enemy, [{
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
            this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 150, 170);
            this.ctx.font = "30px Times New Roman";
            this.ctx.fillStyle = "white";
            this.ctx.fillText(this.latex, this.x + 75, this.y + 85);
            this.ctx.textAlign = "center";
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
            // this.test = requestAnimationFrame(this.draw)
        }
    }, {
        key: "animateExplosion",
        value: function animateExplosion() {
            this.animation = setInterval(this.draw, 10);
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
    }

    _createClass(Game, [{
        key: 'renderEnemies',
        value: function renderEnemies() {
            debugger;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < this.enemyArr.length; i++) {
                this.enemyArr[i].draw();
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
                new _explosion2.default(enemy.x, enemy.y);
            }
            this.spaceship.drawSpaceship();
            // this.time = requestAnimationFrame(this.renderEnemies)

        }
    }, {
        key: 'lose',
        value: function lose() {
            new _explosion2.default(730, 510);
            this.end();
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
            for (var i = 0; i < 1; i++) {
                this.enemyArr.push(new _enemy2.default(this.asteroid));
            }
        }
    }, {
        key: 'start',
        value: function start() {
            this.timer = setInterval(this.renderEnemies, 1000 / 60);
            // this.renderEnemies();
        }
    }, {
        key: 'end',
        value: function end() {
            window.clearInterval(this.timer);
            // window.cancelAnimationFrame(this.time);
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
        this.stopAnimation = this.stopAnimation.bind(this);

        //Initialize spaceship
        this.ship = new Image();
        this.ship.src = "src/assets/blackspaceship.png";

        //initialize position 
        this.xl = 780;
        this.yl = 550;
        this.xr = 780;
        this.yr = 550;
        this.xm = 780;
        this.ym = 550;

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
            this.ctx.lineWidth = 6;
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
                this.stopAnimation();
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
                this.stopAnimation();
            }
        }
    }, {
        key: "animateRight",
        value: function animateRight(x, y) {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.yr += this.dyr;
            this.xr += this.dxr;
            this.drawMissle(this.xr, this.yr, -20, 17);
            if (this.yr <= y + 256 || this.xr >= x + 128) {
                this.stopAnimation();
            }
        }
    }, {
        key: "drawLeft",
        value: function drawLeft(xpos, ypos) {
            var _this = this;

            this.left = setInterval(function () {
                _this.animateLeft(xpos, ypos);
            }, 10);
        }
    }, {
        key: "drawMiddle",
        value: function drawMiddle(xpos, ypos) {
            var _this2 = this;

            this.middle = setInterval(function () {
                _this2.animateMiddle(xpos, ypos);
            }, 10);
        }
    }, {
        key: "drawRight",
        value: function drawRight(xpos, ypos) {
            var _this3 = this;

            this.right = setInterval(function () {
                _this3.animateRight(xpos, ypos);
            }, 10);
            // this.animateMissle();
        }
    }, {
        key: "stopAnimation",
        value: function stopAnimation() {
            window.clearInterval(this.left);
            window.clearInterval(this.right);
            window.clearInterval(this.middle);
            this.xr = 780;
            this.xm = 780;
            this.xl = 780;
            this.yr = 550;
            this.ym = 550;
            this.yl = 550;
        }
    }]);

    return Spaceship;
}();

exports.default = Spaceship;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWFzeV9hcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9leHBsb3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwYWNlc2hpcC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsInNldEltbWVkaWF0ZSIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwiZG9jdW1lbnQiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIndpbmRvdyIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJpdGVtIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiR2FtZSIsImJhY2tncm91bmQiLCJMYXlvdXQiLCJzcGxhc2hTY3JlZW4iLCJjYW52YXMiLCJzdHlsZSIsImRpc3BsYXkiLCJzdGFydCIsImVhc3lBcnIiLCJlbmVteV9jb3VudCIsIkVuZW15IiwiYXN0ZXJvaWQiLCJkcmF3RW5lbWllcyIsImJpbmQiLCJkcmF3QXN0ZXJvaWQiLCJhbmltYXRlRW5lbWllcyIsImRyYXciLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJwb3MiLCJ4IiwieSIsImR4IiwiZHkiLCJhbGllbiIsIkltYWdlIiwic3JjIiwibGF0ZXhBcnIiLCJsYXRleCIsImZsb29yIiwiZHJhd0ltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwidGV4dEFsaWduIiwieF9hbGllbiIsImR4X2FsaWVuIiwieV9hbGllbiIsImR5X2FsaWVuIiwiRXhwbG9zaW9uIiwiYW5pbWF0ZUV4cGxvc2lvbiIsImRyYXdFeHBsb3Npb24iLCJpbWciLCJzeCIsInN5IiwiZXhwbG9zaW9uIiwic3RvcEFuaW1hdGlvbiIsImFuaW1hdGlvbiIsInJlbmRlckVuZW1pZXMiLCJwb3B1bGF0ZUVuZW1pZXMiLCJlbmVteUFyciIsImZpZWxkIiwiSW5wdXQiLCJpbnB1dCIsImVudGVyUHJlc3NlZCIsInNjb3JlIiwiaHRtbEVsZW1lbnQiLCJtYXRoRmllbGQiLCJNUSIsIk1hdGhGaWVsZCIsInNwYWNlc2hpcCIsIlNwYWNlc2hpcCIsImxvc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNsZWFyUmVjdCIsInZhbHVlIiwidmVyaWZ5IiwiZW5lbXkiLCJpbmRleCIsInBhcnNlSW50IiwiZHJhd0xlZnQiLCJkcmF3TWlkZGxlIiwiZHJhd1JpZ2h0Iiwic3BsaWNlIiwiZHJhd1NwYWNlc2hpcCIsImVuZCIsInlvdXJfc2NvcmUiLCJpbm5lckhUTUwiLCJ0aW1lciIsIm9uQ2hhbmdlIiwiYXJyIiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd01pc3NsZSIsImFuaW1hdGVMZWZ0IiwiYW5pbWF0ZU1pZGRsZSIsImFuaW1hdGVSaWdodCIsInNoaXAiLCJ4bCIsInlsIiwieHIiLCJ5ciIsInhtIiwieW0iLCJkeGwiLCJkeWwiLCJkeG0iLCJkeW0iLCJkeXIiLCJkeHIiLCJwb3N4IiwicG9zeSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Qmx1ciIsInN0cm9rZSIsInhwb3MiLCJ5cG9zIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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S0osRUFBTCxHQUFVLEdBQVY7QUFDQSxpQkFBS0csRUFBTCxHQUFVLEdBQVY7QUFDQSxpQkFBS0UsRUFBTCxHQUFVLEdBQVY7QUFDQSxpQkFBS0osRUFBTCxHQUFVLEdBQVY7QUFFSDs7Ozs7O2tCQTdIZ0JwQyxTIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IExheW91dCBmcm9tICcuL2pzL2xheW91dCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IFNwYWNlc2hpcCBmcm9tICcuL2pzL3NwYWNlc2hpcCc7IFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpOyBcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7IFxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IExheW91dCgpO1xuICAgICAgICBjb25zdCBzcGxhc2hTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVzY3JlZW5cIik7IFxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy13cmFwcGVyXCIpOyBcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHNwbGFzaFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gICAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICB9KVxuICAgIFxuXG59KSIsImV4cG9ydCBjb25zdCBlYXN5QXJyID0gW1xuICAgIFwiXFxcXGFyY3RhblwiLFxuICAgIFwiXFxcXGFuZ2xlXCIsIFxuICAgIFwiXFxcXGFwcHJveFwiLFxuICAgIFwiXFxcXGFyY2Nvc1wiLCBcbiAgICBcIlxcXFxhcmNzaW5cIiwgXG4gICAgXCJcXFxcYWxlcGhcIiwgXG4gICAgXCJcXFxcYW1hbGdcIiwgXG4gICAgXCJcXFxcYmljYXBcIiwgXG4gICAgXCJcXFxcYmlnY2lyY1wiLCBcbiAgICBcIlxcXFxiaWdjdXBcIiwgXG4gICAgXCJcXFxcYmlnZG90XCIsIFxuICAgIFwiXFxcXGJpZ29wbHVzXCIsIFxuICAgIFwiXFxcXGJpZ290aW1lc1wiLCBcbiAgICBcIlxcXFxiaWd0cmlhbmdsZWRvd25cIiwgXG4gICAgXCJcXFxcYmlndHJpYW5nbGV1cFwiLCBcbiAgICBcIlxcXFxiaWdzY3VwXCIsIFxuICAgIFwiXFxcXGJpZ3VwbHVzXCIsIFxuICAgIFwiXFxcXGJpZ3ZlZVwiLCBcbiAgICBcIlxcXFxiaWd3ZWRnZVwiLCBcbiAgICBcIlxcXFxib3RcIiwgXG4gICAgXCJcXFxcY2FwXCIsIFxuICAgIFwiXFxcXGNoaVwiLCBcbiAgICBcIlxcXFxjaXJjXCIsIFxuICAgIFwiXFxcXGNvbmdcIiwgXG4gICAgXCJcXFxcY29wcm9kXCIsIFxuICAgIFwiXFxcXGNsdWJzdWl0XCIsIFxuICAgIFwiXFxcXGVwc2lsb25cIiwgXG4gICAgXCJcXFxcZXF1aXZcIiwgXG4gICAgXCJcXFxcZXRhXCIsIFxuICAgIFwiXFxcXGV4aXN0c1wiLCBcbiAgICBcIlxcXFxmYm94e2hlbGxvfVwiLCBcbiAgICBcIlxcXFxmb3JhbGxcIiwgXG4gICAgXCJcXFxcZnJvd25cIiwgXG4gICAgXCJcXFxcZ2FtbWFcIiwgXG4gICAgXCJcXFxcZ2VcIiwgXG4gICAgXCJcXFxcZ2VxXCIsIFxuICAgIFwiXFxcXGdldHNcIiwgXG4gICAgXCJcXFxcZ2dcIiwgXG4gICAgXCJcXFxcaWZmXCIsIFxuICAgIFwiXFxcXEltXCIsIFxuICAgIFwiXFxcXGltYXRoXCIsIFxuICAgIFwiXFxcXGluXCIsIFxuICAgIFwiXFxcXGlcIiwgXG4gICAgXCJcXFxcaGVhcnRzdWl0XCIsIFxuICAgIFwiXFxcXGlvdGFcIiwgXG4gICAgXCJcXFxcaW50XCIsIFxuICAgIFwiXFxcXGxlcVwiLCBcbiAgICBcIlxcXFxsZmxvb3JcIixcbiAgICBcIlxcXFxsaW1cIiwgXG4gICAgXCJcXFxcbGhkXCIsIFxuICAgIFwiXFxcXGxsXCIsIFxuICAgIFwiXFxcXGxuXCIsIFxuICAgIFwiXFxcXGxub3RcIiwgXG4gICAgXCJcXFxcbG9nXCIsIFxuICAgIFwiXFxcXGxvbmdsZWZ0YXJyb3dcIiwgXG4gICAgXCJcXFxcbG9yXCIsIFxuICAgIFwiXFxcXGxxXCIsIFxuICAgIFwiXFxcXGxicmFjZSBcXFxccmJyYWNlXCIsIFxuICAgIFwiXFxcXGthcHBhXCIsIFxuICAgIFwiXFxcXGtlclwiLCBcbiAgICBcIlxcXFxsZWZ0aGFycG9vbmRvd25cIiwgXG4gICAgXCJcXFxcbGVmdGhhcnBvb251cFwiLCBcbiAgICBcIlxcXFxtb2RlbHNcIiwgXG4gICAgXCJcXFxcbWlkXCIsIFxuICAgIFwiXFxcXG1pblwiLCBcbiAgICBcIlxcXFxuZWFycm93XCIsIFxuICAgIFwiXFxcXG5lcVwiLCBcbiAgICBcIlxcXFxuYWJsYVwiLCBcbiAgICBcIlxcXFxtcFwiLCBcbiAgICBcIlxcXFxub3RcIiwgXG4gICAgXCJcXFxcbnVcIiwgXG4gICAgXCJcXFxcbndhcnJvd1wiLCBcbiAgICBcIlxcXFxvXCIsIFxuICAgIFwiXFxcXG9pbnRcIiwgXG4gICAgXCJcXFxcb2VcIiwgXG4gICAgXCJcXFxcb2RvdFwiLCBcbiAgICBcIlxcXFxvc2xhc2hcIiwgXG4gICAgXCJcXFxcb3RpbWVzXCIsIFxuICAgIFwiXFxcXHBlcnBcIiwgXG4gICAgXCJcXFxccGhpXCIsIFxuICAgIFwiXFxcXHBpXCIsIFxuICAgIFwiXFxcXG92ZXJsaW5le3RleHR9XCIsIFxuICAgIFwiXFxcXFBcIiwgXG4gICAgXCJcXFxccGFyYWxsZWxcIiwgXG4gICAgXCJcXFxccHJvZFwiLCBcbiAgICBcIlxcXFxwcmltZVwiLCBcbiAgICBcIlxcXFxQclwiLCBcbiAgICBcIlxcXFxwcm9wdG9cIiwgXG4gICAgXCJcXFxccHNcIiwgXG4gICAgXCJcXFxccHNpXCIsIFxuICAgIFwiXFxcXFJlXCIsIFxuICAgIFwiXFxcXFNcIiwgXG4gICAgXCJcXFxcc2VhcnJvd1wiLCBcbiAgICBcIlxcXFxzZWMgeFwiLCBcbiAgICBcIlxcXFxyZmxvb3JcIiwgXG4gICAgXCJcXFxccmhvXCIsIFxuICAgIFwiXFxcXHJpZ2h0YXJyb3dcIiwgXG4gICAgXCJcXFxcc2ZcIiwgXG4gICAgXCJcXFxcc2hhcnBcIiwgXG4gICAgXCJcXFxcc2ltXCIsIFxuICAgIFwiXFxcXHNpbWVxXCIsIFxuICAgIFwiXFxcXHNpbiB4XCIsIFxuICAgIFwiXFxcXHNpbmhcIiwgXG4gICAgXCJcXFxcc21hbGxpbnRcIixcbiAgICBcIlxcXFxzbWlsZVwiLCBcbiAgICBcIlxcXFxzcGFkZXN1aXRcIiwgXG4gICAgXCJcXFxcc3FjYXBcIiwgXG4gICAgXCJcXFxcc3RhclwiLCBcbiAgICBcIlxcXFxzdXJkXCIsIFxuICAgIFwiXFxcXHN3YXJyb3dcIiwgXG4gICAgXCJcXFxcdGFuaFwiLCBcbiAgICBcIlxcXFx0YXVcIiwgXG4gICAgXCJcXFxcdGFuIHhcIiwgXG4gICAgXCJcXFxcdGhldGFcIiwgXG4gICAgXCJcXFxcc3Vic2V0XCIsIFxuICAgIFwiXFxcXHN1YnNldGVxXCIsIFxuICAgIFwiXFxcXHN1Y2NlcVwiLCBcbiAgICBcIlxcXFxzdXBzZXRcIiwgXG4gICAgXCJcXFxcc3VwXCIsIFxuICAgIFwiXFxcXHZhcnBoaVwiLFxuICAgIFwiXFxcXHZhcnJob1wiLCBcbiAgICBcIlxcXFx2YXJzaWdtYVwiLCBcbiAgICBcIlxcXFx2ZGFzaFwiLCBcbiAgICBcIlxcXFx2ZG90c1wiLCBcbiAgICBcIlxcXFx2ZWMgY1wiLCBcbiAgICBcIlxcXFx3ZWRnZVwiLCBcbiAgICBcIlxcXFx3cFwiLCBcbiAgICBcIlxcXFx3clwiLCBcbiAgICBcIlxcXFx4aVwiLCBcbiAgICBcIlxcXFx5ZWFyXCIsIFxuICAgIFwiXFxcXHVubGhkXCIsIFxuICAgIFwiXFxcXHRyaWFuZ2xlXCIsIFxuICAgIFwiXFxcXHRyaWFuZ2xlbGVmdFwiLCBcbiAgICBcIlxcXFx0cmlhbmdsZXJpZ2h0XCIsIFxuICAgIFwiXFxcXHZcIiwgXG4gICAgXCJcXFxcdmFyZXBzaWxvblwiLCBcbiAgICBcIlxcXFxib3d0aWVcIiwgXG4gICAgXCJcXFxcc3BhZGVzdWl0XCIsIFxuICAgIFwiXFxcXERpYW1vbmRcIiwgXG4gICAgXCJcXFxcaGVhcnRzdWl0XCJcbl0iLCJpbXBvcnQgeyBlYXN5QXJyIH0gZnJvbSBcIi4vZWFzeV9hcnJcIjtcbnZhciBlbmVteV9jb3VudCA9IDA7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKGFzdGVyb2lkKSB7XG4gICAgICAgIC8vYmluZCBmdW5jdGlvbnNcbiAgICAgICAgZW5lbXlfY291bnQrKzsgXG5cbiAgICAgICAgdGhpcy5kcmF3RW5lbWllcyA9IHRoaXMuZHJhd0VuZW1pZXMuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkID0gdGhpcy5kcmF3QXN0ZXJvaWQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5kcmF3QWxpZW4gPSB0aGlzLmRyYXdBbGllbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbmVtaWVzID0gdGhpcy5hbmltYXRlRW5lbWllcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTsgXG5cbiAgICAgICAgLy9nZXQgYW5kIHNldCBjYW52YXNcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwOyBcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9zZXQgaW5pdGlhbCBwb3NpdGlvbnMgb2YgYXN0ZXJvaWRcbiAgICAgICAgY29uc3QgcG9zID0gW1swLDBdLCBbNzIwLCAwXSwgWzEzMDAsIDBdXTtcbiAgICAgICAgdGhpcy5yYW5kb20gPSBlbmVteV9jb3VudCUzOyBcbiAgICAgICAgW3RoaXMueCwgdGhpcy55XSA9IHBvc1t0aGlzLnJhbmRvbV07XG5cbiAgICAgICAgLy9zZXQgZGVsdGEgdmFsdWVzIGZvciBhbmltYXRpb24gXG4gICAgICAgIGlmICh0aGlzLnJhbmRvbSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC41OyBcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtLjQxNztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmRvbSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5keCA9IDA7IFxuICAgICAgICAgICAgdGhpcy5keSA9IC41OyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtLjMzOyBcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtLjMzXG4gICAgICAgIH1cblxuICAgICAgICAvL2luaXRpYWxpemUgYWxpZW4gYW5kIGFzdGVyb2lkIHBob3RvcyBcbiAgICAgICAgLy8gdGhpcy5hc3Rlcm9pZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLmFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZCA9IGFzdGVyb2lkO1xuICAgICAgICB0aGlzLmFsaWVuID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuYWxpZW4uc3JjID0gXCJzcmMvYXNzZXRzL3NpbHZlcnVmby5wbmdcIlxuXG4gICAgICAgIGlmIChlbmVteV9jb3VudCA8IDUwKSB7XG4gICAgICAgICAgICB0aGlzLmxhdGV4QXJyID0gZWFzeUFycjsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhdGV4QXJyID0gXG4gICAgICAgICAgICBbXCJcXFxcZnJhY3tkfXtkeH1jXm49bnhee24tMX1cIiwgXG4gICAgICAgICAgICBcIlxcXFxmcmFje1xcXFxwYXJ0aWFsIHl9e1xcXFxwYXJ0aWFsIHh9XCIsIFxuICAgICAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1jXm49bnhee24tMX1cIiwgXG4gICAgICAgICAgICBcIlxcXFxmcmFje2R9e2R4fWVee2F4fT1hXFxcXCxlXntheH1cIixcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9XFxcXGxuKHgpPVxcXFxmcmFjezF9e3h9XCIsXG4gICAgICAgICAgICBcIlxcXFxmcmFje2R9e2R4fVxcXFxzaW4geD1cXFxcY29zIHhcIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ2N1cF97aT0xfV57bn17WF9pfVwiLFxuICAgICAgICAgICAgXCJcXFxcYmlnY2FwX3tpPTF9XntufXtYX2l9XCIsXG4gICAgICAgICAgICBcIlxcXFxpbnRfezB9XntcXFxccGl9IFxcXFxzaW4geCBcXFxcIGR4ID0gMlwiLFxuICAgICAgICAgICAgXCJcXFxcbGVmdCh4LTFcXFxccmlnaHQpXFxcXGxlZnQoeCszXFxcXHJpZ2h0KVwiLFxuICAgICAgICAgICAgXCJcXFxcbGltX3thIFxcXFxyaWdodGFycm93IGJ9XCIsXG4gICAgICAgICAgICBcIlxcXFxiaWd2ZWVfYV5iIHhcIiwgXG4gICAgICAgICAgICBcIlxcXFxzdW1fYV5iIHhcIl1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgbGF0ZXggXG4gICAgICAgIHRoaXMubGF0ZXggPSB0aGlzLmxhdGV4QXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGF0ZXhBcnIubGVuZ3RoKV07XG5cblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVuZW1pZXMoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhd0VuZW1pZXMoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIHZhciBsYXRleCA9IFwiXFxcXGxlZnQoXFxcXGZyYWN7MX17XFxcXHNxcnR7eH19XFxcXHJpZ2h0KVwiXG4gICAgICAgIC8vIHZhciBsYXRleDIgPSBcIkYoeCkmPVxcXFxpbnReYV9iXFxcXGZyYWN7MX17M314XjNcIlxuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuYXN0ZXJvaWQud2lkdGgsIHRoaXMuYXN0ZXJvaWQuaGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCB0aGlzLmFsaWVuLndpZHRoLCB0aGlzLmFsaWVuLmhlaWdodCk7XG4gICAgICAgIC8vIGNvbnN0IGFzdGVyb2lkID0gbmV3IEltYWdlKCk7IFxuICAgICAgICAvLyBhc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7IFxuICAgICAgICAvLyBjb25zdCBhbGllbiA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYWxpZW4uc3JjID0gXCJzcmMvYXNzZXRzL3NpbHZlcnVmby5wbmdcIlxuICAgICAgICAvLyBhc3Rlcm9pZC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDYsIDQ5LCAyMTAsIDE5MCwgdGhpcy54LCB0aGlzLnksIDY0LCA3MC43Myk7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQwLCA1MCwgMTcwLCAxNzAsIHRoaXMueCwgdGhpcy55LCAyNTYsIDI1NikgIFxuICAgICAgICAvLyB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleCwgdGhpcy54LTIwLCB0aGlzLnkrMTMwKTtcbiAgICAgICAgdGhpcy5kcmF3QXN0ZXJvaWQoKTtcbiAgICAgICAgLy8gdGhpcy5kcmF3QWxpZW4oKTtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gYWxpZW4ub25sb2FkID0gKCAoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhbGllbiwgdGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIDI1MCwgMjUwKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjsgXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KGxhdGV4MiwgdGhpcy54X2FsaWVuLTIwLCB0aGlzLnlfYWxpZW4rMTUwKTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBkcmF3QXN0ZXJvaWQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFzdGVyb2lkLCA0MCwgNTAsIDE3MCwgMTcwLCB0aGlzLngsIHRoaXMueSwgMTUwLCAxNzApXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggVGltZXMgTmV3IFJvbWFuXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5sYXRleCwgdGhpcy54ICsgNzUsIHRoaXMueSArIDg1KTtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB9XG5cbiAgICAvLyBkcmF3QWxpZW4oKSB7XG4gICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgIC8vICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4MiwgdGhpcy54X2FsaWVuIC0gMjAsIHRoaXMueV9hbGllbiArIDE1MCk7XG4gICAgLy8gfVxuXG5cblxuICAgIFxuXG4gICAgYW5pbWF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7IFxuICAgICAgICB0aGlzLnhfYWxpZW4gKz0gdGhpcy5keF9hbGllbjsgXG4gICAgICAgIHRoaXMueV9hbGllbiArPSB0aGlzLmR5X2FsaWVuOyBcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMjU2IHx8IHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDsgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodC0gMjU2IHx8IHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtdGhpcy5keTsgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueF9hbGllbiA+IHRoaXMuY2FudmFzLndpZHRoLTI1MCB8fCB0aGlzLnhfYWxpZW4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4X2FsaWVuID0gLXRoaXMuZHhfYWxpZW5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55X2FsaWVuID4gdGhpcy5jYW52YXMuaGVpZ2h0LTI1MCB8fCB0aGlzLnlfYWxpZW4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5X2FsaWVuID0gLXRoaXMuZHlfYWxpZW5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdFbmVtaWVzKCk7IFxuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlRW5lbWllcyk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUV4cGxvc2lvbiA9IHRoaXMuYW5pbWF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3RXhwbG9zaW9uID0gdGhpcy5kcmF3RXhwbG9zaW9uLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTsgXG5cblxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSAoKTsgXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwic3JjL2Fzc2V0cy9leHBsb3Npb24ucG5nXCI7XG5cbiAgICAgICAgLy9pbml0aWFsaXplIGNhbnZhcyBcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA4MDA7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7IFxuICAgICAgICB0aGlzLnN4ID0gMDsgXG4gICAgICAgIHRoaXMuc3kgPSAwOyBcbiAgICAgICAgdGhpcy5keCA9IDI1NjsgXG4gICAgICAgIHRoaXMuZHkgPSAyNTY7IFxuICAgICAgICB0aGlzLmFuaW1hdGVFeHBsb3Npb24oKTsgXG4gICAgfVxuXG4gICAgZHJhd0V4cGxvc2lvbigpIHtcbiAgICAgICB0aGlzLmV4cGxvc2lvbiA9IHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5zeCwgdGhpcy5zeSwgMjU2LCAyNTYsIHRoaXMueC03NSwgdGhpcy55LCAyNTYsIDI1NilcbiAgICB9XG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5keDsgXG4gICAgICAgIGlmICh0aGlzLnN4ID09PSAyMDQ4KSB7XG4gICAgICAgICAgICB0aGlzLnN4ID0gMDsgXG4gICAgICAgICAgICB0aGlzLnN5ICs9IHRoaXMuZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3kgPT09IDE1MzYgJiYgdGhpcy5zeCA9PT0gMjA0OCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0V4cGxvc2lvbigpXG4gICAgICAgIC8vIHRoaXMudGVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gICAgfSAgIFxuICAgIFxuICAgIGFuaW1hdGVFeHBsb3Npb24oKSB7XG4gICAgICAgdGhpcy5hbmltYXRpb24gPSBzZXRJbnRlcnZhbCh0aGlzLmRyYXcsIDEwKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgc3RvcEFuaW1hdGlvbigpIHtcbiAgICAgICAgLy8gd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5hbmltYXRpb24pO1xuICAgICAgICB0aGlzLnN4ID0gMDsgXG4gICAgICAgIHRoaXMuc3kgPSAwOyBcbiAgICB9XG59IiwiaW1wb3J0IEVuZW15IGZyb20gJy4vZW5lbXknO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCB9IGZyb20gJ3RpbWVycyc7XG5pbXBvcnQgU3BhY2VzaGlwIGZyb20gJy4vc3BhY2VzaGlwJztcbmltcG9ydCBFeHBsb3Npb24gZnJvbSAnLi9leHBsb3Npb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIHRoaXMucmVuZGVyRW5lbWllcyA9IHRoaXMucmVuZGVyRW5lbWllcy5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUVuZW1pZXMgPSB0aGlzLnBvcHVsYXRlRW5lbWllcy5iaW5kKHRoaXMpO1xuICAgICAgICAvL2dldCBhbmQgc2V0IGNhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9Qb3B1bGF0ZSBlbmVtaWVzXG4gICAgICAgIHRoaXMuZW5lbXlBcnIgPSBbbmV3IEVuZW15KHRoaXMuYXN0ZXJvaWQpXTsgXG4gICAgICAgIHNldEludGVydmFsKHRoaXMucG9wdWxhdGVFbmVtaWVzLCAyMDAwKTsgXG5cbiAgICAgICAgLy9DcmVhdGUgbmV3IGluc3RhbmNlIG9mIGlucHV0IGZpZWxkIFxuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IElucHV0KCk7XG4gICAgICAgIHRoaXMuZmllbGQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZW50ZXJQcmVzc2VkKGUsIHRoaXMuZW5lbXlBcnIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5zdGFudGlhdGUgc2NvcmUgXG4gICAgICAgIHRoaXMuc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpOyBcblxuICAgICAgICAvLyBpbml0aXRpYWxpemUgbWF0aGZpZWxkIFxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGhGaWVsZCcpO1xuICAgICAgICB0aGlzLm1hdGhGaWVsZCA9IE1RLk1hdGhGaWVsZCh0aGlzLmh0bWxFbGVtZW50KTsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIHNwYWNlc2hpcCBcbiAgICAgICAgdGhpcy5zcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7IFxuXG5cbiAgICAgICAgLy9sb3NlIGJ1dHRvbiBcbiAgICAgICAgY29uc3QgbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWVcIik7XG4gICAgICAgIGxvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIHJlbmRlckVuZW1pZXMoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW15QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QXJyW2ldLmRyYXcoKTsgXG4gICAgICAgICAgICBpZiAodGhpcy5lbmVteUFycltpXS5yYW5kb20gPT09IDAgJiYgKHRoaXMuZW5lbXlBcnJbaV0ueCA+PSA2MzAgfHwgdGhpcy5lbmVteUFycltpXS55ID49NTAwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVuZW15QXJyW2ldLnJhbmRvbSA9PT0gMSAmJiB0aGlzLmVuZW15QXJyW2ldLnkgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5lbXlBcnJbaV0ucmFuZG9tID09PSAyICYmICh0aGlzLmVuZW15QXJyW2ldLnggPD0gODAwIHx8IHRoaXMuZW5lbXlBcnJbaV0ueSA+PSA1NTApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hdGhGaWVsZC5sYXRleCh0aGlzLmZpZWxkLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuZmllbGQudmVyaWZ5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbXlBcnJbdGhpcy5maWVsZC5pbmRleF1cbiAgICAgICAgICAgIHRoaXMuc2NvcmUudmFsdWUgPSBgJHtwYXJzZUludCh0aGlzLnNjb3JlLnZhbHVlLCAxMCkgKyAxfWBcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmVyaWZ5ID0gZmFsc2U7IFxuICAgICAgICAgICAgaWYgKGVuZW15LnJhbmRvbSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLmRyYXdMZWZ0KGVuZW15LngsIGVuZW15LnkpOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5lbXkucmFuZG9tID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd01pZGRsZShlbmVteS54LCBlbmVteS55KTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLmRyYXdSaWdodChlbmVteS54LCBlbmVteS55KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZW15QXJyLnNwbGljZSh0aGlzLmZpZWxkLmluZGV4LCAxKTsgXG4gICAgICAgICAgICAvLyB0aGlzLnNwYWNlc2hpcC5hbmltYXRlTWlzc2xlKCk7XG4gICAgICAgICAgICBuZXcgRXhwbG9zaW9uKGVuZW15LngsIGVuZW15LnkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1NwYWNlc2hpcCgpOyBcbiAgICAgICAgLy8gdGhpcy50aW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyRW5lbWllcylcblxuXG4gICAgfVxuXG4gICAgbG9zZSgpIHtcbiAgICAgICAgbmV3IEV4cGxvc2lvbig3MzAsIDUxMCk7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91LWxvc2VcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nLWlucHV0LWZpZWxkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRoRmllbGRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gICAgICAgIGNvbnN0IHlvdXJfc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXItc2NvcmVcIik7XG4gICAgICAgIHlvdXJfc2NvcmUuaW5uZXJIVE1MID0gYFlvdSBzY29yZWQgJHt0aGlzLnNjb3JlLnZhbHVlfSFgOyBcbiAgICAgICAgeW91cl9zY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjsgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWVcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QXJyLnB1c2gobmV3IEVuZW15KHRoaXMuYXN0ZXJvaWQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5yZW5kZXJFbmVtaWVzLCAgMTAwMC82MCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyRW5lbWllcygpO1xuICAgIH1cblxuICAgIGVuZCgpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIC8vIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGluZy1pbnB1dC1maWVsZFwiKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbnRlclByZXNzZWQgPSB0aGlzLmVudGVyUHJlc3NlZC5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbmRleCA9IG51bGw7IFxuICAgICAgICB0aGlzLnZlcmlmeSA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICBlbnRlclByZXNzZWQoZSwgYXJyKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZlcmlmeSA9IGZhbHNlOyBcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5sYXRleCA9PT0gdGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnkgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBcIjEzXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYWtlTGF5b3V0KCk7IFxuICAgIH1cblxuXG4gICAgbWFrZUxheW91dCgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7IFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gODAwOyBcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygxNTAsIDc1LCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYWNlc2hpcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9HcmFiIGNhbnZhcyBcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKTsgXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuZHJhd1NwYWNlc2hpcCA9IHRoaXMuZHJhd1NwYWNlc2hpcC5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3TWlzc2xlID0gdGhpcy5kcmF3TWlzc2xlLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmFuaW1hdGVMZWZ0ID0gdGhpcy5hbmltYXRlTGVmdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGVNaWRkbGUgPSB0aGlzLmFuaW1hdGVNaWRkbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlUmlnaHQgPSB0aGlzLmFuaW1hdGVSaWdodC5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3TGVmdCA9IHRoaXMuZHJhd0xlZnQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd01pZGRsZSA9IHRoaXMuZHJhd01pZGRsZS5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3UmlnaHQgPSB0aGlzLmRyYXdSaWdodC5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gdGhpcy5zdG9wQW5pbWF0aW9uLmJpbmQodGhpcyk7IFxuXG4gICAgICAgIC8vSW5pdGlhbGl6ZSBzcGFjZXNoaXBcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IEltYWdlKCk7IFxuICAgICAgICB0aGlzLnNoaXAuc3JjID0gXCJzcmMvYXNzZXRzL2JsYWNrc3BhY2VzaGlwLnBuZ1wiOyBcblxuICAgICAgICAvL2luaXRpYWxpemUgcG9zaXRpb24gXG4gICAgICAgIHRoaXMueGwgPSA3ODA7IFxuICAgICAgICB0aGlzLnlsID0gNTUwOyBcbiAgICAgICAgdGhpcy54ciA9IDc4MDsgXG4gICAgICAgIHRoaXMueXIgPSA1NTA7IFxuICAgICAgICB0aGlzLnhtID0gNzgwOyBcbiAgICAgICAgdGhpcy55bSA9IDU1MDsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGR4bCBhbmQgZHlsIFxuICAgICAgICB0aGlzLmR4bCA9IC02MDsgXG4gICAgICAgIHRoaXMuZHlsID0gLTMwOyBcblxuICAgICAgICAvL2luaXRpYWxpemUgZHhtIGFuZCBkeW1cbiAgICAgICAgdGhpcy5keG0gPSAwOyBcbiAgICAgICAgdGhpcy5keW0gPSAtNzg7IFxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBkeHIgYW5kIGR5clxuICAgICAgICB0aGlzLmR5ciA9IC01MDsgXG4gICAgICAgIHRoaXMuZHhyID0gNjA7XG5cblxuXG4gICAgfVxuXG4gICAgZHJhd1NwYWNlc2hpcCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc2hpcCwgNzUwLCA1NTAsIDEwMCwgMTAwKTtcbiAgICB9XG5cbiAgICBkcmF3TWlzc2xlKHBvc3gsIHBvc3ksIHgseSkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb3N4LCBwb3N5KTsgXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb3N4K3gsIHBvc3kreSk7IFxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDY7IFxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dCbHVyID0gMTAwOyBcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7IFxuICAgIH1cblxuICAgIGFuaW1hdGVMZWZ0KHgsIHkpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnlsICs9IHRoaXMuZHlsOyBcbiAgICAgICAgdGhpcy54bCArPSB0aGlzLmR4bDsgXG4gICAgICAgIHRoaXMuZHJhd01pc3NsZSh0aGlzLnhsLCB0aGlzLnlsLCAyMCwgMTcpOyBcbiAgICAgICAgaWYgKHRoaXMueGwgPD0geCArMTI4IHx8IHRoaXMueWwgPD0geSArIDI1Nikge1xuICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhbmltYXRlTWlkZGxlKHgsIHkpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnltICs9IHRoaXMuZHltOyBcbiAgICAgICAgdGhpcy54bSArPSB0aGlzLmR4bTsgXG4gICAgICAgIHRoaXMuZHJhd01pc3NsZSh0aGlzLnhtLCB0aGlzLnltLCAwLCAxNyk7IFxuICAgICAgICBpZiAodGhpcy55bSA8PSB5KzI1Nikge1xuICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhbmltYXRlUmlnaHQoeCwgeSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMueXIgKz0gdGhpcy5keXI7IFxuICAgICAgICB0aGlzLnhyICs9IHRoaXMuZHhyXG4gICAgICAgIHRoaXMuZHJhd01pc3NsZSh0aGlzLnhyLCB0aGlzLnlyLCAtMjAsIDE3KTsgXG4gICAgICAgIGlmICh0aGlzLnlyIDw9IHkrMjU2IHx8IHRoaXMueHIgPj0geCArIDEyOCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZHJhd0xlZnQoeHBvcywgeXBvcykge1xuICAgICAgICB0aGlzLmxlZnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVMZWZ0KHhwb3MsIHlwb3MpXG4gICAgICAgIH0sICAxMCk7XG4gICAgfVxuXG4gICAgZHJhd01pZGRsZSh4cG9zLCB5cG9zKSB7XG4gICAgICAgIHRoaXMubWlkZGxlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlTWlkZGxlKHhwb3MsIHlwb3MpXG4gICAgICAgIH0sIDEwKTsgXG4gICAgfVxuXG5cbiAgICBkcmF3UmlnaHQoeHBvcywgeXBvcykge1xuICAgICAgICB0aGlzLnJpZ2h0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlUmlnaHQoeHBvcywgeXBvcylcbiAgICAgICAgfSwgMTApXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0ZU1pc3NsZSgpO1xuICAgIH1cblxuICAgIHN0b3BBbmltYXRpb24oKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubGVmdCk7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMucmlnaHQpO1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm1pZGRsZSk7XG4gICAgICAgIHRoaXMueHIgPSA3ODA7IFxuICAgICAgICB0aGlzLnhtID0gNzgwOyBcbiAgICAgICAgdGhpcy54bCA9IDc4MDsgXG4gICAgICAgIHRoaXMueXIgPSA1NTA7IFxuICAgICAgICB0aGlzLnltID0gNTUwOyBcbiAgICAgICAgdGhpcy55bCA9IDU1MDsgXG5cbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=