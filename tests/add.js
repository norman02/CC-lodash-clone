const assert = require("assert");
const _ = require("../_");

describe("add", () => {
  it("should return the sum of two numbers", () => {
    let result = _.add(6, 4);
    let expected = 10;
    assert.strictEqual(expected, result);
  });
  it("should work with negative numbers", () => {
    let result = _.add(6, -4);
    let expected = 2;
    assert.strictEqual(expected, result);
  });
});
