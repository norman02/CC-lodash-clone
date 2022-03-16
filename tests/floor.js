const assert = require("assert");
const _ = require("../_");

const floor = _.floor;

describe("floor", () => {
  it("returns the number rounded down", () => {
    assert.strictEqual(floor(4.006), 4);
    assert.strictEqual(floor(6.004), 6);
  });
});
