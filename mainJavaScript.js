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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mainStyleSheet.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mainStyleSheet.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* This is the main CSS File */\n*\n{\n  font-size: 10px;\n}\nh1 {\n  color: #b32626;\n}\n\ntable,th,td{\n  border: 1px solid;\n  border-collapse: collapse;\n\n}\n\ntd{\n  width:1rem;\n  height: 1rem;\n  padding:0.25rem;\n  text-align: center;\n}\n\n.labelsRow\n{\n  background-color: #9e8686;\n}\n\n.labelsColumn\n{\n  background-color: #b3c0d7;\n}\n\n.shipsNotSunk\n{\n  background-color: #1ad223;\n}\n\n.missedAttacks\n{\n  background-color: #252a31;\n}\n\n.successfulAttacks\n{\n  background-color: #ff0000;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/mainStyleSheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/mainStyleSheet.css":
/*!********************************!*\
  !*** ./src/mainStyleSheet.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainStyleSheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mainStyleSheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/mainStyleSheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainStyleSheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainStyleSheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_mainStyleSheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_mainStyleSheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/mainStyleSheet.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classDisplay.js":
/*!*****************************!*\
  !*** ./src/classDisplay.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _classShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classShip */ \"./src/classShip.js\");\n/* harmony import */ var _classGameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classGameBoard */ \"./src/classGameBoard.js\");\n/* harmony import */ var _classPlayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classPlayers */ \"./src/classPlayers.js\");\n\n\n\n\nclass Display {\n  constructor() {}\n\n  startGame() {\n    const startGameButton = document.querySelector(\"#startGameButton\");\n\n    document.addEventListener(\"DOMContentLoaded\", () => {\n      startGameButton.addEventListener(\"click\", () => {\n        this.updateGameStatusOnDisplay(\"Yayy Game Started!\");\n        this.newPlayersHumanAndAi = new _classPlayers__WEBPACK_IMPORTED_MODULE_2__.Player();\n        this.humanPlayerShipsInitialPlacement();\n\n        console.log(\n          this.newPlayersHumanAndAi.humanPlayerBoardStatus()\n          //[\"board\"][\"B\"][1][\"shipName\"]\n        );\n        this.renderBoardToDisplay();\n      });\n    });\n\n    // const ShipA = new Ship(\"ShipA\", 1);\n    // this.humanPlayerGameBoard.placeShips(ShipA, \"A\", 5);\n  }\n\n  convertCords(inputArray) {\n    const inputString = inputArray[0];\n    const letter = inputString[0];\n    const number = parseInt(inputString.substring(2));\n\n    return { letter, number };\n  }\n\n  humanPlayerShipsInitialPlacement() {\n    const shipStartCordsLength = new FormData(\n      document.querySelector(\"#shipStartCordsLength\")\n    );\n\n    // Following code will get the Coordinate data from the Form\n    let shipACords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipACords\")\n    );\n\n    let shipBCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipBCords\")\n    );\n\n    let shipCCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipCCords\")\n    );\n\n    let shipDCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipDCords\")\n    );\n\n    let shipECords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipECords\")\n    );\n\n    let shipFCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipFCords\")\n    );\n\n    let shipGCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipGCords\")\n    );\n\n    let shipHCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipHCords\")\n    );\n\n    let shipICords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipICords\")\n    );\n\n    let shipJCords = this.convertCords(\n      shipStartCordsLength.getAll(\"shipJCords\")\n    );\n\n    // This code will get ship length from the Form\n    let shipALength = parseInt(shipStartCordsLength.getAll(\"shipALength\"));\n    let shipBLength = parseInt(shipStartCordsLength.getAll(\"shipBLength\"));\n    let shipCLength = parseInt(shipStartCordsLength.getAll(\"shipCLength\"));\n    let shipDLength = parseInt(shipStartCordsLength.getAll(\"shipDLength\"));\n    let shipELength = parseInt(shipStartCordsLength.getAll(\"shipELength\"));\n    let shipFLength = parseInt(shipStartCordsLength.getAll(\"shipFLength\"));\n    let shipGLength = parseInt(shipStartCordsLength.getAll(\"shipGLength\"));\n    let shipHLength = parseInt(shipStartCordsLength.getAll(\"shipHLength\"));\n    let shipILength = parseInt(shipStartCordsLength.getAll(\"shipILength\"));\n    let shipJLength = parseInt(shipStartCordsLength.getAll(\"shipJLength\"));\n\n    // console.log(shipStartCordsLength.getAll(\"shipALength\"));\n    // console.log(testCords.number);\n\n    this.newShipA = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship A\", shipALength);\n    this.newShipB = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship B\", shipBLength);\n    this.newShipC = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship C\", shipCLength);\n    this.newShipD = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship D\", shipDLength);\n    this.newShipE = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship E\", shipELength);\n    this.newShipF = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship F\", shipFLength);\n    this.newShipG = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship G\", shipGLength);\n    this.newShipH = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship H\", shipHLength);\n    this.newShipI = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship I\", shipILength);\n    this.newShipJ = new _classShip__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Ship J\", shipJLength);\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipA,\n      shipACords.letter,\n      shipACords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipB,\n      shipBCords.letter,\n      shipBCords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipC,\n      shipCCords.letter,\n      shipCCords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipD,\n      shipDCords.letter,\n      shipDCords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipE,\n      shipECords.letter,\n      shipECords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipF,\n      shipFCords.letter,\n      shipFCords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipG,\n      shipGCords.letter,\n      shipGCords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipH,\n      shipHCords.letter,\n      shipHCords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipI,\n      shipICords.letter,\n      shipICords.number\n    );\n\n    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(\n      this.newShipJ,\n      shipJCords.letter,\n      shipJCords.number\n    );\n  }\n\n  humanPlayerSelectionsInput() {}\n\n  renderBoardToDisplay() {\n    const boardRows = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n    const elements = [];\n\n    // Cache DOM elements for efficiency\n    for (const boardRowNum of boardRows) {\n      elements[boardRowNum] = [];\n      for (let i = 0; i < 10; i++) {\n        elements[boardRowNum][i] = document.querySelector(\n          `#human${boardRowNum}${i}`\n        );\n      }\n    }\n\n    for (const rowOfHumanGameBoard of boardRows) {\n      for (let i = 0; i < 10; i++) {\n        const humanPlayerGameBoardCells =\n          this.newPlayersHumanAndAi.humanPlayerBoardStatus().board[\n            rowOfHumanGameBoard\n          ][i];\n\n        if (\n          humanPlayerGameBoardCells !== null &&\n          humanPlayerGameBoardCells !== \"X\"\n        ) {\n          elements[rowOfHumanGameBoard][i].textContent =\n            humanPlayerGameBoardCells.shipName;\n        } else {\n          elements[rowOfHumanGameBoard][i].textContent = null;\n        }\n      }\n    }\n  }\n\n  updateGameStatusOnDisplay(Status) {\n    const gameStatusDisplay = document.querySelector(\"#gameStatusDisplay\");\n    gameStatusDisplay.textContent = Status;\n  }\n}\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/classDisplay.js?");

