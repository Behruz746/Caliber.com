/** *** */ (() => { // webpackBootstrap
/** *** */ 	const __webpack_modules__ = ({

    /***/ "./src/container.js":
    /*! **************************!*\
  !*** ./src/container.js ***!
  \************************* */
    /***/ (() => {
      /* eslint-disable no-use-before-define */
      const {
        body,
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
      sectionList.forEach((item) => {
        item.addEventListener("mouseover", () => {
          gunReturnAudio.play();
        });
      });
      /***/ }),

    /***/ "./src/menu.js":
    /*! *********************!*\
  !*** ./src/menu.js ***!
  \******************** */
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
    /*! ***********************!*\
  !*** ./src/player.js ***!
  \********************** */
    /***/ (() => {
      /* eslint-disable no-shadow */
      /* eslint-disable no-use-before-define */
      /* eslint-disable no-param-reassign */
      /* eslint-disable no-inner-declarations */

      const main = document.querySelector(".main");
      const sliderVideo = document.querySelectorAll(".slider video");
      const player = document.querySelector(".player");
      const video = document.querySelector(".viewer");
      const progress = document.querySelector(".progress");
      const progressBar = document.querySelector(".progress__filled");
      const toggle = document.querySelector(".toggle");
      const playIcon = document.querySelector(".play__icon");
      const timeDiv = document.querySelector(".video__time");
      const playerTime = document.querySelector(".player__time h1");
      const soundValue = document.querySelector(".sound__value");
      const playBtn = document.querySelector(".play--btn g");
      const playSvg = document.querySelector(".play--btn");
      const pauseSvg = document.querySelector(".pause--btn");
      const closeVideo = document.querySelector(".close__video");
      const fullScreeIcon = document.querySelector(".fullScree__icon");
      const borderVideo = document.querySelector(".borderVideo");
      let TF = true;

      // =====================================================================================

      function videoActive() {
        player.style.display = "block";
        main.style.display = "none";
        playSvg.style.display = "none";
        pauseSvg.style.display = "block";
        sliderVideo.forEach((listVideo, index) => {
          const src = listVideo.getAttribute("src");
          listVideo.pause();
          if (index === 0) {
            video.src = src;
            video.play();
          }
        });
      }
      pauseSvg.addEventListener("click", () => {
        playSvg.style.display = "block";
        pauseSvg.style.display = "none";
        sliderVideo.forEach((listVideo, index) => {
          const src = listVideo.getAttribute("src");
          listVideo.pause();
          if (index === 0) {
            video.src = src;
            video.pause();
          }
        });
      });

      // ===================================================================================

      function listVideoAct(listVideo) {
        const src = listVideo.getAttribute("src");
        player.style.display = "block";
        video.src = src;
        video.play();
        playSvg.style.display = "none";
        pauseSvg.style.display = "block";
        sliderVideo.forEach((itemV) => {
          itemV.pause();
          itemV.volume = 1;
        });
      }
      function smaolScreen() {
        const src = video.getAttribute("src");
        const videoTime = video.currentTime;
        clearVideo();
        sliderVideo.forEach((listVideo, index) => {
          if (index === 0) {
            listVideo.src = src;
            listVideo.currentTime = videoTime;
            listVideo.play();
            function getTime() {
              const math = listVideo.currentTime / listVideo.duration * 627;
              const scrub = 627;
              borderVideo.style.strokeDashoffset = scrub - math.toFixed();
            }
            setInterval(() => {
              const currentTime = formatTime(listVideo.currentTime);
              const secounts = currentTime[1] < 10 ? `0${currentTime[1]}` : currentTime[1];
              const minutes = currentTime[0] < 10 ? `0${currentTime[0]}` : currentTime[0];
              playerTime.innerHTML = `${minutes}:${secounts}`;
            }, 500);
            if (!TF) {
              listVideo.volume = 0;
            } else if (TF) {
              listVideo.volume = 1;
            }
            listVideo.addEventListener("timeupdate", getTime);
          }
        });
      }
      playBtn.addEventListener("click", videoActive);
      sliderVideo.forEach((video, index) => video.addEventListener("click", () => {
        listVideoAct(video, index);
      }));
      function clearVideo() {
        player.style.display = "none";
        main.style.display = "block";
        video.pause();
        video.currentTime = 0;
      }
      const toggleElement = {
        once: false,
      };
      function togglePlay() {
        const method = video.paused ? "play" : "pause";
        video[method]();
        sliderVideo.forEach((itemV) => {
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
      fullScreeIcon.addEventListener("click", smaolScreen);
      window.addEventListener("keydown", (e) => {
        if (e.keyCode === 32) {
          updateButton();
          togglePlay();
        } else if (e.keyCode === 27) {
          clearVideo();
        }
      });
      /***/ }),

    /***/ "./src/slider.js":
    /*! ***********************!*\
  !*** ./src/slider.js ***!
  \********************** */
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
    /*! ****************************!*\
  !*** ./src/style/main.css ***!
  \*************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin
      /***/ }),

    /***/ "./src/assets/audio/Lieutenant-CBB.mp3":
    /*! *********************************************!*\
  !*** ./src/assets/audio/Lieutenant-CBB.mp3 ***!
  \******************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Lieutenant-CBB.mp3`;
      /***/ }),

    /***/ "./src/assets/audio/gunReturn.mp3":
    /*! ****************************************!*\
  !*** ./src/assets/audio/gunReturn.mp3 ***!
  \*************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/gunReturn.mp3`;
      /***/ }),

    /***/ "./src/assets/audio/gunShut.mp3":
    /*! **************************************!*\
  !*** ./src/assets/audio/gunShut.mp3 ***!
  \************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/gunShut.mp3`;
      /***/ }),

    /***/ "./src/assets/images/Play & Pause.png":
    /*! ********************************************!*\
  !*** ./src/assets/images/Play & Pause.png ***!
  \******************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Play & Pause.png`;
      /***/ }),

    /***/ "./src/assets/images/Property 1=Play.png":
    /*! ***********************************************!*\
  !*** ./src/assets/images/Property 1=Play.png ***!
  \********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Property 1=Play.png`;
      /***/ }),

    /***/ "./src/assets/images/Property 1=volume-mute-line.png":
    /*! ***********************************************************!*\
  !*** ./src/assets/images/Property 1=volume-mute-line.png ***!
  \********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Property 1=volume-mute-line.png`;
      /***/ }),

    /***/ "./src/assets/images/Property 1=volume-up-line.png":
    /*! *********************************************************!*\
  !*** ./src/assets/images/Property 1=volume-up-line.png ***!
  \******************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Property 1=volume-up-line.png`;
      /***/ }),

    /***/ "./src/assets/images/age.png":
    /*! ***********************************!*\
  !*** ./src/assets/images/age.png ***!
  \********************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/age.png`;
      /***/ }),

    /***/ "./src/assets/images/clearIcon.png":
    /*! *****************************************!*\
  !*** ./src/assets/images/clearIcon.png ***!
  \**************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/clearIcon.png`;
      /***/ }),

    /***/ "./src/assets/images/fone02.png":
    /*! **************************************!*\
  !*** ./src/assets/images/fone02.png ***!
  \************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/fone02.png`;
      /***/ }),

    /***/ "./src/assets/images/fone03.png":
    /*! **************************************!*\
  !*** ./src/assets/images/fone03.png ***!
  \************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/fone03.png`;
      /***/ }),

    /***/ "./src/assets/images/icon.png":
    /*! ************************************!*\
  !*** ./src/assets/images/icon.png ***!
  \*********************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/icon.png`;
      /***/ }),

    /***/ "./src/assets/images/logo.png":
    /*! ************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \*********************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/logo.png`;
      /***/ }),

    /***/ "./src/assets/images/pause-icon-19-24.png":
    /*! ************************************************!*\
  !*** ./src/assets/images/pause-icon-19-24.png ***!
  \*********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/pause-icon-19-24.png`;
      /***/ }),

    /***/ "./src/assets/images/play_icon.png":
    /*! *****************************************!*\
  !*** ./src/assets/images/play_icon.png ***!
  \**************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/play_icon.png`;
      /***/ }),

    /***/ "./src/assets/videos/Caliber is available in Steam.mp4":
    /*! *************************************************************!*\
  !*** ./src/assets/videos/Caliber is available in Steam.mp4 ***!
  \************************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Caliber is available in Steam.mp4`;
      /***/ }),

    /***/ "./src/assets/videos/Fearmonger Battle Pass _ Caliber.mp4":
    /*! ****************************************************************!*\
  !*** ./src/assets/videos/Fearmonger Battle Pass _ Caliber.mp4 ***!
  \*************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Fearmonger Battle Pass _ Caliber.mp4`;
      /***/ }),

    /***/ "./src/assets/videos/Lieutenant-CBB.m4a":
    /*! **********************************************!*\
  !*** ./src/assets/videos/Lieutenant-CBB.m4a ***!
  \********************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}images/Lieutenant-CBB.m4a`;
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/compat get default export */
  /** *** */ 	(() => {
    /** *** */ 		// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 		__webpack_require__.n = (module) => {
      /** *** */ 			const getter = module && module.__esModule
      /** *** */ 				? () => (module.default)
      /** *** */ 				: () => (module);
      /** *** */ 			__webpack_require__.d(getter, { a: getter });
      /** *** */ 			return getter;
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/global */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.g = (function () {
      /** *** */ 			if (typeof globalThis === "object") return globalThis;
      /** *** */ 			try {
        /** *** */ 				return this || new Function("return this")();
        /** *** */ 			} catch (e) {
        /** *** */ 				if (typeof window === "object") return window;
        /** *** */ 			}
      /** *** */ 		}());
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, "__esModule", { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/publicPath */
  /** *** */ 	(() => {
    /** *** */ 		let scriptUrl;
    /** *** */ 		if (__webpack_require__.g.importScripts) scriptUrl = `${__webpack_require__.g.location}`;
    /** *** */ 		const { document } = __webpack_require__.g;
    /** *** */ 		if (!scriptUrl && document) {
      /** *** */ 			if (document.currentScript)
      /** *** */ 				{ scriptUrl = document.currentScript.src; }
      /** *** */ 			if (!scriptUrl) {
        /** *** */ 				const scripts = document.getElementsByTagName("script");
        /** *** */ 				if (scripts.length) {
          /** *** */ 					let i = scripts.length - 1;
          /** *** */ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		}
    /** *** */ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /** *** */ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /** *** */ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    /** *** */ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /** *** */ 		__webpack_require__.p = scriptUrl;
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
    /* harmony import */ const _player_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_player_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");
    /* harmony import */ const _slider_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ const _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
    /* harmony import */ const _menu_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ const _container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.js */ "./src/container.js");
    /* harmony import */ const _container_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_container_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ const _style_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
    /* harmony import */ const _assets_images_age_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/age.png */ "./src/assets/images/age.png");
    /* harmony import */ const _assets_images_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/icon.png */ "./src/assets/images/icon.png");
    /* harmony import */ const _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/logo.png */ "./src/assets/images/logo.png");
    /* harmony import */ const _assets_images_fone02_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/fone02.png */ "./src/assets/images/fone02.png");
    /* harmony import */ const _assets_images_fone03_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/fone03.png */ "./src/assets/images/fone03.png");
    /* harmony import */ const _assets_images_play_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/play_icon.png */ "./src/assets/images/play_icon.png");
    /* harmony import */ const _assets_images_Property_1_volume_up_line_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/Property 1=volume-up-line.png */ "./src/assets/images/Property 1=volume-up-line.png");
    /* harmony import */ const _assets_images_Property_1_volume_mute_line_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/Property 1=volume-mute-line.png */ "./src/assets/images/Property 1=volume-mute-line.png");
    /* harmony import */ const _assets_images_Play_Pause_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/Play & Pause.png */ "./src/assets/images/Play & Pause.png");
    /* harmony import */ const _assets_images_Property_1_Play_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/Property 1=Play.png */ "./src/assets/images/Property 1=Play.png");
    /* harmony import */ const _assets_images_clearIcon_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/clearIcon.png */ "./src/assets/images/clearIcon.png");
    /* harmony import */ const _assets_images_pause_icon_19_24_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/pause-icon-19-24.png */ "./src/assets/images/pause-icon-19-24.png");
    /* harmony import */ const _assets_audio_Lieutenant_CBB_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/audio/Lieutenant-CBB.mp3 */ "./src/assets/audio/Lieutenant-CBB.mp3");
    /* harmony import */ const _assets_audio_gunShut_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/audio/gunShut.mp3 */ "./src/assets/audio/gunShut.mp3");
    /* harmony import */ const _assets_audio_gunReturn_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/audio/gunReturn.mp3 */ "./src/assets/audio/gunReturn.mp3");
    /* harmony import */ const _assets_videos_Lieutenant_CBB_m4a__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/videos/Lieutenant-CBB.m4a */ "./src/assets/videos/Lieutenant-CBB.m4a");
    /* harmony import */ const _assets_videos_Fearmonger_Battle_Pass_Caliber_mp4__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/videos/Fearmonger Battle Pass _ Caliber.mp4 */ "./src/assets/videos/Fearmonger Battle Pass _ Caliber.mp4");
    /* harmony import */ const _assets_videos_Caliber_is_available_in_Steam_mp4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/videos/Caliber is available in Steam.mp4 */ "./src/assets/videos/Caliber is available in Steam.mp4");
    /* eslint-disable import/extensions */

    // images

    // audios

    // videos
  })();
/** *** */ })();

// # sourceMappingURL=bundle.cd0084ea60fff8781b61.js.map
