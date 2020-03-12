webpackHotUpdate("static/development/pages/playground.js",{

/***/ "./atoms/hooks/window-dimensions.ts":
/*!******************************************!*\
  !*** ./atoms/hooks/window-dimensions.ts ***!
  \******************************************/
/*! exports provided: useWindowDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowDimensions", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var getWindowDimensions = function getWindowDimensions() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
};

var useWindowDimensions = function useWindowDimensions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      windowDimensions = _useState[0],
      setWindowDimensions = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      setWindowDimensions(getWindowDimensions());

      var handleResize = function handleResize() {
        return setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [window]);
  return windowDimensions || {
    width: 0,
    height: 0
  };
};

/***/ })

})
//# sourceMappingURL=playground.js.4d5bd526bfeeeb520cc5.hot-update.js.map