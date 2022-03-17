const assert = require('assert')
const _ = require('../_')
const lodash = require('lodash')
const slice = _.slice


describe('slice', ()=> {
    const array = [1, 2, 3]

    it('should use a default `start` of `0` and a default `end` of `lenght`', ()=> {
        const actual = slice(array)
        assert.deepStrictEqual(actual, array)
        assert.notStrictEqual(actual, array)
    })
    it('should work wth a positive `start`', ()=> {
        assert.deepStrictEqual(slice(array, 1), [2,3])
        assert.deepStrictEqual(slice(array, 1,2), [2])
    })
    it('should work with a `start` >= `length`', ()=> {
        lodash.each([3, 4, Math.pow(2, 32), Infinity], function(start) {
            assert.deepStrictEqual(slice(array, start), [])
        })
    })
    it('should treat falsey `start` values as `0`', ()=> {
        const expected = lodash.map(false, lodash.constant(array))

        const actual = lodash.map(false, function(start){
            return slice(array, start)
        })

        assert.deepStrictEqual(actual, expected)
    })
    
})
