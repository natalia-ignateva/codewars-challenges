const mygcd = require('../src/greatest_common_divisor');

it(`Should return the greatest common divisor of two positive integers`, () => {
    expect(mygcd(30, 12)).toBe(6);
    expect(mygcd(8, 9)).toBe(1);
    expect(mygcd(1, 1)).toBe(1);
});
