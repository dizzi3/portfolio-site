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

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Project = function(param) {\n    var name = param.name, description = param.description;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        fontSize: \"1.3em\",\n        p: \"2em\",\n        maxW: \"50%\",\n        bg: \"#5f5c6d\",\n        borderRadius: \"1em\",\n        marginY: 8,\n        color: \"#fff\",\n        __source: {\n            fileName: \"/home/michael/Websites/michal-homepage/components/Project.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n            align: \"flex-start\",\n            __source: {\n                fileName: \"/home/michael/Websites/michal-homepage/components/Project.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                    as: \"h2\",\n                    fontSize: \"1.8em\",\n                    __source: {\n                        fileName: \"/home/michael/Websites/michal-homepage/components/Project.js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: name\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                    as: \"description\",\n                    __source: {\n                        fileName: \"/home/michael/Websites/michal-homepage/components/Project.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: name\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    colorScheme: \"blue\",\n                    __source: {\n                        fileName: \"/home/michael/Websites/michal-homepage/components/Project.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"View\"\n                })\n            ]\n        })\n    }));\n};\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFFOztBQUVyRSxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUFRLFFBQW1CLENBQUM7UUFBekJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxXQUFXLFNBQVhBLFdBQVc7SUFDaEMsTUFBTSxzRUFDRE4sdURBQVM7UUFBQ08sUUFBUSxFQUFDLENBQU87UUFBQ0MsQ0FBQyxFQUFDLENBQUs7UUFBQ0MsSUFBSSxFQUFDLENBQUs7UUFBQ0MsRUFBRSxFQUFDLENBQVM7UUFBQ0MsWUFBWSxFQUFDLENBQUs7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsS0FBSyxFQUFDLENBQU07Ozs7Ozs7d0ZBQ2xHWixvREFBTTtZQUFDYSxLQUFLLEVBQUMsQ0FBWTs7Ozs7Ozs7cUZBQ3JCWCxxREFBTztvQkFBQ1ksRUFBRSxFQUFDLENBQUk7b0JBQUNSLFFBQVEsRUFBQyxDQUFPOzs7Ozs7OzhCQUFFRixJQUFJOztxRkFDdENGLHFEQUFPO29CQUFDWSxFQUFFLEVBQUMsQ0FBYTs7Ozs7Ozs4QkFBRVYsSUFBSTs7cUZBQzlCSCxvREFBTTtvQkFBQ2MsV0FBVyxFQUFDLENBQU07Ozs7Ozs7OEJBQUMsQ0FBSTs7Ozs7QUFJL0MsQ0FBQztLQVZLWixPQUFPO0FBWWIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzP2Q1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBWU3RhY2ssIEJ1dHRvbiwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuY29uc3QgUHJvamVjdCA9ICh7IG5hbWUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGZvbnRTaXplPScxLjNlbScgcD0nMmVtJyBtYXhXPSc1MCUnIGJnPScjNWY1YzZkJyBib3JkZXJSYWRpdXM9JzFlbScgbWFyZ2luWT17OH0gY29sb3I9JyNmZmYnPlxuICAgICAgICAgICAgPFZTdGFjayBhbGlnbj0nZmxleC1zdGFydCc+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gyJyBmb250U2l6ZT0nMS44ZW0nPntuYW1lfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz0nZGVzY3JpcHRpb24nPntuYW1lfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdibHVlJz5WaWV3PC9CdXR0b24+XG4gICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlZTdGFjayIsIkJ1dHRvbiIsIkhlYWRpbmciLCJQcm9qZWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZm9udFNpemUiLCJwIiwibWF4VyIsImJnIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luWSIsImNvbG9yIiwiYWxpZ24iLCJhcyIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

});