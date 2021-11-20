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

/***/ "./src/components/css/popup.css":
/*!**************************************!*\
  !*** ./src/components/css/popup.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"popup\":\"popup__popup--ohxNp\",\"popup-title\":\"popup__popup-title--qL8v3\",\"popup-content\":\"popup__popup-content--g4xOh\",\"mask\":\"popup__mask--psq9H\"});\n\n//# sourceURL=webpack://popupVideo/./src/components/css/popup.css?");

/***/ }),

/***/ "./src/components/popup/popup.ts":
/*!***************************************!*\
  !*** ./src/components/popup/popup.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar styles = __webpack_require__(/*! ../css/popup.css */ \"./src/components/css/popup.css\");\r\nvar stylesClass = styles[\"default\"];\r\n// 实例化\r\nfunction popup(options) {\r\n    return new Popup(options);\r\n}\r\nvar Popup = /** @class */ (function () {\r\n    function Popup(settings) {\r\n        this.settings = settings;\r\n        // 默认参数初始化\r\n        this.settings = Object.assign({\r\n            width: '100%',\r\n            height: '100%',\r\n            title: '',\r\n            pos: 'center',\r\n            mask: true,\r\n            content: function () { }\r\n        }, this.settings);\r\n        this.init();\r\n    }\r\n    // 初始化\r\n    Popup.prototype.init = function () {\r\n        this.template();\r\n        this.handle();\r\n        this.contentCallback();\r\n        this.settings.mask && this.createMask();\r\n    };\r\n    // 创建popup\r\n    Popup.prototype.template = function () {\r\n        this.tempContainer = document.createElement('div');\r\n        this.tempContainer.style.width = this.settings.width;\r\n        this.tempContainer.style.height = this.settings.height;\r\n        this.tempContainer.className = stylesClass.popup;\r\n        this.tempContainer.innerHTML = \"\\n            <div class=\\\"\".concat(stylesClass['popup-title'], \"\\\">\\n                <h3>\").concat(this.settings.title, \"</h3>\\n                <i class=\\\"iconfont icon-guanbi\\\"></i>\\n            </div>\\n            <div class=\\\"\").concat(stylesClass['popup-content'], \"\\\"></div>\\n        \");\r\n        document.body.appendChild(this.tempContainer);\r\n        // 靠左\r\n        if (this.settings.pos === 'left') {\r\n            this.tempContainer.style.left = '0px';\r\n            this.tempContainer.style.top = window.innerHeight - this.tempContainer.offsetHeight + 'px';\r\n            // 靠右\r\n        }\r\n        else if (this.settings.pos === 'right') {\r\n            this.tempContainer.style.right = '0px';\r\n            this.tempContainer.style.top = window.innerHeight - this.tempContainer.offsetHeight + 'px';\r\n            // 居中\r\n        }\r\n        else {\r\n            this.tempContainer.style.left = (window.innerWidth - this.tempContainer.offsetWidth) / 2 + 'px';\r\n            this.tempContainer.style.top = (window.innerHeight - this.tempContainer.offsetHeight) / 2 + 'px';\r\n        }\r\n    };\r\n    // 关闭弹窗 事件操作\r\n    Popup.prototype.handle = function () {\r\n        var _this = this;\r\n        var popupClose = this.tempContainer.querySelector(\".\".concat(stylesClass['popup-title'], \" i\"));\r\n        popupClose.addEventListener('click', function () {\r\n            document.body.removeChild(_this.tempContainer);\r\n            _this.settings.mask && document.body.removeChild(_this.mask);\r\n        });\r\n    };\r\n    // mask\r\n    Popup.prototype.createMask = function () {\r\n        this.mask = document.createElement('div');\r\n        this.mask.className = stylesClass.mask;\r\n        this.mask.style.position = \"absolute\",\r\n            this.mask.style.width = \"100%\",\r\n            this.mask.style.height = document.body.offsetHeight + 'px';\r\n        this.mask.style.top = \"0px\",\r\n            document.body.appendChild(this.mask);\r\n    };\r\n    // content 内容\r\n    Popup.prototype.contentCallback = function () {\r\n        var popupContent = this.tempContainer.querySelector(\".\".concat(stylesClass['popup-content']));\r\n        this.settings.content(popupContent);\r\n    };\r\n    return Popup;\r\n}());\r\nexports[\"default\"] = popup;\r\n\n\n//# sourceURL=webpack://popupVideo/./src/components/popup/popup.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/popup/popup.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});