/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addClassAvailableCells.js":
/*!**************************************************!*\
  !*** ./src/components/addClassAvailableCells.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addClassAvailableCells(idAvailableCells) {
  idAvailableCells.forEach(function (id) {
    if (id) {
      document.getElementById(id).classList.add("cell--available");
      document.getElementById(id).draggable = true;
      // document.getElementById(
      //   id
      // ).innerHTML = `<div class = 'field__item cell cell--available'>${id}<div>`;
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addClassAvailableCells);

/***/ }),

/***/ "./src/components/cellAnimation.js":
/*!*****************************************!*\
  !*** ./src/components/cellAnimation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_getGridGap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getGridGap */ "./src/helpers/getGridGap.js");
/* harmony import */ var _helpers_getWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getWidth */ "./src/helpers/getWidth.js");


function cellAnimation(number, direction, transition) {
  var visible = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var widthCell = Number((0,_helpers_getWidth__WEBPACK_IMPORTED_MODULE_1__["default"])("cell"));
  var gap = Number((0,_helpers_getGridGap__WEBPACK_IMPORTED_MODULE_0__["default"])("field__list"));
  var distance = widthCell + gap;
  var cell = document.getElementById(number);
  if (visible) {
    cell.style.transition = transition;
  }
  if (direction === "top") {
    cell.style.transform = "translateY(-".concat(distance, "px)");
  }
  if (direction === "bottom") {
    cell.style.transform = "translateY(".concat(distance, "px)");
  }
  if (direction === "left") {
    cell.style.transform = "translateX(-".concat(distance, "px)");
  }
  if (direction === "right") {
    cell.style.transform = "translateX(".concat(distance, "px)");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cellAnimation);

/***/ }),

/***/ "./src/components/changeMatrix.js":
/*!****************************************!*\
  !*** ./src/components/changeMatrix.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeMatrix(matrix, coordsStart, coordsEnd) {
  var memory = matrix[coordsEnd[0]][coordsEnd[1]];
  matrix[coordsEnd[0]][coordsEnd[1]] = matrix[coordsStart[0]][coordsStart[1]];
  matrix[coordsStart[0]][coordsStart[1]] = memory;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeMatrix);

/***/ }),

/***/ "./src/components/createBurgerMenu.js":
/*!********************************************!*\
  !*** ./src/components/createBurgerMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/curtain-background.jpg */ "./src/assets/curtain-background.jpg");


function createBurgerMenu() {
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "field__menu menu", "field");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "menu__button--restart menu__button restart btn", "field__menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "restart-left btn-left", "menu__button--restart");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "restart-right btn-right", "menu__button--restart");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menu__button--restart-middle  restart-middle btn-middle", "menu__button--restart");
  var restart = document.querySelector(".menu__button--restart-middle");
  restart.innerHTML = "restart";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "menu__button--save menu__button save btn", "field__menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "save-left btn-left", "menu__button--save");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "save-right btn-right", "menu__button--save");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menu__button--save-middle save-middle btn-middle", "menu__button--save");
  var save = document.querySelector(".menu__button--save-middle");
  save.innerHTML = "save";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "menu__button menu__button--sound sound", "field__menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "menu__button--load menu__button  load btn", "field__menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "load-left btn-left", "menu__button--load");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "load-right btn-right", "menu__button--load");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menu__button--load-middle load-middle btn-middle", "menu__button--load");
  var load = document.querySelector(".menu__button--load-middle");
  load.innerHTML = "load";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "menu__button--result menu__button result btn", "field__menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "result-left btn-left", "menu__button--result");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "result-right btn-right", "menu__button--result");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menu__button--result-middle result-middle btn-middle", "menu__button--result");
  var result = document.querySelector(".menu__button--result-middle");
  result.innerHTML = "result";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", "menu__size-menu size-menu1", "field__menu");
  for (var i = 3; i <= 8; i++) {
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "size-menu__button menu__size-menu--size".concat(i, "x").concat(i, " size").concat(i, "x").concat(i, " btn"), "menu__size-menu");
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "size".concat(i, "x").concat(i, "-left btn-left"), "menu__size-menu--size".concat(i, "x").concat(i));
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "size".concat(i, "x").concat(i, "-right btn-right"), "menu__size-menu--size".concat(i, "x").concat(i));
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menu__size-menu--size".concat(i, "x").concat(i, "-middle size").concat(i, "x").concat(i, "-middle btn-middle"), "menu__size-menu--size".concat(i, "x").concat(i));
    var button = document.querySelector(".menu__size-menu--size".concat(i, "x").concat(i, "-middle"));
    button.innerHTML = "".concat(i, "x").concat(i);
  }
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "menu__background background", "field__menu");
  var imgbg = document.querySelector(".menu__background");
  imgbg.src = _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBurgerMenu);

/***/ }),

/***/ "./src/components/createContainer.js":
/*!*******************************************!*\
  !*** ./src/components/createContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContainer() {
  var container = document.createElement("div");
  container.className = "container";
  document.body.append(container);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContainer);

/***/ }),

/***/ "./src/components/createCurtain.js":
/*!*****************************************!*\
  !*** ./src/components/createCurtain.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/curtain-background.jpg */ "./src/assets/curtain-background.jpg");


function createCurtain() {
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "field__curtain curtain", "field");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "curtain__continue btn", "curtain");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "curtain__continue-left btn-left", "curtain__continue");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "curtain__continue-right btn-right", "curtain__continue");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "curtain__continue-middle btn-middle", "curtain__continue");
  var continueGameLeft = document.querySelector(".curtain__continue-left");
  var continueGameRight = document.querySelector(".curtain__continue-right");
  var continueGameMiddle = document.querySelector(".curtain__continue-middle");
  if (localStorage.getItem("atLeastOneSave") === null) {
    continueGameMiddle.disabled = true;
    continueGameMiddle.innerHTML = "CONTINUE`";
    continueGameMiddle.style.color = "grey";
    continueGameMiddle.style.cursor = "not-allowed";
    continueGameLeft.style.cursor = "not-allowed";
    continueGameRight.style.cursor = "not-allowed";
  } else {
    continueGameMiddle.disabled = false;
    continueGameMiddle.innerHTML = "CONTINUE";
  }
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "curtain__new-game btn", "curtain");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "curtain__new-game-left btn-left", "curtain__new-game");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "curtain__new-game-right btn-right", "curtain__new-game");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "curtain__new-game-middle btn-middle", "curtain__new-game");
  var newGame = document.querySelector(".curtain__new-game-middle");
  newGame.innerHTML = "NEW GAME";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "curtain__background background", "curtain");
  var imgbg = document.querySelector(".curtain__background");
  imgbg.src = _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCurtain);

/***/ }),

/***/ "./src/components/createHtml.js":
/*!**************************************!*\
  !*** ./src/components/createHtml.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createContainer */ "./src/components/createContainer.js");
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _renderMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _renderTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _createCurtain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createCurtain */ "./src/components/createCurtain.js");
/* harmony import */ var _createResultList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createResultList */ "./src/components/createResultList.js");
/* harmony import */ var _createYouWin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createYouWin */ "./src/components/createYouWin.js");
/* harmony import */ var _assets_moves_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/moves.gif */ "./src/assets/moves.gif");
/* harmony import */ var _assets_time_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/time.gif */ "./src/assets/time.gif");
/* harmony import */ var _createBurgerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./createBurgerMenu */ "./src/components/createBurgerMenu.js");
/* harmony import */ var _helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/buttonDisabled */ "./src/helpers/buttonDisabled.js");













function createHtml(matrix) {
  (0,_createContainer__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("nav", "navigation", "container");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "navigation__button restart btn", "navigation");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "restart-left btn-left", "restart");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "restart-right btn-right", "restart");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "restart-middle btn-middle", "restart");
  var restart = document.querySelector(".restart-middle");
  restart.innerHTML = "restart";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "navigation__button save btn", "navigation");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "save-left btn-left", "save");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "save-right btn-right", "save");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "save-middle btn-middle", "save");
  var save = document.querySelector(".save-middle");
  save.innerHTML = "save";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "navigation__button sound", "navigation");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "navigation__button load btn", "navigation");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "load-left btn-left", "load");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "load-right btn-right", "load");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "load-middle btn-middle", "load");
  var load = document.querySelector(".load-middle");
  load.innerHTML = "load";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "navigation__button result btn", "navigation");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "result-left btn-left", "result");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "result-right btn-right", "result");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "result-middle btn-middle", "result");
  var result = document.querySelector(".result-middle");
  result.innerHTML = "result";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "navigation__button burger-menu btn", "navigation");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "burger-menu-left btn-left", "burger-menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "burger-menu-right btn-right", "burger-menu");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "burger-menu-middle btn-middle", "burger-menu");
  var burgerMenu = document.querySelector(".burger-menu-middle");
  burgerMenu.innerHTML = "menu";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "field", "container");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("ul", "field__list", "field");
  (0,_createCurtain__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_createResultList__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_createYouWin__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_renderMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(matrix);
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "animationAvailable", "container");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("nav", "size-menu", "container");
  for (var i = 3; i <= 8; i++) {
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "size-menu--size".concat(i, "x").concat(i, " size-menu__button size").concat(i, "x").concat(i, " btn"), "size-menu");
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "size".concat(i, "x").concat(i, "-left btn-left"), "size".concat(i, "x").concat(i));
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "size".concat(i, "x").concat(i, "-right btn-right"), "size".concat(i, "x").concat(i));
    (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "size".concat(i, "x").concat(i, "-middle btn-middle"), "size".concat(i, "x").concat(i));
    var button = document.querySelector(".size".concat(i, "x").concat(i, "-middle"));
    button.innerHTML = "".concat(i, "x").concat(i);
  }
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "updated-data", "container");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "moves-wrapper", "updated-data");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "moves-wrapper__moves moves", "moves-wrapper");
  (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_4__["default"])());
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "moves-wrapper__background", "moves-wrapper");
  document.querySelector(".moves-wrapper__background").src = _assets_moves_gif__WEBPACK_IMPORTED_MODULE_9__;
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "time-wrapper", "updated-data");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "time-wrapper__timer timer", "time-wrapper");
  (0,_renderTimer__WEBPACK_IMPORTED_MODULE_5__["default"])(0, true);
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "time-wrapper__background", "time-wrapper");
  document.querySelector(".time-wrapper__background").src = _assets_time_gif__WEBPACK_IMPORTED_MODULE_10__;
  (0,_createBurgerMenu__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var animationAvailable = document.querySelector(".animationAvailable");
  animationAvailable.dataset.animationAvailable = "true";
  (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__["default"])("restart");
  (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__["default"])("save");
  document.querySelector(".sound").style.cursor = "not-allowed";
  (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__["default"])("load");
  (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__["default"])("result");
  (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__["default"])("burger-menu");
  for (var _i = 3; _i <= 8; _i++) {
    (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_12__["default"])("size-menu--size".concat(_i, "x").concat(_i));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtml);

/***/ }),

/***/ "./src/components/createMatrix.js":
/*!****************************************!*\
  !*** ./src/components/createMatrix.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMatrix(size) {
  var matrixLength = Math.pow(size, 2);
  var matrixInArray = [];
  for (var i = 1; i < matrixLength; i++) {
    matrixInArray.push(i);
  }
  matrixInArray.push(0);
  var matrix = [];
  for (var _i = 0; _i < size; _i++) {
    matrix[_i] = [];
    for (var j = 0; j < size; j++) {
      matrix[_i][j] = matrixInArray[_i * size + j];
    }
  }
  return matrix;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMatrix);

/***/ }),

/***/ "./src/components/createResultList.js":
/*!********************************************!*\
  !*** ./src/components/createResultList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/curtain-background.jpg */ "./src/assets/curtain-background.jpg");


function createResultList() {
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "field__result-list resultl", "field");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "resultl__title title", "resultl");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", "title__date", "resultl__title");
  var date = document.querySelector(".title__date");
  date.innerHTML = "DATE";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", "title__size", "resultl__title");
  var size = document.querySelector(".title__size");
  size.innerHTML = "SIZE";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", "title__moves", "resultl__title");
  var moves = document.querySelector(".title__moves");
  moves.innerHTML = "MOVES";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", "title__time", "resultl__title");
  var time = document.querySelector(".title__time");
  time.innerHTML = "TIME";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "resultl__table", "resultl");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", "resultl__table-date list-date", "resultl__table");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", "resultl__table-size list-size", "resultl__table");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", "resultl__table-moves list-moves", "resultl__table");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", "resultl__table-time list-time", "resultl__table");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "resultl__close btn", "resultl");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "resultl__close-left btn-left", "resultl__close");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "resultl__close-right btn-right", "resultl__close");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "resultl__close-middle btn-middle", "resultl__close");
  var close = document.querySelector(".resultl__close-middle");
  close.innerHTML = "CLOSE";
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "field__background background", "resultl");
  var imgbg = document.querySelector(".field__background");
  imgbg.src = _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__;

  // createHtmlTag("div", "resultl__no-result", "resultl");
  // const noResult = document.querySelector(".resultl__no-result");
  // noResult.innerHTML =
  //   "The list of records is empty, you need to win the game.";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createResultList);

/***/ }),

/***/ "./src/components/createYouWin.js":
/*!****************************************!*\
  !*** ./src/components/createYouWin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/curtain-background.jpg */ "./src/assets/curtain-background.jpg");
/* harmony import */ var _assets_diablo_win_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/diablo-win.png */ "./src/assets/diablo-win.png");



function createYouWin() {
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "field__you-win you-win", "field");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "you-win__text", "you-win");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "you-win__image", "you-win");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "you-win__button btn", "you-win");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "you-win__button-left btn-left", "you-win__button");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "you-win__button-right btn-right", "you-win__button");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "you-win__button-middle btn-middle", "you-win__button");
  (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "you-win__background background", "you-win");
  var youWin = document.querySelector(".you-win");
  youWin.style.display = "none";
  var youWinText = document.querySelector(".you-win__text");
  youWinText.innerHTML = "Hooray! You solved the puzzle in ##:## and N moves!";
  var close = document.querySelector(".you-win__button-middle");
  close.innerHTML = "NEW GAME";
  var image = document.querySelector(".you-win__image");
  image.src = _assets_diablo_win_png__WEBPACK_IMPORTED_MODULE_2__;
  var imgbg = document.querySelector(".you-win__background");
  imgbg.src = _assets_curtain_background_jpg__WEBPACK_IMPORTED_MODULE_1__;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createYouWin);

/***/ }),

/***/ "./src/components/removeClassAvailableCells.js":
/*!*****************************************************!*\
  !*** ./src/components/removeClassAvailableCells.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeClassAvailableCells() {
  var cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    return cell.classList.remove("cell--available");
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeClassAvailableCells);

/***/ }),

