
/**
 * @param {String|Number|null} value
 * @returns {Number}
 */
function customParseInt(value) {
    const intVal = parseInt(value, 10);

    return isNaN(intVal) ? 0 : intVal;
}

export {
    customParseInt as parseInt,
};

/**
 * @param {String|Number|null} value
 * @returns {Number}
 */
function customParseFloat(value) {
    const floatVal = parseFloat(value);

    return isNaN(floatVal) ? 0 : floatVal;
}

export {
    customParseFloat as parseFloat,
};

/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
