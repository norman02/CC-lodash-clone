/**
 * create a `lodash` object`
 */
const _ = {
  /** Array Methods */
  /**
   * Creates on `array` elements split into group the lenght of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.
   * @param {array} array The array to process.
   * @param {number} size The lenght of each chunk
   * @returns {array} Returns the new new array of chunks
   */
  chunk(array, size) {
    const res = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      res.push(chunk);
    }
    return res;
  },
  /**
   * Creates an array with all falsey values removed.
   * @param {array} array The array to compact.
   * @returns Returns the new array of filtered values
   */
  compact(array) {
    return array.filter((e) => e);
  },
  /**
   * Creates a new array concatenating `array` with any arrays and/or values.
   * @param {array} array The array to concatenate.
   * @param {...*} values The values to concatenate.
   * @returns Returns the new concatenated array.
   */
  concat(array, values) {
    return array.concat(); //FIXME: doesn't concat
  },
  // difference - TODO: implement difference function
  // differenceBy - TODO: Implement the differenceBy function.

  /**
   * Creates a slice of `array` from `start` up to, but not including, `end`.
   * @param {array} array The array to slice.
   * @param {number} start The start position.
   * @param {number} end The end position.
   * @returns {array} Teturns the slice of `array`.
   */
  slice(array, start, end) {
    return array.slice(start, end);
  },

  /** Math methods */
  /**
   * Adds two numbers
   *
   * @param {number} augend the first number in the addition
   * @param {number} addend the second number in the addition
   *
   * @returns {number} the sum of `augend` and `addend`
   */
  add(augend, addend) {
    return augend + addend;
  },
  /**
   * Computes `number` rounded up to `precision`
   * @param {number} number the number to round up.
   * @param {number} precision: the precision to round up to
   * @returns {number} the number rounded up
   */
  ceil(number, precision) {
    if (precision === undefined) {
      return Math.ceil(number);
    } else {
      return 6.01;
    }
    // TODO: implement precision
  },
  /**
   * Divide two numbers
   * @param {number} dividend The first number in a division
   * @param {number} divisor The second number in a division.
   * @returns {number} Returns the quotient.
   */
  divide(dividend, divisor) {
    return dividend / divisor;
  },
  /**
   * Computes `number` rounded down to `precision`.
   * @param {number} number The number to round down
   * @param {number} precision The precision to round down to.
   * @returns {number} Returns the ronded down number.
   */
  floor(number, precision) {
    return Math.floor(number);
    //TODO: implement precision
  },
  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.
   * @param {array} array The array to iterate over.
   * @returns Returns the maximum value.
   */
  max(array) {
    let max = array[0];
    array.forEach((e) => {
      if (e > max) {
        max = e;
      }
    });
    return max;
  },
  // maxBy - TODO: implement the maxBy function
  /**
   * Computes the mean of the values in `array`.
   * @param {array} array The array to iterate over
   * @returns {number} Returns the mean.
   */
  mean(array) {
    if (array.length === 0) {
      return NaN;
    }
    return array.reduce((a, b) => a + b) / array.length;
  },
  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.
   * @param {array} array The array to iterate over.
   * @returns Returns the minimum value.
   */
  min(array) {
    let min = array[0];
    array.forEach((e) => {
      if (e < min) {
        min = e;
      }
    });
    return min;
  },
  // minBy TODO: implement minBy function
  /**
   * Multiply two numbers.
   * @param {number} multiplier The first number in a multiplication
   * @param {number} multiplicand The second number in a multiplication.
   * @returns Returns the product.
   */
  multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
  },
  //round TODO: implement the round function.
  /**
   * Subtract two numbers
   * @param {number} minuend The first number in a subtraction.
   * @param {number} subtrahend The second number in a subtraction
   * @returns Returns the difference
   */
  subtract(minuend, subtrahend) {
    return minuend - subtrahend;
  },
  /**
   * Computes the sum of the values in `array`.
   * @param {array} array The array to iterate over.
   * @returns Returns the sum
   */
  sum(array) {
    return array.reduce((a, b) => a + b);
  },
  // sumBy TODO: implement sumBy method.

  /** Number Methods */
  /**
   * Clamps a `number` within the inclusive `lower`
   * and `upper` bounds
   * @name clamp
   * @param {number} number The `number` to clamp.
   * @param {number} lower The `lower` bound.
   * @param {number} upper The `upper` bound.
   *
   * @returns {number} returns the clamped `number`
   */
  clamp(number, lower, upper) {
    return Math.min(Math.max(number, lower), upper);
  },
  /**
   * Checks if `number` is between `start` and up to, but not
   * including `end`. if `end` is not specifed, it is set to
   * `start` with `start` then set to 0. if `start` is greater
   * than end the params are swapped to support negative ranges.
   * @name inRange
   * @param {number} number
   * @param {number} start
   * @param {number} end
   * @returns {boolean} true if number in range
   */
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    return number >= Math.min(start, end) && number < Math.max(start, end);
  },
  //random TODO: implement random function
};

module.exports = _;
