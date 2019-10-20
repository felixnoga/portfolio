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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: showMenuOnMobile, closeMenuOnMobile, resetWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMenuOnMobile\", function() { return showMenuOnMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeMenuOnMobile\", function() { return closeMenuOnMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetWindow\", function() { return resetWindow; });\nvar menuBars = document.querySelector('#menu-bars');\nvar closeMenu = document.querySelector('#close-menu');\nvar menu = document.querySelector('.menu-items');\n\nvar showMenuOnMobile = function showMenuOnMobile() {\n  menuBars.style.display = 'none';\n  menu.style.transform = \"translateY(500px)\";\n  closeMenu.style.transform = \"translateY(500px)\";\n};\n\nvar closeMenuOnMobile = function closeMenuOnMobile() {\n  menu.style.transform = \"translateY(-500px)\";\n  closeMenu.style.transform = \"translateY(-500px)\";\n  document.querySelector('#menu-bars').style.display = 'block';\n};\n\nvar resetWindow = function resetWindow() {\n  if (window.innerWidth > 768) {\n    menuBars.removeAttribute('style');\n    closeMenu.removeAttribute('style');\n    menu.removeAttribute('style');\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallax */ \"./src/parallax.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\nvar elBio = document.querySelector('#bio');\nvar menuBars = document.querySelector('#menu-bars');\nvar closeMenu = document.querySelector('#close-menu');\nwindow.addEventListener('scroll', function () {\n  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"parallax\"])('#parallax1', window.scrollY, 0.5);\n  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"parallax\"])('#parallax2', window.scrollY, 1); // parallax('#parallax3', window.scrollY, 2.5);\n  // parallax('#parallax4', window.scrollY, 4);\n\n  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"parallaxHorizontal\"])('.header__title', window.scrollY, 2, 'left');\n  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"parallaxHorizontal\"])('.header__subtitle', window.scrollY, 2, 'right');\n  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"fadeInElement\"])('#bio', '#img-bio', 500);\n});\nwindow.addEventListener('resize', _functions__WEBPACK_IMPORTED_MODULE_1__[\"resetWindow\"]);\nmenuBars.addEventListener('click', function (e) {\n  e.stopPropagation();\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"showMenuOnMobile\"])();\n});\ncloseMenu.addEventListener('click', function (e) {\n  e.stopPropagation();\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"closeMenuOnMobile\"])();\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/parallax.js":
/*!*************************!*\
  !*** ./src/parallax.js ***!
  \*************************/
/*! exports provided: parallax, parallaxHorizontal, fadeInElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parallax\", function() { return parallax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parallaxHorizontal\", function() { return parallaxHorizontal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeInElement\", function() { return fadeInElement; });\nvar parallax = function parallax(element, distance, speed) {\n  var el = document.querySelector(element);\n  el.style.transform = \"translateY(-\".concat(distance * speed, \"px)\"); // el.style.transform = 'translateY('+distance*speed+'px)';\n};\n\nvar parallaxHorizontal = function parallaxHorizontal(element, distance, speed) {\n  var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'right';\n  var el = document.querySelector(element);\n\n  if (direction === 'right') {\n    el.style.transform = \"translateX(\".concat(distance * speed, \"px)\");\n  } else {\n    el.style.transform = \"translateX(-\".concat(distance * speed, \"px)\");\n  }\n};\n\nvar fadeInElement = function fadeInElement(container, element, distance) {\n  var contenedor = document.querySelector(container);\n  var elemento = document.querySelector(element);\n\n  if (window.scrollY > contenedor.offsetTop - contenedor.offsetTop / 1.5) {\n    elemento.style.opacity = '1';\n    elemento.style.transform = \"translateX(-\".concat(distance, \"px)\");\n    elemento.style.transform += \"rotate(720deg)\";\n  } else if (window.scrollY < contenedor.offsetTop + contenedor.offsetHeight) {\n    var desplazamiento = elemento.getBoundingClientRect().right + elemento.offsetWidth;\n    elemento.style.opacity = '0';\n    elemento.style.transform = \"translateX(\".concat(desplazamiento, \"px)\");\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/parallax.js?");

/***/ })

/******/ });