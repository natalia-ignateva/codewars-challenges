const findSum = require('../src/sum_multiples_3_5');

it(`Should return the sum of all multiples of 3 and 5 upto n`, () => {
    expect(findSum(5)).toBe(8);
    expect(findSum(10)).toBe(33);
});
