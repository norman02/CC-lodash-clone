const assert = require("assert");
const _ = require("./_");

describe("Clamp", () => {
  it("clamps a number in the range", () => {
    assert.strictEqual(2, _.clamp(2, 1, 3));
  });
  it("clamps values by the lower bound", () => {
    assert.strictEqual(1, _.clamp(0, 1, 3));
  });
  it("clamps the value by the upper bound", () => {
    assert.strictEqual(3, _.clamp(5, 1, 3));
  });
});
