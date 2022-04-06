const assert = require("assert");
const clamp = require("../clamp");

describe("Clamp", () => {
  it("clamps a number in the range", () => {
    assert.strictEqual(clamp(1, 2, 3), 2);
  });
  it("clamps values by the lower bound", () => {
    assert.strictEqual(clamp(0, 1, 3), 1);
  });
  it("clamps the value by the upper bound", () => {
    assert.strictEqual(clamp(5, 1, 3), 3);
  });
});
