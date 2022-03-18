const assert = require("assert");
const ceil = require("../ceil");

describe("ceil", () => {
  it("should compute a number rounded up", () => {
    let result = ceil(4.006);
    let expected = 5;
    assert.strictEqual(result, expected);
    result = ceil(3.1);
    expected = 4;
    assert.strictEqual(result, expected);
  });
  it("should compute the number rounded up to the precision", () => {
    // let result = ceil(6.004, 2);
    // let expected = 6.01;
    // assert.strictEqual(result, expected);
    // result = ceil(6040, -2);
    // expected = 6100;
    // assert.strictEqual(result, expected); FIXME: implement with precision
  });
});
