const {sum} = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe("sum testing", () => {
  it('should return a promise', () => {
    return sum([1,'2',3,'z'])
      .then(ans => {
        expect(ans).to.equal(6);
      });
 });
});