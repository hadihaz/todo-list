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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 60px 1fr;\n}\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding-left: 30px;\n  background-color: #0f172a;\n  height: 60px;\n  color: white;\n  grid-column: 1/3;\n}\n.menuBtn {\n  width: 30px;\n  height: 30px;\n  display: none;\n}\n.sidebar {\n  background-color: #334155;\n  grid-column: 1/2;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding-top: 30px;\n  font-size: 24px;\n  gap: 20px;\n}\n.sideBarMain,\n.projects {\n  width: 100%;\n}\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sideBarMain ul li {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  gap: 5px;\n  border-radius: 5px;\n}\n\n.sideBarMainBtn {\n  background-color: #334155;\n  color: white;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding-left: 30px;\n  font-size: 22px;\n  width: 100%;\n  margin: 0;\n  height: 50px;\n  border: none;\n  gap: 5px;\n}\n\n.sideBarMainBtn:hover {\n  background-color: #0f172a5b;\n}\n\n.projects {\n  border-top: solid 2px #64748b;\n}\n\n.projects ul li p {\n  margin: 0;\n  padding: 0;\n}\n\n.projects p {\n  margin-bottom: 0;\n  padding: 0px 20px 0px 30px;\n}\n.projectItem {\n  background-color: #334155;\n  color: white;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding-left: 30px;\n  font-size: 22px;\n  width: 100%;\n  margin: 0;\n  height: 40px;\n  border: none;\n  gap: 5px;\n}\n.projectItem:hover {\n  background-color: #0f172a5b;\n}\n.titleP {\n  font-size: 26px;\n  height: 50px;\n}\n\n.addP {\n  background-color: #334155;\n  color: white;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding-left: 30px;\n  font-size: 24px;\n  width: 100%;\n  margin: 0;\n  height: 50px;\n  border: none;\n}\n.addP:hover {\n  background-color: #0f172a5b;\n}\n\n.content {\n  background-color: #64748b;\n  grid-column: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 20px;\n  padding-top: 50px;\n}\n.tasksClt {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.tasksCltBtn {\n  width: 150px;\n  height: 50px;\n  background-color: #334155;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 18px;\n  margin: 0 10px;\n}\n\n.taskList,\n.noteList {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 20px;\n}\n.taskList {\n  display: flex;\n}\n.noteList {\n  display: none;\n}\n.taskSection,\n.noteSection {\n  width: 75%;\n  height: 50px;\n  background-color: #334155;\n  border-radius: 10px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  font-size: 28px;\n  padding: 10px;\n}\n.addProjectModal {\n  font: 18px;\n  display: none;\n  position: fixed;\n  background-color: #0f172a85;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.close {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 100px;\n  right: 30;\n  top: 10;\n  position: fixed;\n}\n.addTaskModal,\n.addNoteModal {\n  font: 18px;\n  display: none;\n  /* display: flex; */\n  position: fixed;\n  background-color: #0f172a85;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.formSsction {\n  width: 300px;\n  height: 200px;\n  background-color: #0f172a;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.noteFormSsction {\n  height: 350px;\n}\n.notetextarea {\n  color: #64748b;\n  background-color: #0f172a;\n  border-radius: 10px;\n  width: 200px;\n  border: #64748b solid 2px;\n}\n#form,\n#Taskform,\n#Noteform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n#Pname,\n#Tname,\n#Nname {\n  color: #64748b;\n  font-size: 18px;\n  background-color: #0f172a;\n  border-radius: 10px;\n  height: 40px;\n  width: 200px;\n  border: none;\n  border: #64748b solid 2px;\n}\n#Psubmit,\n#Tsubmit,\n#Nsubmit {\n  background-color: #0f172a;\n  border-radius: 20px;\n  height: 40px;\n  width: 100px;\n  color: #64748b;\n  border: #64748b solid 2px;\n}\n\n@media only screen and (max-width: 800px) {\n  .menuBtn {\n    width: 30px;\n    height: 30px;\n    display: block;\n  }\n  .header {\n    justify-content: start;\n  }\n  .sidebar {\n    position: fixed;\n    height: 100%;\n    width: 200px;\n    top: 60px;\n    display: none;\n  }\n  .content {\n    grid-column: 1/3;\n  }\n\n  .tasksCltBtn {\n    width: 140px;\n  }\n}\n.Active {\n  display: flex;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\nconst menuBtn = document.querySelector(\".menuBtn\");\nconst sideBar = document.querySelector(\".sidebar\");\nconst projectsList = document.querySelector(\".projectsLIst\");\nconst addProject = document.querySelector(\".addP\");\nconst addProjectModal = document.querySelector(\".addProjectModal\");\nconst addTaskModal = document.querySelector(\".addTaskModal\");\nconst addNoteModal = document.querySelector(\".addNoteModal\");\nconst addProjectForm = document.querySelector(\"#form\");\nconst addTaskForm = document.querySelector(\"#Taskform\");\nconst addNoteForm = document.querySelector(\"#Noteform\");\nconst content = document.querySelector(\".content\");\nconst addBtn = document.querySelector(\".addTaskBtn\");\nconst taskList = document.querySelector(\".taskList\");\nconst NoteList = document.querySelector(\".NoteList\");\nconst Tbtn = document.querySelector(\".Tbtn\");\nconst Nbtn = document.querySelector(\".Nbtn\");\nconst close = document.querySelectorAll(\".close\");\nconst deletProjectBtn = document.querySelector(\".deletProjectBtn\");\n\nlet active = false;\nlet selectedProject = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.showAllPriject)()[0];\nlet addBtnState = \"T\";\n\ndeletProjectBtn.addEventListener(\"click\", () => {\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.removeProject(selectedProject);\n  selectedProject = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.showAllPriject)()[0];\n  addProjectsToUiList();\n  addTaskToUiList();\n  addNoteToUiList();\n});\n\nclose.forEach((c) => {\n  c.addEventListener(\"click\", () => {\n    addProjectModal.classList.remove(\"Active\");\n    addTaskModal.classList.remove(\"Active\");\n    addNoteModal.classList.remove(\"Active\");\n  });\n});\n\nTbtn.addEventListener(\"click\", (e) => {\n  console.log(e.target.style);\n  taskList.style.display = \"flex\";\n  NoteList.style.display = \"none\";\n  addBtn.innerHTML = \"Add Task\";\n  addBtnState = \"T\";\n  sideBar.classList.remove(\"Active\");\n  active = !active;\n});\nNbtn.addEventListener(\"click\", () => {\n  taskList.style.display = \"none\";\n  NoteList.style.display = \"flex\";\n  addBtn.innerHTML = \"Add Note\";\n  addBtnState = \"N\";\n  sideBar.classList.remove(\"Active\");\n  active = !active;\n});\n\nfunction responsivePage() {\n  menuBtn.addEventListener(\"click\", () => {\n    if (active) {\n      sideBar.classList.remove(\"Active\");\n      active = !active;\n    } else {\n      sideBar.classList.add(\"Active\");\n      active = !active;\n    }\n  });\n}\n\naddProject.addEventListener(\"click\", () => {\n  addProjectModal.classList.add(\"Active\");\n  sideBar.classList.remove(\"Active\");\n  active = !active;\n});\n\naddProjectForm.onsubmit = (e) => {\n  e.preventDefault();\n  const Pname = document.getElementById(\"Pname\").value;\n  addProjectModal.classList.remove(\"Active\");\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.createProject(Pname);\n  addProjectsToUiList();\n  form.reset();\n};\n\nfunction addProjectsToUiList() {\n  projectsList.innerHTML = \"\";\n  for (let project of (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.showAllPriject)()) {\n    const li = document.createElement(\"li\");\n    const img = document.createElement(\"img\");\n    const p = document.createElement(\"p\");\n    const btn = document.createElement(\"button\");\n    img.src = \"images/package-custom.png\";\n\n    p.innerHTML = project;\n    btn.classList.add(\"projectItem\");\n\n    btn.id = project;\n    btn.appendChild(img);\n    btn.appendChild(p);\n    li.appendChild(btn);\n    btn.addEventListener(\"click\", (e) => {\n      selectedProject = e.target.id;\n      sideBar.classList.remove(\"Active\");\n      active = !active;\n      addTaskToUiList();\n      addNoteToUiList();\n    });\n    projectsList.appendChild(li);\n  }\n}\n\naddBtn.addEventListener(\"click\", () => {\n  if (addBtnState == \"T\") {\n    addTaskModal.classList.add(\"Active\");\n  } else if (addBtnState == \"N\") {\n    addNoteModal.classList.add(\"Active\");\n  }\n});\nfunction addTaskToUiList() {\n  taskList.innerHTML = \"\";\n  console.log(localStorage);\n  console.log(_data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.showProject(selectedProject));\n  for (let t of _data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.showProject(selectedProject).tasks) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"taskSection\");\n    div.innerHTML = t.name;\n    taskList.appendChild(div);\n  }\n}\naddTaskForm.onsubmit = (e) => {\n  e.preventDefault();\n  const Tname = document.getElementById(\"Tname\").value;\n  addTaskModal.classList.remove(\"Active\");\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.addTask(selectedProject, Tname);\n  addTaskToUiList();\n  form.reset();\n};\n\nfunction addNoteToUiList() {\n  NoteList.innerHTML = \"\";\n  for (let n of _data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.showProject(selectedProject).notes) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"noteSection\");\n    div.innerHTML = n.name;\n    NoteList.appendChild(div);\n  }\n}\naddNoteForm.onsubmit = (e) => {\n  e.preventDefault();\n  const Nname = document.getElementById(\"Nname\").value;\n  const notetextarea = document.getElementById(\"notetextarea\").value;\n  addNoteModal.classList.remove(\"Active\");\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCTL.addNote(selectedProject, Nname, notetextarea);\n  addNoteToUiList();\n  form.reset();\n};\n\naddProjectsToUiList();\naddTaskToUiList();\naddNoteToUiList();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (responsivePage);\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectCTL: () => (/* binding */ ProjectCTL),\n/* harmony export */   showAllPriject: () => (/* binding */ showAllPriject)\n/* harmony export */ });\nclass project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n    this.notes = [];\n  }\n}\n\nclass task {\n  constructor(name) {\n    this.name = name;\n    this.date = new Date();\n  }\n}\n\nclass note {\n  constructor(name, content) {\n    this.name = name;\n    this.content = content;\n    this.date = new Date();\n  }\n}\n\nconst ProjectCTL = (() => {\n  const createProject = (name) => {\n  \n    if (!listOfProjects.includes(name)) {\n      let newProject = new project(name);\n      localStorage.setItem(name, JSON.stringify(newProject));\n\n      listOfProjects.push(name);\n      localStorage.setItem(\n        \"__lIST_OF_PROJECTS__\",\n        JSON.stringify(listOfProjects)\n      );\n    }\n  };\n  const removeProject = (name) => {\n    // let newProject = new project(name);\n    localStorage.removeItem(name);\n    listOfProjects = listOfProjects.filter((item) => {\n      return item != name;\n    });\n    localStorage.setItem(\n      \"__lIST_OF_PROJECTS__\",\n      JSON.stringify(listOfProjects)\n    );\n  };\n  const addTask = (projectName, taskName) => {\n    let newTask = new task(taskName);\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.tasks.push(newTask);\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const addNote = (projectName, noteName, content) => {\n    let newNote = new note(noteName, content);\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.notes.push(newNote);\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const deleteTask = (projectName, taskName) => {\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.tasks = selectedProject.tasks.filter((task) => {\n      return task.name != taskName;\n    });\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const deleteNote = (projectName, noteName) => {\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.notes = selectedProject.tasks.filter((note) => {\n      return note.name != noteName;\n    });\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const editTaskName = (projectName, taskName, newName) => {\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.tasks.map((task) => {\n      if (task.name == taskName) task.name = newName;\n    });\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const editNoteName = (projectName, noteName, newName) => {\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.notes.map((note) => {\n      if (note.name == noteName) note.name = newName;\n    });\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const editNoteContent = (projectName, noteName, newContent) => {\n    const selectedProject = JSON.parse(localStorage.getItem(projectName));\n    selectedProject.notes.map((note) => {\n      if (note.name == noteName) note.content = newContent;\n    });\n    localStorage.setItem(projectName, JSON.stringify(selectedProject));\n  };\n  const showProject = (Pname) => {\n    let PList = JSON.parse(localStorage.getItem(Pname));\n    return PList;\n  };\n\n  return {\n    createProject,\n    addTask,\n    deleteTask,\n    addNote,\n    deleteNote,\n    editTaskName,\n    editNoteName,\n    editNoteContent,\n    removeProject,\n    showProject,\n  };\n})();\n\nlet listOfProjects = JSON.parse(localStorage.getItem(\"__lIST_OF_PROJECTS__\"));\nif (listOfProjects.length == 0) {\n  localStorage.setItem(\"__lIST_OF_PROJECTS__\", JSON.stringify([]));\n}\n\nfunction showListOfPriject(listOfProjects) {\n  return listOfProjects;\n}\n\nfunction showAllPriject() {\n  return showListOfPriject(listOfProjects);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\n\n\n(0,_UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;