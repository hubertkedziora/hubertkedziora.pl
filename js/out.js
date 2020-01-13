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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n  $(\".name\").on(\"mouseenter\", function () {\n    $(\".description\").fadeIn(250);\n    $(\".name\").css(\"color\", \"goldenrod\");\n    $(\"body\").css(\"backgroundColor\", \"rgba(0,0,0,0.4)\");\n  });\n\n  $(\".name\").on(\"mouseleave\", function () {\n    $(\".description\").hide();\n    $(\".name\").css(\"color\", \"white\");\n    $(\"body\").css(\"backgroundColor\", \"rgba(0,0,0,0.0)\");\n  });\n\n  $(\".name2\").on(\"mouseenter\", function () {\n    $(\".description2\").fadeIn(250);\n    $(\".name2\").css(\"color\", \"goldenrod\");\n    $(\"body\").css(\"backgroundColor\", \"rgba(0,0,0,0.4)\");\n  });\n\n  $(\".name2\").on(\"mouseleave\", function () {\n    $(\".description2\").hide();\n    $(\".name2\").css(\"color\", \"white\");\n    $(\"body\").css(\"backgroundColor\", \"rgba(0,0,0,0.0)\");\n  });\n\n  $(\".name3\").on(\"mouseenter\", function () {\n    $(\".description3\").fadeIn(250);\n    $(\".name3\").css(\"color\", \"goldenrod\");\n    $(\"body\").css(\"backgroundColor\", \"rgba(0,0,0,0.4)\");\n  });\n\n  $(\".name3\").on(\"mouseleave\", function () {\n    $(\".description3\").hide();\n    $(\".name3\").css(\"color\", \"white\");\n    $(\"body\").css(\"backgroundColor\", \"rgba(0,0,0,0.0)\");\n  });\n\n  $(\".mailto\").on(\"mouseenter\", function () {\n    $(\".mailto\").css(\"color\", \"goldenrod\");\n  });\n\n  $(\".mailto\").on(\"mouseleave\", function () {\n    $(\".mailto\").css(\"color\", \"white\");\n  });\n\n  $(\".social\").on(\"mouseenter\", function () {\n    $(\".social\").css(\"color\", \"goldenrod\");\n  });\n\n  $(\".social\").on(\"mouseleave\", function () {\n    $(\".social\").css(\"color\", \"white\");\n  });\n}, $(function () {\n  var $element = $(\".dot\");\n  setInterval(function () {\n    $element.fadeIn(1200, function () {\n      $element.fadeOut(1000, function () {\n        $element.fadeIn(1200);\n      });\n    });\n  }, 1000);\n}));\n\n$.mobile.loading().hide();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });