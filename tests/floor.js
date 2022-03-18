const assert = require("assert");
const floor = require("../floor");

describe("floor", () => {
  it("returns the number rounded down", () => {
    assert.strictEqual(floor(4.006), 4);
    assert.strictEqual(floor(6.004), 6);
  });
});

// FIXME: precision not working
