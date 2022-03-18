/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 * @param {array} array The array to slice.
 * @param {number} start The start position.
 * @param {number} end The end position.
 * @returns {array} Teturns the slice of `array`.
 */
const slice = (array, start, end) => array.slice(start, end);

module.exports = slice;
