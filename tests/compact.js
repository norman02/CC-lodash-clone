const assert = require("assert");
const compact = require("../compact");

describe("compact", () => {
  it("returns an array of filtered values", () => {
    assert.deepEqual(compact([0, 1, false, 2, "", 3]), [1, 2, 3]);
    assert.deepEqual(compact([false]), []);
  });
});

