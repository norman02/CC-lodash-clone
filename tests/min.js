const assert = require("assert");
const min = require('../min')

describe("min", () => {
  it("should return the minimum value", () => {
    assert.strictEqual(min([4, 2, 8, 6]), 2);
    assert.strictEqual(min([4, 8, 6]), 4);
  });
  it("should work with non-numeric collections", () => {
    assert.strictEqual(min(["a", "b"]), "a");
  });
  it("should return undefined for an empty array", () => {
    assert.strictEqual(min([]), undefined);
  });
});
