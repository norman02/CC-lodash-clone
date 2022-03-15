const assert = require("assert");
const _ = require("../_");

describe("Clamp", () => {
  let result = _.clamp(2, 1, 3);
  let expected = 2;
  it("clamps a number in the range", () => {
    assert.strictEqual(expected, result);
  });
  it("clamps values by the lower bound", () => {
    result = _.clamp(0, 1, 3);
    expected = 1;
    assert.strictEqual(expected, result);
  });
  it("clamps the value by the upper bound", () => {
    result = _.clamp(5, 1, 3);
    expected = 3;
    assert.strictEqual(expected, result);
  });
});