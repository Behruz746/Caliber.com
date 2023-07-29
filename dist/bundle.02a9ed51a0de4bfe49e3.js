/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ (() => {

const {
  body
} = document;
const sectionList = document.querySelectorAll(".section__list li");
const playContent = document.querySelector(".play__contant");
const videoPlayerContent = document.querySelector(".videoPlayer__container");
const pleyContainer = document.querySelector(".pley__container");
const gunShutAudio = document.querySelector(".audio__gunShut");
const gunReturnAudio = document.querySelector(".audio__gunReturn");
sectionList.forEach((item, index) => {
  item.addEventListener("click", () => {
    ActivedMenuList(item, index);
  });
});
function ActivedMenuList(item, index) {
  switch (index) {
    case 0:
      trailerRemove(playContent, videoPlayerContent);
      break;
    case 1:
      trailerActive(playContent, videoPlayerContent);
      break;
    case 2:
      trailerActive(playContent, videoPlayerContent);
      break;
    case 3:
      trailerActive(playContent, videoPlayerContent);
      break;
    default:
      break;
  }
}
function trailerActive(content, contentPly) {
  gunShutAudio.play();
  gunShutAudio.currentTime = 0;
  content.classList.add("hidden-container");
  contentPly.classList.remove("hidden-container");
  pleyContainer.classList.add("active--pley__container");
  body.style.backgroundImage = "url('images/fone02.png')";
}
function trailerRemove(content, contentPly) {
  gunShutAudio.play();
  gunShutAudio.currentTime = 0;
  content.classList.remove("hidden-container");
  contentPly.classList.add("hidden-container");
  pleyContainer.classList.remove("active--pley__container");
  body.style.backgroundImage = "url('images/fone.png')";
}
sectionList.forEach(item => {
  item.addEventListener("mouseover", () => {
    gunReturnAudio.play();
  });
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

const sectionList = document.querySelectorAll(".section__list li");
for (let i = 0; i < sectionList.length; i++) {
  sectionList[i].addEventListener("click", () => {
    for (let j = 0; j < sectionList.length; j++) {
      sectionList[j].classList.remove("active--line");
    }
    sectionList[i].classList.add("active--line");
  });
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (() => {

const main = document.querySelector('.main');
const sliderVideo = document.querySelectorAll(".slider video");
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const playIcon = document.querySelector(".play__icon");
const timeDiv = document.querySelector(".video__time");
const soundValue = document.querySelector(".sound__value");
const playBtn = document.querySelector(".play--btn path");
const closeVideo = document.querySelector(".close__video");
const fullScreeIcon = document.querySelector(".fullScree__icon");
sliderVideo.forEach(video => {
  video.currentTime = 10;
  video.pause();
});
function videoActive() {
  player.style.display = "block";
  main.style.display = "none";
  sliderVideo.forEach((listVideo, index) => {
    let src = listVideo.getAttribute('src');
    // listVideo.pause();

    if (index === 0) {
      video.src = src;
      video.play();
    }
  });
}
;
function listVideoAct(listVideo, index) {
  let src = listVideo.getAttribute('src');
  player.style.display = "block";
  video.src = src;
  video.play();
}
function smaolScreen() {
  let src = video.getAttribute('src');
  let videoTime = video.currentTime;
  clearVideo();
  sliderVideo.forEach((listVideo, index) => {
    if (index === 0) {
      listVideo.src = src;
      listVideo.currentTime = videoTime;
      listVideo.play();
    }
  });
}
;
playBtn.addEventListener('click', videoActive);
sliderVideo.forEach((video, index) => video.addEventListener('click', () => {
  listVideoAct(video, index);
}));
fullScreeIcon.addEventListener('click', smaolScreen);

// function activeVideo() {
//   player.style.display = "block";
//   video.play();

//   sliderVideo.forEach((listVideo) => {
//     listVideo.pause();
//   });
// }

// function sliderPlay(slidVideo) {
//   activeVideo();
//   const videoSrc = slidVideo.getAttribute("src");
//   video.src = videoSrc;
//   video.play();

//   fullScreeIcon.addEventListener("click", () => {
//     slidVideo.play();
//     slidVideo.volume = 1;
//     clearVideo();
//   });
// }

function clearVideo() {
  player.style.display = "none";
  main.style.display = "block";
  video.pause();
  video.currentTime = 0;
}

// function videoOver(video) {
//   video.play();
// }

// function videoOut(video) {
//   video.pause();
//   video.currentTime = 0;
// }

const toggleElement = {
  once: false
};
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  sliderVideo.forEach(itemV => {
    itemV.pause();
    itemV.volume = 0;
  });
}
function updateButton() {
  const icon = this.paused ? "images/Property 1=Play.png" : "images/Play & Pause.png";
  playIcon.src = icon;
}
function handleProgress() {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

// ===============================================

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds - hours * 3600 - minutes * 60;
  const arr = [minutes.toFixed(), remainingSeconds.toFixed()];
  return arr;
}
setInterval(() => {
  const currentTime = formatTime(video.currentTime);
  const secounts = currentTime[1] < 10 ? `0${currentTime[1]}` : currentTime[1];
  const minutes = currentTime[0] < 10 ? `0${currentTime[0]}` : currentTime[0];
  timeDiv.innerHTML = `${minutes}:${secounts}`;
}, 500);

// =====================================================================

let TF = true;
function videoSoundValue() {
  const soundIcon = document.querySelector(".sound__value img");
  if (TF) {
    video.volume = 0;
    soundIcon.src = "images/Property 1=volume-mute-line.png";
    TF = false;
  } else if (!TF) {
    soundIcon.src = "images/Property 1=volume-up-line.png";
    video.volume = 1;
    TF = true;
  }
}
video.addEventListener("click", togglePlay, toggleElement);
video.addEventListener("play", updateButton, toggleElement);
video.addEventListener("pause", updateButton, toggleElement);
video.addEventListener("timeupdate", handleProgress, toggleElement);
soundValue.addEventListener("click", videoSoundValue, toggleElement);
toggle.addEventListener("click", togglePlay, toggleElement);
progress.addEventListener("click", scrub, toggleElement);
closeVideo.addEventListener("click", clearVideo, toggleElement);
// playBtn.addEventListener("click", activeVideo, toggleElement);

// sliderVideo.forEach((video) => video.addEventListener("mouseover", () => {
//   videoOver(video);
//   video.volume = 0;
// }));

// sliderVideo.forEach((video) => video.addEventListener("mouseout", () => { videoOut(video); }));
// sliderVideo.forEach((video) => video.addEventListener("click", () => { sliderPlay(video); }));

window.addEventListener("keydown", e => {
  if (e.keyCode === 32) {
    updateButton();
    togglePlay();
  } else if (e.keyCode === 27) {
    clearVideo();
  }
});

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

const btnProd = document.querySelector(".slider__btn--next");
const btnNext = document.querySelector(".slider__btn--prod");
const sliderBox = document.querySelector(".slider__box");
let y = 0;
function upArrow() {
  if (y >= "0") {
    y += 130;
    sliderBox.style.transform = `translateY(-${y}px)`;
    console.log(y, "-top");
    if (y >= 910) {
      y = 0;
      sliderBox.style.transform = `translateY(${y}px)`;
      console.log("0px", "+top");
    }
  }
}
function dawnArrow() {
  if (y >= "0") {
    y -= 130;
    sliderBox.style.transform = `translateY(-${y}px)`;
    console.log(y, "+bottom");
    if (y === -130) {
      y = 910;
      sliderBox.style.transform = `translateY(-${y - 130}px)`;
      console.log("910px", "-bottom");
    }
  }
}
btnProd.addEventListener("click", dawnArrow);
btnNext.addEventListener("click", upArrow);

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/Caliber is available in Steam.mp4":
/*!******************************************************!*\
  !*** ./src/assets/Caliber is available in Steam.mp4 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Caliber is available in Steam.mp4";

/***/ }),

/***/ "./src/assets/Fearmonger Battle Pass _ Caliber.mp4":
/*!*********************************************************!*\
  !*** ./src/assets/Fearmonger Battle Pass _ Caliber.mp4 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Fearmonger Battle Pass _ Caliber.mp4";

/***/ }),

/***/ "./src/assets/Lieutenant-CBB.m4a":
/*!***************************************!*\
  !*** ./src/assets/Lieutenant-CBB.m4a ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Lieutenant-CBB.m4a";

/***/ }),

