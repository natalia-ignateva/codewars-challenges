/*
Challenge: Create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
*/

function deepCount(arr) {
    return arr.reduce(
        (acc, el) => acc + (Array.isArray(el) ? deepCount(el) : 0),
        arr.length,
    );
}
