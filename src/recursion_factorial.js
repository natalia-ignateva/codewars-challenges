/* Challenge: You have to create the function factorial
that receives n and returns n!. You have to use recursion.*/

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

module.exports = factorial;
