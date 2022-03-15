/**
 * create a `lodash` object`
 */
const _ = {
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
};
// TODO: random function depends on function uniq
module.exports = _;
