const isograms = require('../src/isograms');

it(`Should check if string is an isogram`, () => {
    expect(isograms('isogram')).toBe(true);
    expect(isograms('aba')).toBe(false);
    expect(isograms('moOse')).toBe(false);
    expect(isograms('DisIsogram')).toBe(false);
    expect(isograms('')).toBe(true);
});
