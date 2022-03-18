/**
 * Creates an array with all falsey values removed.
 * @param {array} array The array to compact.
 * @returns Returns the new array of filtered values
 */
const compact = (array) => array.filter((e) => e);

module.exports = compact;
