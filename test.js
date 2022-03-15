const assert = require("assert");
const _ = require("./_");

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

describe("inRange", () => {
  it("returns true if the number is in range", () => {
    let result = _.inRange(3, 2, 4);
    let expected = true;
    assert.strictEqual(expected, result);
  });
  it("returns false if the number is not in range", () => {
    let result = _.inRange(5, 2, 4);
    let expected = false;
    assert.strictEqual(expected, result);
  });
  it("assumes start = 0 if no input", () => {
    let result = _.inRange(4, 8);
    let expected = true;
    assert.strictEqual(expected, result);
  });
  it("works with negative numbers", () => {
    let result = _.inRange(-3, -2, -6);
    let expected = true;
    assert.strictEqual(expected, result);
  });
});
