const assert = require("assert");
const chunk = require("../chunk");
const lodashStable = require("lodash");
const falsey = lodashStable.falsey; 

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
  it("should treat falsey `size` values, except `undefined`, as `0`", () => {
    const expected = lodashStable.map(falsey, (value) =>
      value === undefined ? [[0], [1], [2], [3], [4], [5]] : []
    );

    const actual = lodashStable.map(falsey, (size, index) =>
      index ? chunk(array, size) : chunk(array)
    );

    assert.deepStrictEqual(actual, expected);
  });
});
