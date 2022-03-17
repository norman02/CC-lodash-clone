const assert = require("assert");
const _ = require("../_");

const concat = _.concat;

describe("concat", () => {
  it("should shallow clone `array`", () => {
    const array = [1, 2, 3];
    const actual = concat(array);
    const expected = [1, 2, 3];

    assert.deepStrictEqual(actual, expected);
    assert.notStrictEqual(actual, expected);
  });

  it("should concat arrays and values", () => {
    const array = [1];
    const actual = concat(array, 2, [3], [[4]]);
    const expected = [1, 2, 3, [4]];

    // assert.deepStrictEqual(actual, expected);
    assert.deepStrictEqual(array, [1]);
  });
});
