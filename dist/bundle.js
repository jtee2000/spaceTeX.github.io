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

var Enemey = function () {
    function Enemey() {
        _classCallCheck(this, Enemey);

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
        var pos = [[0, 0], [740, 0], [1300, 0]];
        this.random = enemy_count % 3;

        // this.x = Math.floor((Math.random() * (this.canvas.width-300))); 
        // this.y = Math.floor((Math.random() * (this.canvas.height - 300))); 
        // this.x_alien = Math.floor((Math.random() * (this.canvas.width - 300))); 
        // this.y_alien = Math.floor((Math.random() * (this.canvas.height - 300))); 

        //set delta values for animation 
        var _pos$random = _slicedToArray(pos[this.random], 2);

        this.x = _pos$random[0];
        this.y = _pos$random[1];
        if (this.random === 0) {
            this.dx = 2;
            this.dy = -2;
        } else if (this.random === 1) {
            this.dx = 0;
            this.dy = 2;
        } else {
            this.dx = -2;
            this.dy = 2;
        }
        // this.dx = 2; 
        // this.dy = -2; 
        // this.dx_alien = -3; 
        // this.dy_alien = 3; 

        //initialize alien and asteroid photos 
        this.asteroid = new Image();
        this.asteroid.src = "src/assets/asteroid.png";
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
            this.ctx.drawImage(this.asteroid, 40, 50, 170, 170, this.x, this.y, 150, 170);
            this.ctx.font = "30px Times New Roman";
            this.ctx.fillStyle = "white";
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

var _timers = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");

var _spaceship = __webpack_require__(/*! ./spaceship */ "./src/js/spaceship.js");

var _spaceship2 = _interopRequireDefault(_spaceship);

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
        setInterval(this.populateEnemies, 2000);

        //Create new instance of input field 
        this.field = new _input2.default();
        this.field.input.addEventListener("keydown", function (e) {
            _this.field.enterPressed(e, _this.enemeyArr);
        });

        //instantiate score 
        this.score = document.getElementById("score");

        // inititialize mathfield 
        this.htmlElement = document.getElementById('mathField');
        this.mathField = MQ.MathField(this.htmlElement);

        //initialize spaceship 
        this.spaceship = new _spaceship2.default();
        // this.spaceship.drawSpaceship();
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
            this.mathField.latex(this.field.input.value);
            if (this.field.verify === true) {
                this.score.value = '' + (parseInt(this.score.value, 10) + 1);
                this.field.verify = false;
                if (this.enemeyArr[this.field.index].random === 0) {
                    this.spaceship.drawLeft();
                } else if (this.enemeyArr[this.field.index].random === 1) {
                    this.spaceship.drawMiddle();
                } else {
                    this.spaceship.drawRight();
                }
                this.enemeyArr.splice(this.field.index, 1);
                // this.spaceship.animateMissle();
            }
            if (this.enemeyArr.length === 10) {
                this.end();
                document.getElementById("you-lose").style.display = "inline";
                document.getElementById("button").style.display = "inline";
                console.log("You lose");
            }
            for (var i = 0; i < this.enemeyArr.length; i++) {
                this.enemeyArr[i].draw();
            }
            this.spaceship.drawSpaceship();
            // this.spaceship.stopAnimation();
        }
    }, {
        key: 'start',
        value: function start() {
            this.timer = setInterval(this.renderEnemies, 100);
        }
    }, {
        key: 'end',
        value: function end() {
            window.clearInterval(this.timer);
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
        this.dyl = -50;

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
            this.ctx.drawImage(this.ship, 730, 550, 100, 100);
        }
    }, {
        key: "drawMissle",
        value: function drawMissle(posx, posy, x, y) {
            this.ctx.beginPath();
            this.ctx.moveTo(posx, posy);
            this.ctx.lineTo(posx + x, posy + y);
            this.ctx.strokeStyle = "white";
            this.ctx.lineWidth = 6;
            this.ctx.stroke();
        }
    }, {
        key: "animateLeft",
        value: function animateLeft() {
            this.yl += this.dyl;
            this.xl += this.dxl;
            this.drawMissle(this.xl, this.yl, 20, 17);
        }
    }, {
        key: "animateMiddle",
        value: function animateMiddle() {
            this.ym += this.dym;
            this.xm += this.dxm;
            this.drawMissle(this.xm, this.ym, 0, 17);
        }
    }, {
        key: "animateRight",
        value: function animateRight() {
            this.yr += this.dyr;
            this.xr += this.dxr;
            this.drawMissle(this.xr, this.yr, -20, 17);
            if (this.yr <= 0 || this.xr >= 1600) {
                this.y = 550;
                this.x = 780;
            }
        }
    }, {
        key: "drawLeft",
        value: function drawLeft() {
            this.left = setInterval(this.animateLeft, 10);
        }
    }, {
        key: "drawMiddle",
        value: function drawMiddle() {
            this.middle = setInterval(this.animateMiddle, 10);
        }
    }, {
        key: "drawRight",
        value: function drawRight() {
            this.right = setInterval(this.animateRight, 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWFzeV9hcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zcGFjZXNoaXAuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJzZXRJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsImRvYyIsImRvY3VtZW50IiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJjYWxsYmFjayIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJzZWxmIiwic2NvcGUiLCJ3aW5kb3ciLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiaXRlbSIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJyZXF1aXJlIiwiZyIsImJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiZ2FtZSIsIkdhbWUiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0Iiwic3BsYXNoU2NyZWVuIiwiY2FudmFzIiwic3R5bGUiLCJkaXNwbGF5Iiwic3RhcnQiLCJlYXN5QXJyIiwiZW5lbXlfY291bnQiLCJFbmVtZXkiLCJkcmF3RW5lbWllcyIsImJpbmQiLCJkcmF3QXN0ZXJvaWQiLCJhbmltYXRlRW5lbWllcyIsImRyYXciLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJwb3MiLCJ4IiwieSIsImR4IiwiZHkiLCJhc3Rlcm9pZCIsIkltYWdlIiwic3JjIiwiYWxpZW4iLCJsYXRleEFyciIsImxhdGV4IiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJ4X2FsaWVuIiwiZHhfYWxpZW4iLCJ5X2FsaWVuIiwiZHlfYWxpZW4iLCJwb3B1bGF0ZUVuZW1pZXMiLCJyZW5kZXJFbmVtaWVzIiwiZW5lbWV5QXJyIiwiZmllbGQiLCJJbnB1dCIsImlucHV0IiwiZW50ZXJQcmVzc2VkIiwic2NvcmUiLCJodG1sRWxlbWVudCIsIm1hdGhGaWVsZCIsIk1RIiwiTWF0aEZpZWxkIiwic3BhY2VzaGlwIiwiU3BhY2VzaGlwIiwiRW5lbXkiLCJjbGVhclJlY3QiLCJ2YWx1ZSIsInZlcmlmeSIsInBhcnNlSW50IiwiaW5kZXgiLCJkcmF3TGVmdCIsImRyYXdNaWRkbGUiLCJkcmF3UmlnaHQiLCJzcGxpY2UiLCJlbmQiLCJjb25zb2xlIiwibG9nIiwiZHJhd1NwYWNlc2hpcCIsInRpbWVyIiwib25DaGFuZ2UiLCJhcnIiLCJrZXlDb2RlIiwibWFrZUxheW91dCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsImRyYXdNaXNzbGUiLCJhbmltYXRlTGVmdCIsImFuaW1hdGVNaWRkbGUiLCJhbmltYXRlUmlnaHQiLCJzdG9wQW5pbWF0aW9uIiwic2hpcCIsInhsIiwieWwiLCJ4ciIsInlyIiwieG0iLCJ5bSIsImR4bCIsImR5bCIsImR4bSIsImR5bSIsImR5ciIsImR4ciIsInBvc3giLCJwb3N5IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJsZWZ0IiwibWlkZGxlIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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Q0E7QUFDSDs7O3dDQUVlO0FBQ1ozRyxtQkFBT0csYUFBUCxDQUFxQixLQUFLOEgsSUFBMUI7QUFDQWpJLG1CQUFPRyxhQUFQLENBQXFCLEtBQUtnSSxLQUExQjtBQUNBbkksbUJBQU9HLGFBQVAsQ0FBcUIsS0FBSytILE1BQTFCO0FBQ0EsaUJBQUtsQixFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLRSxFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLSixFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLRyxFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLRSxFQUFMLEdBQVUsR0FBVjtBQUNBLGlCQUFLSixFQUFMLEdBQVUsR0FBVjtBQUVIOzs7Ozs7a0JBOUdnQmhDLFMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vanMvbGF5b3V0JztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgU3BhY2VzaGlwIGZyb20gJy4vanMvc3BhY2VzaGlwJzsgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7IFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgTGF5b3V0KCk7XG4gICAgICAgIGNvbnN0IHNwbGFzaFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXNjcmVlblwiKTsgXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXdyYXBwZXJcIik7IFxuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc3BsYXNoU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgICAgICAgZ2FtZS5zdGFydCgpO1xuICAgIH0pXG4gICAgXG5cbn0pIiwiZXhwb3J0IGNvbnN0IGVhc3lBcnIgPSBbXG4gICAgXCJcXFxcYXJjdGFuXCIsXG4gICAgXCJcXFxcYW5nbGVcIiwgXG4gICAgXCJcXFxcYXBwcm94XCIsXG4gICAgXCJcXFxcYXJjY29zXCIsIFxuICAgIFwiXFxcXGFyY3NpblwiLCBcbiAgICBcIlxcXFxhbGVwaFwiLCBcbiAgICBcIlxcXFxhbWFsZ1wiLCBcbiAgICBcIlxcXFxiaWNhcFwiLCBcbiAgICBcIlxcXFxiaWdjaXJjXCIsIFxuICAgIFwiXFxcXGJpZ2N1cFwiLCBcbiAgICBcIlxcXFxiaWdkb3RcIiwgXG4gICAgXCJcXFxcYmlnb3BsdXNcIiwgXG4gICAgXCJcXFxcYmlnb3RpbWVzXCIsIFxuICAgIFwiXFxcXGJpZ3RyaWFuZ2xlZG93blwiLCBcbiAgICBcIlxcXFxiaWd0cmlhbmdsZXVwXCIsIFxuICAgIFwiXFxcXGJpZ3NjdXBcIiwgXG4gICAgXCJcXFxcYmlndXBsdXNcIiwgXG4gICAgXCJcXFxcYmlndmVlXCIsIFxuICAgIFwiXFxcXGJpZ3dlZGdlXCIsIFxuICAgIFwiXFxcXGJvdFwiLCBcbiAgICBcIlxcXFxjYXBcIiwgXG4gICAgXCJcXFxcY2hpXCIsIFxuICAgIFwiXFxcXGNpcmNcIiwgXG4gICAgXCJcXFxcY29uZ1wiLCBcbiAgICBcIlxcXFxjb3Byb2RcIiwgXG4gICAgXCJcXFxcY2x1YnN1aXRcIiwgXG4gICAgXCJcXFxcZXBzaWxvblwiLCBcbiAgICBcIlxcXFxlcXVpdlwiLCBcbiAgICBcIlxcXFxldGFcIiwgXG4gICAgXCJcXFxcZXhpc3RzXCIsIFxuICAgIFwiXFxcXGZib3h7aGVsbG99XCIsIFxuICAgIFwiXFxcXGZvcmFsbFwiLCBcbiAgICBcIlxcXFxmcm93blwiLCBcbiAgICBcIlxcXFxnYW1tYVwiLCBcbiAgICBcIlxcXFxnZVwiLCBcbiAgICBcIlxcXFxnZXFcIiwgXG4gICAgXCJcXFxcZ2V0c1wiLCBcbiAgICBcIlxcXFxnZ1wiLCBcbiAgICBcIlxcXFxpZmZcIiwgXG4gICAgXCJcXFxcSW1cIiwgXG4gICAgXCJcXFxcaW1hdGhcIiwgXG4gICAgXCJcXFxcaW5cIiwgXG4gICAgXCJcXFxcaVwiLCBcbiAgICBcIlxcXFxoZWFydHN1aXRcIiwgXG4gICAgXCJcXFxcaW90YVwiLCBcbiAgICBcIlxcXFxpbnRcIiwgXG4gICAgXCJcXFxcbGVxXCIsIFxuICAgIFwiXFxcXGxmbG9vclwiLFxuICAgIFwiXFxcXGxpbVwiLCBcbiAgICBcIlxcXFxsaGRcIiwgXG4gICAgXCJcXFxcbGxcIiwgXG4gICAgXCJcXFxcbG5cIiwgXG4gICAgXCJcXFxcbG5vdFwiLCBcbiAgICBcIlxcXFxsb2dcIiwgXG4gICAgXCJcXFxcbG9uZ2xlZnRhcnJvd1wiLCBcbiAgICBcIlxcXFxsb3JcIiwgXG4gICAgXCJcXFxcbHFcIiwgXG4gICAgXCJcXFxcbGJyYWNlIFxcXFxyYnJhY2VcIiwgXG4gICAgXCJcXFxca2FwcGFcIiwgXG4gICAgXCJcXFxca2VyXCIsIFxuICAgIFwiXFxcXGxlZnRoYXJwb29uZG93blwiLCBcbiAgICBcIlxcXFxsZWZ0aGFycG9vbnVwXCIsIFxuICAgIFwiXFxcXG1vZGVsc1wiLCBcbiAgICBcIlxcXFxtaWRcIiwgXG4gICAgXCJcXFxcbWluXCIsIFxuICAgIFwiXFxcXG5lYXJyb3dcIiwgXG4gICAgXCJcXFxcbmVxXCIsIFxuICAgIFwiXFxcXG5hYmxhXCIsIFxuICAgIFwiXFxcXG1wXCIsIFxuICAgIFwiXFxcXG5vdFwiLCBcbiAgICBcIlxcXFxudVwiLCBcbiAgICBcIlxcXFxud2Fycm93XCIsIFxuICAgIFwiXFxcXG9cIiwgXG4gICAgXCJcXFxcb2ludFwiLCBcbiAgICBcIlxcXFxvZVwiLCBcbiAgICBcIlxcXFxvZG90XCIsIFxuICAgIFwiXFxcXG9zbGFzaFwiLCBcbiAgICBcIlxcXFxvdGltZXNcIiwgXG4gICAgXCJcXFxccGVycFwiLCBcbiAgICBcIlxcXFxwaGlcIiwgXG4gICAgXCJcXFxccGlcIiwgXG4gICAgXCJcXFxcb3ZlcmxpbmV7dGV4dH1cIiwgXG4gICAgXCJcXFxcUFwiLCBcbiAgICBcIlxcXFxwYXJhbGxlbFwiLCBcbiAgICBcIlxcXFxwcm9kXCIsIFxuICAgIFwiXFxcXHByaW1lXCIsIFxuICAgIFwiXFxcXFByXCIsIFxuICAgIFwiXFxcXHByb3B0b1wiLCBcbiAgICBcIlxcXFxwc1wiLCBcbiAgICBcIlxcXFxwc2lcIiwgXG4gICAgXCJcXFxcUmVcIiwgXG4gICAgXCJcXFxcU1wiLCBcbiAgICBcIlxcXFxzZWFycm93XCIsIFxuICAgIFwiXFxcXHNlYyB4XCIsIFxuICAgIFwiXFxcXHJmbG9vclwiLCBcbiAgICBcIlxcXFxyaG9cIiwgXG4gICAgXCJcXFxccmlnaHRhcnJvd1wiLCBcbiAgICBcIlxcXFxzZlwiLCBcbiAgICBcIlxcXFxzaGFycFwiLCBcbiAgICBcIlxcXFxzaW1cIiwgXG4gICAgXCJcXFxcc2ltZXFcIiwgXG4gICAgXCJcXFxcc2luIHhcIiwgXG4gICAgXCJcXFxcc2luaFwiLCBcbiAgICBcIlxcXFxzbWFsbGludFwiLFxuICAgIFwiXFxcXHNtaWxlXCIsIFxuICAgIFwiXFxcXHNwYWRlc3VpdFwiLCBcbiAgICBcIlxcXFxzcWNhcFwiLCBcbiAgICBcIlxcXFxzdGFyXCIsIFxuICAgIFwiXFxcXHN1cmRcIiwgXG4gICAgXCJcXFxcc3dhcnJvd1wiLCBcbiAgICBcIlxcXFx0YW5oXCIsIFxuICAgIFwiXFxcXHRhdVwiLCBcbiAgICBcIlxcXFx0YW4geFwiLCBcbiAgICBcIlxcXFx0aGV0YVwiLCBcbiAgICBcIlxcXFxzdWJzZXRcIiwgXG4gICAgXCJcXFxcc3Vic2V0ZXFcIiwgXG4gICAgXCJcXFxcc3VjY2VxXCIsIFxuICAgIFwiXFxcXHN1cHNldFwiLCBcbiAgICBcIlxcXFxzdXBcIiwgXG4gICAgXCJcXFxcdmFycGhpXCIsXG4gICAgXCJcXFxcdmFycmhvXCIsIFxuICAgIFwiXFxcXHZhcnNpZ21hXCIsIFxuICAgIFwiXFxcXHZkYXNoXCIsIFxuICAgIFwiXFxcXHZkb3RzXCIsIFxuICAgIFwiXFxcXHZlYyBjXCIsIFxuICAgIFwiXFxcXHdlZGdlXCIsIFxuICAgIFwiXFxcXHdwXCIsIFxuICAgIFwiXFxcXHdyXCIsIFxuICAgIFwiXFxcXHhpXCIsIFxuICAgIFwiXFxcXHllYXJcIiwgXG4gICAgXCJcXFxcdW5saGRcIiwgXG4gICAgXCJcXFxcdHJpYW5nbGVcIiwgXG4gICAgXCJcXFxcdHJpYW5nbGVsZWZ0XCIsIFxuICAgIFwiXFxcXHRyaWFuZ2xlcmlnaHRcIiwgXG4gICAgXCJcXFxcdlwiLCBcbiAgICBcIlxcXFx2YXJlcHNpbG9uXCIsIFxuICAgIFwiXFxcXGJvd3RpZVwiLCBcbiAgICBcIlxcXFxzcGFkZXN1aXRcIiwgXG4gICAgXCJcXFxcRGlhbW9uZFwiLCBcbiAgICBcIlxcXFxoZWFydHN1aXRcIlxuXSIsImltcG9ydCB7IGVhc3lBcnIgfSBmcm9tIFwiLi9lYXN5X2FyclwiO1xudmFyIGVuZW15X2NvdW50ID0gMDsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW1leSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2JpbmQgZnVuY3Rpb25zXG4gICAgICAgIGVuZW15X2NvdW50Kys7IFxuXG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMgPSB0aGlzLmRyYXdFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCA9IHRoaXMuZHJhd0FzdGVyb2lkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0FsaWVuID0gdGhpcy5kcmF3QWxpZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcyA9IHRoaXMuYW5pbWF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuXG4gICAgICAgIC8vZ2V0IGFuZCBzZXQgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTYwMDsgXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vc2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGFzdGVyb2lkXG4gICAgICAgIGNvbnN0IHBvcyA9IFtbMCwwXSwgWzc0MCwgMF0sIFsxMzAwLCAwXV07XG4gICAgICAgIHRoaXMucmFuZG9tID0gZW5lbXlfY291bnQlMzsgXG4gICAgICAgIFt0aGlzLngsIHRoaXMueV0gPSBwb3NbdGhpcy5yYW5kb21dO1xuICAgICAgICAvLyB0aGlzLnggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLndpZHRoLTMwMCkpKTsgXG4gICAgICAgIC8vIHRoaXMueSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcbiAgICAgICAgLy8gdGhpcy54X2FsaWVuID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aCAtIDMwMCkpKTsgXG4gICAgICAgIC8vIHRoaXMueV9hbGllbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAwKSkpOyBcblxuICAgICAgICAvL3NldCBkZWx0YSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiBcbiAgICAgICAgaWYgKHRoaXMucmFuZG9tID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gMjsgXG4gICAgICAgICAgICB0aGlzLmR5ID0gLTI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5kb20gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAwOyBcbiAgICAgICAgICAgIHRoaXMuZHkgPSAyOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtMjsgXG4gICAgICAgICAgICB0aGlzLmR5ID0gMjsgXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5keCA9IDI7IFxuICAgICAgICAvLyB0aGlzLmR5ID0gLTI7IFxuICAgICAgICAvLyB0aGlzLmR4X2FsaWVuID0gLTM7IFxuICAgICAgICAvLyB0aGlzLmR5X2FsaWVuID0gMzsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGFsaWVuIGFuZCBhc3Rlcm9pZCBwaG90b3MgXG4gICAgICAgIHRoaXMuYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZC5zcmMgPSBcInNyYy9hc3NldHMvYXN0ZXJvaWQucG5nXCI7XG4gICAgICAgIHRoaXMuYWxpZW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5hbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG5cbiAgICAgICAgaWYgKGVuZW15X2NvdW50IDwgNTApIHtcbiAgICAgICAgICAgIHRoaXMubGF0ZXhBcnIgPSBlYXN5QXJyOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGF0ZXhBcnIgPSBcbiAgICAgICAgICAgIFtcIlxcXFxmcmFje2R9e2R4fWNebj1ueF57bi0xfVwiLCBcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7XFxcXHBhcnRpYWwgeX17XFxcXHBhcnRpYWwgeH1cIiwgXG4gICAgICAgICAgICBcIlxcXFxmcmFje2R9e2R4fWNebj1ueF57bi0xfVwiLCBcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9ZV57YXh9PWFcXFxcLGVee2F4fVwiLFxuICAgICAgICAgICAgXCJcXFxcZnJhY3tkfXtkeH1cXFxcbG4oeCk9XFxcXGZyYWN7MX17eH1cIixcbiAgICAgICAgICAgIFwiXFxcXGZyYWN7ZH17ZHh9XFxcXHNpbiB4PVxcXFxjb3MgeFwiLFxuICAgICAgICAgICAgXCJcXFxcYmlnY3VwX3tpPTF9XntufXtYX2l9XCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdjYXBfe2k9MX1ee259e1hfaX1cIixcbiAgICAgICAgICAgIFwiXFxcXGludF97MH1ee1xcXFxwaX0gXFxcXHNpbiB4IFxcXFwgZHggPSAyXCIsXG4gICAgICAgICAgICBcIlxcXFxsZWZ0KHgtMVxcXFxyaWdodClcXFxcbGVmdCh4KzNcXFxccmlnaHQpXCIsXG4gICAgICAgICAgICBcIlxcXFxsaW1fe2EgXFxcXHJpZ2h0YXJyb3cgYn1cIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ3ZlZV9hXmIgeFwiLCBcbiAgICAgICAgICAgIFwiXFxcXHN1bV9hXmIgeFwiXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBsYXRleCBcbiAgICAgICAgdGhpcy5sYXRleCA9IHRoaXMubGF0ZXhBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sYXRleEFyci5sZW5ndGgpXTtcblxuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlRW5lbWllcygpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBkcmF3RW5lbWllcygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gdmFyIGxhdGV4ID0gXCJcXFxcbGVmdChcXFxcZnJhY3sxfXtcXFxcc3FydHt4fX1cXFxccmlnaHQpXCJcbiAgICAgICAgLy8gdmFyIGxhdGV4MiA9IFwiRih4KSY9XFxcXGludF5hX2JcXFxcZnJhY3sxfXszfXheM1wiXG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5hc3Rlcm9pZC53aWR0aCwgdGhpcy5hc3Rlcm9pZC5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54X2FsaWVuLCB0aGlzLnlfYWxpZW4sIHRoaXMuYWxpZW4ud2lkdGgsIHRoaXMuYWxpZW4uaGVpZ2h0KTtcbiAgICAgICAgLy8gY29uc3QgYXN0ZXJvaWQgPSBuZXcgSW1hZ2UoKTsgXG4gICAgICAgIC8vIGFzdGVyb2lkLnNyYyA9IFwic3JjL2Fzc2V0cy9hc3Rlcm9pZC5wbmdcIjsgXG4gICAgICAgIC8vIGNvbnN0IGFsaWVuID0gbmV3IEltYWdlKCk7IFxuICAgICAgICAvLyBhbGllbi5zcmMgPSBcInNyYy9hc3NldHMvc2lsdmVydWZvLnBuZ1wiXG4gICAgICAgIC8vIGFzdGVyb2lkLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7IFxuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFzdGVyb2lkLCA0NiwgNDksIDIxMCwgMTkwLCB0aGlzLngsIHRoaXMueSwgNjQsIDcwLjczKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDYsIDQ5LCAyMTAsIDE5MCwgdGhpcy54LCB0aGlzLnksIDY0LCA3MC43Myk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShhc3Rlcm9pZCwgNDAsIDUwLCAxNzAsIDE3MCwgdGhpcy54LCB0aGlzLnksIDI1NiwgMjU2KSAgXG4gICAgICAgIC8vIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KGxhdGV4LCB0aGlzLngtMjAsIHRoaXMueSsxMzApO1xuICAgICAgICB0aGlzLmRyYXdBc3Rlcm9pZCgpO1xuICAgICAgICAvLyB0aGlzLmRyYXdBbGllbigpO1xuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBhbGllbi5vbmxvYWQgPSAoICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKGFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgICAgICAvLyB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiOyBcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFRleHQobGF0ZXgyLCB0aGlzLnhfYWxpZW4tMjAsIHRoaXMueV9hbGllbisxNTApO1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIGRyYXdBc3Rlcm9pZCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYXN0ZXJvaWQsIDQwLCA1MCwgMTcwLCAxNzAsIHRoaXMueCwgdGhpcy55LCAxNTAsIDE3MClcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBUaW1lcyBOZXcgUm9tYW5cIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4LCB0aGlzLnggLSAyMCwgdGhpcy55ICsgMTMwKTtcbiAgICB9XG5cbiAgICAvLyBkcmF3QWxpZW4oKSB7XG4gICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFsaWVuLCB0aGlzLnhfYWxpZW4sIHRoaXMueV9hbGllbiwgMjUwLCAyNTApO1xuICAgIC8vICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmxhdGV4MiwgdGhpcy54X2FsaWVuIC0gMjAsIHRoaXMueV9hbGllbiArIDE1MCk7XG4gICAgLy8gfVxuXG5cblxuICAgIFxuXG4gICAgYW5pbWF0ZUVuZW1pZXMoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7IFxuICAgICAgICB0aGlzLnhfYWxpZW4gKz0gdGhpcy5keF9hbGllbjsgXG4gICAgICAgIHRoaXMueV9hbGllbiArPSB0aGlzLmR5X2FsaWVuOyBcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoIC0yNTYgfHwgdGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jYW52YXMuaGVpZ2h0LSAyNTYgfHwgdGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5OyBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54X2FsaWVuID4gdGhpcy5jYW52YXMud2lkdGgtMjUwIHx8IHRoaXMueF9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHhfYWxpZW4gPSAtdGhpcy5keF9hbGllblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnlfYWxpZW4gPiB0aGlzLmNhbnZhcy5oZWlnaHQtMjUwIHx8IHRoaXMueV9hbGllbiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHlfYWxpZW4gPSAtdGhpcy5keV9hbGllblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0VuZW1pZXMoKTsgXG4gICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVFbmVtaWVzKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgRW5lbWV5IGZyb20gJy4vZW5lbXknO1xuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCB9IGZyb20gJ3RpbWVycyc7XG5pbXBvcnQgU3BhY2VzaGlwIGZyb20gJy4vc3BhY2VzaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLnBvcHVsYXRlRW5lbWllcyA9IHRoaXMucG9wdWxhdGVFbmVtaWVzLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLnJlbmRlckVuZW1pZXMgPSB0aGlzLnJlbmRlckVuZW1pZXMuYmluZCh0aGlzKTsgXG5cblxuICAgICAgICAvL2dldCBhbmQgc2V0IGNhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9Qb3B1bGF0ZSBlbmVtaWVzXG4gICAgICAgIHRoaXMuZW5lbWV5QXJyID0gW25ldyBFbmVtZXkoKV07IFxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnBvcHVsYXRlRW5lbWllcywgMjAwMCk7IFxuXG4gICAgICAgIC8vQ3JlYXRlIG5ldyBpbnN0YW5jZSBvZiBpbnB1dCBmaWVsZCBcbiAgICAgICAgdGhpcy5maWVsZCA9IG5ldyBJbnB1dCgpO1xuICAgICAgICB0aGlzLmZpZWxkLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmVudGVyUHJlc3NlZChlLCB0aGlzLmVuZW1leUFycilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9pbnN0YW50aWF0ZSBzY29yZSBcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7IFxuXG4gICAgICAgIC8vIGluaXRpdGlhbGl6ZSBtYXRoZmllbGQgXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0aEZpZWxkJyk7XG4gICAgICAgIHRoaXMubWF0aEZpZWxkID0gTVEuTWF0aEZpZWxkKHRoaXMuaHRtbEVsZW1lbnQpOyBcblxuICAgICAgICAvL2luaXRpYWxpemUgc3BhY2VzaGlwIFxuICAgICAgICB0aGlzLnNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTsgXG4gICAgICAgIC8vIHRoaXMuc3BhY2VzaGlwLmRyYXdTcGFjZXNoaXAoKTtcbiAgICB9XG5cblxuICAgIHBvcHVsYXRlRW5lbWllcygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWV5QXJyLnB1c2gobmV3IEVuZW15KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXJFbmVtaWVzKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLm1hdGhGaWVsZC5sYXRleCh0aGlzLmZpZWxkLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuZmllbGQudmVyaWZ5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlLnZhbHVlID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS52YWx1ZSwgMTApICsgMX1gXG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZlcmlmeSA9IGZhbHNlOyBcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW1leUFyclt0aGlzLmZpZWxkLmluZGV4XS5yYW5kb20gPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC5kcmF3TGVmdCgpOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmVtZXlBcnJbdGhpcy5maWVsZC5pbmRleF0ucmFuZG9tID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd01pZGRsZSgpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1JpZ2h0KCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmVtZXlBcnIuc3BsaWNlKHRoaXMuZmllbGQuaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuc3BhY2VzaGlwLmFuaW1hdGVNaXNzbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmVtZXlBcnIubGVuZ3RoID09PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5lbmQoKTsgXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdS1sb3NlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGxvc2VcIik7IFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtZXlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWV5QXJyW2ldLmRyYXcoKTsgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGFjZXNoaXAuZHJhd1NwYWNlc2hpcCgpOyBcbiAgICAgICAgLy8gdGhpcy5zcGFjZXNoaXAuc3RvcEFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5yZW5kZXJFbmVtaWVzLCAxMDApO1xuICAgIH1cblxuICAgIGVuZCgpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nLWlucHV0LWZpZWxkXCIpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVudGVyUHJlc3NlZCA9IHRoaXMuZW50ZXJQcmVzc2VkLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5kZXggPSBudWxsOyBcbiAgICAgICAgdGhpcy52ZXJpZnkgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgZW50ZXJQcmVzc2VkKGUsIGFycikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52ZXJpZnkgPSBmYWxzZTsgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0ubGF0ZXggPT09IHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gXCIxM1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFrZUxheW91dCgpOyBcbiAgICB9XG5cblxuICAgIG1ha2VMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwOyBcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwMDsgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUwLCA3NSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZXNoaXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vR3JhYiBjYW52YXMgXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7IFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy9iaW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmRyYXdTcGFjZXNoaXAgPSB0aGlzLmRyYXdTcGFjZXNoaXAuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd01pc3NsZSA9IHRoaXMuZHJhd01pc3NsZS5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5hbmltYXRlTGVmdCA9IHRoaXMuYW5pbWF0ZUxlZnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlTWlkZGxlID0gdGhpcy5hbmltYXRlTWlkZGxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0ID0gdGhpcy5hbmltYXRlUmlnaHQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd0xlZnQgPSB0aGlzLmRyYXdMZWZ0LmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmRyYXdNaWRkbGUgPSB0aGlzLmRyYXdNaWRkbGUuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZHJhd1JpZ2h0ID0gdGhpcy5kcmF3UmlnaHQuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHRoaXMuc3RvcEFuaW1hdGlvbi5iaW5kKHRoaXMpOyBcblxuICAgICAgICAvL0luaXRpYWxpemUgc3BhY2VzaGlwXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBJbWFnZSgpOyBcbiAgICAgICAgdGhpcy5zaGlwLnNyYyA9IFwic3JjL2Fzc2V0cy9ibGFja3NwYWNlc2hpcC5wbmdcIjsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIHBvc2l0aW9uIFxuICAgICAgICB0aGlzLnhsID0gNzgwOyBcbiAgICAgICAgdGhpcy55bCA9IDU1MDsgXG4gICAgICAgIHRoaXMueHIgPSA3ODA7IFxuICAgICAgICB0aGlzLnlyID0gNTUwOyBcbiAgICAgICAgdGhpcy54bSA9IDc4MDsgXG4gICAgICAgIHRoaXMueW0gPSA1NTA7IFxuXG4gICAgICAgIC8vaW5pdGlhbGl6ZSBkeGwgYW5kIGR5bCBcbiAgICAgICAgdGhpcy5keGwgPSAtNjA7IFxuICAgICAgICB0aGlzLmR5bCA9IC01MDsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplIGR4bSBhbmQgZHltXG4gICAgICAgIHRoaXMuZHhtID0gMDsgXG4gICAgICAgIHRoaXMuZHltID0gLTc4OyBcblxuICAgICAgICAvL2luaXRpYWxpemUgZHhyIGFuZCBkeXJcbiAgICAgICAgdGhpcy5keXIgPSAtNTA7IFxuICAgICAgICB0aGlzLmR4ciA9IDYwO1xuXG5cblxuICAgIH1cblxuICAgIGRyYXdTcGFjZXNoaXAoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNoaXAsIDczMCwgNTUwLCAxMDAsIDEwMCk7XG4gICAgfVxuXG4gICAgZHJhd01pc3NsZShwb3N4LCBwb3N5LCB4LHkpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IFxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9zeCwgcG9zeSk7IFxuICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9zeCt4LCBwb3N5K3kpOyBcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDY7IFxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTsgXG4gICAgfVxuXG4gICAgYW5pbWF0ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMueWwgKz0gdGhpcy5keWw7IFxuICAgICAgICB0aGlzLnhsICs9IHRoaXMuZHhsOyBcbiAgICAgICAgdGhpcy5kcmF3TWlzc2xlKHRoaXMueGwsIHRoaXMueWwsIDIwLCAxNyk7IFxuXG4gICAgfVxuXG4gICAgYW5pbWF0ZU1pZGRsZSgpIHtcbiAgICAgICAgdGhpcy55bSArPSB0aGlzLmR5bTsgXG4gICAgICAgIHRoaXMueG0gKz0gdGhpcy5keG07IFxuICAgICAgICB0aGlzLmRyYXdNaXNzbGUodGhpcy54bSwgdGhpcy55bSwgMCwgMTcpOyBcblxuICAgIH1cblxuICAgIGFuaW1hdGVSaWdodCgpIHtcbiAgICAgICAgdGhpcy55ciArPSB0aGlzLmR5cjsgXG4gICAgICAgIHRoaXMueHIgKz0gdGhpcy5keHJcbiAgICAgICAgdGhpcy5kcmF3TWlzc2xlKHRoaXMueHIsIHRoaXMueXIsIC0yMCwgMTcpOyBcbiAgICAgICAgaWYgKHRoaXMueXIgPD0gMCB8fCB0aGlzLnhyID49IDE2MDApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDU1MDtcbiAgICAgICAgICAgIHRoaXMueCA9IDc4MDtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBkcmF3TGVmdCgpIHtcbiAgICAgICAgdGhpcy5sZWZ0ID0gc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlTGVmdCwgIDEwKTtcbiAgICB9XG5cbiAgICBkcmF3TWlkZGxlKCkge1xuICAgICAgICB0aGlzLm1pZGRsZSA9IHNldEludGVydmFsKHRoaXMuYW5pbWF0ZU1pZGRsZSwgMTApOyBcbiAgICB9XG5cblxuICAgIGRyYXdSaWdodCgpIHtcbiAgICAgICAgdGhpcy5yaWdodCA9IHNldEludGVydmFsKHRoaXMuYW5pbWF0ZVJpZ2h0LCAxMClcbiAgICAgICAgLy8gdGhpcy5hbmltYXRlTWlzc2xlKCk7XG4gICAgfVxuXG4gICAgc3RvcEFuaW1hdGlvbigpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5sZWZ0KTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5yaWdodCk7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubWlkZGxlKTtcbiAgICAgICAgdGhpcy54ciA9IDc4MDsgXG4gICAgICAgIHRoaXMueG0gPSA3ODA7IFxuICAgICAgICB0aGlzLnhsID0gNzgwOyBcbiAgICAgICAgdGhpcy55ciA9IDU1MDsgXG4gICAgICAgIHRoaXMueW0gPSA1NTA7IFxuICAgICAgICB0aGlzLnlsID0gNTUwOyBcblxuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==