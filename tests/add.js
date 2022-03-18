const assert = require("assert");
const add = require('../add')

describe('add', ()=> {
  it('should add two numbers', ()=> {
    assert.strictEqual(add(1, 2), 3);
    assert.strictEqual(add(-1, 2), 1);
    assert.strictEqual(add(-1, -2), -3);
  });

  it('should not coerce arguments to numbers', ()=> {
    assert.strictEqual(add('1', '2'), '12');
    assert.strictEqual(add('x', 'y'), 'xy');
  });
});
