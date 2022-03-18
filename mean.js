/**
 * Computes the mean of the values in `array`.
 * @param {array} array The array to iterate over
 * @returns {number} Returns the mean.
 */
const mean = (array) => {
  if (array.length === 0) {
    return NaN;
  }
  return array.reduce((a, b) => a + b) / array.length;
};

module.exports = mean;
