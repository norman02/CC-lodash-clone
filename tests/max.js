const assert = require("assert");
const max = require("../max");

describe("max", () => {
  it("should return the max value in a collection", () => {
    assert.strictEqual(max([4, 2, 8, 6]), 8);
    assert.strictEqual(max([4, 2, 6]), 6);
  });
  it("should work with non-numeric collection values", () => {
    assert.strictEqual(max(["a", "b", "c"]), "c");
  });
  it("should return undefined for empty collections", () => {
    assert.strictEqual(max([]), undefined);
  });
});

// describe('max', function() {
//   it('should return the largest value from a collection', function() {
//     assert.strictEqual(max([1, 2, 3]), 3);
//   });

//   it('should return `undefined` for empty collections', function() {
//     var values = falsey.concat([[]]),
//         expected = lodashStable.map(values, noop);

//     var actual = lodashStable.map(values, function(value, index) {
//       try {
//         return index ? max(value) : max();
//       } catch (e) {}
//     });

//     assert.deepStrictEqual(actual, expected);
//   });

//   it('should work with non-numeric collection values', function() {
//     assert.strictEqual(max(['a', 'b']), 'b');
//   });
// }); FIXME
