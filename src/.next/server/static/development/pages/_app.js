module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/style.css */ "./providers/style.css");
/* harmony import */ var _providers_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_providers_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _providers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/theme */ "./providers/theme.ts");
/* harmony import */ var _providers_font__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/font */ "./providers/font.tsx");
var _jsxFileName = "/home/lars/Code/manager/src/pages/_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = (({
  Component,
  pageProps
}) => __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: _providers_theme__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_providers_font__WEBPACK_IMPORTED_MODULE_4__["FontProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(Component, _extends({}, pageProps, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))));

/***/ }),

/***/ "./providers/font.tsx":
/*!****************************!*\
  !*** ./providers/font.tsx ***!
  \****************************/
/*! exports provided: FontProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontProvider", function() { return FontProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FontProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    const WebFont = __webpack_require__(/*! webfontloader */ "webfontloader");

    WebFont.load({
      google: {
        families: ['Lobster', 'Roboto Slab']
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

}

/***/ }),

/***/ "./providers/style.css":
/*!*****************************!*\
  !*** ./providers/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./providers/theme.ts":
/*!****************************!*\
  !*** ./providers/theme.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  borderWidths: [0, 1, 2],
  colors: {
    black: '#000',
    white: '#fff',
    grays: {
      100: '#efefef',
      200: '',
      300: '#383838'
    },
    blues: {
      100: '',
      200: '',
      300: '#062f4f'
    },
    reds: {
      100: '#fcd1e0',
      200: '',
      300: '#b82601'
    },
    purples: {
      100: '',
      200: '#813772',
      300: '#47003d'
    },
    modalBackground: 'rgba(0,0,0,0.3)'
  },
  fonts: {
    heading: 'Lobster',
    paragraph: 'Roboto Slab',
    label: 'Roboto Slab',
    input: 'Roboto Slab',
    button: 'Roboto Slab'
  },
  fontSizes: {
    heading: {
      1: '40px',
      2: '32px',
      3: '24px'
    },
    paragraph: '18px',
    label: '14px',
    input: '18px',
    button: '18px'
  },
  lineHeights: {
    heading: {
      1: '48px',
      2: '40px',
      3: '32px'
    },
    paragraph: '24px',
    label: '14px',
    input: '40px',
    button: '24px'
  },
  radii: [0, 2, 4, 8, 12, 16],
  shadows: {},
  sizes: {
    full: '100%',
    half: '50%',
    third: '33%',
    header: '100px',
    modal: {
      width: {
        tiny: '300px',
        small: '400px',
        medium: '500px',
        large: '600px'
      }
    }
  },
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32]
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "webfontloader":
/*!********************************!*\
  !*** external "webfontloader" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webfontloader");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map