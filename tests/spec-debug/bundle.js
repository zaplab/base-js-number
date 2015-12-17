/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zapBaseJsObject = __webpack_require__(1);

	var _zapBaseJsNumber = __webpack_require__(2);

	describe('zap-base-js-number', function () {
	    beforeEach(function () {});

	    afterEach(function () {});

	    describe('zap-base-js-number should have the following methods', function () {
	        it('parseInt', function () {
	            expect(_zapBaseJsNumber.parseInt).toEqual(jasmine.any(Function));
	        });

	        it('parseFloat', function () {
	            expect(_zapBaseJsNumber.parseFloat).toEqual(jasmine.any(Function));
	        });

	        it('random', function () {
	            expect(_zapBaseJsNumber.random).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('parseInt', function () {
	        it('parseInt("ABC") should return 0', function () {
	            expect((0, _zapBaseJsNumber.parseInt)('ABC')).toEqual(0);
	        });

	        it('parseInt({}) should return 0', function () {
	            expect((0, _zapBaseJsNumber.parseInt)({})).toEqual(0);
	        });

	        it('parseInt(1) should return 1', function () {
	            expect((0, _zapBaseJsNumber.parseInt)(1)).toEqual(1);
	        });

	        it('parseInt(12345.12345) should return 12345', function () {
	            expect((0, _zapBaseJsNumber.parseInt)(12345.12345)).toEqual(12345);
	        });
	    });

	    describe('parseFloat', function () {
	        it('parseFloat("ABC") should return 0', function () {
	            expect((0, _zapBaseJsNumber.parseFloat)('ABC')).toEqual(0);
	        });

	        it('parseFloat({}) should return 0', function () {
	            expect((0, _zapBaseJsNumber.parseFloat)({})).toEqual(0);
	        });

	        it('parseFloat(1) should return 1', function () {
	            expect((0, _zapBaseJsNumber.parseFloat)(1)).toEqual(1);
	        });

	        it('parseFloat(12345.12345) should return 12345', function () {
	            expect((0, _zapBaseJsNumber.parseFloat)(12345.12345)).toEqual(12345.12345);
	        });
	    });

	    describe('random', function () {
	        it('random(1, 5) should return a number between 1 and 5', function () {
	            var numbers = {};
	            var i = 0;
	            var numberCache = undefined;

	            for (; i < 1000; ++i) {
	                numberCache = (0, _zapBaseJsNumber.random)(1, 5);

	                numbers[numberCache] = typeof numbers[numberCache] === 'undefined' ? 1 : numbers[numberCache] + 1;
	            }

	            expect((0, _zapBaseJsObject.length)(numbers)).toBeGreaterThan(1);
	            expect((0, _zapBaseJsObject.length)(numbers)).toBeLessThan(6);
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.assign = assign;
	exports.clone = clone;
	exports.each = each;
	exports.length = length;

	/**
	 * @param {...Object} [obj]
	 * @returns {Object}
	 */
	function assign() {
	    return _extends.apply(undefined, [{}].concat(Array.prototype.slice.call(arguments)));
	}

	/**
	 * @param {Object} obj
	 * @returns {Object}
	 */
	function clone(obj) {
	    return _extends({}, obj);
	}

	/**
	 * @alias of assign
	 * @param {...Object} [obj]
	 * @returns {Object}
	 */
	exports.extend = assign;

	/**
	 * @param {object} obj
	 * @param {Function} fn
	 */

	function each(obj, fn) {
	    Object.keys(obj).forEach(function (key) {
	        fn(obj[key], key);
	    });
	}

	/**
	 * @alias of each
	 * @param {object} obj
	 * @param {Function} fn
	 */
	exports.forEach = each;

	/**
	 * @param {Object} obj
	 * @returns {Number}
	 */

	function length(obj) {
	    return Object.keys(obj).length;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.random = random;

	/**
	 * @param {String|Number|null} value
	 * @returns {Number}
	 */
	function customParseInt(value) {
	    var intVal = parseInt(value, 10);

	    return isNaN(intVal) ? 0 : intVal;
	}

	exports.parseInt = customParseInt;

	/**
	 * @param {String|Number|null} value
	 * @returns {Number}
	 */

	function customParseFloat(value) {
	    var floatVal = parseFloat(value);

	    return isNaN(floatVal) ? 0 : floatVal;
	}

	exports.parseFloat = customParseFloat;

	/**
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
	 */

	function random(min, max) {
	    return Math.floor(Math.random() * (max - min + 1) + min);
	}

/***/ }
/******/ ]);