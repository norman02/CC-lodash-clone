const assert = require("assert");
const _ = require("../_");

const max = _.max;

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
