/*
Challenge: Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

function narcissistic(value) {
    let digitsAsStrings = value.toString().split('');

    let sumOfExponentals = digitsAsStrings.reduce(
        (accumulator, current) =>
            accumulator + parseInt(current) ** digitsAsStrings.length,
        0,
    );

    return sumOfExponentals === value;
}
