const { shallowClone, deepClone } = require("../object");
const assert = require("assert");

describe('handwrite object test', function() {

  const source = {
    a: 1,
    b: [ 'e', 'f', 'g' ],
    c: { h: { i: 2 } }
  }

  it('shallowClone test', function() {
    const shallowCloneSource = shallowClone(source);
    assert.deepStrictEqual(shallowCloneSource.c, source.c)
  })

  it('deepClone test', function() {
    const deepCloneSource = deepClone(source);
    assert(deepCloneSource instanceof Object);
  })
})
