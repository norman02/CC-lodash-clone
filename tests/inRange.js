const assert = require("assert");
const inRange = require("../inRange");

describe("inRange", () => {
  it("returns true if the number is in range", () => {
    assert.strictEqual(inRange(3, 2, 4), true);
  });
  it("returns false if the number is not in range", () => {
    assert.strictEqual(inRange(5, 2, 4), false);
  });
  it("assumes start = 0 if no input", () => {
    assert.strictEqual(inRange(4, 8), true);
  });
  it("works with negative numbers", () => {
    assert.strictEqual(inRange(-3, -2, -6), true);
  });
});
