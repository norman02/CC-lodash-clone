/**
 * create a `lodash` object`
 */
const _ = {
  /**
   * Clamps a `number` within the inclusive `lower` and `upper` bounds
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
};

module.exports = _;