/***/ "./src/components/renderMatrix.js":
/*!****************************************!*\
  !*** ./src/components/renderMatrix.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/convertMatrixInOneDimensionalArray */ "./src/helpers/convertMatrixInOneDimensionalArray.js");
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");


function renderMatrix(matrix) {
  var field = document.querySelector(".field__list");
  if (field.hasChildNodes()) {
    field.innerHTML = "";
  }
  var matrixInArray = (0,_helpers_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
  var lengthMatrix = matrixInArray.length;
  for (var i = 0; i < lengthMatrix; i++) {
    if (matrixInArray[i] !== 0) {
      (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("li", "field__item cell", "field__list", matrixInArray[i], matrixInArray[i]);
    } else {
      (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_1__["default"])("li", "field__item cell cell--active", "field__list", "", matrixInArray[i]);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMatrix);

/***/ }),

/***/ "./src/components/renderTimer.js":
/*!***************************************!*\
  !*** ./src/components/renderTimer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderTimer(time) {
  var zeroTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var timer = document.querySelector(".timer");
  var seconds = time % 60;
  var minutes = Math.floor(time / 60) % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var currentTime = "".concat(minutes, ":").concat(seconds);
  timer.innerHTML = currentTime;
  if (!zeroTime) {
    var idSetInterval = setInterval(handleRenderTimer(time), 1000);
    document.querySelector(".timer").dataset.idSetInterval = idSetInterval;
  }
}
function handleRenderTimer(time) {
  return function showTime() {
    var timer = document.querySelector(".timer");
    time++;
    var seconds = time % 60;
    var minutes = Math.floor(time / 60) % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var currentTime = "".concat(minutes, ":").concat(seconds);
    timer.innerHTML = currentTime;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTimer);

/***/ }),

/***/ "./src/components/setWidthField.js":
/*!*****************************************!*\
  !*** ./src/components/setWidthField.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setWidthField(size) {
  var field = document.querySelector(".field__list");
  field.style["grid-template-columns"] = "repeat(".concat(size, ", 1fr)");
  field.style["grid-template-rows"] = "repeat(".concat(size, ", 1fr)");
  var fontSize = Math.floor(4 * 40 / size);
  document.querySelector(".field__list").style["font-size"] = "".concat(fontSize, "px");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWidthField);

/***/ }),

/***/ "./src/helpers/addOneMove.js":
/*!***********************************!*\
  !*** ./src/helpers/addOneMove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNumberOfMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");

function addOneMove() {
  var numberOfMoves = (0,_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_0__["default"])();
  numberOfMoves++;
  localStorage.setItem("numberOfMoves", JSON.stringify(numberOfMoves));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addOneMove);

/***/ }),

/***/ "./src/helpers/addResultInLocalStorage.js":
/*!************************************************!*\
  !*** ./src/helpers/addResultInLocalStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNumberOfMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");

function addResultInLocalStorage(matrix) {
  var timer = document.querySelector(".timer");
  var arrTime = timer.innerHTML.split(":");
  var time = Number(arrTime[0]) * 60 + Number(arrTime[1]);
  var newResult = {
    numberOfMoves: (0,_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    time: time,
    size: matrix.length,
    date: new Date()
  };
  if (localStorage.getItem("result-list")) {
    var arrResultList = JSON.parse(localStorage.getItem("result-list"));
    arrResultList.push(newResult);
    localStorage.setItem("result-list", JSON.stringify(arrResultList));
  } else {
    var _arrResultList = [];
    _arrResultList.push(newResult);
    localStorage.setItem("result-list", JSON.stringify(_arrResultList));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addResultInLocalStorage);

/***/ }),

/***/ "./src/helpers/buttonDisabled.js":
/*!***************************************!*\
  !*** ./src/helpers/buttonDisabled.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function buttonDisabled(buttonClass) {
  var button = document.querySelector(".".concat(buttonClass));
  button.style.disabled = true;
  var children = button.childNodes;
  var _iterator = _createForOfIteratorHelper(children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      node.style.color = "grey";
      node.style.cursor = "not-allowed";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonDisabled);

/***/ }),

/***/ "./src/helpers/buttonEnabled.js":
/*!**************************************!*\
  !*** ./src/helpers/buttonEnabled.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function buttonEnabled(buttonClass) {
  var button = document.querySelector(".".concat(buttonClass));
  button.style.disabled = false;
  var children = button.childNodes;
  var _iterator = _createForOfIteratorHelper(children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      node.style.color = "#e6ba43";
      node.style.cursor = "pointer";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonEnabled);

/***/ }),

/***/ "./src/helpers/checkMatrixSolvability .js":
/*!************************************************!*\
  !*** ./src/helpers/checkMatrixSolvability .js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertMatrixInOneDimensionalArray */ "./src/helpers/convertMatrixInOneDimensionalArray.js");

function checkMatrixSolvability(matrix) {
  //   let matrix1 = [
  //     [5, 6, 7, 12],
  //     [9, 11, 10, 8],
  //     [1, 2, 3, 4],
  //     [15, 14, 13, 0],
  //   ];
  // let matrix2 = [
  //   [5, 1, 4],
  //   [3, 0, 6],
  //   [7, 2, 8],
  // ];
  var oddMatrixSize = matrix.length % 2 ? true : false;
  var matrixInArray = (0,_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
  var sum = 0;
  for (var i = 0; i < matrixInArray.length; i++) {
    if (matrixInArray[i] !== 0) {
      sum += matrixInArray[i] - 1;
      var j = i - 1;
      while (j >= 0) {
        if (matrixInArray[j] !== 0 && matrixInArray[j] < matrixInArray[i]) {
          sum--;
        }
        j--;
      }
    } else {
      if (!oddMatrixSize) {
        sum += Math.floor(i / Math.sqrt(matrixInArray.length)) + 1;
      }
    }
  }
  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkMatrixSolvability);

/***/ }),

/***/ "./src/helpers/checkWin.js":
/*!*********************************!*\
  !*** ./src/helpers/checkWin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listeners_clickNewGameYouWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listeners/clickNewGameYouWin */ "./src/listeners/clickNewGameYouWin.js");
/* harmony import */ var _addResultInLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addResultInLocalStorage */ "./src/helpers/addResultInLocalStorage.js");
/* harmony import */ var _convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertMatrixInOneDimensionalArray */ "./src/helpers/convertMatrixInOneDimensionalArray.js");
/* harmony import */ var _getIdSetInterval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _getNumberOfMoves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _removeAllEventListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _assets_win_sound_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/win-sound.mp3 */ "./src/assets/win-sound.mp3");
/* harmony import */ var _buttonDisabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttonDisabled */ "./src/helpers/buttonDisabled.js");








function checkWin(matrix, transition, myAudio) {
  var matrixInArray = (0,_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_2__["default"])(matrix);
  var winningMatrix = [];
  for (var i = 1; i < matrixInArray.length; i++) {
    winningMatrix.push(i);
  }
  winningMatrix.push(0);
  var result = true;
  for (var _i = 0; _i < matrixInArray.length; _i++) {
    if (matrixInArray[_i] !== winningMatrix[_i]) result = false;
  }
  if (result) {
    (0,_buttonDisabled__WEBPACK_IMPORTED_MODULE_7__["default"])("restart");
    (0,_buttonDisabled__WEBPACK_IMPORTED_MODULE_7__["default"])("save");
    document.querySelector(".sound").style.cursor = "not-allowed";
    (0,_buttonDisabled__WEBPACK_IMPORTED_MODULE_7__["default"])("load");
    (0,_buttonDisabled__WEBPACK_IMPORTED_MODULE_7__["default"])("result");
    (0,_buttonDisabled__WEBPACK_IMPORTED_MODULE_7__["default"])("burger-menu");
    for (var _i2 = 3; _i2 <= 8; _i2++) {
      (0,_buttonDisabled__WEBPACK_IMPORTED_MODULE_7__["default"])("size-menu--size".concat(_i2, "x").concat(_i2));
    }
    var winSound = new Audio(_assets_win_sound_mp3__WEBPACK_IMPORTED_MODULE_6__);
    winSound.volume = 0.2;
    var listener = new AbortController();
    if (JSON.parse(localStorage.getItem("sound"))) {
      window.addEventListener("mouseover", function () {
        winSound.play();
        listener.abort();
      }, listener);
    }
    clearInterval((0,_getIdSetInterval__WEBPACK_IMPORTED_MODULE_3__["default"])());
    (0,_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_listeners_clickNewGameYouWin__WEBPACK_IMPORTED_MODULE_0__.clickNewGameYouWin)(matrix, transition, myAudio);
    document.querySelector(".you-win__button-left").style.opacity = 1;
    document.querySelector(".you-win__button-right").style.opacity = 1;
    document.querySelector(".you-win__button-middle").style.opacity = 1;
    var youWin = document.querySelector(".you-win");
    var timer = document.querySelector(".timer");
    var youWinText = document.querySelector(".you-win__text");
    youWin.style.display = "flex";
    var arrTime = timer.innerHTML.split(":");
    youWinText.innerHTML = "Hooray! You solved the puzzle in ".concat(arrTime[0], ":").concat(arrTime[1], " and ").concat((0,_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_4__["default"])(), " moves!");
    (0,_addResultInLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWin);

/***/ }),

/***/ "./src/helpers/convertArrayInMatrix.js":
/*!*********************************************!*\
  !*** ./src/helpers/convertArrayInMatrix.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertArrayInMatrix(array) {
  var matrixSize = Math.sqrt(array.length);
  var matrix = [];
  for (var i = 0; i < matrixSize; i++) {
    matrix[i] = [];
    for (var j = 0; j < matrixSize; j++) {
      matrix[i][j] = array[i * matrixSize + j];
    }
  }
  return matrix;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertArrayInMatrix);

/***/ }),

/***/ "./src/helpers/convertMatrixInOneDimensionalArray.js":
/*!***********************************************************!*\
  !*** ./src/helpers/convertMatrixInOneDimensionalArray.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertMatrixInOneDimensionalArray(matrix) {
  var matrixInArray = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      matrixInArray.push(matrix[i][j]);
    }
  }
  return matrixInArray;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertMatrixInOneDimensionalArray);

/***/ }),

/***/ "./src/helpers/createHtmlTag.js":
/*!**************************************!*\
  !*** ./src/helpers/createHtmlTag.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHtmlTag(tag, className, parentClassName) {
  var inner = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var id = arguments.length > 4 ? arguments[4] : undefined;
  var newTag = document.createElement(tag);
  newTag.className = className;
  var parent = document.querySelector(".".concat(parentClassName));
  newTag.innerHTML = inner;
  if (id) {
    newTag.id = id;
  }
  if (id === 0) {
    newTag.id = id;
  }
  parent.append(newTag);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtmlTag);

/***/ }),

/***/ "./src/helpers/getAnimationAvailable.js":
/*!**********************************************!*\
  !*** ./src/helpers/getAnimationAvailable.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getAnimationAvailable() {
  var animationAvailable = document.querySelector(".animationAvailable");
  return Boolean(animationAvailable.dataset.animationAvailable);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAnimationAvailable);

/***/ }),

/***/ "./src/helpers/getCoordsAnimationEnd.js":
/*!**********************************************!*\
  !*** ./src/helpers/getCoordsAnimationEnd.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCoordsAvailableCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCoordsAvailableCells */ "./src/helpers/getCoordsAvailableCells.js");

function getCoordsAnimationEnd(matrix, direction) {
  var coordsAvailableCells = (0,_getCoordsAvailableCells__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
  var coordsEnd;
  switch (direction) {
    case "top":
      coordsEnd = coordsAvailableCells[0];
      coordsEnd[0]--;
      break;
    case "right":
      coordsEnd = coordsAvailableCells[1];
      coordsEnd[1]++;
      break;
    case "bottom":
      coordsEnd = coordsAvailableCells[2];
      coordsEnd[0]++;
      break;
    case "left":
      coordsEnd = coordsAvailableCells[3];
      coordsEnd[1]--;
      break;
  }
  return coordsEnd;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoordsAnimationEnd);

/***/ }),

/***/ "./src/helpers/getCoordsAnimationStart.js":
/*!************************************************!*\
  !*** ./src/helpers/getCoordsAnimationStart.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCoordsAvailableCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCoordsAvailableCells */ "./src/helpers/getCoordsAvailableCells.js");

function getCoordsAnimationStart(matrix, direction) {
  var coordsAvailableCells = (0,_getCoordsAvailableCells__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
  switch (direction) {
    case "top":
      return coordsAvailableCells[0];
    case "right":
      return coordsAvailableCells[1];
    case "bottom":
      return coordsAvailableCells[2];
    case "left":
      return coordsAvailableCells[3];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoordsAnimationStart);

/***/ }),

/***/ "./src/helpers/getCoordsAvailableCells.js":
/*!************************************************!*\
  !*** ./src/helpers/getCoordsAvailableCells.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getCoordsAvailableCells(matrix) {
  var iZero, jZero;
  var coordsAvailableCells = ["", "", "", ""]; // top,right,bottom,left
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        iZero = i;
        jZero = j;
        break;
      }
    }
    if (iZero || jZero) {
      break;
    }
  }
  //move top
  if (iZero !== matrix.length - 1) {
    coordsAvailableCells[0] = [iZero + 1, jZero];
  }
  //move right
  if (jZero !== 0) {
    coordsAvailableCells[1] = [iZero, jZero - 1];
  }
  //move bottom
  if (iZero !== 0) {
    coordsAvailableCells[2] = [iZero - 1, jZero];
  }
  //move left
  if (jZero !== matrix.length - 1) {
    coordsAvailableCells[3] = [iZero, jZero + 1];
  }

  // console.log(coordsAvailableCells);
  return coordsAvailableCells;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoordsAvailableCells);

/***/ }),

/***/ "./src/helpers/getCurrentTimeFromTimer.js":
/*!************************************************!*\
  !*** ./src/helpers/getCurrentTimeFromTimer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getCurrentTimeFromTimer() {
  var timer = document.querySelector(".timer");
  var arrTime = timer.innerHTML.split(":");
  var minutes = Number(arrTime[0]);
  var seconds = Number(arrTime[1]);
  return minutes * 60 + seconds;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentTimeFromTimer);

/***/ }),

/***/ "./src/helpers/getGridGap.js":
/*!***********************************!*\
  !*** ./src/helpers/getGridGap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getGridGap(className) {
  var element = document.querySelector(".".concat(className));
  var style = getComputedStyle(element);
  return style["grid-gap"].split(" ")[0].slice(0, -2);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGridGap);

/***/ }),

