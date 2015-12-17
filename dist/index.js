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