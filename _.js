/**
 * Creates a `lodash` object.
 */
const _ = {
  /**
   * Clamps a number within the inclusive lower and upper bounds
   * @name clamp
   * @param {number} number : The number to clamp.
   * @param {number} lower : The lower bound.
   * @param {number} upper : The upper bound.
   *
   * @returns {number}: returns the clamped number
   */
  clamp(number, lower, upper) {
    return Math.min(Math.max(number, lower), upper);
  },

  /**
   * Checks is `n` is between `start` and up to and including, `end`.
   * If `end` is not specifed, it's set to `start` with `start` then set to 0.
   * If `start` is greater then `end` the params are swapped to support negative
   * values.
   * @param {number} number : The number to check.
   * @param {number} start : The start of the range.
   * @param {number} end : The end of the range.
   * @returns {boolean}: Returns true if number is in the range, else false
   */
  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    return start <= number && number < end;
  },
  /**
   * Splits `string` into an array of its words
   * @param {string} [strings=''] : The string to inspect
   * @returns {array}: returns the words of `string`.
   */
  words (string = '') {
      return string.split(' ')
  }
};

// Do not write or modify code below this line.
module.exports = _;