/***/ "./src/helpers/getIdAvailableCells.js":
/*!********************************************!*\
  !*** ./src/helpers/getIdAvailableCells.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCoordsAvailableCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCoordsAvailableCells */ "./src/helpers/getCoordsAvailableCells.js");

function getIdAvailableCells(matrix) {
  var coords = (0,_getCoordsAvailableCells__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
  var idAvailableCells = ["", "", "", ""];
  coords.forEach(function (val, i) {
    if (val) {
      idAvailableCells[i] = matrix[val[0]][val[1]];
    }
  });
  // console.log(idAvailableCells);
  return idAvailableCells;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getIdAvailableCells);

/***/ }),

/***/ "./src/helpers/getIdSetInterval.js":
/*!*****************************************!*\
  !*** ./src/helpers/getIdSetInterval.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getIdSetInterval() {
  var timer = document.querySelector(".timer");
  return Number(timer.dataset.idSetInterval);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getIdSetInterval);

/***/ }),

/***/ "./src/helpers/getNumberOfMoves.js":
/*!*****************************************!*\
  !*** ./src/helpers/getNumberOfMoves.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getNumberOfMoves() {
  return JSON.parse(localStorage.getItem("numberOfMoves"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfMoves);

/***/ }),

/***/ "./src/helpers/getNumberOfMovesSave.js":
/*!*********************************************!*\
  !*** ./src/helpers/getNumberOfMovesSave.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getNumberOfMovesSave() {
  return JSON.parse(localStorage.getItem("numberOfMovesSave"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfMovesSave);

/***/ }),

/***/ "./src/helpers/getSolvableMatrix.js":
/*!******************************************!*\
  !*** ./src/helpers/getSolvableMatrix.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_createMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createMatrix */ "./src/components/createMatrix.js");
/* harmony import */ var _checkMatrixSolvability___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkMatrixSolvability  */ "./src/helpers/checkMatrixSolvability .js");
/* harmony import */ var _convertArrayInMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertArrayInMatrix */ "./src/helpers/convertArrayInMatrix.js");
/* harmony import */ var _convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convertMatrixInOneDimensionalArray */ "./src/helpers/convertMatrixInOneDimensionalArray.js");
/* harmony import */ var _randomSortArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./randomSortArray */ "./src/helpers/randomSortArray.js");





function getSolvableMatrix(size) {
  var matrix = (0,_components_createMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(size);
  matrix = (0,_convertArrayInMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_randomSortArray__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_3__["default"])(matrix)));
  while (!(0,_checkMatrixSolvability___WEBPACK_IMPORTED_MODULE_1__["default"])(matrix)) {
    matrix = (0,_convertArrayInMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_randomSortArray__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_3__["default"])(matrix)));
  }
  return matrix;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSolvableMatrix);

/***/ }),

/***/ "./src/helpers/getWidth.js":
/*!*********************************!*\
  !*** ./src/helpers/getWidth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getWidth(className) {
  return document.querySelector(".".concat(className)).offsetWidth;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWidth);

/***/ }),

/***/ "./src/helpers/randomSortArray.js":
/*!****************************************!*\
  !*** ./src/helpers/randomSortArray.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function randomSortArray(array) {
  var i = array.length,
    j;
  while (i != 0) {
    j = Math.floor(Math.random() * i);
    i--;
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomSortArray);

/***/ }),

/***/ "./src/helpers/removeAllEventListeners.js":
/*!************************************************!*\
  !*** ./src/helpers/removeAllEventListeners.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listeners_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listeners/clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _listeners_clickBurgerMenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listeners/clickBurgerMenuButton */ "./src/listeners/clickBurgerMenuButton.js");
/* harmony import */ var _listeners_clickCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _listeners_clickCloseResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listeners/clickCloseResult */ "./src/listeners/clickCloseResult.js");
/* harmony import */ var _listeners_clickCurtainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listeners/clickCurtainMenu */ "./src/listeners/clickCurtainMenu.js");
/* harmony import */ var _listeners_clickNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listeners/clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _listeners_clickSizeMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../listeners/clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _listeners_resizeWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../listeners/resizeWindow */ "./src/listeners/resizeWindow.js");








function removeAllEventListeners() {
  (0,_listeners_resizeWindow__WEBPACK_IMPORTED_MODULE_7__.removeResizeWindow)();
  (0,_listeners_clickCell__WEBPACK_IMPORTED_MODULE_2__.removeClickCell)();
  (0,_listeners_clickNavigation__WEBPACK_IMPORTED_MODULE_5__.removeClickNavigation)();
  (0,_listeners_clickSizeMenu__WEBPACK_IMPORTED_MODULE_6__.removeClickSizeMenu)();
  (0,_listeners_clickCurtainMenu__WEBPACK_IMPORTED_MODULE_4__.removeclickCurtainMenu)();
  (0,_listeners_clickCloseResult__WEBPACK_IMPORTED_MODULE_3__.removeClickCloseResult)();
  (0,_listeners_clickBurgerMenuButton__WEBPACK_IMPORTED_MODULE_1__.removeClickBurgerMenuButton)();
  (0,_listeners_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_0__.removeClickBurgerMenu)();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllEventListeners);

/***/ }),

/***/ "./src/helpers/renderMoves.js":
/*!************************************!*\
  !*** ./src/helpers/renderMoves.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderMoves(numberOfMoves) {
  var moves = document.querySelector(".moves");
  moves.innerHTML = "".concat(numberOfMoves);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMoves);

/***/ }),

/***/ "./src/helpers/renderResults.js":
/*!**************************************!*\
  !*** ./src/helpers/renderResults.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _listeners_clickCloseResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listeners/clickCloseResult */ "./src/listeners/clickCloseResult.js");
/* harmony import */ var _createHtmlTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCurrentTimeFromTimer */ "./src/helpers/getCurrentTimeFromTimer.js");
/* harmony import */ var _getIdSetInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switchAnimationAvailable */ "./src/helpers/switchAnimationAvailable.js");
/* harmony import */ var _removeAllEventListeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function renderResults(matrix, size, transition, myAudio) {
  var resultList = document.querySelector(".field__result-list");
  resultList.style.display = "flex";
  clearInterval((0,_getIdSetInterval__WEBPACK_IMPORTED_MODULE_4__["default"])());
  (0,_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_listeners_clickCloseResult__WEBPACK_IMPORTED_MODULE_1__.clickCloseResult)(matrix, size, transition, myAudio);
  document.querySelector(".resultl__close-left").style.opacity = 1;
  document.querySelector(".resultl__close-right").style.opacity = 1;
  document.querySelector(".resultl__close-middle").style.opacity = 1;
  if (!localStorage.getItem("result-list")) return;
  // console.log(1);
  var arrResultList = JSON.parse(localStorage.getItem("result-list"));
  var arrResultListSort = _toConsumableArray(arrResultList).sort(function (a, b) {
    return a.numberOfMoves != b.numberOfMoves ? a.numberOfMoves - b.numberOfMoves : a.time != b.time ? a.time - b.time : a.size - b.size;
  });
  var length = arrResultListSort.length < 10 ? arrResultListSort.length : 10;
  for (var i = 0; i < length; i++) {
    (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__["default"])("li", "list-date__item list-date__item--".concat(i), "list-date");
    var date = document.querySelector(".list-date__item--".concat(i));
    var date1 = new Date(arrResultListSort[i].date);
    var hours = "".concat(date1.getHours() < 10 ? "0" + date1.getHours() : date1.getHours());
    var minutes = "".concat(date1.getMinutes() < 10 ? "0" + date1.getMinutes() : date1.getMinutes());
    var dateInner = "".concat(date1.getDate() < 10 ? "0" + date1.getDate() : date1.getDate());
    var month = "".concat(date1.getMonth() < 10 ? "0" + date1.getMonth() : date1.getMonth());
    date.innerHTML = "".concat(dateInner, ".").concat(month, " - ").concat(hours, ":").concat(minutes);
    (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__["default"])("li", "list-size__item list-size__item--".concat(i), "list-size");
    var _size = document.querySelector(".list-size__item--".concat(i));
    _size.innerHTML = arrResultListSort[i].size;
    (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__["default"])("li", "list-moves__item list-moves__item--".concat(i), "list-moves");
    var moves = document.querySelector(".list-moves__item--".concat(i));
    moves.innerHTML = arrResultListSort[i].numberOfMoves;
    (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__["default"])("li", "list-time__item list-time__item--".concat(i), "list-time");
    var time = document.querySelector(".list-time__item--".concat(i));
    time.innerHTML = arrResultListSort[i].time;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderResults);

/***/ }),

/***/ "./src/helpers/switchAnimationAvailable.js":
/*!*************************************************!*\
  !*** ./src/helpers/switchAnimationAvailable.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function switchAnimationAvailable() {
  var animationAvailable = document.querySelector(".animationAvailable");
  animationAvailable.dataset.animationAvailable === "" ? animationAvailable.dataset.animationAvailable = "true" : animationAvailable.dataset.animationAvailable = "";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchAnimationAvailable);

/***/ }),

/***/ "./src/helpers/zeroingNumberOfMoves.js":
/*!*********************************************!*\
  !*** ./src/helpers/zeroingNumberOfMoves.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function zeroingNumberOfMoves() {
  localStorage.setItem("numberOfMoves", JSON.stringify(0));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zeroingNumberOfMoves);

/***/ }),

/***/ "./src/listeners/clickBurgerMenu.js":
/*!******************************************!*\
  !*** ./src/listeners/clickBurgerMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickBurgerMenu": () => (/* binding */ clickBurgerMenu),
/* harmony export */   "removeClickBurgerMenu": () => (/* binding */ removeClickBurgerMenu)
/* harmony export */ });
/* harmony import */ var _handleClickBurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClickBurgerMenu */ "./src/listeners/handleClickBurgerMenu.js");

var clickBurgerMenuListener = new AbortController();
function clickBurgerMenu(matrix, transition, size, myAudio) {
  if (clickBurgerMenuListener.signal.aborted) {
    clickBurgerMenuListener = new AbortController();
  }
  var navigation = document.querySelector(".burger-menu");
  navigation.addEventListener("click", (0,_handleClickBurgerMenu__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, transition, size, myAudio), clickBurgerMenuListener);
}
function removeClickBurgerMenu() {
  clickBurgerMenuListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickBurgerMenuButton.js":
/*!************************************************!*\
  !*** ./src/listeners/clickBurgerMenuButton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickBurgerMenuButton": () => (/* binding */ clickBurgerMenuButton),
/* harmony export */   "removeClickBurgerMenuButton": () => (/* binding */ removeClickBurgerMenuButton)
/* harmony export */ });
/* harmony import */ var _handleClickBurgerMenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClickBurgerMenuButton */ "./src/listeners/handleClickBurgerMenuButton.js");

var clickBurgerMenuButtonListener = new AbortController();
function clickBurgerMenuButton(matrix, transition, size, myAudio) {
  if (clickBurgerMenuButtonListener.signal.aborted) {
    clickBurgerMenuButtonListener = new AbortController();
  }
  var menu = document.querySelector(".field__menu");
  menu.addEventListener("click", (0,_handleClickBurgerMenuButton__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, transition, size, myAudio), clickBurgerMenuButtonListener);
}
function removeClickBurgerMenuButton() {
  clickBurgerMenuButtonListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickCell.js":
/*!************************************!*\
  !*** ./src/listeners/clickCell.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickCell": () => (/* binding */ clickCell),
/* harmony export */   "removeClickCell": () => (/* binding */ removeClickCell)
/* harmony export */ });
/* harmony import */ var _helpers_getIdAvailableCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getIdAvailableCells */ "./src/helpers/getIdAvailableCells.js");
/* harmony import */ var _components_addClassAvailableCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/addClassAvailableCells */ "./src/components/addClassAvailableCells.js");
/* harmony import */ var _handleClickCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleClickCell */ "./src/listeners/handleClickCell.js");



var clickCellListener = new AbortController();
function clickCell(matrix, transition, myAudio) {
  if (clickCellListener.signal.aborted) {
    clickCellListener = new AbortController();
  }
  var cells = document.querySelector(".field__list");
  var idAvailableCells = (0,_helpers_getIdAvailableCells__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
  (0,_components_addClassAvailableCells__WEBPACK_IMPORTED_MODULE_1__["default"])(idAvailableCells);
  var transitionNumber = transition.slice(0, -1);
  cells.addEventListener("click", (0,_handleClickCell__WEBPACK_IMPORTED_MODULE_2__["default"])(matrix, transition, idAvailableCells, myAudio, transitionNumber), clickCellListener);
}
function removeClickCell() {
  clickCellListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickCloseResult.js":
/*!*******************************************!*\
  !*** ./src/listeners/clickCloseResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickCloseResult": () => (/* binding */ clickCloseResult),
/* harmony export */   "removeClickCloseResult": () => (/* binding */ removeClickCloseResult)
/* harmony export */ });
/* harmony import */ var _handleClickCloseResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClickCloseResult */ "./src/listeners/handleClickCloseResult.js");

var clickCloseResultListener = new AbortController();
function clickCloseResult(matrix, size, transition, myAudio) {
  if (clickCloseResultListener.signal.aborted) {
    clickCloseResultListener = new AbortController();
  }
  var closeResult = document.querySelector(".resultl__close");
  closeResult.addEventListener("click", (0,_handleClickCloseResult__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, size, transition, myAudio), clickCloseResultListener);
}
function removeClickCloseResult() {
  clickCloseResultListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickCurtainMenu.js":
/*!*******************************************!*\
  !*** ./src/listeners/clickCurtainMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickCurtainMenu": () => (/* binding */ clickCurtainMenu),
/* harmony export */   "removeclickCurtainMenu": () => (/* binding */ removeclickCurtainMenu)
/* harmony export */ });
/* harmony import */ var _handleClickCurtainMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClickCurtainMenu */ "./src/listeners/handleClickCurtainMenu.js");

var clickCurtainMenuListener = new AbortController();
function clickCurtainMenu(matrix, size, transition, myAudio) {
  if (clickCurtainMenuListener.signal.aborted) {
    clickCurtainMenuListener = new AbortController();
  }
  var curtain = document.querySelector(".curtain");
  curtain.addEventListener("click", (0,_handleClickCurtainMenu__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, size, transition, myAudio), clickCurtainMenuListener);
}
function removeclickCurtainMenu() {
  clickCurtainMenuListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickNavigation.js":
/*!******************************************!*\
  !*** ./src/listeners/clickNavigation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickNavigation": () => (/* binding */ clickNavigation),
/* harmony export */   "removeClickNavigation": () => (/* binding */ removeClickNavigation)
/* harmony export */ });
/* harmony import */ var _handleClickNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClickNavigation */ "./src/listeners/handleClickNavigation.js");

