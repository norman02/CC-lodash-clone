const assert = require("assert");
const _ = require("../_");

const multiply = _.multiply;

describe("multiply", () => {
  it("should return the product of two numbers", () => {
    assert.strictEqual(multiply(6, 4), 24);
    assert.strictEqual(multiply(-6, 4), -24);
  });
  it("should coerce arguments to numbers", () => {
    assert.strictEqual(multiply("6", "4"), 24);
    assert.strictEqual(multiply("x", "y"), NaN);
  });
});
