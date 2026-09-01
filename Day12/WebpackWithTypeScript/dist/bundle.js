/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studentService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentService.js */ \"./src/studentService.ts\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.ts\");\n\n\nconst button = document.getElementById(\"showStudents\");\nconst output = document.getElementById(\"output\");\nif (button && output) {\n    button.addEventListener(\"click\", () => {\n        const students = (0,_studentService_js__WEBPACK_IMPORTED_MODULE_0__.createStudents)();\n        output.innerHTML = \"\";\n        students.forEach((student) => {\n            const p = document.createElement(\"p\");\n            p.textContent =\n                `${student.name} - Marks: ${student.marks} - ` +\n                    `Result: ${student.getResult()} - ` +\n                    `Grade: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getGrade)(student.marks)}`;\n            output.appendChild(p);\n        });\n    });\n}\n\n\n//# sourceURL=webpack://11.webpackwithtypescript/./src/index.ts?\n}");

/***/ },

/***/ "./src/student.ts"
/*!************************!*\
  !*** ./src/student.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Student: () => (/* binding */ Student)\n/* harmony export */ });\nclass Student {\n    id;\n    name;\n    marks;\n    constructor(id, name, marks) {\n        this.id = id;\n        this.name = name;\n        this.marks = marks;\n    }\n    getResult() {\n        return this.marks >= 40 ? \"Pass\" : \"Fail\";\n    }\n}\n\n\n//# sourceURL=webpack://11.webpackwithtypescript/./src/student.ts?\n}");

/***/ },

/***/ "./src/studentService.ts"
/*!*******************************!*\
  !*** ./src/studentService.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStudents: () => (/* binding */ createStudents),\n/* harmony export */   printStudents: () => (/* binding */ printStudents)\n/* harmony export */ });\n/* harmony import */ var _student_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.js */ \"./src/student.ts\");\n\nfunction createStudents() {\n    const students = [\n        new _student_js__WEBPACK_IMPORTED_MODULE_0__.Student(1, \"Rahul\", 85),\n        new _student_js__WEBPACK_IMPORTED_MODULE_0__.Student(2, \"Priya\", 72),\n        new _student_js__WEBPACK_IMPORTED_MODULE_0__.Student(3, \"Amit\", 35),\n    ];\n    return students;\n}\nfunction printStudents(students) {\n    students.forEach((student) => {\n        console.log(`${student.id}. ${student.name} - ${student.marks} - ${student.getResult()}`);\n    });\n}\n\n\n//# sourceURL=webpack://11.webpackwithtypescript/./src/studentService.ts?\n}");

/***/ },

/***/ "./src/utils.ts"
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGrade: () => (/* binding */ getGrade)\n/* harmony export */ });\nfunction getGrade(marks) {\n    if (marks >= 90) {\n        return \"A\";\n    }\n    if (marks >= 75) {\n        return \"B\";\n    }\n    if (marks >= 60) {\n        return \"C\";\n    }\n    if (marks >= 40) {\n        return \"D\";\n    }\n    return \"F\";\n}\n\n\n//# sourceURL=webpack://11.webpackwithtypescript/./src/utils.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;