var clickNavigationListener = new AbortController();
function clickNavigation(matrix, transition, size, myAudio) {
  if (clickNavigationListener.signal.aborted) {
    clickNavigationListener = new AbortController();
  }
  var navigation = document.querySelector(".navigation");
  navigation.addEventListener("click", (0,_handleClickNavigation__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, transition, size, myAudio), clickNavigationListener);
}
function removeClickNavigation() {
  clickNavigationListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickNewGameYouWin.js":
/*!*********************************************!*\
  !*** ./src/listeners/clickNewGameYouWin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickNewGameYouWin": () => (/* binding */ clickNewGameYouWin),
/* harmony export */   "removeClickNewGameYouWin": () => (/* binding */ removeClickNewGameYouWin)
/* harmony export */ });
/* harmony import */ var _handleClickNewGameYouWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClickNewGameYouWin */ "./src/listeners/handleClickNewGameYouWin.js");

var clickNewGameYouWinListener = new AbortController();
function clickNewGameYouWin(matrix, transition, myAudio) {
  if (clickNewGameYouWinListener.signal.aborted) {
    clickNewGameYouWinListener = new AbortController();
  }
  var newGameYouWin = document.querySelector(".you-win__button");
  newGameYouWin.addEventListener("click", (0,_handleClickNewGameYouWin__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, transition, myAudio), clickNewGameYouWinListener);
}
function removeClickNewGameYouWin() {
  clickNewGameYouWinListener.abort();
}


/***/ }),

/***/ "./src/listeners/clickSizeMenu.js":
/*!****************************************!*\
  !*** ./src/listeners/clickSizeMenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickSizeMenu": () => (/* binding */ clickSizeMenu),
/* harmony export */   "removeClickSizeMenu": () => (/* binding */ removeClickSizeMenu)
/* harmony export */ });
/* harmony import */ var _handleSizeMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSizeMenu */ "./src/listeners/handleSizeMenu.js");

var clickSizeMenuListener = new AbortController();
function clickSizeMenu(size, matrix, transition, myAudio) {
  if (clickSizeMenuListener.signal.aborted) {
    clickSizeMenuListener = new AbortController();
  }
  var sizeMenu = document.querySelector(".size-menu");
  sizeMenu.addEventListener("click", (0,_handleSizeMenu__WEBPACK_IMPORTED_MODULE_0__["default"])(size, matrix, transition, myAudio), clickSizeMenuListener);
}
function removeClickSizeMenu() {
  clickSizeMenuListener.abort();
}


/***/ }),

/***/ "./src/listeners/grag.js":
/*!*******************************!*\
  !*** ./src/listeners/grag.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_addClassAvailableCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/addClassAvailableCells */ "./src/components/addClassAvailableCells.js");
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _helpers_convertArrayInMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/convertArrayInMatrix */ "./src/helpers/convertArrayInMatrix.js");
/* harmony import */ var _helpers_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/convertMatrixInOneDimensionalArray */ "./src/helpers/convertMatrixInOneDimensionalArray.js");
/* harmony import */ var _helpers_getIdAvailableCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getIdAvailableCells */ "./src/helpers/getIdAvailableCells.js");
/* harmony import */ var _helpers_addOneMove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/addOneMove */ "./src/helpers/addOneMove.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _helpers_checkWin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/checkWin */ "./src/helpers/checkWin.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _clickBurgerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/getAnimationAvailable */ "./src/helpers/getAnimationAvailable.js");















function grag(matrix, transition, myAudio) {
  var cellsAvailable = document.querySelectorAll(".cell--available");
  var cellActive = document.querySelector(".cell--active");
  var field = document.querySelector(".field__list");
  cellActive.ondragover = allowDrop;
  cellActive.ondrop = drop;
  for (var i = 0; i < cellsAvailable.length; i++) {
    cellsAvailable[i].ondragstart = drag;
  }
  function allowDrop(e) {
    e.preventDefault();
  }
  function drag(e) {
    if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_14__["default"])()) return;
    e.dataTransfer.setData("id", e.target.id);
  }
  function drop(e) {
    if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_14__["default"])()) return;
    var itemId = e.dataTransfer.getData("id");
    var matrixInArray = (0,_helpers_convertMatrixInOneDimensionalArray__WEBPACK_IMPORTED_MODULE_3__["default"])(matrix);
    var indexItemId = matrixInArray.indexOf(Number(itemId));
    var indexZero = matrixInArray.indexOf(0);
    var memoryMatrix = matrixInArray[indexItemId];
    matrixInArray[indexItemId] = matrixInArray[indexZero];
    matrixInArray[indexZero] = memoryMatrix;
    matrix = (0,_helpers_convertArrayInMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(matrixInArray);
    (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix);
    var IdAvailableCells = (0,_helpers_getIdAvailableCells__WEBPACK_IMPORTED_MODULE_4__["default"])(matrix);
    (0,_components_addClassAvailableCells__WEBPACK_IMPORTED_MODULE_0__["default"])(IdAvailableCells);
    (0,_clickCell__WEBPACK_IMPORTED_MODULE_8__.clickCell)(matrix, transition, myAudio);
    var size = matrix.length;
    (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_12__.clickNavigation)(matrix, transition, size, myAudio);
    (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_11__.clickBurgerMenu)(matrix, transition, size, myAudio);
    (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_13__.clickSizeMenu)(size, matrix, transition, myAudio);
    if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();
    (0,_helpers_addOneMove__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
    (0,_helpers_checkWin__WEBPACK_IMPORTED_MODULE_9__["default"])(matrix, transition, myAudio);
    grag(matrix, transition, myAudio);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grag);

/***/ }),

/***/ "./src/listeners/handleClickBurgerMenu.js":
/*!************************************************!*\
  !*** ./src/listeners/handleClickBurgerMenu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/buttonDisabled */ "./src/helpers/buttonDisabled.js");
/* harmony import */ var _clickBurgerMenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickBurgerMenuButton */ "./src/listeners/clickBurgerMenuButton.js");


function handleClickBurgerMenu(matrix, transition, myAudio, transitionNumber) {
  var menu = document.querySelector(".field__menu");
  return function curriedFunc(e) {
    if (getComputedStyle(document.querySelector(".field__menu")).display === "none") {
      menu.style.display = "flex";
      (0,_clickBurgerMenuButton__WEBPACK_IMPORTED_MODULE_1__.clickBurgerMenuButton)(matrix, transition, myAudio, transitionNumber);
    } else {
      menu.style.display = "none";
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickBurgerMenu);

/***/ }),

/***/ "./src/listeners/handleClickBurgerMenuButton.js":
/*!******************************************************!*\
  !*** ./src/listeners/handleClickBurgerMenuButton.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/setWidthField */ "./src/components/setWidthField.js");
/* harmony import */ var _helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/buttonEnabled */ "./src/helpers/buttonEnabled.js");
/* harmony import */ var _helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getAnimationAvailable */ "./src/helpers/getAnimationAvailable.js");
/* harmony import */ var _helpers_getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getCurrentTimeFromTimer */ "./src/helpers/getCurrentTimeFromTimer.js");
/* harmony import */ var _helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _helpers_getNumberOfMovesSave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/getNumberOfMovesSave */ "./src/helpers/getNumberOfMovesSave.js");
/* harmony import */ var _helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/getSolvableMatrix */ "./src/helpers/getSolvableMatrix.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_renderResults__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/renderResults */ "./src/helpers/renderResults.js");
/* harmony import */ var _helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/zeroingNumberOfMoves */ "./src/helpers/zeroingNumberOfMoves.js");
/* harmony import */ var _clickBurgerMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _resizeWindow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resizeWindow */ "./src/listeners/resizeWindow.js");




















function handleClickBurgerMenuButton(matrix, transition, size, myAudio) {
  return function curriedFunc(e) {
    if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__["default"])()) return;
    if (e.target.parentElement.classList.contains("restart")) {
      (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__["default"])();
      matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_9__["default"])(size);
      clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__["default"])());
      (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
      (0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_13__["default"])();
      (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
      (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
      (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_15__.clickCell)(matrix, transition, myAudio);
      (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_16__.clickNavigation)(matrix, transition, size, myAudio);
      (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_14__.clickBurgerMenu)(matrix, transition, size, myAudio);
      (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_17__.clickSizeMenu)(size, matrix, transition, myAudio);
      (0,_grag__WEBPACK_IMPORTED_MODULE_18__["default"])(matrix, transition, myAudio);
      (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_19__.resizeWindow)(size);
      document.querySelector(".field__menu").style.display = "none";
    }
    if (e.target.parentElement.classList.contains("save")) {
      (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_14__.removeClickBurgerMenu)();
      localStorage.setItem("matrix", JSON.stringify(matrix));
      localStorage.setItem("numberOfMovesSave", (0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
      localStorage.setItem("size", JSON.stringify(size));
      localStorage.setItem("time", JSON.stringify((0,_helpers_getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_5__["default"])()));
      localStorage.setItem("atLeastOneSave", JSON.parse(true));
      document.querySelector(".field__menu").style.display = "none";
      (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_14__.clickBurgerMenu)(matrix, transition, size, myAudio);
    }
    if (e.target.classList.contains("sound")) {
      var sound = JSON.parse(localStorage.getItem("sound"));
      sound = !sound;
      localStorage.removeItem("sound");
      localStorage.setItem("sound", sound);
      var soundButton = document.querySelector(".menu__button--sound");
      if (!sound) {
        soundButton.classList.add("sound--off");
      } else {
        soundButton.classList.remove("sound--off");
      }
    }
    if (e.target.parentElement.classList.contains("load")) {
      if (!localStorage.getItem("size") || !localStorage.getItem("matrix") || !localStorage.getItem("time") || !localStorage.getItem("numberOfMovesSave")) {
        return;
      }
      (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__["default"])();
      size = JSON.parse(localStorage.getItem("size"));
      matrix = JSON.parse(localStorage.getItem("matrix"));
      clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__["default"])());
      (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.getItem("time"));
      localStorage.setItem("numberOfMoves", (0,_helpers_getNumberOfMovesSave__WEBPACK_IMPORTED_MODULE_8__["default"])());
      (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
      (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
      (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_15__.clickCell)(matrix, transition, myAudio);
      (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_16__.clickNavigation)(matrix, transition, size, myAudio);
      (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_17__.clickSizeMenu)(size, matrix, transition, myAudio);
      (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_14__.clickBurgerMenu)(matrix, transition, size, myAudio);
      (0,_grag__WEBPACK_IMPORTED_MODULE_18__["default"])(matrix, transition, myAudio);
      (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_19__.resizeWindow)(size);
      document.querySelector(".field__menu").style.display = "none";
    }
    if (e.target.parentElement.classList.contains("result")) {
      (0,_helpers_renderResults__WEBPACK_IMPORTED_MODULE_12__["default"])(matrix, size, transition, myAudio);
      document.querySelector(".field__menu").style.display = "none";
    }
    for (var i = 3; i <= 8; i++) {
      if (e.target.parentElement.classList.contains("size".concat(i, "x").concat(i))) {
        (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__["default"])();
        size = i;
        (0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_13__["default"])();
        (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
        clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__["default"])());
        (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
        matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_9__["default"])(size);
        (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
        (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
        (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_14__.clickBurgerMenu)(matrix, transition, size, myAudio);
        (0,_clickCell__WEBPACK_IMPORTED_MODULE_15__.clickCell)(matrix, transition, myAudio);
        (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_16__.clickNavigation)(matrix, transition, size, myAudio);
        (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_17__.clickSizeMenu)(size, matrix, transition, myAudio);
        (0,_grag__WEBPACK_IMPORTED_MODULE_18__["default"])(matrix, transition, myAudio);
        (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_19__.resizeWindow)(size);
        document.querySelector(".field__menu").style.display = "none";
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickBurgerMenuButton);

/***/ }),

/***/ "./src/listeners/handleClickCell.js":
/*!******************************************!*\
  !*** ./src/listeners/handleClickCell.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_cellAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cellAnimation */ "./src/components/cellAnimation.js");
/* harmony import */ var _components_changeMatrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/changeMatrix */ "./src/components/changeMatrix.js");
/* harmony import */ var _helpers_getCoordsAnimationStart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getCoordsAnimationStart */ "./src/helpers/getCoordsAnimationStart.js");
/* harmony import */ var _helpers_getCoordsAnimationEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getCoordsAnimationEnd */ "./src/helpers/getCoordsAnimationEnd.js");
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _components_removeClassAvailableCells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/removeClassAvailableCells */ "./src/components/removeClassAvailableCells.js");
/* harmony import */ var _helpers_getIdAvailableCells__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/getIdAvailableCells */ "./src/helpers/getIdAvailableCells.js");
/* harmony import */ var _components_addClassAvailableCells__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/addClassAvailableCells */ "./src/components/addClassAvailableCells.js");
/* harmony import */ var _helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/getAnimationAvailable */ "./src/helpers/getAnimationAvailable.js");
/* harmony import */ var _helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/switchAnimationAvailable */ "./src/helpers/switchAnimationAvailable.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_addOneMove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/addOneMove */ "./src/helpers/addOneMove.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _helpers_checkWin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/checkWin */ "./src/helpers/checkWin.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _clickBurgerMenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");




















function handleClickCell(matrix, transition, idAvailableCells, myAudio, transitionNumber) {
  return function curriedFunc(e) {
    var id = Number(e.target.id);
    if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_8__["default"])()) return;
    for (var i = 0; i <= 3; i++) {
      if (idAvailableCells.indexOf(id) === i) {
        (function () {
          var direction = void 0;
          if (i === 0) {
            direction = "top";
          }
          if (i === 1) {
            direction = "right";
          }
          if (i === 2) {
            direction = "bottom";
          }
          if (i === 3) {
            direction = "left";
          }
          (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_15__["default"])();
          (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_9__["default"])();
          (0,_components_cellAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, direction, transition);
          (0,_components_removeClassAvailableCells__WEBPACK_IMPORTED_MODULE_5__["default"])();
          if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();
          setTimeout(function () {
            (0,_components_changeMatrix__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix, (0,_helpers_getCoordsAnimationStart__WEBPACK_IMPORTED_MODULE_2__["default"])(matrix, direction), (0,_helpers_getCoordsAnimationEnd__WEBPACK_IMPORTED_MODULE_3__["default"])(matrix, direction));
            idAvailableCells = (0,_helpers_getIdAvailableCells__WEBPACK_IMPORTED_MODULE_6__["default"])(matrix);
            (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_4__["default"])(matrix);
            var size = matrix.length;
            (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_17__.clickSizeMenu)(size, matrix, transition, myAudio);
            (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_18__.clickBurgerMenu)(matrix, transition, size, myAudio);
            (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_19__.clickNavigation)(matrix, transition, size, myAudio);
            (0,_clickCell__WEBPACK_IMPORTED_MODULE_16__.clickCell)(matrix, transition, myAudio);
            (0,_components_addClassAvailableCells__WEBPACK_IMPORTED_MODULE_7__["default"])(idAvailableCells);
            (0,_helpers_addOneMove__WEBPACK_IMPORTED_MODULE_11__["default"])();
            (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_12__["default"])());
            (0,_grag__WEBPACK_IMPORTED_MODULE_13__["default"])(matrix, transition, myAudio);
            (0,_helpers_checkWin__WEBPACK_IMPORTED_MODULE_14__["default"])(matrix, transition, myAudio);
            (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_9__["default"])();
          }, transitionNumber * 1000);
        })();
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickCell);

