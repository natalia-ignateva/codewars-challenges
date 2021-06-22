/*
Challenge: Write function findSum.
Upto and including n, this function will return the sum of all multiples of 3 and 5.
*/

function findSum(n) {
    return [...Array(n + 1).keys()].reduce((acc, n) =>
        n % 3 === 0 || n % 5 === 0 ? acc + n : acc,
    );
}
