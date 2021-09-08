const factorial = require('../src/recursion_factorial');

it(`Should return n! from received n`, () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
});
