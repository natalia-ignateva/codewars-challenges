/*
Count the number of divisors of a non-negative integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
*/

function countDivisors(num) {
    return [...Array(num).keys()].reduce(
        (acc, i) => (num % (i + 1) ? acc : ++acc),
        0,
    );
}
