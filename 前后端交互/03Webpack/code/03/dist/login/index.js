/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login/index.js"
/*!****************************!*\
  !*** ./src/login/index.js ***!
  \****************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{// import  {checkPhone,checkCode} from  '../utils/check.js'\r\nconst {checkPhone,checkCode} = __webpack_require__(/*! ../utils/check.js */ \"./src/utils/check.js\")\r\ndocument.querySelector('.btn').addEventListener('click',()=>{\r\n    const phone = document.querySelector('.login-form [name=\"mobile\"]').value\r\n    const code = document.querySelector('.login-form [name=\"code\"]').value\r\n\r\n    //然后执行校验逻辑\r\n\r\n    if(!checkPhone(phone)){\r\n        console.log('号码格式有误')\r\n        return //有误则阻止代码继续向下运行\r\n    }\r\n\r\n    if(!checkCode(code)){\r\n        console.log('验证码长度必须为6位')\r\n        return\r\n    }\r\n\r\n    console.log('提交到服务器登录')\r\n})  \n\n//# sourceURL=webpack://03/./src/login/index.js?\n}");

/***/ },

/***/ "./src/utils/check.js"
/*!****************************!*\
  !*** ./src/utils/check.js ***!
  \****************************/
(module) {

eval("{const checkPhone = (phone)=>{\r\n    return phone.length === 11\r\n}\r\nconst checkCode = (code)=>{\r\n    return code.length === 6\r\n}\r\n\r\nmodule.exports={\r\n    checkPhone,\r\n    checkCode\r\n}\r\n\r\n//ECMAScript命名导出\r\n// export const checkPhone = (phone)=>{\r\n//     return phone.length === 11\r\n// }\r\n// export const checkCode = (code)=>{\r\n//     return code.length === 6\r\n// }\r\n\n\n//# sourceURL=webpack://03/./src/utils/check.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/login/index.js");
/******/ 	
/******/ })()
;