const assert = require("assert");
const _ = require("../_");

const sum = _.sum;

describe("sum", () => {
  it("returns the sum of the numbers in array", () => {
    assert.strictEqual(sum([4, 2, 8, 6]), 20);
    assert.strictEqual(sum([2, 8, 6]), 16);
  });
});
