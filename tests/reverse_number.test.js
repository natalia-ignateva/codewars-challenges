const reverse = require('../src/reverse_number');

it(`Should return reversed number`, () => {
    expect(reverse(1234)).toBe(4321);
    expect(reverse(10987)).toBe(78901);
    expect(reverse(1020)).toBe(201);
});