/***/ "./src/assets/Lieutenant-CBB.mp3":
/*!***************************************!*\
  !*** ./src/assets/Lieutenant-CBB.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Lieutenant-CBB.mp3";

/***/ }),

/***/ "./src/assets/Play & Pause.png":
/*!*************************************!*\
  !*** ./src/assets/Play & Pause.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Play & Pause.png";

/***/ }),

/***/ "./src/assets/Property 1=Play.png":
/*!****************************************!*\
  !*** ./src/assets/Property 1=Play.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Property 1=Play.png";

/***/ }),

/***/ "./src/assets/Property 1=volume-mute-line.png":
/*!****************************************************!*\
  !*** ./src/assets/Property 1=volume-mute-line.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Property 1=volume-mute-line.png";

/***/ }),

/***/ "./src/assets/Property 1=volume-up-line.png":
/*!**************************************************!*\
  !*** ./src/assets/Property 1=volume-up-line.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Property 1=volume-up-line.png";

/***/ }),

/***/ "./src/assets/age.png":
/*!****************************!*\
  !*** ./src/assets/age.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/age.png";

/***/ }),

/***/ "./src/assets/clearIcon.png":
/*!**********************************!*\
  !*** ./src/assets/clearIcon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/clearIcon.png";

/***/ }),

