/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/sup.jpg":
/*!*************************!*\
  !*** ./src/img/sup.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ddad0ac16e0adcbceb28005475e2ff95.jpg");

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
  !*** ./src/pag5.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_sup_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/sup.jpg */ "./src/img/sup.jpg");



var titulo = document.getElementById("titulo");
titulo.innerHTML = " ¡Comentario!";
titulo.style = "color:hsl(267, 78%, 11%)";
var subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML = " ¿Cómo creen que afecta en la interacción con los usuarios? ";

var img = document.getElementById("img");
img.src = _img_sup_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
var p1 = document.getElementById("p1");
p1.innerHTML = " Considero que esta interaccion es de suma importancia ya que \nlas estrategias enfocadas en la experiencia de los usuarios traen muchos beneficios siemre a las empresas,\npero aparentemente no muchos no saben c\xF3mo demostrar esta \"efectividad\" \nen relaci\xF3n a la inversi\xF3n de recursos que significa. Pienso que si afecta a la \ninteraccion de los usaurios ya que si las empresas vieran con \nclaridad las oportunidades que est\xE1n perdiendo y lo que les cuesta \ncada error en este \xE1mbito mejorar\xEDan para \"complacer\" al usuario. \n\nPor ende para poder determinar la eficiencia de las medidas orientadas a mejorar la UX es necesario tener una estrategia de medici\xF3n. Si no est\xE1n definidos los objetivos ni una forma de evaluar el efecto de los cambios, ser\xE1 muy dif\xEDcil calcular el retorno.\n\nPor eso son importantes las estrategias y los pasos como entender el negocio y sus objetivos.\no analizar las conversiones y costos, recolectando los datos actuales.\no definir los intereses particulares del proyecto.\no determinar los indicadores (m\xE9tricas) asociadas a cada una de las dimensiones.\nentre otroas. Adem\xE1s es importante para intereactuar tambien con los usuarios en este \xE1mbito el hacer un seguimiento de las medidas aplicadas y analizar su efecto e inclusive crear reportes cada cierto tiempo para ver los avances.\nTodo esto para ir tomando las m\xE9tricas de esos reportes, definir el ROI de las medidas implementadas.";
var p2 = document.getElementById("p2");
p2.innerHTML = " El ROI depende mucho de la forma en que se calcula. Las cifras con las que se compara, los factores analizados y los rangos de tiempo afectan directamente a los c\xE1lculos.\nAl definir una estrategia de medici\xF3n con par\xE1metros claros y preestablecidos, se tendr\xEDa la oportunidades\nde obtener informaci\xF3n confiable que respalde tu inversiones que complaceran deuna manera mas interactica a los usarios, por ello es importante\n";
})();

/******/ })()
;