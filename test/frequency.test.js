const getFreq = require('../frequency');
const chai = require('chai');
const expect = chai.expect;

describe('Frequency test', () => {
  const item = getFreq('uuduufduf');
  it("Should return an object", () => {
    expect(item).to.be.a('object');
  });
  it('Should equal', () => {
    expect(item).to.deep.equal({
      u: 5,
      d: 2,
      f: 2,
      unique: 3,
      average: 3,
      highest: 'u',
      highVal: 5

    })
  });
});