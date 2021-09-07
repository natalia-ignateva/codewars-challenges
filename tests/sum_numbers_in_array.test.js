const arraySum = require('../src/sum_numbers_in_array');

describe('arraySum', () => {
    it('Should handle non-nested lists', function () {
        expect(arraySum([1])).toBe(1);
        expect(arraySum([1, 2, 3, 4])).toBe(10);
        expect(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    });
    it('Non-nested edge case', () => {
        expect(arraySum([])).toBe(0);
    });
    it('Should handle simple nestings', () => {
        expect(arraySum([[1], []])).toBe(1);
        expect(arraySum([[1, 2, 3, 4]])).toBe(10);
    });
    it('Should handle complex nestings', () => {
        expect(arraySum([1, [1], [[1]], [[[1]]]])).toBe(4);
        expect(arraySum([1, [1], [1, [1]], [1, [1], [1, [1]]]])).toBe(8);
    });
    it('Complex nesting edge case', () => {
        expect(
            arraySum([
                [[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]],
                [],
            ]),
        ).toBe(0);
    });
});
