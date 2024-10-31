const chai = require('chai');
const expect = chai.expect;

describe('Simple Test', ()=>{
    it('Test', ()=>{
        const a = 1
        const b = 5
        expect(a+b).to.equal(6)
    })
})