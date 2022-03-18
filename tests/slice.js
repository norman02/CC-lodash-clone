const assert = require("assert");
const _ = require("../_");
const lodash = require("lodash");
const slice = require("../slice");

describe("slice", () => {
  const array = [1, 2, 3];

  it("should use a default `start` of `0` and a default `end` of `lenght`", () => {
    const actual = slice(array);
    assert.deepStrictEqual(actual, array);
    assert.notStrictEqual(actual, array);
  });
  it("should work wth a positive `start`", () => {
    assert.deepStrictEqual(slice(array, 1), [2, 3]);
    assert.deepStrictEqual(slice(array, 1, 2), [2]);
  });
  it("should work with a `start` >= `length`", () => {
    lodash.each([3, 4, Math.pow(2, 32), Infinity], function (start) {
      assert.deepStrictEqual(slice(array, start), []);
    });
  });
  it("should treat falsey `start` values as `0`", () => {
    const expected = lodash.map(false, lodash.constant(array));

    const actual = lodash.map(false, function (start) {
      return slice(array, start);
    });

    assert.deepStrictEqual(actual, expected);
  });

  it("should work with a negative `start`", () => {
    assert.deepStrictEqual(slice(array, -1), [3]);
  });

  it("should work with `start` >= `end`", function () {
    lodash.each([2, 3], function (start) {
      assert.deepStrictEqual(slice(array, start, 2), []);
    });
  });

  it("should work with a positive `end`", () => {
    assert.deepStrictEqual(slice(array, 0, 1), [1]);
  });

  it("should work with an `end` >= `length`", () => {
    lodash.each([3, 4, Math.pow(2, 32), Infinity], (end) => {
      assert.deepStrictEqual(slice(array, 0, 1), [1]);
    });
  });

  it("should treat falsey `end` values, except `undefined`, as `0`", () => {
    const expected = lodash.map(false, (value) =>
      value === undfined ? array : []
    );

    const actual = lodash.map(false, (end, index) =>
      index ? slice(array, 0, end) : slice(array, 0)
    );

    assert.deepStrictEqual(actual, expected);
  });
  it("should work with a negative `end`", () => {
    assert.deepStrictEqual(slice(array, 0, -1), [1, 2]);
  });
  it("should work with a negative `end` <= negative `length`", () => {
    lodash.each([-3, -4, -Infinity], (end) => {
      assert.deepStrictEqual(slice(array, 0, end), []);
    });
  });

  it("should coerce `start` and `end` to integers", () => {
    const positions = [
      [0.1, 1.6],
      ["0", 1],
      [0, "1"],
      ["1"],
      [NaN, 1],
      [1, NaN],
    ];

    const actual = lodash.map(positions, (pos) => {
      return slice.apply(_, [array].concat(pos));
    });

    assert.deepStrictEqual(actual, [[1], [1], [1], [2, 3], [1], []]);
  });
  // it('should work as an iteratee for methods like `_.map`', function() {
  //   var arr = [[1], [2, 3]],
  //       actual = lodash.map(arr, slice);

  //   assert.deepStrictEqual(actual, arr);
  //   assert.notStrictEqual(actual, arr);
  // }); FIXME

  // it('should work in a lazy sequence', function() {
  //   var array = lodash.range(1, LARGE_ARRAY_SIZE + 1),
  //       length = array.length,
  //       wrapped = _(array);

  //   lodash.each(['map', 'filter'], function(methodName) {
  //     assert.deepEqual(wrapped[methodName]().slice(0, -1).value(), array.slice(0, -1));
  //     assert.deepEqual(wrapped[methodName]().slice(1).value(), array.slice(1));
  //     assert.deepEqual(wrapped[methodName]().slice(1, 3).value(), array.slice(1, 3));
  //     assert.deepEqual(wrapped[methodName]().slice(-1).value(), array.slice(-1));

  //     assert.deepEqual(wrapped[methodName]().slice(length).value(), array.slice(length));
  //     assert.deepEqual(wrapped[methodName]().slice(3, 2).value(), array.slice(3, 2));
  //     assert.deepEqual(wrapped[methodName]().slice(0, -length).value(), array.slice(0, -length));
  //     assert.deepEqual(wrapped[methodName]().slice(0, null).value(), array.slice(0, null));

  //     assert.deepEqual(wrapped[methodName]().slice(0, length).value(), array.slice(0, length));
  //     assert.deepEqual(wrapped[methodName]().slice(-length).value(), array.slice(-length));
  //     assert.deepEqual(wrapped[methodName]().slice(null).value(), array.slice(null));

  //     assert.deepEqual(wrapped[methodName]().slice(0, 1).value(), array.slice(0, 1));
  //     assert.deepEqual(wrapped[methodName]().slice(NaN, '1').value(), array.slice(NaN, '1'));

  //     assert.deepEqual(wrapped[methodName]().slice(0.1, 1.1).value(), array.slice(0.1, 1.1));
  //     assert.deepEqual(wrapped[methodName]().slice('0', 1).value(), array.slice('0', 1));
  //     assert.deepEqual(wrapped[methodName]().slice(0, '1').value(), array.slice(0, '1'));
  //     assert.deepEqual(wrapped[methodName]().slice('1').value(), array.slice('1'));
  //     assert.deepEqual(wrapped[methodName]().slice(NaN, 1).value(), array.slice(NaN, 1));
  //     assert.deepEqual(wrapped[methodName]().slice(1, NaN).value(), array.slice(1, NaN));
  //   });
  // }); FIXME
});
