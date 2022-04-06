const assert = require("assert");
const inRange = require("../inRange");

describe("inRange", () => {
  it("returns true if the number is in range", () => {
    let result = inRange(3, 2, 4);
    let expected = true;
    assert.strictEqual(expected, result);
  });
  it("returns false if the number is not in range", () => {
    let result = inRange(5, 2, 4);
    let expected = false;
    assert.strictEqual(expected, result);
  });
  it("assumes start = 0 if no input", () => {
    let result = inRange(4, 8);
    let expected = true;
    assert.strictEqual(expected, result);
  });
  it("works with negative numbers", () => {
    let result = inRange(-3, -2, -6);
    let expected = true;
    assert.strictEqual(expected, result);
  });
});
