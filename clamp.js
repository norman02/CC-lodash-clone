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
const clamp = (number, lower, upper) =>
  Math.min(Math.max(number, lower), upper);

module.exports = clamp;
