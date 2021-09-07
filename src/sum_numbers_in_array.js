/*
Challenge: Sum every number value in the array, and any nested arrays (to any depth). Ignore all other types of values.
*/

function arraySum(arr) {
    return arr.reduce(
        (acc, el) =>
            Array.isArray(el)
                ? acc + arraySum(el)
                : acc + (typeof el === 'number' ? el : 0),
        0,
    );
}

module.exports = arraySum;
