import { expect, should } from 'chai';
import { triple } from '../chai-basics.js';

should();

describe('The triple function', () => {
    it('returns the correct value', () => {
        expect(triple(6)).to.equal(18);
        triple(6).should.equal(18);
    });
});

describe('Expect assertions', () => {
    it('Can test objects', () => {
        expect({ a: 1, b: 2, c: 3 }).to.have.property('c')
                                    .and.to.not.have.property('d');
        expect({ a: 1 }).to.deep.equal({ a: 1 });
        expect({ a: 1 }).to.have.any.keys('a', 'b', 'c');
    })
})

describe('Should assertions', () => {
    it('Can test objects', () => {
        const obj = { a: 1, b: 2, c: 3 };
        obj.should.have.property('c').and.not.have.property('d');
        obj.should.deep.equal({ a: 1, b: 2, c: 3 });
        obj.should.have.any.keys('a', 'b', 'c');
    });
});

describe('Exploratory Challenge', () => {
    it('Array has length', () => {
        expect([1, 2, 3]).to.have.length(3);
    });

    it('Array has value', () => {
        expect([1, 2, 3]).to.include(2);
    });

    it('The .which word', () => {
        expect([1, 2, 3]).to.be.an('array').which.is.not.empty;
    });

    it('The .with word', () => {
        expect({ a: [1, 2, 3] }).to.have.property('a').with.length(3);
    });

    it('The .but word', () => {
        expect([1, 2, 3]).to.include(3).but.not.include(4);
    });

    it('Checking nested properties', () => {
        expect({ a: { b: { c: 5 }}}).to.have.nested.property('a.b.c');
    });
});