/***/ }),

/***/ "./src/classGameBoard.js":
/*!*******************************!*\
  !*** ./src/classGameBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n\n\nclass Gameboard {\n  constructor() {\n    this.board = this.createBoard();\n    // this.board={\n    //   A: [null, null, null, null, null, null, null, null, null, null],\n    //   B: [null, null, null, null, null, null, null, null, null, null],\n    //   C: [null, null, null, null, null, null, null, null, null, null],\n    //   D: [null, null, null, null, null, null, null, null, null, null],\n    //   E: [null, null, null, null, null, null, null, null, null, null],\n    //   F: [null, null, null, null, null, null, null, null, null, null],\n    //   G: [null, null, null, null, null, null, null, null, null, null],\n    //   H: [null, null, null, null, null, null, null, null, null, null],\n    //   I: [null, null, null, null, null, null, null, null, null, null],\n    //   J: [null, null, null, null, null, null, null, null, null, null],\n    // };\n  }\n\n  createBoard() {\n    this.gameBoardSize = {\n      X: [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"],\n      Y: [null, null, null, null, null, null, null, null, null, null],\n    };\n    const newBoard = {};\n    for (let i = 0; i < this.gameBoardSize.X.length; i++) {\n      newBoard[this.gameBoardSize.X[i]] = [...this.gameBoardSize.Y];\n    }\n    return newBoard;\n  }\n\n  gameBoardStatus() {\n    return this.board;\n  }\n\n  placeShips(ship, rowStartCords, columnStartCords) {\n    this.ship = ship;\n    this.rowStartCords = rowStartCords;\n    this.columnStartCords = columnStartCords;\n\n    if (\n      this.board[this.rowStartCords][this.columnStartCords] === null &&\n      this.board[this.rowStartCords][this.columnStartCords + this.ship.shipLength\n      ] === null &&\n      this.columnStartCords + this.ship.shipLength <= 9 &&\n      this.columnStartCords >= 0\n    ) {\n      for (let i = 0; i < this.ship.shipLength; i++) {\n        this.board[this.rowStartCords][this.columnStartCords + i] = this.ship;\n      }\n      return this.board;\n    } else {\n      return \"Error location occupied or out of bounds\";\n    }\n  }\n\n  receiveAttack(rowAttack, columnAttack) {\n    this.rowAttack = rowAttack;\n    this.columnAttack = columnAttack;\n\n    if (this.board[this.rowAttack][this.columnAttack] == null) {\n      this.board[this.rowAttack][this.columnAttack] = \"Hit\";\n    } else {\n      this.shipAtLocation = this.board[this.rowAttack][this.columnAttack];\n      this.shipAtLocation.hit();\n    }\n  }\n\n  allShipsHealth() {\n    this.shipCount = 10;\n    // this.shipCount;\n    let sunkShipCount = new Set();\n\n    for (const row of Object.values(this.board)) {\n      row.forEach((ship) => {\n        if (ship && ship.shipSunk === true) {\n          sunkShipCount.add(ship);\n        }\n      });\n    }\n\n    return this.shipCount - sunkShipCount.size;\n  }\n\n  computerPlayerSelectionLogic() {}\n}\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/classGameBoard.js?");

/***/ }),

