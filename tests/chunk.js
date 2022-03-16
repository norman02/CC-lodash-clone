const assert = require("assert");
const _ = require("../_");

const chunk = _.chunk;

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