/***/ }),

/***/ "./src/listeners/handleClickCloseResult.js":
/*!*************************************************!*\
  !*** ./src/listeners/handleClickCloseResult.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/buttonEnabled */ "./src/helpers/buttonEnabled.js");
/* harmony import */ var _helpers_getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getCurrentTimeFromTimer */ "./src/helpers/getCurrentTimeFromTimer.js");
/* harmony import */ var _helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/switchAnimationAvailable */ "./src/helpers/switchAnimationAvailable.js");
/* harmony import */ var _clickBurgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickCloseResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clickCloseResult */ "./src/listeners/clickCloseResult.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _resizeWindow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resizeWindow */ "./src/listeners/resizeWindow.js");











function handleClickCloseResult(matrix, size, transition, myAudio) {
  return function curriedFunc(e) {
    var resultList = document.querySelector(".field__result-list");
    document.querySelector(".resultl__close-left").style.opacity = 0;
    document.querySelector(".resultl__close-right").style.opacity = 0;
    document.querySelector(".resultl__close-middle").style.opacity = 0;
    (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_clickCloseResult__WEBPACK_IMPORTED_MODULE_6__.removeClickCloseResult)();
    setTimeout(function () {
      (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_helpers_getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_2__["default"])());
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_5__.clickCell)(matrix, transition, myAudio);
      (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_7__.clickNavigation)(matrix, transition, size, myAudio);
      (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_8__.clickSizeMenu)(size, matrix, transition, myAudio);
      (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_4__.clickBurgerMenu)(matrix, transition, size, myAudio);
      (0,_grag__WEBPACK_IMPORTED_MODULE_9__["default"])(matrix, transition, myAudio);
      (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_10__.resizeWindow)(size);
      (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_3__["default"])();
      document.querySelector(".resultl__table-date").innerHTML = "";
      document.querySelector(".resultl__table-size").innerHTML = "";
      document.querySelector(".resultl__table-moves").innerHTML = "";
      document.querySelector(".resultl__table-time").innerHTML = "";
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_1__["default"])("restart");
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_1__["default"])("save");
      document.querySelector(".sound").style.cursor = "pointer";
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_1__["default"])("load");
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_1__["default"])("result");
      for (var i = 3; i <= 8; i++) {
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_1__["default"])("size-menu--size".concat(i, "x").concat(i));
      }
      resultList.style.display = "none";
    }, 1000);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickCloseResult);

/***/ }),

/***/ "./src/listeners/handleClickCurtainMenu.js":
/*!*************************************************!*\
  !*** ./src/listeners/handleClickCurtainMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/setWidthField */ "./src/components/setWidthField.js");
/* harmony import */ var _helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/buttonEnabled */ "./src/helpers/buttonEnabled.js");
/* harmony import */ var _helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getAnimationAvailable */ "./src/helpers/getAnimationAvailable.js");
/* harmony import */ var _helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _helpers_getNumberOfMovesSave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/getNumberOfMovesSave */ "./src/helpers/getNumberOfMovesSave.js");
/* harmony import */ var _helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/getSolvableMatrix */ "./src/helpers/getSolvableMatrix.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/switchAnimationAvailable */ "./src/helpers/switchAnimationAvailable.js");
/* harmony import */ var _helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/zeroingNumberOfMoves */ "./src/helpers/zeroingNumberOfMoves.js");
/* harmony import */ var _clickBurgerMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _resizeWindow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resizeWindow */ "./src/listeners/resizeWindow.js");



















function handleClickCurtainMenu(matrix, size, transition, myAudio) {
  return function curriedFunc(e) {
    var curtain = document.querySelector(".curtain");
    var buttonNewGame = document.querySelector(".curtain__new-game");
    var buttonContinue = document.querySelector(".curtain__continue");
    if (e.target.parentElement.classList.contains("curtain__new-game")) {
      if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__["default"])()) return;
      (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_11__["default"])();
      buttonNewGame.style.opacity = 0;
      buttonContinue.style.opacity = 0;
      setTimeout(function () {
        (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_9__["default"])();
        matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_8__["default"])(size);
        clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_5__["default"])());
        (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
        (0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_12__["default"])();
        (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_6__["default"])());
        (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
        (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
        (0,_clickCell__WEBPACK_IMPORTED_MODULE_14__.clickCell)(matrix, transition, myAudio);
        (0,_grag__WEBPACK_IMPORTED_MODULE_17__["default"])(matrix, transition, myAudio);
        (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_15__.clickNavigation)(matrix, transition, size, myAudio);
        (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_16__.clickSizeMenu)(size, matrix, transition, myAudio);
        (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_13__.clickBurgerMenu)(matrix, transition, size, myAudio);
        (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_18__.resizeWindow)(size);
        (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_11__["default"])();
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("restart");
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("save");
        document.querySelector(".sound").style.cursor = "pointer";
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("load");
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("result");
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("burger-menu");
        for (var i = 3; i <= 8; i++) {
          (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("size-menu--size".concat(i, "x").concat(i));
        }
        curtain.style.display = "none";
      }, 1000);
    }
    if (e.target.parentElement.classList.contains("curtain__continue")) {
      if (localStorage.getItem("atLeastOneSave") === null) {
        return;
      }
      if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__["default"])()) return;
      (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_11__["default"])();
      buttonNewGame.style.opacity = 0;
      buttonContinue.style.opacity = 0;
      setTimeout(function () {
        (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_9__["default"])();
        size = JSON.parse(localStorage.getItem("size"));
        matrix = JSON.parse(localStorage.getItem("matrix"));
        clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_5__["default"])());
        (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.getItem("time"));
        localStorage.setItem("numberOfMoves", (0,_helpers_getNumberOfMovesSave__WEBPACK_IMPORTED_MODULE_7__["default"])());
        (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_6__["default"])());
        (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
        (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
        (0,_clickCell__WEBPACK_IMPORTED_MODULE_14__.clickCell)(matrix, transition, myAudio);
        (0,_grag__WEBPACK_IMPORTED_MODULE_17__["default"])(matrix, transition, myAudio);
        (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_15__.clickNavigation)(matrix, transition, size, myAudio);
        (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_16__.clickSizeMenu)(size, matrix, transition, myAudio);
        (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_13__.clickBurgerMenu)(matrix, transition, size, myAudio);
        // resizeWindow(size);
        (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_11__["default"])();
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("restart");
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("save");
        document.querySelector(".sound").style.cursor = "pointer";
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("load");
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("result");
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("burger-menu");
        for (var i = 3; i <= 8; i++) {
          (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("size-menu--size".concat(i, "x").concat(i));
        }
        curtain.style.display = "none";
      }, 1000);
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickCurtainMenu);

/***/ }),

/***/ "./src/listeners/handleClickNavigation.js":
/*!************************************************!*\
  !*** ./src/listeners/handleClickNavigation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/setWidthField */ "./src/components/setWidthField.js");
/* harmony import */ var _helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/buttonDisabled */ "./src/helpers/buttonDisabled.js");
/* harmony import */ var _helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getAnimationAvailable */ "./src/helpers/getAnimationAvailable.js");
/* harmony import */ var _helpers_getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getCurrentTimeFromTimer */ "./src/helpers/getCurrentTimeFromTimer.js");
/* harmony import */ var _helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _helpers_getNumberOfMovesSave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/getNumberOfMovesSave */ "./src/helpers/getNumberOfMovesSave.js");
/* harmony import */ var _helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/getSolvableMatrix */ "./src/helpers/getSolvableMatrix.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_renderResults__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/renderResults */ "./src/helpers/renderResults.js");
/* harmony import */ var _helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/zeroingNumberOfMoves */ "./src/helpers/zeroingNumberOfMoves.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _resizeWindow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resizeWindow */ "./src/listeners/resizeWindow.js");



















function handleClickNavigation(matrix, transition, size, myAudio) {
  return function curriedFunc(e) {
    if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_4__["default"])()) return;
    if (e.target.parentElement.classList.contains("restart")) {
      (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__["default"])();
      matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_9__["default"])(size);
      clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__["default"])());
      (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
      (0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_13__["default"])();
      (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
      (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
      (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_14__.clickCell)(matrix, transition, myAudio);
      (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_15__.clickNavigation)(matrix, transition, size, myAudio);
      (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_16__.clickSizeMenu)(size, matrix, transition, myAudio);
      (0,_grag__WEBPACK_IMPORTED_MODULE_17__["default"])(matrix, transition, myAudio);
      (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_18__.resizeWindow)(size);
    }
    if (e.target.parentElement.classList.contains("save")) {
      localStorage.setItem("matrix", JSON.stringify(matrix));
      localStorage.setItem("numberOfMovesSave", (0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
      localStorage.setItem("size", JSON.stringify(size));
      localStorage.setItem("time", JSON.stringify((0,_helpers_getCurrentTimeFromTimer__WEBPACK_IMPORTED_MODULE_5__["default"])()));
      localStorage.setItem("atLeastOneSave", JSON.parse(true));
    }
    if (e.target.classList.contains("sound")) {
      var sound = JSON.parse(localStorage.getItem("sound"));
      sound = !sound;
      localStorage.removeItem("sound");
      localStorage.setItem("sound", sound);
      var soundButton = document.querySelector(".sound");
      if (!sound) {
        soundButton.classList.add("sound--off");
      } else {
        soundButton.classList.remove("sound--off");
      }
    }
    if (e.target.parentElement.classList.contains("load")) {
      if (!localStorage.getItem("size") || !localStorage.getItem("matrix") || !localStorage.getItem("time") || !localStorage.getItem("numberOfMovesSave")) {
        return;
      }
      (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_10__["default"])();
      size = JSON.parse(localStorage.getItem("size"));
      matrix = JSON.parse(localStorage.getItem("matrix"));
      clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_6__["default"])());
      (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.getItem("time"));
      localStorage.setItem("numberOfMoves", (0,_helpers_getNumberOfMovesSave__WEBPACK_IMPORTED_MODULE_8__["default"])());
      (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_7__["default"])());
      (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
      (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_14__.clickCell)(matrix, transition, myAudio);
      (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_15__.clickNavigation)(matrix, transition, size, myAudio);
      (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_16__.clickSizeMenu)(size, matrix, transition, myAudio);
      (0,_grag__WEBPACK_IMPORTED_MODULE_17__["default"])(matrix, transition, myAudio);
      (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_18__.resizeWindow)(size);
    }
    if (e.target.parentElement.classList.contains("result")) {
      (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_3__["default"])("restart");
      (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_3__["default"])("save");
      document.querySelector(".sound").style.cursor = "not-allowed";
      (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_3__["default"])("load");
      (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_3__["default"])("result");
      for (var i = 3; i <= 8; i++) {
        (0,_helpers_buttonDisabled__WEBPACK_IMPORTED_MODULE_3__["default"])("size-menu--size".concat(i, "x").concat(i));
      }
      (0,_helpers_renderResults__WEBPACK_IMPORTED_MODULE_12__["default"])(matrix, size, transition, myAudio);
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickNavigation);

/***/ }),

/***/ "./src/listeners/handleClickNewGameYouWin.js":
/*!***************************************************!*\
  !*** ./src/listeners/handleClickNewGameYouWin.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/setWidthField */ "./src/components/setWidthField.js");
/* harmony import */ var _helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/buttonEnabled */ "./src/helpers/buttonEnabled.js");
/* harmony import */ var _helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/getSolvableMatrix */ "./src/helpers/getSolvableMatrix.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/switchAnimationAvailable */ "./src/helpers/switchAnimationAvailable.js");
/* harmony import */ var _helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/zeroingNumberOfMoves */ "./src/helpers/zeroingNumberOfMoves.js");
/* harmony import */ var _clickBurgerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickNewGameYouWin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clickNewGameYouWin */ "./src/listeners/clickNewGameYouWin.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _resizeWindow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resizeWindow */ "./src/listeners/resizeWindow.js");


















function handleClickNewGameYouWin(matrix, transition, myAudio) {
  return function curriedFunc(e) {
    var curtain = document.querySelector(".curtain");
    var youWin = document.querySelector(".field__you-win");
    document.querySelector(".you-win__button-left").style.opacity = 0;
    document.querySelector(".you-win__button-middle").style.opacity = 0;
    document.querySelector(".you-win__button-right").style.opacity = 0;
    (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_clickNewGameYouWin__WEBPACK_IMPORTED_MODULE_14__.removeClickNewGameYouWin)();
    setTimeout(function () {
      var size = 4;
      matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_6__["default"])(size);
      clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_4__["default"])());
      (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
      (0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_10__["default"])();
      (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_5__["default"])());
      (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
      (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_12__.clickCell)(matrix, transition, myAudio);
      (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_13__.clickNavigation)(matrix, transition, size, myAudio);
      (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_15__.clickSizeMenu)(size, matrix, transition, myAudio);
      (0,_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_11__.clickBurgerMenu)(matrix, transition, size, myAudio);
      (0,_grag__WEBPACK_IMPORTED_MODULE_16__["default"])(matrix, transition, myAudio);
      (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_17__.resizeWindow)(size);
      (0,_helpers_switchAnimationAvailable__WEBPACK_IMPORTED_MODULE_9__["default"])();
      curtain.style.display = "none";
      youWin.style.display = "none";
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("restart");
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("save");
      document.querySelector(".sound").style.cursor = "pointer";
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("load");
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("result");
      (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("burger-menu");
      for (var i = 3; i <= 8; i++) {
        (0,_helpers_buttonEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])("size-menu--size".concat(i, "x").concat(i));
      }
    }, 1000);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickNewGameYouWin);

/***/ }),

/***/ "./src/listeners/handleHoverButtonsSoundPlay.js":
/*!******************************************************!*\
  !*** ./src/listeners/handleHoverButtonsSoundPlay.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_invscrol_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/invscrol.wav */ "./src/assets/invscrol.wav");

