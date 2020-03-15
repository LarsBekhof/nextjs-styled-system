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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./atoms/layout/box.tsx":
/*!******************************!*\
  !*** ./atoms/layout/box.tsx ***!
  \******************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["background"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);

/***/ }),

/***/ "./atoms/layout/flex.tsx":
/*!*******************************!*\
  !*** ./atoms/layout/flex.tsx ***!
  \*******************************/
/*! exports provided: Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const flexStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
  display: 'flex'
});
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(flexStyle, styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["background"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);

/***/ }),

/***/ "./atoms/layout/index.ts":
/*!*******************************!*\
  !*** ./atoms/layout/index.ts ***!
  \*******************************/
/*! exports provided: Box, Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ "./atoms/layout/box.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flex */ "./atoms/layout/flex.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _flex__WEBPACK_IMPORTED_MODULE_1__["Flex"]; });




/***/ }),

/***/ "./atoms/typography/heading.tsx":
/*!**************************************!*\
  !*** ./atoms/typography/heading.tsx ***!
  \**************************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const headingStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
  mt: 0,
  mb: 0,
  pb: 3,
  fontFamily: 'heading',
  fontSize: 'heading.1',
  lineHeight: 'heading.1',
  color: 'grays.300'
});
const headingVariants = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["variant"])({
  variants: {
    2: {
      fontSize: 'heading.2',
      lineHeight: 'heading.2'
    },
    3: {
      fontSize: 'heading.3',
      lineHeight: 'heading.3'
    }
  }
});
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(headingStyle, headingVariants, styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);

/***/ }),

/***/ "./atoms/typography/index.ts":
/*!***********************************!*\
  !*** ./atoms/typography/index.ts ***!
  \***********************************/
/*! exports provided: Paragraph, Heading, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraph */ "./atoms/typography/paragraph.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return _paragraph__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]; });

/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading */ "./atoms/typography/heading.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _heading__WEBPACK_IMPORTED_MODULE_1__["Heading"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./atoms/typography/label.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_2__["Label"]; });





/***/ }),

/***/ "./atoms/typography/label.tsx":
/*!************************************!*\
  !*** ./atoms/typography/label.tsx ***!
  \************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const labelStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
  mt: 2,
  mb: 3,
  fontFamily: 'label',
  fontSize: 'label',
  lineHeight: 'label',
  color: 'grays.300'
});
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label(labelStyle, styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);

/***/ }),

/***/ "./atoms/typography/paragraph.tsx":
/*!****************************************!*\
  !*** ./atoms/typography/paragraph.tsx ***!
  \****************************************/
/*! exports provided: Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const paragraphStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
  mt: 2,
  mb: 3,
  fontFamily: 'paragraph',
  fontSize: 'paragraph',
  lineHeight: 'paragraph',
  color: 'grays.300'
});
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(paragraphStyle, styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);

/***/ }),

/***/ "./molecules/timer/clock.tsx":
/*!***********************************!*\
  !*** ./molecules/timer/clock.tsx ***!
  \***********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/layout */ "./atoms/layout/index.ts");
/* harmony import */ var _atoms_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/typography */ "./atoms/typography/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/molecules/timer/clock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const size = 500;
const indicatorSize = 10;
const clockNumbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const secInDeg = 360 / 60;
const minInDeg = 360 / 60;
const houInDeg = 360 / 12;

const getHandSize = shorten => size / 2 - shorten;

const getIndicatorOffset = () => (size - indicatorSize) / 2;

const getNumberOffset = inset => size / 4 - inset;

const getDegSec = () => secInDeg * new Date().getSeconds();

const getDegMin = () => minInDeg * new Date().getMinutes();

const getDegHou = () => houInDeg * (new Date().getHours() > 11 ? new Date().getHours() - 11 : new Date().getHours());

const Clock = () => {
  const {
    0: degSec,
    1: setDegSec
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getDegSec());
  const {
    0: degMin,
    1: setDegMin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getDegMin());
  const {
    0: degHou,
    1: setDegHou
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getDegHou());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const interval = setInterval(() => {
      setDegSec(getDegSec());
      setDegMin(getDegMin());
      setDegHou(getDegHou());
    }, 1000);
    return () => clearInterval(interval);
  }, [degSec, degMin, degHou]);
  return __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    m: "100px auto 0 auto",
    height: size,
    width: size,
    bg: "white",
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "15px",
    width: "15px",
    bg: "grays.300",
    borderRadius: "100%",
    zIndex: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), [...Array(60).keys()].map(key => __jsx(Indicator, {
    key: key,
    deg: minInDeg * (key + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), [...Array(clockNumbers.length).keys()].map(key => __jsx(ClockNumber, {
    key: key,
    number: clockNumbers[key],
    deg: 360 / clockNumbers.length * key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx(ClockHand, {
    color: "reds.300",
    handSize: getHandSize(30),
    deg: degSec,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx(ClockHand, {
    color: "grays.300",
    handSize: getHandSize(30),
    deg: degMin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(ClockHand, {
    color: "grays.300",
    handSize: getHandSize(100),
    deg: degHou,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }));
};

const Indicator = ({
  deg
}) => __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  position: "absolute",
  bg: "grays.300",
  height: indicatorSize,
  width: "3px",
  borderBottomLeftRadius: "100%",
  borderBottomRightRadius: "100%",
  style: {
    transform: `rotate(${deg}deg) translateY(-${getIndicatorOffset()}px)`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
});

const ClockNumber = ({
  number,
  deg
}) => __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  position: "absolute",
  height: size / 2,
  style: {
    transform: `rotate(${deg}deg) translateY(-${getNumberOffset(20)}px)`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
  style: {
    transform: `rotate(-${deg}deg)`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, number));

const ClockHand = ({
  color,
  handSize,
  deg
}) => __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  height: handSize,
  width: "5px",
  bg: color,
  position: "absolute",
  borderTopLeftRadius: "100%",
  borderTopRightRadius: "100%",
  style: {
    transform: `rotate(${deg}deg) translateY(-${handSize / 2}px)`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
});

/***/ }),

/***/ "./molecules/timer/index.ts":
/*!**********************************!*\
  !*** ./molecules/timer/index.ts ***!
  \**********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./molecules/timer/clock.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _clock__WEBPACK_IMPORTED_MODULE_0__["Clock"]; });



/***/ }),

/***/ "./pages/timer.tsx":
/*!*************************!*\
  !*** ./pages/timer.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/timer */ "./molecules/timer/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/pages/timer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_molecules_timer__WEBPACK_IMPORTED_MODULE_1__["Clock"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}));

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/timer.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lars/Code/manager/src/pages/timer.tsx */"./pages/timer.tsx");


/***/ }),

/***/ "@styled-system/css":
/*!*************************************!*\
  !*** external "@styled-system/css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

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

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=timer.js.map