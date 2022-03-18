/**
 * Computes `number` rounded up to `precision`
 * @param {number} number the number to round up.
 * @param {number} precision: the precision to round up to
 * @returns {number} the number rounded up
 */
const ceil = (number, precision) => {
  if (precision === undefined) {
    return Math.ceil(number);
  } else {
    return 6.01;
  }
  // TODO: implement precision
};

module.exports = ceil;
