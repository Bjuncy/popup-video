/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["popupVideo"] = factory();
	else
		root["popupVideo"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/css/video.css":
/*!**************************************!*\
  !*** ./src/components/css/video.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"video\":\"video__video--e8L01\",\"video-content\":\"video__video-content--K8Zpq\",\"video-controls\":\"video__video-controls--qE1TG\",\"video-progress\":\"video__video-progress--YhzeY\",\"video-progress-now\":\"video__video-progress-now--lRdkK\",\"video-progress-sus\":\"video__video-progress-sus--T6yli\",\"video-progress-bar\":\"video__video-progress-bar--wLwp2\",\"video-play\":\"video__video-play--YMPds\",\"video-time\":\"video__video-time--NwWV9\",\"video-full\":\"video__video-full--dzq3t\",\"video-volume\":\"video__video-volume--nvror\",\"video-volprogress\":\"video__video-volprogress--NjW34\",\"video-volprogress-now\":\"video__video-volprogress-now--uWMdk\",\"video-volprogress-bar\":\"video__video-volprogress-bar--cQDHn\"});\n\n//# sourceURL=webpack://popupVideo/./src/components/css/video.css?");

/***/ }),

/***/ "./src/components/video/video.ts":
/*!***************************************!*\
  !*** ./src/components/video/video.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar styles = __webpack_require__(/*! ../css/video.css */ \"./src/components/css/video.css\");\r\nvar stylesClass = styles[\"default\"];\r\n// 实例化\r\nfunction video(options) {\r\n    return new Video(options);\r\n}\r\nvar Video = /** @class */ (function () {\r\n    function Video(settings) {\r\n        this.settings = settings;\r\n        this.settings = Object.assign({\r\n            width: '100%',\r\n            height: '100%',\r\n            autoplay: false\r\n        }, this.settings);\r\n        this.init();\r\n    }\r\n    // 初始化\r\n    Video.prototype.init = function () {\r\n        this.template();\r\n        this.handle();\r\n    };\r\n    // 创建\r\n    Video.prototype.template = function () {\r\n        this.tempContainer = document.createElement('div');\r\n        this.tempContainer.className = stylesClass.video;\r\n        this.tempContainer.style.width = this.settings.width;\r\n        this.tempContainer.style.height = this.settings.height;\r\n        this.tempContainer.innerHTML = \"\\n            <video class=\\\"\".concat(stylesClass['video-content'], \"\\\" src=\\\"\").concat(this.settings.url, \"\\\"></video>\\n            <div class=\\\"\").concat(stylesClass['video-controls'], \"\\\">\\n                <div class=\\\"\").concat(stylesClass['video-progress'], \"\\\">\\n                    <div class=\\\"\").concat(stylesClass['video-progress-now'], \"\\\"></div>\\n                    <div class=\\\"\").concat(stylesClass['video-progress-sus'], \"\\\"></div>\\n                    <div class=\\\"\").concat(stylesClass['video-progress-bar'], \"\\\"></div>\\n                </div>\\n                <div class=\\\"\").concat(stylesClass['video-play'], \"\\\">\\n                    <i class=\\\"iconfont icon-bofang\\\"></i>\\n                </div>\\n                <div class=\\\"\").concat(stylesClass['video-time'], \"\\\">\\n                    <span>00:00</span> / <span>00:00</span>\\n                </div>\\n                <div class=\\\"\").concat(stylesClass['video-full'], \"\\\">\\n                    <i class=\\\"iconfont icon-quanping1\\\"></i>\\n                </div>\\n                <div class=\\\"\").concat(stylesClass['video-volume'], \"\\\">\\n                    <i class=\\\"iconfont icon-xiaolaba\\\"></i>\\n                    <div class=\\\"\").concat(stylesClass['video-volprogress'], \"\\\">\\n                        <div class=\\\"\").concat(stylesClass['video-volprogress-now'], \"\\\"></div>\\n                        <div class=\\\"\").concat(stylesClass['video-volprogress-bar'], \"\\\"></div>\\n                    </div>\\n                </div>\\n            </div>\\n        \");\r\n        if (typeof this.settings.elem === 'object') {\r\n            this.settings.elem.appendChild(this.tempContainer);\r\n        }\r\n        else {\r\n            document.querySelector(\"\".concat(this.settings.elem)).appendChild(this.tempContainer);\r\n        }\r\n    };\r\n    // 操作\r\n    Video.prototype.handle = function () {\r\n        var videoContent = this.tempContainer.querySelector(\".\".concat(stylesClass['video-content']));\r\n        var videoPlay = this.tempContainer.querySelector(\".\".concat(stylesClass['video-play'], \" i\"));\r\n        var videoTimes = this.tempContainer.querySelectorAll(\".\".concat(stylesClass['video-time'], \" span\"));\r\n        var videoControls = this.tempContainer.querySelector(\".\".concat(stylesClass['video-controls']));\r\n        var videoFull = this.tempContainer.querySelector(\".\".concat(stylesClass['video-full'], \" i\"));\r\n        var videoProgress = this.tempContainer.querySelectorAll(\".\".concat(stylesClass['video-progress'], \" div\"));\r\n        var videoVolProgress = this.tempContainer.querySelectorAll(\".\".concat(stylesClass['video-volprogress'], \" div\"));\r\n        var videoVolIcon = this.tempContainer.querySelector(\".\".concat(stylesClass['video-volume'], \" i\"));\r\n        var timer = null;\r\n        videoContent.volume = 0.5;\r\n        // 自动播放\r\n        if (this.settings.autoplay) {\r\n            timer = setInterval(playing, 1000);\r\n            videoContent.play();\r\n        }\r\n        // 显示隐藏操作栏\r\n        this.tempContainer.addEventListener('mouseenter', function () {\r\n            videoControls.style.bottom = 0;\r\n        });\r\n        this.tempContainer.addEventListener('mouseleave', function () {\r\n            videoControls.style.bottom = '-54px';\r\n        });\r\n        // 视频是否加载完成\r\n        videoContent.addEventListener('play', function () {\r\n            videoPlay.className = 'iconfont icon-24gf-pause2';\r\n            timer = setInterval(function () {\r\n                playing();\r\n            }, 1000);\r\n        });\r\n        // 视频暂停\r\n        videoContent.addEventListener('pause', function () {\r\n            videoPlay.className = 'iconfont icon-bofang';\r\n            clearInterval(timer);\r\n        });\r\n        videoPlay.addEventListener('click', function () {\r\n            if (videoContent.paused) {\r\n                videoContent.play();\r\n            }\r\n            else {\r\n                videoContent.pause();\r\n            }\r\n        });\r\n        // 播放中进度条变化\r\n        function playing() {\r\n            videoTimes[1].innerHTML = formatTime(videoContent.duration);\r\n            var scale = videoContent.currentTime / videoContent.duration;\r\n            var scaleSuc = videoContent.buffered.end(0) / videoContent.duration;\r\n            videoTimes[0].innerHTML = formatTime(videoContent.currentTime);\r\n            videoProgress[0].style.width = scale * 100 + '%';\r\n            videoProgress[1].style.width = scaleSuc * 100 + '%';\r\n            videoProgress[2].style.left = scale * 100 + '%';\r\n        }\r\n        // 时间格式化\r\n        function formatTime(number) {\r\n            number = Math.round(number);\r\n            var min = setZero(Math.floor(number / 60));\r\n            var sec = setZero(number % 60);\r\n            return \"\".concat(min, \":\").concat(sec);\r\n        }\r\n        function setZero(number) {\r\n            if (number < 10) {\r\n                return \"0\".concat(number);\r\n            }\r\n            else {\r\n                return \"\".concat(number);\r\n            }\r\n        }\r\n        // 拖拽进度条事件\r\n        videoProgress[2].addEventListener('mousedown', function (ev) {\r\n            var _this = this;\r\n            var downX = ev.pageX;\r\n            var downL = this.offsetLeft;\r\n            document.onmousemove = function (ev) {\r\n                var scale = (ev.pageX - downX + downL + 8) / _this.parentNode.offsetWidth;\r\n                if (scale < 0) {\r\n                    scale = 0;\r\n                }\r\n                else if (scale > 1) {\r\n                    scale = 1;\r\n                }\r\n                videoProgress[0].style.width = scale * 100 + '%';\r\n                videoProgress[1].style.width = scale * 100 + '%';\r\n                _this.style.left = scale * 100 + '%';\r\n                videoContent.currentTime = scale * videoContent.duration;\r\n            };\r\n            document.onmouseup = function () {\r\n                document.onmousemove = document.onmouseup = null;\r\n            };\r\n            ev.preventDefault();\r\n        });\r\n        // 音量大小\r\n        videoVolProgress[1].addEventListener('mousedown', function (ev) {\r\n            var _this = this;\r\n            var downX = ev.pageX;\r\n            var downL = this.offsetLeft;\r\n            document.onmousemove = function (ev) {\r\n                var scale = (ev.pageX - downX + downL + 8) / _this.parentNode.offsetWidth;\r\n                if (scale < 0) {\r\n                    scale = 0;\r\n                }\r\n                else if (scale > 1) {\r\n                    scale = 1;\r\n                }\r\n                videoVolProgress[0].style.width = scale * 100 + '%';\r\n                _this.style.left = scale * 100 + '%';\r\n                videoContent.volume = scale;\r\n            };\r\n            document.onmouseup = function () {\r\n                document.onmousemove = document.onmouseup = null;\r\n            };\r\n            ev.preventDefault();\r\n        });\r\n        // 静音\r\n        videoVolIcon.addEventListener('click', function () {\r\n            var scale = videoContent.volume;\r\n            if (scale > 0) {\r\n                videoContent.volume = 0;\r\n                videoVolProgress[0].style.width = '0px';\r\n                videoVolProgress[1].style.left = '0px';\r\n                videoVolIcon.className = 'iconfont icon-jingyin1';\r\n            }\r\n            else {\r\n                videoContent.volume = 0.5;\r\n                videoVolProgress[0].style.width = '50px';\r\n                videoVolProgress[1].style.left = '50px';\r\n                videoVolIcon.className = 'iconfont icon-xiaolaba';\r\n            }\r\n        });\r\n        // 全屏\r\n        videoFull.addEventListener('click', function () {\r\n            videoContent.requestFullscreen();\r\n        });\r\n    };\r\n    return Video;\r\n}());\r\nexports[\"default\"] = video;\r\n\n\n//# sourceURL=webpack://popupVideo/./src/components/video/video.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/video/video.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});