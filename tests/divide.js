const assert = require("assert");
const divide = require("../divide");

describe("divide", () => {
  it("should return the quotient of the dividend and the divisor", () => {
    assert.strictEqual(divide(1, 2), 0.5);
    assert.strictEqual(divide(-1, 2), -0.5);
  });
  it("should coerce arguments to numbers", () => {
    assert.strictEqual(divide("1", "2"), 0.5);
    assert.strictEqual(divide("x", "y"), NaN);
  });
});
