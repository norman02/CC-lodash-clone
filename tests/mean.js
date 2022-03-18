const assert = require("assert");
const mean = require("../mean");

describe("mean", () => {
  it("should compute the mean of an array", () => {
    assert.strictEqual(mean([4, 2, 8, 6]), 5);
    assert.strictEqual(mean([2, 2, 2, 2]), 2);
  });
  it("should return `NaN` when passing empty `array` values", () => {
    assert.strictEqual(mean([]), NaN);
  });
});