/***/ "./src/assets/fone02.png":
/*!*******************************!*\
  !*** ./src/assets/fone02.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fone02.png";

/***/ }),

/***/ "./src/assets/fone03.png":
/*!*******************************!*\
  !*** ./src/assets/fone03.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fone03.png";

/***/ }),

/***/ "./src/assets/gunReturn.mp3":
/*!**********************************!*\
  !*** ./src/assets/gunReturn.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/gunReturn.mp3";

/***/ }),

/***/ "./src/assets/gunShut.mp3":
/*!********************************!*\
  !*** ./src/assets/gunShut.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/gunShut.mp3";

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo.png";

/***/ }),

/***/ "./src/assets/play_icon.png":
/*!**********************************!*\
  !*** ./src/assets/play_icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/play_icon.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.js */ "./src/container.js");
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_container_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
/* harmony import */ var _assets_age_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/age.png */ "./src/assets/age.png");
/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_fone02_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/fone02.png */ "./src/assets/fone02.png");
/* harmony import */ var _assets_fone03_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/fone03.png */ "./src/assets/fone03.png");
/* harmony import */ var _assets_play_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/play_icon.png */ "./src/assets/play_icon.png");
/* harmony import */ var _assets_Lieutenant_CBB_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/Lieutenant-CBB.mp3 */ "./src/assets/Lieutenant-CBB.mp3");
/* harmony import */ var _assets_gunShut_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/gunShut.mp3 */ "./src/assets/gunShut.mp3");
/* harmony import */ var _assets_gunReturn_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/gunReturn.mp3 */ "./src/assets/gunReturn.mp3");
/* harmony import */ var _assets_Lieutenant_CBB_m4a__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/Lieutenant-CBB.m4a */ "./src/assets/Lieutenant-CBB.m4a");
/* harmony import */ var _assets_Fearmonger_Battle_Pass_Caliber_mp4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/Fearmonger Battle Pass _ Caliber.mp4 */ "./src/assets/Fearmonger Battle Pass _ Caliber.mp4");
/* harmony import */ var _assets_Caliber_is_available_in_Steam_mp4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/Caliber is available in Steam.mp4 */ "./src/assets/Caliber is available in Steam.mp4");
/* harmony import */ var _assets_Property_1_volume_up_line_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/Property 1=volume-up-line.png */ "./src/assets/Property 1=volume-up-line.png");
/* harmony import */ var _assets_Property_1_volume_mute_line_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/Property 1=volume-mute-line.png */ "./src/assets/Property 1=volume-mute-line.png");
/* harmony import */ var _assets_Play_Pause_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/Play & Pause.png */ "./src/assets/Play & Pause.png");
/* harmony import */ var _assets_Property_1_Play_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/Property 1=Play.png */ "./src/assets/Property 1=Play.png");
/* harmony import */ var _assets_clearIcon_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/clearIcon.png */ "./src/assets/clearIcon.png");
/* eslint-disable import/extensions */






















})();

/******/ })()
;
//# sourceMappingURL=bundle.02a9ed51a0de4bfe49e3.js.map