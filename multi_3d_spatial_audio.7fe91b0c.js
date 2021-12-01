// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function print(names, values) {
  // console.log(values);
  var str = '';

  var _iterator = _createForOfIteratorHelper(names.values()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      str += name + '\t';
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  str += '\n';

  var _iterator2 = _createForOfIteratorHelper(values.values()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      str += Number(value).toFixed(2) + '\t';
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  str += '\n';
  return str;
}
},{}],"js/multi_3d_spatial_audio.js":[function(require,module,exports) {
"use strict";

var _helper = require("./helper.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx;
var listener;
var indicator = document.querySelector('.indicator');
var garden = document.querySelector('.garden');
var maxX = garden.clientWidth - indicator.clientWidth;
var maxY = garden.clientHeight - indicator.clientHeight;

function init(audioElements) {
  audioCtx = new AudioContext();
  listener = audioCtx.listener; // Let's set the position of our listener based on where our boombox is.

  var posX = 0;
  var posY = 0;
  var posZ = 0; // set position of the listener

  if (listener.positionX) {
    listener.positionX.value = posX;
    listener.positionY.value = posY;
    listener.positionZ.value = posZ;
  } else {
    listener.setPosition(posX, posY, posZ);
  } // set the orientation of the head of listener


  if (listener.forwardX) {
    listener.forwardX.value = 0;
    listener.forwardY.value = 0;
    listener.forwardZ.value = -1;
    listener.upX.value = 0;
    listener.upY.value = 1;
    listener.upZ.value = 0;
  } else {
    listener.setOrientation(0, 0, -1, 0, 1, 0);
  }

  var pannerModel = 'HRTF';
  var innerCone = 40;
  var outerCone = 50;
  var outerGain = 1; // omnisource

  var distanceModel = 'linear';
  var maxDistance = 20000;
  var refDistance = 1;
  var rollOff = 0.9;
  var positionX = posX;
  var positionY = posY;
  var positionZ = posZ;
  var orientationX = 0.0;
  var orientationY = 0.0;
  var orientationZ = 1.0; // let's use the class method for creating our panner node and pass in all those parameters we've set.

  function panner(pos) {
    return new PannerNode(audioCtx, {
      panningModel: pannerModel,
      distanceModel: distanceModel,
      positionX: positionX + pos[0],
      positionY: positionY + pos[1],
      positionZ: positionZ + pos[2],
      orientationX: orientationX,
      orientationY: orientationY,
      orientationZ: orientationZ,
      refDistance: refDistance,
      maxDistance: maxDistance,
      rolloffFactor: rollOff,
      coneInnerAngle: innerCone,
      coneOuterAngle: outerCone,
      coneOuterGain: outerGain
    });
  } //             [alpha, beta, gamma]
  //               [z, x, y] according to https://www.w3.org/TR/orientation-event/


  var init_flags = [0, 0, 0];
  var init_values = [0, 0, 0];
  var prev_values = [0, 0, 0];
  var diff_values = [0, 0, 0];

  if (window.DeviceOrientationEvent) {
    console.log("success: DeviceOrientationEvent");
    window.addEventListener('deviceorientation', function (event) {
      var info = document.querySelector('.info');
      var z = event.alpha,
          x = event.beta,
          y = event.gamma; // console.log(x+","+y+","+z);

      var values = [z, x, y];
      var exist_large_diff = 0;
      var drop_size_for_calibration = 2;

      for (var i = 0; i < 3; i++) {
        if (init_flags[i] < drop_size_for_calibration) {
          init_flags[i] += 1;
          init_values[i] = values[i];
        }

        diff_values[i] = values[i] - init_values[i];

        if (Math.abs(prev_values[i] - diff_values[i]) > 1) {
          exist_large_diff = 1;
        }
      }

      if (exist_large_diff === 0) {
        return;
      }

      prev_values[0] = diff_values[0];
      prev_values[1] = diff_values[1];
      prev_values[2] = diff_values[2];
      z = diff_values[0]; // x = diff_values[1];
      // y = diff_values[2];

      var Sx = Math.sin(x / 180 * Math.PI),
          Sy = Math.sin(y / 180 * Math.PI),
          Sz = Math.sin(z / 180 * Math.PI),
          Cx = Math.cos(x / 180 * Math.PI),
          Cy = Math.cos(y / 180 * Math.PI),
          Cz = Math.cos(z / 180 * Math.PI);
      var Xx = Cy * Cz - Sx * Sy * Sz,
          Yx = -Cx * Sz,
          Zx = Cz * Sy + Cy * Sx * Sz,
          Xy = Cz * Sx * Sy + Cy * Sz,
          Yy = Cx * Cz,
          Zy = -Cy * Cz * Sx + Sy * Sz,
          Xz = -Cx * Sy,
          Yz = Sx,
          Zz = Cx * Cy;
      info.textContent = (0, _helper.print)(['alpha', 'beta', 'gamma'], [z, x, y]);
      info.textContent += (0, _helper.print)(['X: x', 'y', 'z'], [Xx, Xy, Xz]);
      info.textContent += (0, _helper.print)(['Y: x', 'y', 'z'], [Yx, Yy, Yz]);
      info.textContent += (0, _helper.print)(['Z: x', 'y', 'z'], [Zx, Zy, Zz]); // Change the position of head and recalculate the volume on each ear

      listener.forwardX.value = Yx;
      listener.forwardY.value = Yz;
      listener.forwardZ.value = -Yy;
      listener.upX.value = Zx;
      listener.upY.value = Zz;
      listener.upZ.value = -Zy;
      indicator.style.left = -maxY * (y - 90) / 180 - 10 + "px";
      indicator.style.top = -maxX * (x - 90) / 180 - 10 + "px";
      indicator.style.transform = "rotate(" + z + "deg)";
    });
  } else {
    console.log("error: DeviceOrientationEvent");
  }

  var _iterator = _createForOfIteratorHelper(audioElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var audioPack = _step.value;
      // add each track to the IMU control
      var audioElement = audioPack[0];
      var pos = audioPack[1];
      var gain = audioPack[2];
      console.log(pos);
      var track = audioCtx.createMediaElementSource(audioElement);
      var gainNode = audioCtx.createGain();
      gainNode.gain.value = gain;
      var pannerOptions = {
        pan: 0
      };
      var stereoPanner = new StereoPannerNode(audioCtx, pannerOptions);
      track.connect(gainNode).connect(stereoPanner).connect(panner(pos)).connect(audioCtx.destination);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function playAudio(this_button, audioElement) {
  if (!audioCtx) {
    init(audioElements);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (this_button.dataset.playing === 'false') {
    audioElement.play();
    this_button.dataset.playing = 'true'; // if track is playing pause it
  } else if (this_button.dataset.playing === 'true') {
    audioElement.pause();
    this_button.dataset.playing = 'false';
  }

  var state = this_button.getAttribute('aria-checked') === "true";
  this_button.setAttribute('aria-checked', state ? "false" : "true");
}

var getEl = function getEl(id) {
  return document.getElementById(id);
};

var a1 = [getEl('a1'), [0, 0, -5], 0.4]; // front

var a2 = [getEl('a2'), [5, 0, 0], 0.8]; // right

var a3 = [getEl('a3'), [-5, 0, 0], 0.9]; // left

var audioElements = [a1, a2, a3];
var playButton1 = getEl('b1');
playButton1.addEventListener('click', function () {
  playAudio(this, a1[0]);
}, false);
var playButton2 = getEl('b2');
playButton2.addEventListener('click', function () {
  playAudio(this, a2[0]);
}, false);
var playButton3 = getEl('b3');
playButton3.addEventListener('click', function () {
  playAudio(this, a3[0]);
}, false);
var playAll = getEl('all');
playAll.addEventListener('click', function () {
  playAudio(playButton1, a1[0]);
  playAudio(playButton2, a2[0]);
  playAudio(playButton3, a3[0]);
}, false);
},{"./helper.js":"js/helper.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59788" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/multi_3d_spatial_audio.js"], null)
//# sourceMappingURL=/multi_3d_spatial_audio.7fe91b0c.js.map