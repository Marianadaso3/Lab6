/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/sec.jpg":
/*!*************************!*\
  !*** ./src/img/sec.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4e60127218a4908d5cc0eda7cb9ad56c.jpg");

/***/ }),

/***/ "./src/img/sur.ogg":
/*!*************************!*\
  !*** ./src/img/sur.ogg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "778644028ef1a687d38c159f6024c028.ogg");

/***/ }),

/***/ "./src/img/vel.mp3":
/*!*************************!*\
  !*** ./src/img/vel.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cf00f15e8c7d8ba9c7ee1b09ddc0e7a8.mp3");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/pag2.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_sec_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/sec.jpg */ "./src/img/sec.jpg");
/* harmony import */ var _img_sur_ogg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/sur.ogg */ "./src/img/sur.ogg");
/* harmony import */ var _img_vel_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/vel.mp3 */ "./src/img/vel.mp3");





const titulo = document.getElementById("titulo");
titulo.innerHTML =
  " ¡Bienvenido has entrado a la anecdota de mi casi secuestro!";
titulo.style = "color:rgb(255, 255, 255)";

const subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML =
  "Estas a punto de formar parte de una de las mejores historias";
subtitulo.style = "color:rgb(255, 255, 255)";


const img = document.getElementById("img");
img.src = _img_sec_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];



const p1 = document.getElementById("p1");
p1.innerHTML =
  `Todo empieza cuando..
  Estaba saliendo de la discoteca a las 3 am con un grupo de estudiantes de intercambio de Italia, esa noche 
  se iban a quedar durmiendo en mi apartamento y decidimos pedir un taxi. Usualment no pedimos taxis a esa hora de la 
  madrugada por eso logramos contactar a una persona de confianza.`;
p1.style = "color:rgb(255, 255, 255)";


const p2 = document.getElementById("p2");
p2.innerHTML =
  `  En ese momento lo único que ocurria por mi mente es: ¡Hasta aqui llegaste Mariana
  ... estas secuestrada! Luego el hombre se mete nuevamente con la placa en y vuelve a arrancar 
  con velocidad. Vemos que se acerca a la garita del corredor y NO frena. Sigue agarrando velocidad,
  nos acercamos... ¡Se va a chocar pense! Pero nadie se atrevia a decirle nada. Teníamos miedo...
   Mi amiga empieza a llorar, y ¡PUM! Se choca contra la talanquera del corredor y se la pasa llevando.
   Ahi decidí hablar y le pregunto que ¿Por qué hizo eso? y me responde de que no tenia dinero para pagar
   el corredor. Lo primero que pense era que fue la peor excusa para "secuestrar a alguien", asi que le digo
   de forma callada a mi amigo  Italiano que se llamaba Susse, que si el hombre seguia recto y no cruzaba 
   a la siguiente calle a la derecha (para llegar a mi apartamento), signigicaba que era evidentemente un secuestro.
   Así que como el estaba detras del aciento del hombre le dije que lo agarara por detras y yo colocaba el freno 
   de emergencias y lo activo.`;
p2.style = "color:rgb(255, 255, 255)";



const sonido = document.getElementById("sonido");
sonido.src = _img_sur_ogg__WEBPACK_IMPORTED_MODULE_4__["default"];


const sonido2 = document.getElementById("sonido2");
sonido2.src = _img_vel_mp3__WEBPACK_IMPORTED_MODULE_5__["default"];


})();

/******/ })()
;