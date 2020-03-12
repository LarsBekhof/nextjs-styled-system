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

/***/ "./atoms/hooks/index.ts":
/*!******************************!*\
  !*** ./atoms/hooks/index.ts ***!
  \******************************/
/*! exports provided: useWindowDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window-dimensions */ "./atoms/hooks/window-dimensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowDimensions", function() { return _window_dimensions__WEBPACK_IMPORTED_MODULE_0__["useWindowDimensions"]; });



/***/ }),

/***/ "./atoms/hooks/window-dimensions.ts":
/*!******************************************!*\
  !*** ./atoms/hooks/window-dimensions.ts ***!
  \******************************************/
/*! exports provided: useWindowDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowDimensions", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const getWindowDimensions = () => {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
};

const useWindowDimensions = () => {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}
  }, [window]);
  return windowDimensions || {
    width: 0,
    height: 0
  };
};

/***/ }),

/***/ "./atoms/input/button.tsx":
/*!********************************!*\
  !*** ./atoms/input/button.tsx ***!
  \********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const headingStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
  fontFamily: 'button',
  fontSize: 'button',
  lineHeight: 'button',
  color: 'white',
  bg: 'blues.300',
  border: 'none',
  borderRadius: 2,
  p: 2,
  cursor: 'pointer'
});
const headingVariants = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["variant"])({
  variants: {
    text: {
      color: 'grays.300',
      bg: 'transparent',
      p: 0,
      textDecoration: 'underline'
    }
  }
});
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(headingStyle, headingVariants, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["background"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"]);

/***/ }),

/***/ "./atoms/input/index.ts":
/*!******************************!*\
  !*** ./atoms/input/index.ts ***!
  \******************************/
/*! exports provided: TextInput, Button, TextareaInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./atoms/input/text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["TextInput"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./atoms/input/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea */ "./atoms/input/textarea.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaInput", function() { return _textarea__WEBPACK_IMPORTED_MODULE_2__["TextareaInput"]; });





/***/ }),

/***/ "./atoms/input/text.tsx":
/*!******************************!*\
  !*** ./atoms/input/text.tsx ***!
  \******************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout */ "./atoms/layout/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typography */ "./atoms/typography/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/atoms/input/text.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const TextInput = props => __jsx(_layout__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  mb: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, !!props.label && __jsx(_typography__WEBPACK_IMPORTED_MODULE_5__["Label"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, props.label), __jsx(StyledTextInput, _extends({}, props, {
  bg: "grays.100",
  borderColor: props.error && props.error.length ? 'reds.300' : 'grays.300',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), !!props.error && __jsx(_typography__WEBPACK_IMPORTED_MODULE_5__["Label"], {
  color: "reds.300",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, props.error));
const textInputStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
  fontFamily: 'input',
  fontSize: 'input',
  lineHeight: 'input',
  color: 'grays.300',
  width: 'full',
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  borderColor: 'reds.300',
  pl: 2,
  pr: 2
});
const StyledTextInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input(textInputStyle, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]);
const StyledTextareaInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea(textInputStyle, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]);

/***/ }),

/***/ "./atoms/input/textarea.tsx":
/*!**********************************!*\
  !*** ./atoms/input/textarea.tsx ***!
  \**********************************/
/*! exports provided: TextareaInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaInput", function() { return TextareaInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout */ "./atoms/layout/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typography */ "./atoms/typography/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/atoms/input/textarea.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const TextareaInput = props => __jsx(_layout__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  mb: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, !!props.label && __jsx(_typography__WEBPACK_IMPORTED_MODULE_5__["Label"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, props.label), __jsx(StyledTextareaInput, _extends({}, props, {
  bg: "grays.100",
  borderColor: props.error && props.error.length ? 'reds.300' : 'grays.300',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), !!props.error && __jsx(_typography__WEBPACK_IMPORTED_MODULE_5__["Label"], {
  color: "reds.300",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, props.error));
const textareaInputStyle = Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
  fontFamily: 'input',
  fontSize: 'input',
  lineHeight: 'input',
  color: 'grays.300',
  width: 'full',
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  borderColor: 'reds.300',
  pl: 2,
  pr: 2
});
const StyledTextareaInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea(textareaInputStyle, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]);

/***/ }),

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

/***/ "./atoms/modals/index.ts":
/*!*******************************!*\
  !*** ./atoms/modals/index.ts ***!
  \*******************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./atoms/modals/modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



/***/ }),

/***/ "./atoms/modals/modal.tsx":
/*!********************************!*\
  !*** ./atoms/modals/modal.tsx ***!
  \********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./atoms/hooks/index.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./atoms/layout/index.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "./atoms/input/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/atoms/modals/modal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Modal = ({
  children
}) => {
  const {
    width
  } = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useWindowDimensions"])();
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    bg: "modalBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: getModalWidth(width),
    margin: "0 auto",
    bg: "grays.100",
    borderRadius: 3,
    marginTop: "10vh",
    p: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "text",
    position: "relative",
    right: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "x"), children));
};

const getModalWidth = width => {
  if (width < 500) return 'modal.width.tiny';
  if (width < 600) return 'modal.width.small';
  if (width < 700) return 'modal.width.medium';
  return 'modal.width.large';
};

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
  pt: 2,
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

/***/ "./pages/playground.tsx":
/*!******************************!*\
  !*** ./pages/playground.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/layout */ "./atoms/layout/index.ts");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/input */ "./atoms/input/index.ts");
/* harmony import */ var _atoms_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/typography */ "./atoms/typography/index.ts");
/* harmony import */ var _atoms_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/modals */ "./atoms/modals/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/pages/playground.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "This is a flex element."), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: "300px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
  defaultValue: "This is an input.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: "300px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
  placeholder: "This is an input with placeholder.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: "300px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
  defaultValue: "This is an input with an error.",
  error: "This is the error",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: "300px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
  defaultValue: "This is an input with a label.",
  label: "This is the label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: "300px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
  defaultValue: "This is an input with a label and an error.",
  label: "This is the label",
  error: "This is the error",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: "300px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["TextareaInput"], {
  defaultValue: "This is a textarea.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})), __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "This is a heading 1."), __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  variant: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "This is a heading 2."), __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  variant: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "This is a heading 3."), __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, " This is a paragraph. "), __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "This is the second paragraph."), __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "This is a button"), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  variant: "text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "This is a text button")), __jsx(_atoms_modals__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "This is a modal"))));

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/playground.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lars/Code/manager/src/pages/playground.tsx */"./pages/playground.tsx");


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
//# sourceMappingURL=playground.js.map