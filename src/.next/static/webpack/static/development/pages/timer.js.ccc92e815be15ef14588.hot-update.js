webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./molecules/timer/clock.tsx":
/*!***********************************!*\
  !*** ./molecules/timer/clock.tsx ***!
  \***********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/layout */ "./atoms/layout/index.ts");
/* harmony import */ var _atoms_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/typography */ "./atoms/typography/index.ts");

var _jsxFileName = "/home/lars/Code/manager/src/molecules/timer/clock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var size = 500;
var indicatorSize = 10;
var clockNumbers = [12, 3, 6, 9];
var secInDeg = 360 / 60;
var minInDeg = 360 / 60;
var houInDeg = 360 / 12;

var getHandSize = function getHandSize(shorten) {
  return size / 2 - shorten;
};

var getIndicatorOffset = function getIndicatorOffset() {
  return (size - indicatorSize) / 2;
};

var getNumberOffset = function getNumberOffset(inset) {
  return size / 4 - inset;
};

var getDegSec = function getDegSec() {
  return secInDeg * new Date().getSeconds();
};

var getDegMin = function getDegMin() {
  return minInDeg * new Date().getMinutes();
};

var getDegHou = function getDegHou() {
  return houInDeg * (new Date().getHours() > 11 ? new Date().getHours() - 11 : new Date().getHours());
};

var Clock = function Clock() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getDegSec()),
      degSec = _useState[0],
      setDegSec = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getDegMin()),
      degMin = _useState2[0],
      setDegMin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getDegHou()),
      degHou = _useState3[0],
      setDegHou = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      setDegSec(getDegSec());
      setDegMin(getDegMin());
      setDegHou(getDegHou());
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [degSec, degMin, degHou]);
  return __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    m: "100px auto 0 auto",
    height: size,
    width: size,
    bg: "reds.100",
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "15px",
    width: "15px",
    bg: "grays.300",
    borderRadius: "100%",
    zIndex: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(60).keys()).map(function (key) {
    return __jsx(Indicator, {
      key: key,
      deg: minInDeg * (key + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  }), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(clockNumbers.length).keys()).map(function (key) {
    return __jsx(ClockNumber, {
      key: key,
      number: clockNumbers[key],
      deg: clockNumbers.length / 360 * key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    });
  }), __jsx(ClockHand, {
    color: "reds.300",
    handSize: getHandSize(30),
    deg: degSec,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(ClockHand, {
    color: "grays.300",
    handSize: getHandSize(30),
    deg: degMin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(ClockHand, {
    color: "grays.300",
    handSize: getHandSize(100),
    deg: degHou,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
};

var Indicator = function Indicator(_ref) {
  var deg = _ref.deg;
  return __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "absolute",
    bg: "grays.300",
    height: indicatorSize,
    width: "3px",
    style: {
      transform: "rotate(".concat(deg, "deg) translateY(-").concat(getIndicatorOffset(), "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  });
};

var ClockNumber = function ClockNumber(_ref2) {
  var number = _ref2.number,
      deg = _ref2.deg;
  return __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "absolute",
    height: size / 2,
    style: {
      transform: "rotate(".concat(deg, "deg) translateY(-").concat(getNumberOffset(20), "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, console.log(deg), __jsx(_atoms_typography__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, number));
};

var ClockHand = function ClockHand(_ref3) {
  var color = _ref3.color,
      handSize = _ref3.handSize,
      deg = _ref3.deg;
  return __jsx(_atoms_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: handSize,
    width: "5px",
    bg: color,
    position: "absolute",
    style: {
      transform: "rotate(".concat(deg, "deg) translateY(-").concat(handSize / 2, "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  });
};

/***/ })

})
//# sourceMappingURL=timer.js.ccc92e815be15ef14588.hot-update.js.map