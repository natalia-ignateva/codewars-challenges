/* Challenge: Write a function that sums squares of numbers in list that may contain more lists.
 */

function sumSquares(arr) {
    return arr.reduce(
        (acc, el) => (Array.isArray(el) ? acc + sumSquares(el) : acc + el ** 2),
        0,
    );
}
