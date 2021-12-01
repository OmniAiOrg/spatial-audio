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
},{}],"js/cs_audio.js":[function(require,module,exports) {
"use strict";

var _helper = require("./helper.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx;
var listener;
var n1, n2, n3, n4, n5, n6, n7, n8;
var analysers = [n1, n2, n3, n4, n5, n6, n7, n8];
var music_event = new CustomEvent('music', {
  'detail': ''
});
music_event.maxValues = [0, 0, 0, 0, 0, 0, 0, 0];

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
  } // listen on the face angle change from cs_face_orientation.js


  window.addEventListener('build', function (event) {
    var info = document.querySelector('.info');
    var global_up = event.point_up;
    var global_forward = event.point_forward; // info.textContent = print(['u: x','y','z'],global_up);
    // info.textContent += print(['f: x','y','z'],global_forward);
    // Change the position of head and recalculate the volume on each ear

    listener.forwardX.value = global_forward[0];
    listener.forwardY.value = global_forward[1];
    listener.forwardZ.value = global_forward[2];
    listener.upX.value = global_up[0];
    listener.upY.value = global_up[1];
    listener.upZ.value = global_up[2]; // console.log('up',global_up);
    // console.log('forward',global_forward);
    // indicator.style.left  = (-maxY*(y-90)/180 - 10) + "px";
    // indicator.style.top = (-maxX*(x-90)/180 - 10) + "px";
    // indicator.style.transform = "rotate("+z+"deg)";
  });
  var track = audioCtx.createMediaElementSource(channels7);
  var channelsCount = 8;
  var splitterNode = new ChannelSplitterNode(audioCtx, {
    numberOfOutputs: channelsCount
  });
  track.connect(splitterNode); // const mergerNode = new ChannelMergerNode(audioCtx, { numberOfInputs: channelsCount });

  var _iterator = _createForOfIteratorHelper(audioElements),
      _step;

  try {
    var _loop = function _loop() {
      var audioPack = _step.value;
      // add each track to the IMU control
      var playElement = audioPack[0];
      var pos = audioPack[1];
      var gain = audioPack[2];
      var order = audioPack[3];
      analysers[order] = audioCtx.createAnalyser(); // let analyser = analysers[order];

      console.log(pos);
      var gainNode = audioCtx.createGain();
      gainNode.gain.value = gain;
      playElement.addEventListener('click', function () {
        if (gainNode.gain.value === 0) {
          playElement.children[0].classList.remove("slash");
          gainNode.gain.value = 1;
        } else {
          playElement.children[0].classList.add("slash");
          gainNode.gain.value = 0;
        }
      }, false); // const pannerOptions = {pan: 0};
      // const stereoPanner = new StereoPannerNode(audioCtx, pannerOptions);

      splitterNode.connect(gainNode, order).connect(analysers[order]).connect(panner(pos)).connect(audioCtx.destination);
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  function updateWave() {
    var dataArray = new Uint8Array(analysers[0].frequencyBinCount);
    var maxValues = [null, null, null, null, null, null, null, null];

    for (var i = 0; i < analysers.length; i++) {
      analysers[i].getByteTimeDomainData(dataArray);
      var maxValue = 128;

      var _iterator2 = _createForOfIteratorHelper(dataArray),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var num = _step2.value;

          if (num > maxValue) {
            maxValue = num;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      maxValue = Math.max(0, maxValue - 128);
      maxValues[i] = maxValue;
      audioElements[i][0].style.backgroundColor = "rgb(" + Math.min(255, -maxValue * 20 + 224) + ", 225, " + Math.min(255, maxValue * 10 + 226) + ")";
    }

    var arraysEqual = function arraysEqual(a1, a2) {
      for (var _i = 0; _i < 8; _i++) {
        if (a1[_i] !== a2[_i]) {
          return false;
        }
      }

      return true;
    };

    if (!arraysEqual(maxValues, music_event.maxValues)) {
      music_event.maxValues = maxValues; // console.log(maxValues);

      window.dispatchEvent(music_event);
    }
  }

  setInterval(updateWave, 50);
}

function playAudio(thisButton, audioElement) {
  if (!audioCtx) {
    init(audioElements);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (thisButton.dataset.playing === 'false') {
    var playPromise = audioElement.play();
    thisButton.dataset.playing = 'true';
    getEl('startPlay').style.backgroundColor = 'rgb(54,146,220)'; // if track is playing pause it
  } else if (thisButton.dataset.playing === 'true') {
    audioElement.pause();
    thisButton.dataset.playing = 'false';
    getEl('startPlay').style.backgroundColor = 'rgb(225,226,226)';
  }

  var state = thisButton.getAttribute('aria-checked') === "true";
  thisButton.setAttribute('aria-checked', state ? "false" : "true");
}

var getEl = function getEl(id) {
  return document.getElementById(id);
};

var a1 = [getEl('b1'), [-5, 0, -5], 1, 0]; // FL

var a2 = [getEl('b2'), [5, 0, -5], 1, 1]; // FR

var a3 = [getEl('b3'), [0, 0, -5], 1, 2]; // C

var a4 = [getEl('b4'), [0, 0, 0], 0, 3]; // LFE (mute by default)

var a5 = [getEl('b5'), [-5, 0, 5], 1, 4]; // BL

var a6 = [getEl('b6'), [5, 0, 5], 1, 5]; // BR

var a7 = [getEl('b7'), [-5, 0, 0], 1, 6]; // SL

var a8 = [getEl('b8'), [5, 0, 0], 1, 7]; // SR

var audioElements = [a1, a2, a3, a4, a5, a6, a7, a8];
var playAll = getEl('startPlay');
var channels7;

function chooseAudio(id) {
  channels7 = getEl(id);
  channels7.replaceWith(channels7.cloneNode(true)); // we must use a new element

  channels7 = getEl(id);
  playAll.addEventListener('click', function () {
    console.log('id', id);
    playAudio(this, channels7);
  }, false);
}

chooseAudio('channels7'); // default

function stopPlayAll() {
  var thisButton = getEl('startPlay');

  if (thisButton.dataset.playing === 'true') {
    channels7.pause();
    thisButton.dataset.playing = 'false';
    getEl('startPlay').style.backgroundColor = 'rgb(225,226,226)';
  }
}

getEl('audio1').addEventListener('click', function () {
  stopPlayAll();
  var id = this.dataset.aim;
  audioCtx = null;
  playAll.replaceWith(playAll.cloneNode(true)); // we must use a new element

  playAll = getEl('startPlay');
  console.log(id);
  chooseAudio(id);
  getEl('AllowLocalFile').style.display = "none";
});
getEl('audio2').addEventListener('click', function () {
  stopPlayAll();
  var id = this.dataset.aim;
  audioCtx = null;
  playAll.replaceWith(playAll.cloneNode(true)); // we must use a new element

  playAll = getEl('startPlay');
  console.log(id);
  chooseAudio(id);
  getEl('AllowLocalFile').style.display = "none";
});
getEl('audioLocal').addEventListener('click', function () {
  stopPlayAll();
  getEl('AllowLocalFile').style.display = "block";
});
getEl("inputFile").addEventListener("change", function () {
  stopPlayAll();
  var fileList = this.files;
  console.log(fileList);

  if (fileList.length > 0) {
    audioCtx = null;
    playAll.replaceWith(playAll.cloneNode(true)); // we must use a new element

    playAll = getEl('startPlay');
    var url = window.URL.createObjectURL(fileList[0]);
    getEl('aimLocalAudio').src = url;
    channels7 = getEl('aimLocalAudio');
    playAll.addEventListener('click', function () {
      console.log('url', url);
      playAudio(this, channels7);
    }, false);
  }
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/cs_audio.js"], null)
//# sourceMappingURL=/cs_audio.35d2f966.js.map