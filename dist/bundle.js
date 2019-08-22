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
            this.animation = setInterval(this.draw, 1000 / 60);
            this.draw();
        }
    }, {
        key: "stopAnimation",
        value: function stopAnimation() {
            window.clearInterval(this.animation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWFzeV9hcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9leHBsb3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwYWNlc2hpcC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsInNldEltbWVkaWF0ZSIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwiZG9jdW1lbnQiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIndpbmRvdyIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJpdGVtIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiR2FtZSIsImJhY2tncm91bmQiLCJMYXlvdXQiLCJzcGxhc2hTY3JlZW4iLCJjYW52YXMiLCJzdHlsZSIsImRpc3BsYXkiLCJzdGFydCIsImVhc3lBcnIiLCJlbmVteV9jb3VudCIsIkVuZW15IiwiYXN0ZXJvaWQiLCJkcmF3RW5lbWllcyIsImJpbmQiLCJkcmF3QXN0ZXJvaWQiLCJhbmltYXRlRW5lbWllcyIsImRyYXciLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJwb3MiLCJ4IiwieSIsImR4IiwiZHkiLCJhbGllbiIsIkltYWdlIiwic3JjIiwibGF0ZXhBcnIiLCJsYXRleCIsImZsb29yIiwiZHJhd0ltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwidGV4dEFsaWduIiwieF9hbGllbiIsImR4X2FsaWVuIiwieV9hbGllbiIsImR5X2FsaWVuIiwiRXhwbG9zaW9uIiwiYW5pbWF0ZUV4cGxvc2lvbiIsImRyYXdFeHBsb3Npb24iLCJpbWciLCJzeCIsInN5IiwiZXhwbG9zaW9uIiwic3RvcEFuaW1hdGlvbiIsImFuaW1hdGlvbiIsInJlbmRlckVuZW1pZXMiLCJwb3B1bGF0ZUVuZW1pZXMiLCJlbmVteUFyciIsImZpZWxkIiwiSW5wdXQiLCJpbnB1dCIsImVudGVyUHJlc3NlZCIsInNjb3JlIiwiaHRtbEVsZW1lbnQiLCJtYXRoRmllbGQiLCJNUSIsIk1hdGhGaWVsZCIsInNwYWNlc2hpcCIsIlNwYWNlc2hpcCIsImxvc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNsZWFyUmVjdCIsInZhbHVlIiwidmVyaWZ5IiwiZW5lbXkiLCJpbmRleCIsInBhcnNlSW50IiwiZHJhd0xlZnQiLCJkcmF3TWlkZGxlIiwiZHJhd1JpZ2h0Iiwic3BsaWNlIiwiZHJhd1NwYWNlc2hpcCIsImVuZCIsInlvdXJfc2NvcmUiLCJpbm5lckhUTUwiLCJ0aW1lciIsIm9uQ2hhbmdlIiwiYXJyIiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlTGF5b3V0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd01pc3NsZSIsImFuaW1hdGVMZWZ0IiwiYW5pbWF0ZU1pZGRsZSIsImFuaW1hdGVSaWdodCIsInNoaXAiLCJ4bCIsInlsIiwieHIiLCJ5ciIsInhtIiwieW0iLCJkeGwiLCJkeWwiLCJkeG0iLCJkeW0iLCJkeXIiLCJkeHIiLCJwb3N4IiwicG9zeSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Qmx1ciIsInN0cm9rZSIsInhwb3MiLCJ5cG9zIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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O0FBQ0EsaUJBQUtFLEVBQUwsR0FBVSxHQUFWO0FBQ0EsaUJBQUtKLEVBQUwsR0FBVSxHQUFWO0FBQ0EsaUJBQUtHLEVBQUwsR0FBVSxHQUFWO0FBQ0EsaUJBQUtFLEVBQUwsR0FBVSxHQUFWO0FBQ0EsaUJBQUtKLEVBQUwsR0FBVSxHQUFWO0FBRUg7Ozs7OztrQkE3SGdCcEMsUyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9qcy9sYXlvdXQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBTcGFjZXNoaXAgZnJvbSAnLi9qcy9zcGFjZXNoaXAnOyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTsgXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyBcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBMYXlvdXQoKTtcbiAgICAgICAgY29uc3Qgc3BsYXNoU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lc2NyZWVuXCIpOyBcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtd3JhcHBlclwiKTsgXG4gICAgICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBzcGxhc2hTY3JlZW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICAgICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgfSlcbiAgICBcblxufSkiLCJleHBvcnQgY29uc3QgZWFzeUFyciA9IFtcbiAgICBcIlxcXFxhcmN0YW5cIixcbiAgICBcIlxcXFxhbmdsZVwiLCBcbiAgICBcIlxcXFxhcHByb3hcIixcbiAgICBcIlxcXFxhcmNjb3NcIiwgXG4gICAgXCJcXFxcYXJjc2luXCIsIFxuICAgIFwiXFxcXGFsZXBoXCIsIFxuICAgIFwiXFxcXGFtYWxnXCIsIFxuICAgIFwiXFxcXGJpY2FwXCIsIFxuICAgIFwiXFxcXGJpZ2NpcmNcIiwgXG4gICAgXCJcXFxcYmlnY3VwXCIsIFxuICAgIFwiXFxcXGJpZ2RvdFwiLCBcbiAgICBcIlxcXFxiaWdvcGx1c1wiLCBcbiAgICBcIlxcXFxiaWdvdGltZXNcIiwgXG4gICAgXCJcXFxcYmlndHJpYW5nbGVkb3duXCIsIFxuICAgIFwiXFxcXGJpZ3RyaWFuZ2xldXBcIiwgXG4gICAgXCJcXFxcYmlnc2N1cFwiLCBcbiAgICBcIlxcXFxiaWd1cGx1c1wiLCBcbiAgICBcIlxcXFxiaWd2ZWVcIiwgXG4gICAgXCJcXFxcYmlnd2VkZ2VcIiwgXG4gICAgXCJcXFxcYm90XCIsIFxuICAgIFwiXFxcXGNhcFwiLCBcbiAgICBcIlxcXFxjaGlcIiwgXG4gICAgXCJcXFxcY2lyY1wiLCBcbiAgICBcIlxcXFxjb25nXCIsIFxuICAgIFwiXFxcXGNvcHJvZFwiLCBcbiAgICBcIlxcXFxjbHVic3VpdFwiLCBcbiAgICBcIlxcXFxlcHNpbG9uXCIsIFxuICAgIFwiXFxcXGVxdWl2XCIsIFxuICAgIFwiXFxcXGV0YVwiLCBcbiAgICBcIlxcXFxleGlzdHNcIiwgXG4gICAgXCJcXFxcZmJveHtoZWxsb31cIiwgXG4gICAgXCJcXFxcZm9yYWxsXCIsIFxuICAgIFwiXFxcXGZyb3duXCIsIFxuICAgIFwiXFxcXGdhbW1hXCIsIFxuICAgIFwiXFxcXGdlXCIsIFxuICAgIFwiXFxcXGdlcVwiLCBcbiAgICBcIlxcXFxnZXRzXCIsIFxuICAgIFwiXFxcXGdnXCIsIFxuICAgIFwiXFxcXGlmZlwiLCBcbiAgICBcIlxcXFxJbVwiLCBcbiAgICBcIlxcXFxpbWF0aFwiLCBcbiAgICBcIlxcXFxpblwiLCBcbiAgICBcIlxcXFxpXCIsIFxuICAgIFwiXFxcXGhlYXJ0c3VpdFwiLCBcbiAgICBcIlxcXFxpb3RhXCIsIFxuICAgIFwiXFxcXGludFwiLCBcbiAgICBcIlxcXFxsZXFcIiwgXG4gICAgXCJcXFxcbGZsb29yXCIsXG4gICAgXCJcXFxcbGltXCIsIFxuICAgIFwiXFxcXGxoZFwiLCBcbiAgICBcIlxcXFxsbFwiLCBcbiAgICBcIlxcXFxsblwiLCBcbiAgICBcIlxcXFxsbm90XCIsIFxuICAgIFwiXFxcXGxvZ1wiLCBcbiAgICBcIlxcXFxsb25nbGVmdGFycm93XCIsIFxuICAgIFwiXFxcXGxvclwiLCBcbiAgICBcIlxcXFxscVwiLCBcbiAgICBcIlxcXFxsYnJhY2UgXFxcXHJicmFjZVwiLCBcbiAgICBcIlxcXFxrYXBwYVwiLCBcbiAgICBcIlxcXFxrZXJcIiwgXG4gICAgXCJcXFxcbGVmdGhhcnBvb25kb3duXCIsIFxuICAgIFwiXFxcXGxlZnRoYXJwb29udXBcIiwgXG4gICAgXCJcXFxcbW9kZWxzXCIsIFxuICAgIFwiXFxcXG1pZFwiLCBcbiAgICBcIlxcXFxtaW5cIiwgXG4gICAgXCJcXFxcbmVhcnJvd1wiLCBcbiAgICBcIlxcXFxuZXFcIiwgXG4gICAgXCJcXFxcbmFibGFcIiwgXG4gICAgXCJcXFxcbXBcIiwgXG4gICAgXCJcXFxcbm90XCIsIFxuICAgIFwiXFxcXG51XCIsIFxuICAgIFwiXFxcXG53YXJyb3dcIiwgXG4gICAgXCJcXFxcb1wiLCBcbiAgICBcIlxcXFxvaW50XCIsIFxuICAgIFwiXFxcXG9lXCIsIFxuICAgIFwiXFxcXG9kb3RcIiwgXG4gICAgXCJcXFxcb3NsYXNoXCIsIFxuICAgIFwiXFxcXG90aW1lc1wiLCBcbiAgICBcIlxcXFxwZXJwXCIsIFxuICAgIFwiXFxcXHBoaVwiLCBcbiAgICBcIlxcXFxwaVwiLCBcbiAgICBcIlxcXFxvdmVybGluZXt0ZXh0fVwiLCBcbiAgICBcIlxcXFxQXCIsIFxuICAgIFwiXFxcXHBhcmFsbGVsXCIsIFxuICAgIFwiXFxcXHByb2RcIiwgXG4gICAgXCJcXFxccHJpbWVcIiwgXG4gICAgXCJcXFxcUHJcIiwgXG4gICAgXCJcXFxccHJvcHRvXCIsIFxuICAgIFwiXFxcXHBzXCIsIFxuICAgIFwiXFxcXHBzaVwiLCBcbiAgICBcIlxcXFxSZVwiLCBcbiAgICBcIlxcXFxTXCIsIFxuICAgIFwiXFxcXHNlYXJyb3dcIiwgXG4gICAgXCJcXFxcc2VjIHhcIiwgXG4gICAgXCJcXFxccmZsb29yXCIsIFxuICAgIFwiXFxcXHJob1wiLCBcbiAgICBcIlxcXFxyaWdodGFycm93XCIsIFxuICAgIFwiXFxcXHNmXCIsIFxuICAgIFwiXFxcXHNoYXJwXCIsIFxuICAgIFwiXFxcXHNpbVwiLCBcbiAgICBcIlxcXFxzaW1lcVwiLCBcbiAgICBcIlxcXFxzaW4geFwiLCBcbiAgICBcIlxcXFxzaW5oXCIsIFxuICAgIFwiXFxcXHNtYWxsaW50XCIsXG4gICAgXCJcXFxcc21pbGVcIiwgXG4gICAgXCJcXFxcc3BhZGVzdWl0XCIsIFxuICAgIFwiXFxcXHNxY2FwXCIsIFxuICAgIFwiXFxcXHN0YXJcIiwgXG4gICAgXCJcXFxcc3VyZFwiLCBcbiAgICBcIlxcXFxzd2Fycm93XCIsIFxuICAgIFwiXFxcXHRhbmhcIiwgXG4gICAgXCJcXFxcdGF1XCIsIFxuICAgIFwiXFxcXHRhbiB4XCIsIFxuICAgIFwiXFxcXHRoZXRhXCIsIFxuICAgIFwiXFxcXHN1YnNldFwiLCBcbiAgICBcIlxcXFxzdWJzZXRlcVwiLCBcbiAgICBcIlxcXFxzdWNjZXFcIiwgXG4gICAgXCJcXFxcc3Vwc2V0XCIsIFxuICAgIFwiXFxcXHN1cFwiLCBcbiAgICBcIlxcXFx2YXJwaGlcIixcbiAgICBcIlxcXFx2YXJyaG9cIiwgXG4gICAgXCJcXFxcdmFyc2lnbWFcIiwgXG4gICAgXCJcXFxcdmRhc2hcIiwgXG4gICAgXCJcXFxcdmRvdHNcIiwgXG4gICAgXCJcXFxcdmVjIGNcIiwgXG4gICAgXCJcXFxcd2VkZ2VcIiwgXG4gICAgXCJcXFxcd3BcIiwgXG4gICAgXCJcXFxcd3JcIiwgXG4gICAgXCJcXFxceGlcIiwgXG4gICAgXCJcXFxceWVhclwiLCBcbiAgICBcIlxcXFx1bmxoZFwiLCBcbiAgICBcIlxcXFx0cmlhbmdsZVwiLCBcbiAgICBcIlxcXFx0cmlhbmdsZWxlZnRcIiwgXG4gICAgXCJcXFxcdHJpYW5nbGVyaWdodFwiLCBcbiAgICBcIlxcXFx2XCIsIFxuICAgIFwiXFxcXHZhcmVwc2lsb25cIiwgXG4gICAgXCJcXFxcYm93dGllXCIsIFxuICAgIFwiXFxcXHNwYWRlc3VpdFwiLCBcbiAgICBcIlxcXFxEaWFtb25kXCIsIFxuICAgIFwiXFxcXGhlYXJ0c3VpdFwiXG5dIiwiaW1wb3J0IHsgZWFzeUFyciB9IGZyb20gXCIuL2Vhc3lfYXJyXCI7XG52YXIgZW5lbXlfY291bnQgPSAwOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihhc3Rlcm9pZCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIGVuZW15X2NvdW50Kys7IFxuXG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMgPSB0aGlzLmRyYXdFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcyA9IHRoaXMuYW5pbWF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vc2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGFzdGVyb2lkXG4gICAgICAgIGNvbnN0IHBvcyA9IFtbMCwwXSwgWzcyMCwgMF0sIFsxMzAwLCAwXV07XG4gICAgICAgIHRoaXMucmFuZG9tID0gZW5lbXlfY291bnQlMzsgXG4gICAgICAgIFt0aGlzLngsIHRoaXMueV0gPSBwb3NbdGhpcy5yYW5kb21dO1xuXG4gICAgICAgIC8vc2V0IGRlbHRhIHZhbHVlcyBmb3IgYW5pbWF0aW9uIFxuICAgICAgICBpZiAodGhpcy5yYW5kb20gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAuNTsgXG4gICAgICAgICAgICB0aGlzLmR5ID0gLS40MTc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5kb20gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAwOyBcbiAgICAgICAgICAgIHRoaXMuZHkgPSAuNTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLS4zMzsgXG4gICAgICAgICAgICB0aGlzLmR5ID0gLS4zM1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pbml0aWFsaXplIGFsaWVuIGFuZCBhc3Rlcm9pZCBwaG90b3MgXG4gICAgICAgIC8vIHRoaXMuYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5hc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIHRoaXMuYXN0ZXJvaWQgPSBhc3Rlcm9pZDtcbiAgICAgICAgdGhpcy5hbGllbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmFsaWVuLnNyYyA9IFwic3JjL2Fzc2V0cy9zaWx2ZXJ1Zm8ucG5nXCJcblxuICAgICAgICBpZiAoZW5lbXlfY291bnQgPCA1MCkge1xuICAgICAgICAgICAgdGhpcy5sYXRleEFyciA9IGVhc3lBcnI7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXRleEFyciA9IFxuICAgICAgICAgICAgW1wiXFxcXGZyYWN7ZH17ZHh9Y15uPW54XntuLTF9XCIsIFxuICAgICAgICAgICAgXCJcXFxcZnJhY3tcXFxccGFydGlhbCB5fXtcXFxccGFydGlhbCB4fVwiLCBcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9Y15uPW54XntuLTF9XCIsIFxuICAgICAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1lXntheH09YVxcXFwsZV57YXh9XCIsXG4gICAgICAgICAgICBcIlxcXFxmcmFje2R9e2R4fVxcXFxsbih4KT1cXFxcZnJhY3sxfXt4fVwiLFxuICAgICAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcc2luIHg9XFxcXGNvcyB4XCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdjdXBfe2k9MX1ee259e1hfaX1cIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ2NhcF97aT0xfV57bn17WF9pfVwiLFxuICAgICAgICAgICAgXCJcXFxcaW50X3swfV57XFxcXHBpfSBcXFxcc2luIHggXFxcXCBkeCA9IDJcIixcbiAgICAgICAgICAgIFwiXFxcXGxlZnQoeC0xXFxcXHJpZ2h0KVxcXFxsZWZ0KHgrM1xcXFxyaWdodClcIixcbiAgICAgICAgICAgIFwiXFxcXGxpbV97YSBcXFxccmlnaHRhcnJvdyBifVwiLFxuICAgICAgICAgICAgXCJcXFxcYmlndmVlX2FeYiB4XCIsIFxuICAgICAgICAgICAgXCJcXFxcc3VtX2FeYiB4XCJdXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXplIGxhdGV4IFxuICAgICAgICB0aGlzLmxhdGV4ID0gdGhpcy5sYXRleEFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxhdGV4QXJyLmxlbmd0aCldO1xuXG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVFbmVtaWVzKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdFbmVtaWVzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB2YXIgbGF0ZXggPSBcIlxcXFxsZWZ0KFxcXFxmcmFjezF9e1xcXFxzcXJ0e3h9fVxcXFxyaWdodClcIlxuICAgICAgICAvLyB2YXIgbGF0ZXgyID0gXCJGKHgpJj1cXFxcaW50XmFfYlxcXFxmcmFjezF9ezN9eF4zXCJcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLmFzdGVyb2lkLndpZHRoLCB0aGlzLmFzdGVyb2lkLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgdGhpcy5hbGllbi53aWR0aCwgdGhpcy5hbGllbi5oZWlnaHQpO1xuICAgICAgICAvLyBjb25zdCBhc3Rlcm9pZCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgLy8gYXN0ZXJvaWQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdGVyb2lkLnBuZ1wiOyBcbiAgICAgICAgLy8gY29uc3QgYWxpZW4gPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIC8vIGFsaWVuLnNyYyA9IFwic3JjL2Fzc2V0cy9zaWx2ZXJ1Zm8ucG5nXCJcbiAgICAgICAgLy8gYXN0ZXJvaWQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTsgXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYXN0ZXJvaWQsIDQ2LCA0OSwgMjEwLCAxOTAsIHRoaXMueCwgdGhpcy55LCA2NCwgNzAuNzMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0MCwgNTAsIDE3MCwgMTcwLCB0aGlzLngsIHRoaXMueSwgMjU2LCAyNTYpICBcbiAgICAgICAgLy8gdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFRleHQobGF0ZXgsIHRoaXMueC0yMCwgdGhpcy55KzEzMCk7XG4gICAgICAgIHRoaXMuZHJhd0FzdGVyb2lkKCk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuKCk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGFsaWVuLm9ubG9hZCA9ICggKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoYWxpZW4sIHRoaXMueF9hbGllbiwgdGhpcy55X2FsaWVuLCAyNTAsIDI1MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7IFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChsYXRleDIsIHRoaXMueF9hbGllbi0yMCwgdGhpcy55X2FsaWVuKzE1MCk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgZHJhd0FzdGVyb2lkKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDE1MCwgMTcwKVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IFRpbWVzIE5ldyBSb21hblwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMubGF0ZXgsIHRoaXMueCArIDc1LCB0aGlzLnkgKyA4NSk7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgfVxuXG4gICAgLy8gZHJhd0FsaWVuKCkge1xuICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hbGllbiwgdGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIDI1MCwgMjUwKTtcbiAgICAvLyAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAvLyAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5sYXRleDIsIHRoaXMueF9hbGllbiAtIDIwLCB0aGlzLnlfYWxpZW4gKyAxNTApO1xuICAgIC8vIH1cblxuXG5cbiAgICBcblxuICAgIGFuaW1hdGVFbmVtaWVzKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDsgXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5OyBcbiAgICAgICAgdGhpcy54X2FsaWVuICs9IHRoaXMuZHhfYWxpZW47IFxuICAgICAgICB0aGlzLnlfYWxpZW4gKz0gdGhpcy5keV9hbGllbjsgXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDI1NiB8fCB0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQtIDI1NiB8fCB0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhfYWxpZW4gPiB0aGlzLmNhbnZhcy53aWR0aC0yNTAgfHwgdGhpcy54X2FsaWVuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keF9hbGllbiA9IC10aGlzLmR4X2FsaWVuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueV9hbGllbiA+IHRoaXMuY2FudmFzLmhlaWdodC0yNTAgfHwgdGhpcy55X2FsaWVuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keV9hbGllbiA9IC10aGlzLmR5X2FsaWVuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3RW5lbWllcygpOyBcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUVuZW1pZXMpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbiB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLmFuaW1hdGVFeHBsb3Npb24gPSB0aGlzLmFuaW1hdGVFeHBsb3Npb24uYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd0V4cGxvc2lvbiA9IHRoaXMuZHJhd0V4cGxvc2lvbi5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuXG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UgKCk7IFxuICAgICAgICB0aGlzLmltZy5zcmMgPSBcInNyYy9hc3NldHMvZXhwbG9zaW9uLnBuZ1wiO1xuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBjYW52YXMgXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMueCA9IHg7IFxuICAgICAgICB0aGlzLnkgPSB5OyBcbiAgICAgICAgdGhpcy5zeCA9IDA7IFxuICAgICAgICB0aGlzLnN5ID0gMDsgXG4gICAgICAgIHRoaXMuZHggPSAyNTY7IFxuICAgICAgICB0aGlzLmR5ID0gMjU2OyBcbiAgICAgICAgdGhpcy5hbmltYXRlRXhwbG9zaW9uKCk7IFxuICAgIH1cblxuICAgIGRyYXdFeHBsb3Npb24oKSB7XG4gICAgICAgdGhpcy5leHBsb3Npb24gPSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMuc3gsIHRoaXMuc3ksIDI1NiwgMjU2LCB0aGlzLngtNzUsIHRoaXMueSwgMjU2LCAyNTYpXG4gICAgfVxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuZHg7IFxuICAgICAgICBpZiAodGhpcy5zeCA9PT0gMjA0OCkge1xuICAgICAgICAgICAgdGhpcy5zeCA9IDA7IFxuICAgICAgICAgICAgdGhpcy5zeSArPSB0aGlzLmR5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN5ID09PSAxNTM2ICYmIHRoaXMuc3ggPT09IDIwNDgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdFeHBsb3Npb24oKVxuICAgICAgICAvLyB0aGlzLnRlc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICAgIH0gICBcbiAgICBcbiAgICBhbmltYXRlRXhwbG9zaW9uKCkge1xuICAgICAgIHRoaXMuYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwodGhpcy5kcmF3LCAxMDAwIC8gNjApO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBzdG9wQW5pbWF0aW9uKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIHRoaXMuc3ggPSAwOyBcbiAgICAgICAgdGhpcy5zeSA9IDA7IFxuICAgIH1cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgeyBjbGVhckludGVydmFsIH0gZnJvbSAndGltZXJzJztcbmltcG9ydCBTcGFjZXNoaXAgZnJvbSAnLi9zcGFjZXNoaXAnO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tICcuL2V4cGxvc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vYmluZCBmdW5jdGlvbnNcbiAgICAgICAgdGhpcy5hc3Rlcm9pZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjtcbiAgICAgICAgdGhpcy5yZW5kZXJFbmVtaWVzID0gdGhpcy5yZW5kZXJFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLnBvcHVsYXRlRW5lbWllcyA9IHRoaXMucG9wdWxhdGVFbmVtaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvL1BvcHVsYXRlIGVuZW1pZXNcbiAgICAgICAgdGhpcy5lbmVteUFyciA9IFtuZXcgRW5lbXkodGhpcy5hc3Rlcm9pZCldOyBcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5wb3B1bGF0ZUVuZW1pZXMsIDIwMDApOyBcblxuICAgICAgICAvL0NyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgaW5wdXQgZmllbGQgXG4gICAgICAgIHRoaXMuZmllbGQgPSBuZXcgSW5wdXQoKTtcbiAgICAgICAgdGhpcy5maWVsZC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5lbnRlclByZXNzZWQoZSwgdGhpcy5lbmVteUFycilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9pbnN0YW50aWF0ZSBzY29yZSBcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7IFxuXG4gICAgICAgIC8vIGluaXRpdGlhbGl6ZSBtYXRoZmllbGQgXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0aEZpZWxkJyk7XG4gICAgICAgIHRoaXMubWF0aEZpZWxkID0gTVEuTWF0aEZpZWxkKHRoaXMuaHRtbEVsZW1lbnQpOyBcblxuICAgICAgICAvL2luaXRpYWxpemUgc3BhY2VzaGlwIFxuICAgICAgICB0aGlzLnNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTsgXG5cblxuICAgICAgICAvL2xvc2UgYnV0dG9uIFxuICAgICAgICBjb25zdCBsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZVwiKTtcbiAgICAgICAgbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgcmVuZGVyRW5lbWllcygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlBcnJbaV0uZHJhdygpOyBcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyW2ldLnJhbmRvbSA9PT0gMCAmJiAodGhpcy5lbmVteUFycltpXS54ID49IDYzMCB8fCB0aGlzLmVuZW15QXJyW2ldLnkgPj01MDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5lbXlBcnJbaV0ucmFuZG9tID09PSAxICYmIHRoaXMuZW5lbXlBcnJbaV0ueSA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmVteUFycltpXS5yYW5kb20gPT09IDIgJiYgKHRoaXMuZW5lbXlBcnJbaV0ueCA8PSA4MDAgfHwgdGhpcy5lbmVteUFycltpXS55ID49IDU1MCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0aEZpZWxkLmxhdGV4KHRoaXMuZmllbGQuaW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5maWVsZC52ZXJpZnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5lbmVteUFyclt0aGlzLmZpZWxkLmluZGV4XVxuICAgICAgICAgICAgdGhpcy5zY29yZS52YWx1ZSA9IGAke3BhcnNlSW50KHRoaXMuc2NvcmUudmFsdWUsIDEwKSArIDF9YFxuICAgICAgICAgICAgdGhpcy5maWVsZC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZW5lbXkucmFuZG9tID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd0xlZnQoZW5lbXkueCwgZW5lbXkueSk7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmVteS5yYW5kb20gPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC5kcmF3TWlkZGxlKGVuZW15LngsIGVuZW15LnkpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1JpZ2h0KGVuZW15LngsIGVuZW15LnkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5lbXlBcnIuc3BsaWNlKHRoaXMuZmllbGQuaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuc3BhY2VzaGlwLmFuaW1hdGVNaXNzbGUoKTtcbiAgICAgICAgICAgIG5ldyBFeHBsb3Npb24oZW5lbXkueCwgZW5lbXkueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1NwYWNlc2hpcCgpOyBcbiAgICAgICAgLy8gdGhpcy50aW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyRW5lbWllcylcblxuXG4gICAgfVxuXG4gICAgbG9zZSgpIHtcbiAgICAgICAgbmV3IEV4cGxvc2lvbig3MzAsIDUxMCk7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91LWxvc2VcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nLWlucHV0LWZpZWxkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRoRmllbGRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gICAgICAgIGNvbnN0IHlvdXJfc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXItc2NvcmVcIik7XG4gICAgICAgIHlvdXJfc2NvcmUuaW5uZXJIVE1MID0gYFlvdSBzY29yZWQgJHt0aGlzLnNjb3JlLnZhbHVlfSFgOyBcbiAgICAgICAgeW91cl9zY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjsgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWVcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QXJyLnB1c2gobmV3IEVuZW15KHRoaXMuYXN0ZXJvaWQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5yZW5kZXJFbmVtaWVzLCAxMDAwIC8gNjApO1xuICAgICAgICAvLyB0aGlzLnJlbmRlckVuZW1pZXMoKTtcbiAgICB9XG5cbiAgICBlbmQoKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAvLyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpbmctaW5wdXQtZmllbGRcIik7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW50ZXJQcmVzc2VkID0gdGhpcy5lbnRlclByZXNzZWQuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5kZXggPSBudWxsOyBcbiAgICAgICAgdGhpcy52ZXJpZnkgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgZW50ZXJQcmVzc2VkKGUsIGFycikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0ubGF0ZXggPT09IHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gXCIxM1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZXNoaXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vR3JhYiBjYW52YXMgXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7IFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmRyYXdTcGFjZXNoaXAgPSB0aGlzLmRyYXdTcGFjZXNoaXAuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd01pc3NsZSA9IHRoaXMuZHJhd01pc3NsZS5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5hbmltYXRlTGVmdCA9IHRoaXMuYW5pbWF0ZUxlZnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlTWlkZGxlID0gdGhpcy5hbmltYXRlTWlkZGxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0ID0gdGhpcy5hbmltYXRlUmlnaHQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd0xlZnQgPSB0aGlzLmRyYXdMZWZ0LmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdNaWRkbGUgPSB0aGlzLmRyYXdNaWRkbGUuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd1JpZ2h0ID0gdGhpcy5kcmF3UmlnaHQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHRoaXMuc3RvcEFuaW1hdGlvbi5iaW5kKHRoaXMpOyBcblxuICAgICAgICAvL0luaXRpYWxpemUgc3BhY2VzaGlwXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgdGhpcy5zaGlwLnNyYyA9IFwic3JjL2Fzc2V0cy9ibGFja3NwYWNlc2hpcC5wbmdcIjsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIHBvc2l0aW9uIFxuICAgICAgICB0aGlzLnhsID0gNzgwOyBcbiAgICAgICAgdGhpcy55bCA9IDU1MDsgXG4gICAgICAgIHRoaXMueHIgPSA3ODA7IFxuICAgICAgICB0aGlzLnlyID0gNTUwOyBcbiAgICAgICAgdGhpcy54bSA9IDc4MDsgXG4gICAgICAgIHRoaXMueW0gPSA1NTA7IFxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBkeGwgYW5kIGR5bCBcbiAgICAgICAgdGhpcy5keGwgPSAtNjA7IFxuICAgICAgICB0aGlzLmR5bCA9IC0zMDsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGR4bSBhbmQgZHltXG4gICAgICAgIHRoaXMuZHhtID0gMDsgXG4gICAgICAgIHRoaXMuZHltID0gLTc4OyBcblxuICAgICAgICAvL2luaXRpYWxpemUgZHhyIGFuZCBkeXJcbiAgICAgICAgdGhpcy5keXIgPSAtNTA7IFxuICAgICAgICB0aGlzLmR4ciA9IDYwO1xuXG5cblxuICAgIH1cblxuICAgIGRyYXdTcGFjZXNoaXAoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNoaXAsIDc1MCwgNTUwLCAxMDAsIDEwMCk7XG4gICAgfVxuXG4gICAgZHJhd01pc3NsZShwb3N4LCBwb3N5LCB4LHkpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IFxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9zeCwgcG9zeSk7IFxuICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9zeCt4LCBwb3N5K3kpOyBcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA2OyBcbiAgICAgICAgdGhpcy5jdHguc2hhZG93Qmx1ciA9IDEwMDsgXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpOyBcbiAgICB9XG5cbiAgICBhbmltYXRlTGVmdCh4LCB5KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy55bCArPSB0aGlzLmR5bDsgXG4gICAgICAgIHRoaXMueGwgKz0gdGhpcy5keGw7IFxuICAgICAgICB0aGlzLmRyYXdNaXNzbGUodGhpcy54bCwgdGhpcy55bCwgMjAsIDE3KTsgXG4gICAgICAgIGlmICh0aGlzLnhsIDw9IHggKzEyOCB8fCB0aGlzLnlsIDw9IHkgKyAyNTYpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpOyBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYW5pbWF0ZU1pZGRsZSh4LCB5KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy55bSArPSB0aGlzLmR5bTsgXG4gICAgICAgIHRoaXMueG0gKz0gdGhpcy5keG07IFxuICAgICAgICB0aGlzLmRyYXdNaXNzbGUodGhpcy54bSwgdGhpcy55bSwgMCwgMTcpOyBcbiAgICAgICAgaWYgKHRoaXMueW0gPD0geSsyNTYpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpOyBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYW5pbWF0ZVJpZ2h0KHgsIHkpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnlyICs9IHRoaXMuZHlyOyBcbiAgICAgICAgdGhpcy54ciArPSB0aGlzLmR4clxuICAgICAgICB0aGlzLmRyYXdNaXNzbGUodGhpcy54ciwgdGhpcy55ciwgLTIwLCAxNyk7IFxuICAgICAgICBpZiAodGhpcy55ciA8PSB5KzI1NiB8fCB0aGlzLnhyID49IHggKyAxMjgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGRyYXdMZWZ0KHhwb3MsIHlwb3MpIHtcbiAgICAgICAgdGhpcy5sZWZ0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlTGVmdCh4cG9zLCB5cG9zKVxuICAgICAgICB9LCAgMTApO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGUoeHBvcywgeXBvcykge1xuICAgICAgICB0aGlzLm1pZGRsZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU1pZGRsZSh4cG9zLCB5cG9zKVxuICAgICAgICB9LCAxMCk7IFxuICAgIH1cblxuXG4gICAgZHJhd1JpZ2h0KHhwb3MsIHlwb3MpIHtcbiAgICAgICAgdGhpcy5yaWdodCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0KHhwb3MsIHlwb3MpXG4gICAgICAgIH0sIDEwKVxuICAgICAgICAvLyB0aGlzLmFuaW1hdGVNaXNzbGUoKTtcbiAgICB9XG5cbiAgICBzdG9wQW5pbWF0aW9uKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmxlZnQpO1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnJpZ2h0KTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5taWRkbGUpO1xuICAgICAgICB0aGlzLnhyID0gNzgwOyBcbiAgICAgICAgdGhpcy54bSA9IDc4MDsgXG4gICAgICAgIHRoaXMueGwgPSA3ODA7IFxuICAgICAgICB0aGlzLnlyID0gNTUwOyBcbiAgICAgICAgdGhpcy55bSA9IDU1MDsgXG4gICAgICAgIHRoaXMueWwgPSA1NTA7IFxuXG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9