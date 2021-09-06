const deepCount = require('../src/array_deep_count');

it(`Should return the number of all elements within inner-level arrays`, () => {
    expect(deepCount([])).toBe(0);
    expect(deepCount([1, 2, 3])).toBe(3);
    expect(deepCount(['x', 'y', ['z']])).toBe(4);
    expect(deepCount([1, 2, [3, 4, [5]]])).toBe(7);
    expect(deepCount([[[[[[[[[]]]]]]]]])).toBe(8);
});
