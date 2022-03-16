const assert = require("assert");
const _ = require("../_");

const subtract = _.subtract;

describe("subtract", () => {
  it("should return the difference of two numbers", () => {
    assert.strictEqual(subtract(6, 4), 2);
    assert.strictEqual(subtract(6, -4), 10);
  });
  it("should coerce non-numeric values to numbers", () => {
    assert.strictEqual(subtract("6", "4"), 2);
    assert.strictEqual(subtract("x", "y"), NaN);
  });
});
