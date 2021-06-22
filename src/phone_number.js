/*
Challenge: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

function createPhoneNumber(numbers) {
    const digitsAsString = numbers.join('');

    return `(${digitsAsString.substring(0, 3)}) ${digitsAsString.substring(
        3,
        6,
    )}-${digitsAsString.substring(6)}`;
}
