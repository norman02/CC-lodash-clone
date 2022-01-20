/**
 * Creates a `lodash` object.
 */
const _ = {
  /**
   * Clamps a number within the inclusive lower and upper bounds
   * @name clamp
   * @param {number} number The number to clamp.
   * @param {number} lower The lower bound.
   * @param {number} upper The upper bound.
   *
   * @returns {number} returns the clamped number
   */
  clamp(number, lower, upper) {
    return Math.min(Math.max(number, lower), upper);
  },
  


  /**
   * Checks is `n` is between `start` and up to and including, `end`.
   * If `end` is not specifed, it's set to `start` with `start` then set to 0.
   * If `start` is greater then `end` the params are swapped to support negative
   * values.
   * @param {number} number The number to check.
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns true if number is in the range, else false
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
   * @param {string} [strings=''] The string to inspect
   * @returns {array} returns the words of `string`.
   * TODO: implement patterns
   */
  words(string = "") {
    return string.split(" ");
  },
  /**
   * Pads `string` on the left and right sides if it's shorter
   * than `length`. Padding characters are truncated if they can't
   * be evenly divided by `length`.
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0]  The Padding length
   * @param {string} [chars=' '] The string used as padding.
   */
  pad(string='', length=0, chars= ' ') {
    if (length <= string.length) {
        return string
    }
    let startPaddingLength = Math.floor((length - string.length)/2)
    let endPaddingLength = length - string.length - startPaddingLength
    return chars.repeat(startPaddingLength) + string + chars.repeat(endPaddingLength)
  },
  /**
   * Checks if `path` is a direct property of `object`.
   * @param {Object} object 
   * @param {string} key //TODO: support path
   * @returns {boolean} True if `path` is a direct property of `Object`, else false.
   */
  has(object, key) {
    return object.hasOwnProperty(key)
  },
  /**
   * Creates an object composed of the inverted keys and values of `object`. 
   * If `object` contains duplicate values, subsequent values overwrite 
   * prperty assignments of previus values.
   * @param {Object} object The object to invert 
   * @returns {Object} Returns the new inverted object
   */
  invert(object) {
      let invertedObject = {}
      for (let key in object) {
        let orignalValue = object[key]
        invertedObject[orignalValue] = key
        
      }
      return invertedObject
  },
  /**
   * Returns the key of the first elment `predicate` returns truthy for.
   * @param {Object} object 
   * @param {Function} [predicate=_.identity] 
   * @returns {*} Returns the key of the matched element, else `undefined`.
   */
  findKey(object, predicate=_.identity) {
      for(let key in object) {
          let value = object[key]
          let predicateReturnValue = predicate(value)
          if (predicateReturnValue) {
              return key
          }
      }
  },
  /**
   * Creates a slice of `array` with `n` elements dropped from the beginning.
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @returns {Array} Returns the slice of `array`
   */
  drop(array, n=1) {
    return array.slice(n)
  },
  /**
   * Creates a slice of `array` excluding elments dropped from the beginning. 
   * Elements are dropped until `predicate` returns falsey. The predicate is invoked
   * with three arguments: (value, index, array)
   * @param {Array} array 
   * @param {Function} predicate 
   * @returns Returns the slice of `array`
   */
  dropWhile(array, predicate=_.identity) {
    let dropNumber = array.findIndex( (element, index) =>{
      return !predicate(element, index)
    })
    return this.drop(array, dropNumber)
  },
  /**
   * Creates an array of elments split into group the length of `size`.
   * If `array` can't be split evenlty, the final chunc will be the remaining elements.  
   * @param {Array} array The array to process.
   * @param {number} size The length of each chunk.
   * @returns {Array} Returns the new array of chunks.
   */
  chunk(array, size=1) {
    let chunks = []
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      chunks.push(chunk)
    }
    return chunks
  }

};

// Do not write or modify code below this line.
module.exports = _;