function handleHoverButtonsSoundPlay(classMemory) {
  return function curriedFunc(e) {
    if (classMemory !== e.target.parentElement.classList.value) {
      classMemory = e.target.parentElement.classList.value;
      if (e.target.parentElement.classList.contains("btn")) {
        if (!JSON.parse(localStorage.getItem("sound"))) return;
        var hoverSound = new Audio(_assets_invscrol_wav__WEBPACK_IMPORTED_MODULE_0__);
        hoverSound.playbackRate = 3;
        hoverSound.volume = 0.5;
        hoverSound.play();
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleHoverButtonsSoundPlay);

/***/ }),

/***/ "./src/listeners/handleSizeMenu.js":
/*!*****************************************!*\
  !*** ./src/listeners/handleSizeMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderMatrix */ "./src/components/renderMatrix.js");
/* harmony import */ var _components_renderTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderTimer */ "./src/components/renderTimer.js");
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/setWidthField */ "./src/components/setWidthField.js");
/* harmony import */ var _helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getAnimationAvailable */ "./src/helpers/getAnimationAvailable.js");
/* harmony import */ var _helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getIdSetInterval */ "./src/helpers/getIdSetInterval.js");
/* harmony import */ var _helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getNumberOfMoves */ "./src/helpers/getNumberOfMoves.js");
/* harmony import */ var _helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/getSolvableMatrix */ "./src/helpers/getSolvableMatrix.js");
/* harmony import */ var _helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/removeAllEventListeners */ "./src/helpers/removeAllEventListeners.js");
/* harmony import */ var _helpers_renderMoves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/renderMoves */ "./src/helpers/renderMoves.js");
/* harmony import */ var _helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/zeroingNumberOfMoves */ "./src/helpers/zeroingNumberOfMoves.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clickCell */ "./src/listeners/clickCell.js");
/* harmony import */ var _clickNavigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clickNavigation */ "./src/listeners/clickNavigation.js");
/* harmony import */ var _clickSizeMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clickSizeMenu */ "./src/listeners/clickSizeMenu.js");
/* harmony import */ var _grag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grag */ "./src/listeners/grag.js");
/* harmony import */ var _resizeWindow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resizeWindow */ "./src/listeners/resizeWindow.js");















function handleSizeMenu(size, matrix, transition, myAudio) {
  return function curriedFunc(e) {
    if (!(0,_helpers_getAnimationAvailable__WEBPACK_IMPORTED_MODULE_3__["default"])()) return;
    for (var i = 3; i <= 8; i++) {
      if (e.target.parentElement.classList.contains("size".concat(i, "x").concat(i))) {
        (0,_helpers_removeAllEventListeners__WEBPACK_IMPORTED_MODULE_7__["default"])();
        size = i;
        (0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_9__["default"])();
        (0,_helpers_renderMoves__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_helpers_getNumberOfMoves__WEBPACK_IMPORTED_MODULE_5__["default"])());
        clearInterval((0,_helpers_getIdSetInterval__WEBPACK_IMPORTED_MODULE_4__["default"])());
        (0,_components_renderTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
        matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_6__["default"])(size);
        (0,_components_renderMatrix__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix);
        (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
        (0,_clickCell__WEBPACK_IMPORTED_MODULE_10__.clickCell)(matrix, transition, myAudio);
        (0,_clickNavigation__WEBPACK_IMPORTED_MODULE_11__.clickNavigation)(matrix, transition, size, myAudio);
        (0,_clickSizeMenu__WEBPACK_IMPORTED_MODULE_12__.clickSizeMenu)(size, matrix, transition, myAudio);
        (0,_grag__WEBPACK_IMPORTED_MODULE_13__["default"])(matrix, transition, myAudio);
        (0,_resizeWindow__WEBPACK_IMPORTED_MODULE_14__.resizeWindow)(size);
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleSizeMenu);

/***/ }),

/***/ "./src/listeners/hoverButtonsSoundPlay.js":
/*!************************************************!*\
  !*** ./src/listeners/hoverButtonsSoundPlay.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoverButtonsSoundPlay": () => (/* binding */ hoverButtonsSoundPlay),
/* harmony export */   "removeHoverButtonsSoundPlay": () => (/* binding */ removeHoverButtonsSoundPlay)
/* harmony export */ });
/* harmony import */ var _handleHoverButtonsSoundPlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleHoverButtonsSoundPlay */ "./src/listeners/handleHoverButtonsSoundPlay.js");

var hoverButtonsSoundPlayListener = new AbortController();
function hoverButtonsSoundPlay() {
  if (hoverButtonsSoundPlayListener.signal.aborted) {
    hoverButtonsSoundPlayListener = new AbortController();
  }
  var container = document.querySelector(".container");
  var classMemory = "";
  container.addEventListener("mouseover", (0,_handleHoverButtonsSoundPlay__WEBPACK_IMPORTED_MODULE_0__["default"])(classMemory), hoverButtonsSoundPlayListener);
}
function removeHoverButtonsSoundPlay() {
  hoverButtonsSoundPlayListener.abort();
}


/***/ }),

/***/ "./src/listeners/resizeWindow.js":
/*!***************************************!*\
  !*** ./src/listeners/resizeWindow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeResizeWindow": () => (/* binding */ removeResizeWindow),
/* harmony export */   "resizeWindow": () => (/* binding */ resizeWindow)
/* harmony export */ });
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/setWidthField */ "./src/components/setWidthField.js");

var resizeWindowListener = new AbortController();
function resizeWindow(size) {
  if (resizeWindowListener.signal.aborted) {
    resizeWindowListener = new AbortController();
  }
  // window.addEventListener(
  //   "resize",
  //   handleResizeWindow(size),
  //   resizeWindowListener
  // );
}

