/**
 * Creates on `array` elements split into group the lenght of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.
 * @param {array} array The array to process.
 * @param {number} size The lenght of each chunk
 * @returns {array} Returns the new new array of chunks
 */
const chunk = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    const chunked = array.slice(i, i + size);
    result.push(chunked);
  }
  return result;
};

module.exports = chunk;
