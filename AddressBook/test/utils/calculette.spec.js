const assert = require('assert');
const expect = require('chai').expect;
const calc = require('../../utils/calculette');

describe('All Calculette Tests', () => {
    describe('All addition Tests', () => {
        it('should return 3 when 1 + 2', () => {
            expect(calc.addition(1, 2)).to.equals(3);
        });
    });
});