function handleResizeWindow(size) {
  return function curriedFunc() {
    (0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_0__["default"])(size);
  };
}
function removeResizeWindow() {
  resizeWindowListener.abort();
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Diablo1.ttf */ "./src/assets/Diablo1.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/blood-scroll.png */ "./src/assets/blood-scroll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/speaker.png */ "./src/assets/speaker.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mute.png */ "./src/assets/mute.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/button-sprite.png */ "./src/assets/button-sprite.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Diablo\";\n  src: local(\"Diablo\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nul[class],\nol[class] {\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul,\nol,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nul[class] {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.main {\n  flex: 1 0 auto;\n}\n\n.footer {\n  flex: 0 0 auto;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px 15px;\n  font-family: \"Diablo\", serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.field {\n  margin: 5px auto;\n  max-width: fit-content;\n  max-width: -moz-fit-content;\n  user-select: none;\n  position: relative;\n}\n.field__list {\n  display: grid;\n  grid-template-columns: repeat(4, 150px);\n  grid-template-rows: repeat(4, 150px);\n  grid-gap: 10px;\n  height: min(80vw, 65vh);\n  width: min(80vw, 65vh);\n}\n.field__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  font-size: 40px;\n}\n\n.cell {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: center;\n  color: #e6ba43;\n  font-size: inherit;\n}\n.cell--active {\n  opacity: 0;\n  border: none;\n}\n.cell--available {\n  cursor: pointer;\n  filter: drop-shadow(0 0 0.75rem #e6ba43);\n}\n.cell--available:hover {\n  color: #ad8b2b;\n  filter: drop-shadow(0 0 0.75rem #ad8b2b);\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n}\n.navigation__button {\n  cursor: pointer;\n}\n\n.sound {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100%;\n  width: 40px;\n  height: 40px;\n  border: none;\n}\n.sound--off {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: 100%;\n}\n\n.animationAvailable {\n  visibility: hidden;\n}\n\n.size-menu {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  max-width: fit-content;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  padding: 0px 174px;\n}\n\n.curtain {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  justify-content: center;\n  gap: 100px;\n  padding: 16% 6% 5% 7%;\n}\n.curtain__continue {\n  z-index: 2;\n}\n.curtain__new-game {\n  position: relative;\n  z-index: 2;\n}\n\n.background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.btn {\n  position: relative;\n  padding: 0;\n  border: none;\n  height: 50px;\n  transition: all 1s;\n}\n.btn-left {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 0 -109px;\n  height: 50px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 51px;\n  cursor: pointer;\n  transition: all 1s;\n  z-index: 3;\n}\n.btn-left:hover ~ .btn-middle {\n  color: #ad8b2b;\n}\n.btn-middle {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") repeat-x 0px -2px;\n  color: #e6ba43;\n  padding: 16px 51px;\n  position: relative;\n  z-index: 2;\n  cursor: pointer;\n  transition: all 1s;\n}\n.btn-middle:hover {\n  color: #ad8b2b;\n}\n.btn-middle:active {\n  filter: drop-shadow(0 0 0.75rem rgb(87, 11, 11));\n}\n.btn-right {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 0 -163px;\n  height: 50px;\n  position: absolute;\n  z-index: 3;\n  right: 0;\n  top: 0;\n  width: 51px;\n  cursor: pointer;\n  transition: all 1s;\n}\n.btn-right:hover ~ .btn-middle {\n  color: #ad8b2b;\n}\n\n.resultl {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: #e6ba43;\n  flex-direction: column;\n  padding: 16% 6% 5% 7%;\n}\n.resultl__title {\n  display: flex;\n  justify-content: space-between;\n}\n.resultl__table {\n  display: flex;\n  justify-content: space-between;\n}\n.resultl__table-date {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 45%;\n  gap: 1px;\n}\n.resultl__table-size {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 15%;\n  gap: 1px;\n}\n.resultl__table-moves {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 20%;\n  gap: 1px;\n}\n.resultl__table-time {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 20%;\n  gap: 1px;\n}\n.resultl__close {\n  margin-top: auto;\n}\n.resultl__close-middle {\n  position: relative;\n  z-index: 2;\n}\n\n.title {\n  padding-bottom: 20px;\n}\n.title__date {\n  flex: 1 0 45%;\n}\n.title__size {\n  flex: 1 0 15%;\n}\n.title__moves {\n  flex: 1 0 20%;\n}\n.title__time {\n  flex: 1 0 20%;\n}\n\n.title__date,\n.title__size,\n.title__moves,\n.title__time,\n.list-date__item,\n.list-size__item,\n.list-moves__item,\n.list-time__item {\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n\n.you-win {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16% 6% 5% 7%;\n}\n.you-win__text {\n  color: #e6ba43;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n  text-align: center;\n}\n.you-win__image {\n  position: relative;\n  z-index: 2;\n  width: min(20vw, 20vh);\n  max-width: 150px;\n}\n\n.moves-wrapper {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: fit-content;\n}\n.moves-wrapper__moves {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  color: #e6ba43;\n  font-size: 24px;\n}\n\n.updated-data {\n  position: absolute;\n  display: flex;\n  bottom: 0;\n  justify-content: space-between;\n  width: 100%;\n  left: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.time-wrapper {\n  position: relative;\n  bottom: 0;\n  right: 0;\n  width: fit-content;\n}\n.time-wrapper__timer {\n  position: absolute;\n  top: 40%;\n  right: 38%;\n  color: #e6ba43;\n  font-size: 24px;\n  width: 65px;\n}\n\n.burger-menu {\n  display: none;\n}\n\n.menu {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  justify-content: space-between;\n  display: none;\n  padding: 16% 6% 5% 7%;\n}\n\n.menu__button--sound {\n  position: absolute;\n}\n\n.menu__size-menu {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  max-width: fit-content;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  padding: 0px 10%;\n}\n\n@media (max-width: 802px) {\n  .size-menu {\n    gap: 5px;\n  }\n  .field__list {\n    height: min(80vw, 63vh);\n    width: min(80vw, 63vh);\n    grid-gap: 3px;\n  }\n  .navigation {\n    gap: 5px;\n  }\n  .resultl__title {\n    padding-bottom: 5px;\n    font-size: 10px;\n  }\n  .resultl__table {\n    font-size: 12px;\n  }\n}\n@media (max-width: 767px) {\n  .field__list {\n    grid-gap: 3px;\n  }\n}\n@media (max-width: 700px) {\n  .burger-menu {\n    display: block;\n  }\n  .restart,\n.save,\n.sound,\n.load,\n.result {\n    display: none;\n  }\n  .size-menu {\n    display: none;\n  }\n  .container {\n    justify-content: start;\n    gap: 5px;\n  }\n  .menu__button.restart, .menu__button.save, .menu__button.sound, .menu__button.load, .menu__button.result {\n    display: block;\n  }\n  .menu__size-menu {\n    display: flex;\n    padding: 0px;\n    gap: 0px;\n  }\n  .btn-middle {\n    padding: 16px 6vw;\n  }\n  .menu__button--sound {\n    z-index: 10;\n    top: 5%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: min(6vw, 6vh);\n    background-repeat: no-repeat;\n  }\n  .time-wrapper {\n    bottom: -15px;\n    right: -50px;\n  }\n  .moves-wrapper {\n    bottom: -15px;\n    left: -50px;\n  }\n  .field__list {\n    height: min(80vw, 63vh);\n    width: min(80vw, 63vh);\n  }\n}\n@media (max-width: 620px) {\n  .menu__size-menu {\n    gap: 5px;\n  }\n}\n@media (max-width: 470px) {\n  .resultl__title {\n    font-size: 7px;\n  }\n  .btn-right {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 12px -135px;\n    height: 40px;\n    background-size: 82%;\n  }\n  .btn-left {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat -3px -91px;\n    height: 40px;\n    background-size: 82%;\n  }\n  .btn {\n    height: 40px;\n  }\n  .btn-middle {\n    height: 40px;\n    padding: 12px 6vw;\n  }\n}\n@media (max-width: 400px) {\n  .btn-middle {\n    padding: 16px 24px;\n  }\n  .curtain {\n    justify-content: space-around;\n    gap: 0;\n    padding: 16% 6% 5% 7%;\n  }\n  .btn-right {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 29px -75px;\n    height: 24px;\n    background-size: 46%;\n  }\n  .btn-left {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat -1px -50px;\n    height: 24px;\n    background-size: 46%;\n  }\n  .btn {\n    height: 24px;\n  }\n  .btn-middle {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") repeat-x 0px -6px;\n    height: 24px;\n    padding: 7px 6vw;\n    font-size: 10px;\n  }\n}\n@media (max-width: 330px) {\n  .you-win__text {\n    font-size: 10px;\n  }\n}\n@media (max-height: 800px) {\n  .resultl__title {\n    padding-bottom: 5px;\n    font-size: 7px;\n  }\n  .resultl__table {\n    font-size: 12px;\n  }\n  .menu__size-menu {\n    padding: 0;\n  }\n}\n@media (max-height: 607px) {\n  .btn-right {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 12px -135px;\n    height: 40px;\n    background-size: 82%;\n  }\n  .btn-left {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat -3px -91px;\n    height: 40px;\n    background-size: 82%;\n  }\n  .btn {\n    height: 40px;\n  }\n  .btn-middle {\n    height: 40px;\n    padding: 12px 5vw;\n  }\n}\n@media (max-height: 600px) {\n  .burger-menu {\n    display: block;\n  }\n  .navigation__button.restart {\n    display: none;\n  }\n  .navigation__button.save {\n    display: none;\n  }\n  .navigation__button.sound {\n    display: none;\n  }\n  .navigation__button.load {\n    display: none;\n  }\n  .navigation__button.result {\n    display: none;\n  }\n  .size-menu {\n    display: none;\n  }\n  .container {\n    justify-content: start;\n    gap: 5px;\n  }\n}\n@media (max-height: 560px) {\n  .you-win__text {\n    font-size: 10px;\n  }\n}\n@media (max-height: 574px) {\n  .resultl__title {\n    padding-bottom: 5px;\n    font-size: 7px;\n  }\n  .resultl__table {\n    font-size: 12px;\n  }\n}\n@media (max-height: 531px) {\n  .btn-middle {\n    padding: 12px 4vw;\n  }\n}\n@media (max-height: 477px) {\n  .btn-middle {\n    padding: 16px 24px;\n  }\n  .curtain {\n    justify-content: space-around;\n    gap: 0;\n    padding: 16% 6% 5% 7%;\n  }\n  .btn-right {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 29px -75px;\n    height: 24px;\n    background-size: 46%;\n  }\n  .btn-left {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat -1px -50px;\n    height: 24px;\n    background-size: 46%;\n  }\n  .btn {\n    height: 24px;\n  }\n  .btn-middle {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") repeat-x 0px -6px;\n    height: 24px;\n    padding: 7px 3vw;\n    font-size: 10px;\n  }\n  .size-menu1 {\n    padding: 0;\n  }\n}\n@media (max-height: 370px) {\n  .btn-middle {\n    padding: 7px 2vw;\n  }\n}\n@media (max-height: 382px) {\n  .resultl__title {\n    font-size: 7px;\n  }\n  .resultl__table {\n    font-size: 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_fonts.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/_vars.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EAEA,6DAAA;ACAF;ACHA;EACE,sBAAA;ADKF;;ACFA;;;EAGE,mBAAA;ADKF;;ACFA;;EAEE,UAAA;ADKF;;ACFA;;;;;;;;;;;;;;;;EAgBE,SAAA;ADKF;;ACFA;EACE,gBAAA;ADKF;;ACFA;EACE,eAAA;EACA,cAAA;ADKF;;ACFA;;;;EAIE,aAAA;ADKF;;ACFA;EACE,qBAAA;ADKF;;AExDA;;EAEE,YAAA;AF2DF;;AEzDA;EACE,mDAAA;EACA,sBAAA;EACA,2BAAA;EACA,gBAAA;AF4DF;;AE1DA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AF6DF;;AE1DA;EACE,cAAA;AF6DF;;AE3DA;EACE,cAAA;AF8DF;;AE3DA;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,4BAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,gBAAA;AF8DF;;AAvFA;EACE,gBAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EACA,kBAAA;AA0FF;AAzFE;EACE,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;AA2FJ;AAzFE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AA2FJ;;AAxFA;EACE,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,cGhCW;EHiCX,kBAAA;AA2FF;AA1FE;EACE,UAAA;EACA,YAAA;AA4FJ;AA1FE;EACE,eAAA;EACA,wCAAA;AA4FJ;AA3FI;EACE,cGzCa;EH0Cb,wCAAA;AA6FN;;AAzFA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,mBAAA;AA4FF;AA3FE;EACE,eAAA;AA6FJ;;AA1FA;EACE,mDAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AA6FF;AA5FE;EACE,mDAAA;EACA,qBAAA;AA8FJ;;AA3FA;EACE,kBAAA;AA8FF;;AA5FA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EAEA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;AA8FF;;AA5FA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,uBAAA;EACA,UAAA;EACA,qBAAA;AA+FF;AA9FE;EACE,UAAA;AAgGJ;AA9FE;EACE,kBAAA;EACA,UAAA;AAgGJ;;AA7FA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,uBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,qBAAA;AAgGF;;AA9FA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;AAiGF;AAhGE;EACE,sEAAA;EACA,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;AAkGJ;AAhGM;EACE,cGlIW;AHoOnB;AA9FE;EACE,qEAAA;EACA,cGzIS;EH0IT,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,kBAAA;AAgGJ;AA/FI;EACE,cG/Ia;AHgPnB;AA/FI;EACE,gDAAA;AAiGN;AA9FE;EACE,sEAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,MAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AAgGJ;AA9FM;EACE,cGjKW;AHiQnB;;AA3FA;EACE,aAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cG9KW;EH+KX,sBAAA;EACA,qBAAA;AA8FF;AA7FE;EACE,aAAA;EACA,8BAAA;AA+FJ;AA7FE;EACE,aAAA;EACA,8BAAA;AA+FJ;AA9FI;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,QAAA;AAgGN;AA9FI;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,QAAA;AAgGN;AA9FI;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,QAAA;AAgGN;AA9FI;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,QAAA;AAgGN;AA7FE;EACE,gBAAA;AA+FJ;AA7FI;EACE,kBAAA;EACA,UAAA;AA+FN;;AA3FA;EACE,oBAAA;AA8FF;AA5FE;EACE,aAAA;AA8FJ;AA5FE;EACE,aAAA;AA8FJ;AA5FE;EACE,aAAA;AA8FJ;AA5FE;EACE,aAAA;AA8FJ;;AA3FA;;;;;;;;EAQE,kBAAA;EACA,kBAAA;EACA,UAAA;AA8FF;;AA3FA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;EACA,qBAAA;AA8FF;AA7FE;EACE,cGxQS;EHyQT,kBAAA;EACA,UAAA;EACA,eAAA;EACA,kBAAA;AA+FJ;AA7FE;EACE,kBAAA;EACA,UAAA;EACA,sBAAA;EACA,gBAAA;AA+FJ;;AA3FA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,kBAAA;AA8FF;AA7FE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,cG/RS;EHgST,eAAA;AA+FJ;;AA5FA;EACE,kBAAA;EACA,aAAA;EACA,SAAA;EACA,8BAAA;EACA,WAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;AA+FF;;AA7FA;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;AAgGF;AA/FE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,cGtTS;EHuTT,eAAA;EACA,WAAA;AAiGJ;;AA9FA;EACE,aAAA;AAiGF;;AA/FA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,8BAAA;EACA,aAAA;EACA,qBAAA;AAkGF;;AA/FE;EACE,kBAAA;AAkGJ;;AA/FA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;AAkGF;;AAhGA;EACE;IACE,QAAA;EAmGF;EAjGA;IACE,uBAAA;IACA,sBAAA;IACA,aAAA;EAmGF;EAhGA;IACE,QAAA;EAkGF;EAhGA;IACE,mBAAA;IACA,eAAA;EAkGF;EAhGA;IACE,eAAA;EAkGF;AACF;AA/FA;EAEI;IACE,aAAA;EAgGJ;AACF;AA7FA;EACE;IACE,cAAA;EA+FF;EA5FA;;;;;IAKE,aAAA;EA8FF;EA5FA;IACE,aAAA;EA8FF;EA5FA;IACE,sBAAA;IACA,QAAA;EA8FF;EA3FE;IAKE,cAAA;EAyFJ;EArFE;IACE,aAAA;IACA,YAAA;IACA,QAAA;EAuFJ;EApFA;IACE,iBAAA;EAsFF;EApFA;IACE,WAAA;IACA,OAAA;IACA,SAAA;IACA,2BAAA;IACA,oBAAA;IACA,4BAAA;EAsFF;EApFA;IACE,aAAA;IACA,YAAA;EAsFF;EApFA;IACE,aAAA;IACA,WAAA;EAsFF;EApFA;IACE,uBAAA;IACA,sBAAA;EAsFF;AACF;AApFA;EAEI;IACE,QAAA;EAqFJ;AACF;AAlFA;EACE;IACE,cAAA;EAoFF;EAlFA;IACE,yEAAA;IACA,YAAA;IAEA,oBAAA;EAmFF;EAjFA;IACE,wEAAA;IACA,YAAA;IAEA,oBAAA;EAkFF;EAhFA;IACE,YAAA;EAkFF;EAhFA;IACE,YAAA;IACA,iBAAA;EAkFF;AACF;AAhFA;EACE;IACE,kBAAA;EAkFF;EAhFA;IACE,6BAAA;IACA,MAAA;IACA,qBAAA;EAkFF;EA/EA;IACE,wEAAA;IACA,YAAA;IACA,oBAAA;EAiFF;EA/EA;IACE,wEAAA;IACA,YAAA;IACA,oBAAA;EAiFF;EA/EA;IACE,YAAA;EAiFF;EA/EA;IACE,qEAAA;IACA,YAAA;IACA,gBAAA;IACA,eAAA;EAiFF;AACF;AA/EA;EACE;IACE,eAAA;EAiFF;AACF;AA9EA;EACE;IACE,mBAAA;IACA,cAAA;EAgFF;EA9EA;IACE,eAAA;EAgFF;EA7EA;IACE,UAAA;EA+EF;AACF;AA5EA;EACE;IACE,yEAAA;IACA,YAAA;IAEA,oBAAA;EA6EF;EA3EA;IACE,wEAAA;IACA,YAAA;IAEA,oBAAA;EA4EF;EA1EA;IACE,YAAA;EA4EF;EA1EA;IACE,YAAA;IACA,iBAAA;EA4EF;AACF;AA1EA;EACE;IACE,cAAA;EA4EF;EAzEE;IACE,aAAA;EA2EJ;EAzEE;IACE,aAAA;EA2EJ;EAzEE;IACE,aAAA;EA2EJ;EAzEE;IACE,aAAA;EA2EJ;EAzEE;IACE,aAAA;EA2EJ;EAxEA;IACE,aAAA;EA0EF;EAxEA;IACE,sBAAA;IACA,QAAA;EA0EF;AACF;AAxEA;EACE;IACE,eAAA;EA0EF;AACF;AAxEA;EACE;IACE,mBAAA;IACA,cAAA;EA0EF;EAxEA;IACE,eAAA;EA0EF;AACF;AAvEA;EACE;IACE,iBAAA;EAyEF;AACF;AAvEA;EACE;IACE,kBAAA;EAyEF;EAvEA;IACE,6BAAA;IACA,MAAA;IACA,qBAAA;EAyEF;EAtEA;IACE,wEAAA;IACA,YAAA;IACA,oBAAA;EAwEF;EAtEA;IACE,wEAAA;IACA,YAAA;IACA,oBAAA;EAwEF;EAtEA;IACE,YAAA;EAwEF;EAtEA;IACE,qEAAA;IACA,YAAA;IACA,gBAAA;IACA,eAAA;EAwEF;EAtEA;IACE,UAAA;EAwEF;AACF;AAtEA;EACE;IACE,gBAAA;EAwEF;AACF;AArEA;EACE;IACE,cAAA;EAuEF;EArEA;IACE,eAAA;EAuEF;AACF","sourcesContent":["@font-face {\r\n  font-family: \"Diablo\";\r\n\r\n  src: local(\"Diablo\"), url(../assets/Diablo1.ttf);\r\n}\r\n","@import \"vars\";\r\n@import \"fonts\";\r\n@import \"reset\";\r\n@import \"libs\";\r\n@import \"global\";\r\n\r\n.field {\r\n  margin: 5px auto;\r\n  max-width: fit-content;\r\n  max-width: -moz-fit-content;\r\n  user-select: none;\r\n  position: relative;\r\n  &__list {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 150px);\r\n    grid-template-rows: repeat(4, 150px);\r\n    grid-gap: 10px;\r\n    height: min(80vw, 65vh);\r\n    width: min(80vw, 65vh);\r\n  }\r\n  &__item {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    font-size: 40px;\r\n  }\r\n}\r\n.cell {\r\n  background-image: url(../assets/blood-scroll.png);\r\n  background-size: cover;\r\n  background-position: center;\r\n  color: $text-color;\r\n  font-size: inherit;\r\n  &--active {\r\n    opacity: 0;\r\n    border: none;\r\n  }\r\n  &--available {\r\n    cursor: pointer;\r\n    filter: drop-shadow(0 0 0.75rem $text-color);\r\n    &:hover {\r\n      color: $text-color-hover;\r\n      filter: drop-shadow(0 0 0.75rem $text-color-hover);\r\n    }\r\n  }\r\n}\r\n.navigation {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  align-items: center;\r\n  &__button {\r\n    cursor: pointer;\r\n  }\r\n}\r\n.sound {\r\n  background: url(\"../assets/speaker.png\");\r\n  background-size: 100%;\r\n  width: 40px;\r\n  height: 40px;\r\n  border: none;\r\n  &--off {\r\n    background: url(../assets/mute.png);\r\n    background-size: 100%;\r\n  }\r\n}\r\n.animationAvailable {\r\n  visibility: hidden;\r\n}\r\n.size-menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n\r\n  max-width: fit-content;\r\n  margin: 0 auto;\r\n  flex-wrap: wrap;\r\n  padding: 0px 174px;\r\n}\r\n.curtain {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  justify-content: center;\r\n  gap: 100px;\r\n  padding: 16% 6% 5% 7%;\r\n  &__continue {\r\n    z-index: 2;\r\n  }\r\n  &__new-game {\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n}\r\n.background {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-user-drag: none;\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n.btn {\r\n  position: relative;\r\n  padding: 0;\r\n  border: none;\r\n  height: 50px;\r\n  transition: all 1s;\r\n  &-left {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat 0 -109px;\r\n    height: 50px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 51px;\r\n    cursor: pointer;\r\n    transition: all 1s;\r\n    z-index: 3;\r\n    &:hover {\r\n      & ~ .btn-middle {\r\n        color: $text-color-hover;\r\n      }\r\n    }\r\n  }\r\n  &-middle {\r\n    background: url(\"../assets/button-sprite.png\") repeat-x 0px -2px;\r\n    color: $text-color;\r\n    padding: 16px 51px;\r\n    position: relative;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    transition: all 1s;\r\n    &:hover {\r\n      color: $text-color-hover;\r\n    }\r\n    &:active {\r\n      filter: drop-shadow(0 0 0.75rem $shadow);\r\n    }\r\n  }\r\n  &-right {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat 0 -163px;\r\n    height: 50px;\r\n    position: absolute;\r\n    z-index: 3;\r\n    right: 0;\r\n    top: 0;\r\n    width: 51px;\r\n    cursor: pointer;\r\n    transition: all 1s;\r\n    &:hover {\r\n      & ~ .btn-middle {\r\n        color: $text-color-hover;\r\n      }\r\n    }\r\n  }\r\n}\r\n.resultl {\r\n  display: none;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: $text-color;\r\n  flex-direction: column;\r\n  padding: 16% 6% 5% 7%;\r\n  &__title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__table {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    &-date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex: 1 0 45%;\r\n      gap: 1px;\r\n    }\r\n    &-size {\r\n      position: relative;\r\n      z-index: 3;\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex: 1 0 15%;\r\n      gap: 1px;\r\n    }\r\n    &-moves {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex: 1 0 20%;\r\n      gap: 1px;\r\n    }\r\n    &-time {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex: 1 0 20%;\r\n      gap: 1px;\r\n    }\r\n  }\r\n  &__close {\r\n    margin-top: auto;\r\n\r\n    &-middle {\r\n      position: relative;\r\n      z-index: 2;\r\n    }\r\n  }\r\n}\r\n.title {\r\n  padding-bottom: 20px;\r\n\r\n  &__date {\r\n    flex: 1 0 45%;\r\n  }\r\n  &__size {\r\n    flex: 1 0 15%;\r\n  }\r\n  &__moves {\r\n    flex: 1 0 20%;\r\n  }\r\n  &__time {\r\n    flex: 1 0 20%;\r\n  }\r\n}\r\n.title__date,\r\n.title__size,\r\n.title__moves,\r\n.title__time,\r\n.list-date__item,\r\n.list-size__item,\r\n.list-moves__item,\r\n.list-time__item {\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.you-win {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 16% 6% 5% 7%;\r\n  &__text {\r\n    color: $text-color;\r\n    position: relative;\r\n    z-index: 2;\r\n    font-size: 20px;\r\n    text-align: center;\r\n  }\r\n  &__image {\r\n    position: relative;\r\n    z-index: 2;\r\n    width: min(20vw, 20vh);\r\n    max-width: 150px;\r\n  }\r\n}\r\n\r\n.moves-wrapper {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: fit-content;\r\n  &__moves {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    color: $text-color;\r\n    font-size: 24px;\r\n  }\r\n}\r\n.updated-data {\r\n  position: absolute;\r\n  display: flex;\r\n  bottom: 0;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  left: 0;\r\n  z-index: -1;\r\n  overflow: hidden;\r\n}\r\n.time-wrapper {\r\n  position: relative;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: fit-content;\r\n  &__timer {\r\n    position: absolute;\r\n    top: 40%;\r\n    right: 38%;\r\n    color: $text-color;\r\n    font-size: 24px;\r\n    width: 65px;\r\n  }\r\n}\r\n.burger-menu {\r\n  display: none;\r\n}\r\n.menu {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  justify-content: space-between;\r\n  display: none;\r\n  padding: 16% 6% 5% 7%;\r\n}\r\n.menu__button {\r\n  &--sound {\r\n    position: absolute;\r\n  }\r\n}\r\n.menu__size-menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  max-width: fit-content;\r\n  margin: 0 auto;\r\n  flex-wrap: wrap;\r\n  padding: 0px 10%;\r\n}\r\n@media (max-width: 802px) {\r\n  .size-menu {\r\n    gap: 5px;\r\n  }\r\n  .field__list {\r\n    height: min(80vw, 63vh);\r\n    width: min(80vw, 63vh);\r\n    grid-gap: 3px;\r\n  }\r\n\r\n  .navigation {\r\n    gap: 5px;\r\n  }\r\n  .resultl__title {\r\n    padding-bottom: 5px;\r\n    font-size: 10px;\r\n  }\r\n  .resultl__table {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .field {\r\n    &__list {\r\n      grid-gap: 3px;\r\n    }\r\n  }\r\n}\r\n@media (max-width: 700px) {\r\n  .burger-menu {\r\n    display: block;\r\n  }\r\n\r\n  .restart,\r\n  .save,\r\n  .sound,\r\n  .load,\r\n  .result {\r\n    display: none;\r\n  }\r\n  .size-menu {\r\n    display: none;\r\n  }\r\n  .container {\r\n    justify-content: start;\r\n    gap: 5px;\r\n  }\r\n  .menu__button {\r\n    &.restart,\r\n    &.save,\r\n    &.sound,\r\n    &.load,\r\n    &.result {\r\n      display: block;\r\n    }\r\n  }\r\n  .menu {\r\n    &__size-menu {\r\n      display: flex;\r\n      padding: 0px;\r\n      gap: 0px;\r\n    }\r\n  }\r\n  .btn-middle {\r\n    padding: 16px 6vw;\r\n  }\r\n  .menu__button--sound {\r\n    z-index: 10;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: min(6vw, 6vh);\r\n    background-repeat: no-repeat;\r\n  }\r\n  .time-wrapper {\r\n    bottom: -15px;\r\n    right: -50px;\r\n  }\r\n  .moves-wrapper {\r\n    bottom: -15px;\r\n    left: -50px;\r\n  }\r\n  .field__list {\r\n    height: min(80vw, 63vh);\r\n    width: min(80vw, 63vh);\r\n  }\r\n}\r\n@media (max-width: 620px) {\r\n  .menu {\r\n    &__size-menu {\r\n      gap: 5px;\r\n    }\r\n  }\r\n}\r\n@media (max-width: 470px) {\r\n  .resultl__title {\r\n    font-size: 7px;\r\n  }\r\n  .btn-right {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat 12px -135px;\r\n    height: 40px;\r\n\r\n    background-size: 82%;\r\n  }\r\n  .btn-left {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat -3px -91px;\r\n    height: 40px;\r\n\r\n    background-size: 82%;\r\n  }\r\n  .btn {\r\n    height: 40px;\r\n  }\r\n  .btn-middle {\r\n    height: 40px;\r\n    padding: 12px 6vw;\r\n  }\r\n}\r\n@media (max-width: 400px) {\r\n  .btn-middle {\r\n    padding: 16px 24px;\r\n  }\r\n  .curtain {\r\n    justify-content: space-around;\r\n    gap: 0;\r\n    padding: 16% 6% 5% 7%;\r\n  }\r\n\r\n  .btn-right {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat 29px -75px;\r\n    height: 24px;\r\n    background-size: 46%;\r\n  }\r\n  .btn-left {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat -1px -50px;\r\n    height: 24px;\r\n    background-size: 46%;\r\n  }\r\n  .btn {\r\n    height: 24px;\r\n  }\r\n  .btn-middle {\r\n    background: url(\"../assets/button-sprite.png\") repeat-x 0px -6px;\r\n    height: 24px;\r\n    padding: 7px 6vw;\r\n    font-size: 10px;\r\n  }\r\n}\r\n@media (max-width: 330px) {\r\n  .you-win__text {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n@media (max-height: 800px) {\r\n  .resultl__title {\r\n    padding-bottom: 5px;\r\n    font-size: 7px;\r\n  }\r\n  .resultl__table {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .menu__size-menu {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-height: 607px) {\r\n  .btn-right {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat 12px -135px;\r\n    height: 40px;\r\n\r\n    background-size: 82%;\r\n  }\r\n  .btn-left {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat -3px -91px;\r\n    height: 40px;\r\n\r\n    background-size: 82%;\r\n  }\r\n  .btn {\r\n    height: 40px;\r\n  }\r\n  .btn-middle {\r\n    height: 40px;\r\n    padding: 12px 5vw;\r\n  }\r\n}\r\n@media (max-height: 600px) {\r\n  .burger-menu {\r\n    display: block;\r\n  }\r\n  .navigation__button {\r\n    &.restart {\r\n      display: none;\r\n    }\r\n    &.save {\r\n      display: none;\r\n    }\r\n    &.sound {\r\n      display: none;\r\n    }\r\n    &.load {\r\n      display: none;\r\n    }\r\n    &.result {\r\n      display: none;\r\n    }\r\n  }\r\n  .size-menu {\r\n    display: none;\r\n  }\r\n  .container {\r\n    justify-content: start;\r\n    gap: 5px;\r\n  }\r\n}\r\n@media (max-height: 560px) {\r\n  .you-win__text {\r\n    font-size: 10px;\r\n  }\r\n}\r\n@media (max-height: 574px) {\r\n  .resultl__title {\r\n    padding-bottom: 5px;\r\n    font-size: 7px;\r\n  }\r\n  .resultl__table {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n@media (max-height: 531px) {\r\n  .btn-middle {\r\n    padding: 12px 4vw;\r\n  }\r\n}\r\n@media (max-height: 477px) {\r\n  .btn-middle {\r\n    padding: 16px 24px;\r\n  }\r\n  .curtain {\r\n    justify-content: space-around;\r\n    gap: 0;\r\n    padding: 16% 6% 5% 7%;\r\n  }\r\n\r\n  .btn-right {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat 29px -75px;\r\n    height: 24px;\r\n    background-size: 46%;\r\n  }\r\n  .btn-left {\r\n    background: url(\"../assets/button-sprite.png\") no-repeat -1px -50px;\r\n    height: 24px;\r\n    background-size: 46%;\r\n  }\r\n  .btn {\r\n    height: 24px;\r\n  }\r\n  .btn-middle {\r\n    background: url(\"../assets/button-sprite.png\") repeat-x 0px -6px;\r\n    height: 24px;\r\n    padding: 7px 3vw;\r\n    font-size: 10px;\r\n  }\r\n  .size-menu1 {\r\n    padding: 0;\r\n  }\r\n}\r\n@media (max-height: 370px) {\r\n  .btn-middle {\r\n    padding: 7px 2vw;\r\n  }\r\n}\r\n\r\n@media (max-height: 382px) {\r\n  .resultl__title {\r\n    font-size: 7px;\r\n  }\r\n  .resultl__table {\r\n    font-size: 10px;\r\n  }\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: inherit;\r\n}\r\n\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nul,\r\nol,\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\nul[class] {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n","html,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  background: url(../assets/background.jpg);\r\n  background-size: cover;\r\n  background-position: center;\r\n  overflow: hidden;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100%;\r\n}\r\n\r\n.main {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 20px 15px;\r\n  font-family: \"Diablo\", serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100%;\r\n}\r\n","$text-color: #e6ba43;\r\n$text-color-hover: #ad8b2b;\r\n$shadow: rgb(87, 11, 11);\r\n$background-field: rgb(17, 12, 31);\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Diablo1.ttf":
/*!********************************!*\
  !*** ./src/assets/Diablo1.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Diablo1.ttf";

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.jpg";

/***/ }),

