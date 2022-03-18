const assert = require("assert");
const chunk = require("../chunk");

describe("chunk", () => {
  it("returns a new array of chunks", () => {
    assert.deepEqual(chunk(["a", "b", "c", "d"], 2), [
      ["a", "b"],
      ["c", "d"],
    ]);
    assert.deepEqual(chunk(["e", "f", "g", "h"], 2), [
      ["e", "f"],
      ["g", "h"],
    ]);
  });
  it("should return the last chunk as remaining elements", () => {
    assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });
});

// describe('chunk', function() {
//   var array = [0, 1, 2, 3, 4, 5];

//   it('should return chunked arrays', function() {
//     var actual = chunk(array, 3);
//     assert.deepStrictEqual(actual, [[0, 1, 2], [3, 4, 5]]);
//   });

//   it('should return the last chunk as remaining elements', function() {
//     var actual = chunk(array, 4);
//     assert.deepStrictEqual(actual, [[0, 1, 2, 3], [4, 5]]);
//   });

//   it('should treat falsey `size` values, except `undefined`, as `0`', function() {
//     var expected = lodashStable.map(falsey, function(value) {
//       return value === undefined ? [[0], [1], [2], [3], [4], [5]] : [];
//     });

//     var actual = lodashStable.map(falsey, function(size, index) {
//       return index ? chunk(array, size) : chunk(array);
//     });

//     assert.deepStrictEqual(actual, expected);
//   });

//   it('should ensure the minimum `size` is `0`', function() {
//     var values = lodashStable.reject(falsey, lodashStable.isUndefined).concat(-1, -Infinity),
//         expected = lodashStable.map(values, stubArray);

//     var actual = lodashStable.map(values, function(n) {
//       return chunk(array, n);
//     });

//     assert.deepStrictEqual(actual, expected);
//   });

//   it('should coerce `size` to an integer', function() {
//     assert.deepStrictEqual(chunk(array, array.length / 4), [[0], [1], [2], [3], [4], [5]]);
//   });
// }); FIXME
