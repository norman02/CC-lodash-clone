/**
 * Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.
 * @param {array} array The array to iterate over.
 * @returns Returns the maximum value.
 */
const max = (array) => {
  let maximum = array[0];
  array.forEach((e) => {
    if (e > maximum) {
      maximum = e;
    }
  });
  return maximum;
};

module.exports = max;
