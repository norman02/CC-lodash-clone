/**
 * Creates a `lodash` object.
 */
const _ = {
/**
 * Clamps a number within the inclusive lower and upper bounds
 * @name clamp
 * @param number {number}: The number to clamp.
 * @param lower {number}: The lower bound.
 * @param upper {number}: The upper bound.
 * 
 * @returns {number}: returns the clamped number
 */
 clamp (number, lower, upper) {
     return  Math.min(Math.max(number, lower), upper)
    }

}




// Do not write or modify code below this line.
module.exports = _;