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
sectionList.forEach((item, index) => {
  item.addEventListener("click", () => {
    switch (index) {
      case 0:
        trailerRemove(playContent, videoPlayerContent);
        break;
      case 1:
        trailerActive(playContent, videoPlayerContent);
        break;
      default:
        break;
    }
  });
});
function trailerActive(content, contentPly) {
  content.classList.add("hidden-container");
  contentPly.classList.remove("hidden-container");
  pleyContainer.classList.add("active--pley__container");
  body.style.backgroundImage = "url('images/fone02.png')";
}
function trailerRemove(content, contentPly) {
  content.classList.remove("hidden-container");
  contentPly.classList.add("hidden-container");
  pleyContainer.classList.remove("active--pley__container");
  body.style.backgroundImage = "url('images/fone.png')";
}

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



/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

const btnNext = document.querySelector(".slider__btn--next");
const btnProd = document.querySelector(".slider__btn--prod");
const sliderBox = document.querySelector(".slider__box");
let TF = 0;
function nextSlider() {
  if (TF === 0) {
    sliderBox.style.transform = "translateY(-395px)";
    TF = 1;
  } else if (TF === 1) {
    sliderBox.style.transform = "translateY(-790px)";
    TF = 2;
  } else {
    sliderBox.style.transform = "translateY(0px)";
    TF = 0;
  }
  return TF;
}
function prodSlider() {
  let num = nextSlider();
  if (num === 0) {
    sliderBox.style.transform = "translateY(-790px)";
  }
  if (num === 2) {
    sliderBox.style.transform = "translateY(0px)";
    num = 0;
  }
}
btnNext.addEventListener("click", prodSlider);
btnProd.addEventListener("click", nextSlider);

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

/***/ "./src/assets/age.png":
/*!****************************!*\
  !*** ./src/assets/age.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/age.png";

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
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_fone02_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/fone02.png */ "./src/assets/fone02.png");
/* harmony import */ var _assets_fone03_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/fone03.png */ "./src/assets/fone03.png");
/* harmony import */ var _assets_play_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/play_icon.png */ "./src/assets/play_icon.png");
/* eslint-disable import/extensions */










})();

/******/ })()
;
//# sourceMappingURL=bundle.2ad0ec432a06361bad14.js.map