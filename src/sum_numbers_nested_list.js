/*Challenge: Implement a function to calculate the sum of the numerical values in a nested list. */

function sumNested(arr) {
    return arr.reduce(
        (acc, el) => (Number.isInteger(el) ? acc + el : acc + sumNested(el)),
        0,
    );
}
