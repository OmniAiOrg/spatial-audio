parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EMKo":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=r(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw a}}}}function r(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function e(r,n){var e,o="",a=t(r.values());try{for(a.s();!(e=a.n()).done;){o+=e.value+"\t"}}catch(f){a.e(f)}finally{a.f()}o+="\n";var i,u=t(n.values());try{for(u.s();!(i=u.n()).done;){var l=i.value;o+=Number(l).toFixed(2)+"\t"}}catch(f){u.e(f)}finally{u.f()}return o+="\n"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.print=e;
},{}],"UEW0":[function(require,module,exports) {
"use strict";var e=require("./helper.js");function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,u=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw a}}}}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o,a,i=window.AudioContext||window.webkitAudioContext;function u(t){o=new i;(a=o.listener).positionX?(a.positionX.value=0,a.positionY.value=0,a.positionZ.value=0):a.setPosition(0,0,0),a.forwardX?(a.forwardX.value=0,a.forwardY.value=0,a.forwardZ.value=-1,a.upX.value=0,a.upY.value=1,a.upZ.value=0):a.setOrientation(0,0,-1,0,1,0);var r="HRTF",u=40,l=50,c=1,s="linear",d=2e4,f=1,v=.9,p=0,y=0,w=0,g=0,b=0,m=1;function h(e){return new PannerNode(o,{panningModel:r,distanceModel:s,positionX:p+e[0],positionY:y+e[1],positionZ:w+e[2],orientationX:g,orientationY:b,orientationZ:m,refDistance:f,maxDistance:d,rolloffFactor:v,coneInnerAngle:u,coneOuterAngle:l,coneOuterGain:c})}window.addEventListener("build",function(n){var t=document.querySelector(".info"),r=n.point_up,o=n.point_forward;t.textContent=(0,e.print)(["u: x","y","z"],r),t.textContent+=(0,e.print)(["f: x","y","z"],o),a.forwardX.value=o[0],a.forwardY.value=o[1],a.forwardZ.value=o[2],a.upX.value=r[0],a.upY.value=r[1],a.upZ.value=r[2],console.log("up",r),console.log("forward",o)});var A,S=n(t);try{for(S.s();!(A=S.n()).done;){var X=A.value,x=X[0],E=X[1],k=X[2];console.log(E);var Y=o.createMediaElementSource(x),Z=o.createGain();Z.gain.value=k;var C=new StereoPannerNode(o,{pan:0});Y.connect(Z).connect(C).connect(h(E)).connect(o.destination)}}catch(I){S.e(I)}finally{S.f()}}function l(e,n){o||u(v),"suspended"===o.state&&o.resume(),"false"===e.dataset.playing?(n.play(),e.dataset.playing="true"):"true"===e.dataset.playing&&(n.pause(),e.dataset.playing="false");var t="true"===e.getAttribute("aria-checked");e.setAttribute("aria-checked",t?"false":"true")}var c=function(e){return document.getElementById(e)},s=[c("a1"),[0,0,-5],.4],d=[c("a2"),[5,0,0],.8],f=[c("a3"),[-5,0,0],.9],v=[s,d,f],p=c("b1");p.addEventListener("click",function(){l(this,s[0])},!1);var y=c("b2");y.addEventListener("click",function(){l(this,d[0])},!1);var w=c("b3");w.addEventListener("click",function(){l(this,f[0])},!1);var g=c("all");g.addEventListener("click",function(){l(p,s[0]),l(y,d[0]),l(w,f[0])},!1);
},{"./helper.js":"EMKo"}]},{},["UEW0"], null)
//# sourceMappingURL=/face_3d_spatial_audio.a3f8cb36.js.map