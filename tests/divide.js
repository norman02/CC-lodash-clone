const assert = require("assert");
const _ = require("../_");

describe("divide", () => {
  it("should return the quotient of the dividend and the divisor", () => {
    let result = _.divide(6, 4);
    let expected = 1.5;
    assert.strictEqual(expected, result);
    result = _.divide(-6, 4);
    expected = -1.5;
    assert.strictEqual(expected, result);
  });
  it("should coerce arguments to numbers", () => {
    assert.strictEqual(_.divide("6", "4"), 1.5);
    assert.strictEqual(_.divide("x", "y"), NaN);
  });
});
