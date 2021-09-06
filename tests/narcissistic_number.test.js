const narcissistic = require('../src/narcissistic_number');

it(`Should check if a number is narcissistic`, () => {
    expect(narcissistic(7)).toBe(true);
    expect(narcissistic(371)).toBe(true);
    expect(narcissistic(1652)).toBe(false);
});