/***/ "./src/classPlayers.js":
/*!*****************************!*\
  !*** ./src/classPlayers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _classGameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classGameBoard */ \"./src/classGameBoard.js\");\n/* harmony import */ var _classShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classShip */ \"./src/classShip.js\");\n\n\n\n\nclass Player {\n  constructor() {\n    this.humanPlayerGameBoard = new _classGameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.aiPlayerGameBoard = new _classGameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  }\n\n  humanPlayer() {\n    // this.humanPlayerGameBoard = this.newGame.createBoard();\n    // this.humanPlayerGameBoard.placeShips(\"Test\",\"B\",1);\n    // this.humanPlayerGameBoard[\"B\"]=\"Test\"\n    // this.humanPlayerInitialPlacement();\n\n    return this.humanPlayerGameBoard.gameBoardStatus();\n  }\n\n  humanPlayerInitialPlacement(ship, rowCords, columnCords) {\n    this.humanPlayerGameBoard.placeShips(ship, rowCords, columnCords);\n    // console.log(this.humanPlayerGameBoard);\n  }\n\n  humanPlayerBoardStatus() {\n    return this.humanPlayerGameBoard;\n  }\n\n  aiPlayer() {\n    // this.aiPlayerGameBoard = this.newGame.createBoard();\n    return this.aiPlayerGameBoard.gameBoardStatus();\n  }\n}\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/classPlayers.js?");

/***/ }),

/***/ "./src/classShip.js":
/*!**************************!*\
  !*** ./src/classShip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\n\nclass Ship {\n  // static shipIDCounter = 0;\n  constructor(shipName, shipLength) {\n    // this.shipID = Ship.shipIDCounter++;\n    this.shipName = shipName;\n    this.shipLength = shipLength;\n    this.numberOfHits = 0;\n    this.shipSunk = false;\n  }\n\n  hit() {\n    if (!this.shipSunk) {\n      this.numberOfHits += 1;\n    }\n    if (this.numberOfHits >= this.shipLength) {\n      this.shipSunk = true;\n    }\n  }\n\n  isSunk() {\n    return this.shipSunk;\n  }\n\n  shipStatus() {\n    this.shipInfoObject = {\n      shipName: this.shipName,\n      shipLength: this.shipLength,\n      numberOfHits: this.numberOfHits,\n      shipSunk: this.shipSunk,\n    };\n    return this.shipInfoObject;\n  }\n}\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/classShip.js?");

/***/ }),

/***/ "./src/mainJavaScript.js":
/*!*******************************!*\
  !*** ./src/mainJavaScript.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* reexport safe */ _classGameBoard__WEBPACK_IMPORTED_MODULE_3__.Gameboard),\n/* harmony export */   Player: () => (/* reexport safe */ _classPlayers__WEBPACK_IMPORTED_MODULE_4__.Player),\n/* harmony export */   Ship: () => (/* reexport safe */ _classShip__WEBPACK_IMPORTED_MODULE_2__.Ship)\n/* harmony export */ });\n/* harmony import */ var _mainStyleSheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainStyleSheet.css */ \"./src/mainStyleSheet.css\");\n/* harmony import */ var _classDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classDisplay */ \"./src/classDisplay.js\");\n/* harmony import */ var _classShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classShip */ \"./src/classShip.js\");\n/* harmony import */ var _classGameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classGameBoard */ \"./src/classGameBoard.js\");\n/* harmony import */ var _classPlayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classPlayers */ \"./src/classPlayers.js\");\n//This is the main JavaScript file\n\n//ES Module Imports\n//Following will import the CSS file used to style the project\n\n\n\n\n\n\n\n\nconst gameInitialization=new _classDisplay__WEBPACK_IMPORTED_MODULE_1__.Display;\n\ngameInitialization.startGame();\n\n\n//ES Module Exports\n //Class exports\n// export { gameBoardHuman, gameBoardAi }; //Class instance exports\n\n\n//# sourceURL=webpack://BattleShip_game_Development_using_TDD/./src/mainJavaScript.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mainJavaScript.js");
/******/ 	
/******/ })()
;