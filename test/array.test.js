const { arrayFlatToString, arrayFlatRecu, arrayFlatRecu2, arrayReduce } = require('../array');
const { expect } = require("chai");

describe('handwrite array\'s function test', function() {

  const arr = [1, 2, [12, 15]];

  it('arrayFlatToString', function() {
    expect(arrayFlatToString(arr)).to.deep.equal([1, 2, 12, 15])
  })

  it('arrayFlatRecu', function() {
    expect(arrayFlatRecu(arr)).to.deep.equal([1, 2, 12, 15])
  })

  it('arrayFlatRecu2', function() {
    expect(arrayFlatRecu2(arr)).to.deep.equal([1, 2, 12, 15])
  })

  it('arrayReduce', function() {
    const flatArr = arrayFlatRecu(arr);
    const reduceResult = arrayReduce(flatArr, (a, b) => a + b)
    expect(reduceResult).to.be.equal(30)
  })

})
