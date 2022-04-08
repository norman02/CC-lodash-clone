const assert = require("assert");
const concat = require("../concat");

describe("concat", () => {
  it("should shallow clone `array`", () => {
    const array = [1, 2, 3];
    const actual = concat(array);
    const expected = [1, 2, 3];

    assert.deepStrictEqual(actual, expected);
    assert.notStrictEqual(actual, expected);
  });
});

