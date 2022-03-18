/**
 * Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.
 * @param {array} array The array to iterate over.
 * @returns Returns the minimum value.
 */
const min = (array) => {
  let minimum = array[0];
  array.forEach((e) => {
    if (e < minimum) {
      minimum = e;
    }
  });
  return minimum;
};

module.exports = min;
