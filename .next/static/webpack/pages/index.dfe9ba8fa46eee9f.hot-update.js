"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Footer() {\n    var logoImg = '/img/logo.svg';\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxW: \"50%\",\n        p: \"2em\",\n        __source: {\n            fileName: \"/home/michael/Websites/michal-homepage/components/Footer.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n            __source: {\n                fileName: \"/home/michael/Websites/michal-homepage/components/Footer.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    src: logoImg,\n                    width: 40,\n                    height: 40,\n                    alt: \"logo\",\n                    __source: {\n                        fileName: \"/home/michael/Websites/michal-homepage/components/Footer.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    target: \"_blank\",\n                    href: \"https://github.com/dizzi3\",\n                    __source: {\n                        fileName: \"/home/michael/Websites/michal-homepage/components/Footer.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        fontSize: \"1.3rem\",\n                        __source: {\n                            fileName: \"/home/michael/Websites/michal-homepage/components/Footer.js\",\n                            lineNumber: 14,\n                            columnNumber: 70\n                        },\n                        __self: this,\n                        children: \"Github\"\n                    })\n                })\n            ]\n        })\n    }));\n}\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRTtBQUNqQztTQUV2QkssTUFBTSxHQUFFLENBQUM7SUFFZCxHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFlO0lBRS9CLE1BQU0sc0VBRUROLHVEQUFTO1FBQUNPLElBQUksRUFBQyxDQUFLO1FBQUNDLENBQUMsRUFBQyxDQUFLOzs7Ozs7O3dGQUN4QlAsb0RBQU07Ozs7Ozs7O3FGQUNGQyxtREFBSztvQkFBQ08sR0FBRyxFQUFFSCxPQUFPO29CQUFFSSxLQUFLLEVBQUUsRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEVBQUU7b0JBQUVDLEdBQUcsRUFBQyxDQUFNOzs7Ozs7OztxRkFFckRDLENBQUM7b0JBQUNDLE1BQU0sRUFBQyxDQUFRO29CQUFDQyxJQUFJLEVBQUMsQ0FBMkI7Ozs7Ozs7bUdBQUdaLGtEQUFJO3dCQUFDYSxRQUFRLEVBQUMsQ0FBUTs7Ozs7OztrQ0FBQyxDQUFNOzs7Ozs7QUFNbkcsQ0FBQztLQWhCUVgsTUFBTTtBQWtCZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9lMWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgVlN0YWNrLCBJbWFnZSwgTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5mdW5jdGlvbiBGb290ZXIoKXtcblxuICAgIGNvbnN0IGxvZ29JbWcgPSAnL2ltZy9sb2dvLnN2Zyc7XG5cbiAgICByZXR1cm4oXG5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXPSc1MCUnIHA9JzJlbSc+XG4gICAgICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29JbWd9IHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gYWx0PSdsb2dvJy8+XG4gICAgICAgICAgICAgICAgey8qIDxOZXh0TGluayBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vZGl6emkzJyBwYXNzSHJlZj48TGluayBmb250U2l6ZT0nMS4zcmVtJz5HaXRodWI8L0xpbms+PC9OZXh0TGluaz4gKi99XG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9kaXp6aTMnID48TGluayBmb250U2l6ZT0nMS4zcmVtJz5HaXRodWI8L0xpbms+PC9hPlxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJWU3RhY2siLCJJbWFnZSIsIkxpbmsiLCJOZXh0TGluayIsIkZvb3RlciIsImxvZ29JbWciLCJtYXhXIiwicCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYSIsInRhcmdldCIsImhyZWYiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ })

});