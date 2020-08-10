const { create, assgin, shallowClone, deepClone, instanceOf } = require("../object");
const { expect } = require("chai");

describe('handwrite object\'s function test', function() {
  const source = {
    a: 1,
    b: [ 'e', 'f', 'g' ],
    c: { h: { i: 2 } }
  }

  it('create test', function() {
    const cloneSource = create(source);
    expect(cloneSource.__proto__).to.be.equal(source)
  })

  it('assgin test', function() {
    const assginSource = assgin({}, source);
    expect(assginSource).to.deep.equal(source);
  })

  it('shallowClone test', function() {
    const shallowCloneSource = shallowClone(source);
    expect(shallowCloneSource).to.deep.equal(source);
  })

  it('deepClone test', function() {
    const deepCloneSource = deepClone(source);
    expect(deepCloneSource).to.deep.equal(source);
  })

  it('instanceOf test', function() {
    expect(instanceOf(source, Object)).to.be.true;
  })
})