/***/ "./src/assets/blood-scroll.png":
/*!*************************************!*\
  !*** ./src/assets/blood-scroll.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "blood-scroll.png";

/***/ }),

/***/ "./src/assets/button-sprite.png":
/*!**************************************!*\
  !*** ./src/assets/button-sprite.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "button-sprite.png";

/***/ }),

/***/ "./src/assets/curtain-background.jpg":
/*!*******************************************!*\
  !*** ./src/assets/curtain-background.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "curtain-background.jpg";

/***/ }),

/***/ "./src/assets/diablo-win.png":
/*!***********************************!*\
  !*** ./src/assets/diablo-win.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "diablo-win.png";

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.png";

/***/ }),

/***/ "./src/assets/invscrol.wav":
/*!*********************************!*\
  !*** ./src/assets/invscrol.wav ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "invscrol.wav";

/***/ }),

/***/ "./src/assets/moves.gif":
/*!******************************!*\
  !*** ./src/assets/moves.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moves.gif";

/***/ }),

/***/ "./src/assets/mute.png":
/*!*****************************!*\
  !*** ./src/assets/mute.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mute.png";

/***/ }),

/***/ "./src/assets/speaker.png":
/*!********************************!*\
  !*** ./src/assets/speaker.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "speaker.png";

/***/ }),

/***/ "./src/assets/time.gif":
/*!*****************************!*\
  !*** ./src/assets/time.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "time.gif";

/***/ }),

/***/ "./src/assets/usb-slide-back-106529.mp3":
/*!**********************************************!*\
  !*** ./src/assets/usb-slide-back-106529.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "usb-slide-back-106529.mp3";

/***/ }),

/***/ "./src/assets/win-sound.mp3":
/*!**********************************!*\
  !*** ./src/assets/win-sound.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "win-sound.mp3";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _components_createHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/createHtml */ "./src/components/createHtml.js");
/* harmony import */ var _helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/getSolvableMatrix */ "./src/helpers/getSolvableMatrix.js");
/* harmony import */ var _helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/zeroingNumberOfMoves */ "./src/helpers/zeroingNumberOfMoves.js");
/* harmony import */ var _assets_usb_slide_back_106529_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/usb-slide-back-106529.mp3 */ "./src/assets/usb-slide-back-106529.mp3");
/* harmony import */ var _components_setWidthField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setWidthField */ "./src/components/setWidthField.js");
/* harmony import */ var _listeners_resizeWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listeners/resizeWindow */ "./src/listeners/resizeWindow.js");
/* harmony import */ var _listeners_clickCurtainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listeners/clickCurtainMenu */ "./src/listeners/clickCurtainMenu.js");
/* harmony import */ var _helpers_checkWin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/checkWin */ "./src/helpers/checkWin.js");
/* harmony import */ var _listeners_hoverButtonsSoundPlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listeners/hoverButtonsSoundPlay */ "./src/listeners/hoverButtonsSoundPlay.js");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/favicon.png */ "./src/assets/favicon.png");











var size = 4;
var matrix = (0,_helpers_getSolvableMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(size);
var sound = true;
var myAudio = new Audio(_assets_usb_slide_back_106529_mp3__WEBPACK_IMPORTED_MODULE_4__);
myAudio.playbackRate = 2.5;
localStorage.setItem("sound", JSON.stringify(sound));
var transition = "1s";
(0,_helpers_zeroingNumberOfMoves__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_createHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix);
(0,_components_setWidthField__WEBPACK_IMPORTED_MODULE_5__["default"])(size);
(0,_listeners_clickCurtainMenu__WEBPACK_IMPORTED_MODULE_7__.clickCurtainMenu)(matrix, size, transition, myAudio);
(0,_listeners_resizeWindow__WEBPACK_IMPORTED_MODULE_6__.resizeWindow)(size);
(0,_helpers_checkWin__WEBPACK_IMPORTED_MODULE_8__["default"])(matrix, transition, myAudio);
var listener = new AbortController();
window.addEventListener("click", function () {
  (0,_listeners_hoverButtonsSoundPlay__WEBPACK_IMPORTED_MODULE_9__.hoverButtonsSoundPlay)();
  listener.abort();
}, listener);
(function () {
  var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = _assets_favicon_png__WEBPACK_IMPORTED_MODULE_10__;
  document.getElementsByTagName("head")[0].appendChild(link);
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle4242bdd231fd00f20a56.js.map