/**
 * create a `lodash` object`
 */
const _ = {
  /** Array Methods */
  
  
  

  
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
