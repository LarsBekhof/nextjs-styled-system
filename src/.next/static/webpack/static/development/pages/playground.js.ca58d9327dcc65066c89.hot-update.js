webpackHotUpdate("static/development/pages/playground.js",{

/***/ "./atoms/modals/modal.tsx":
/*!********************************!*\
  !*** ./atoms/modals/modal.tsx ***!
  \********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./atoms/hooks/index.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./atoms/layout/index.ts");
var _jsxFileName = "/home/lars/Code/manager/src/atoms/modals/modal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Modal = function Modal(_ref) {
  var children = _ref.children;
  var dimensions = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useWindowDimensions"])();
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
    __self: this
  }, __jsx(_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: getModalWidth(dimensions.width),
    margin: "0 auto",
    bg: "grays.100",
    borderRadius: 3,
    marginTop: "30%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children));
};

var getModalWidth = function getModalWidth(width) {
  if (width < 500) return 'modal.width.tiny';
  if (width < 600) return 'modal.width.small';
  if (width < 700) return 'modal.width.medium';
  return 'modal.width.large';
};

/***/ })

})
//# sourceMappingURL=playground.js.ca58d9327dcc65066c89.hot-update.js.map