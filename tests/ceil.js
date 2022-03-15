const assert = require("assert");
const _ = require("../_");

describe("ceil", () => {
  it("should compute a number rounded up", () => {
    let result = _.ceil(4.006);
    let expected = 5;
    assert.strictEqual(result, expected);
    result = _.ceil(3.1);
    expected = 4;
    assert.strictEqual(result, expected);
  });
  it("should compute the number rounded up to the precision", () => {
    result = _.ceil(6.004, 2);
    expected = 6.01;
    assert.strictEqual(result, expected);
  });
});
