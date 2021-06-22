/* Challenge:
In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
*/

Array.prototype.square = function () {
    return this.map((num) => num ** 2);
};
Array.prototype.cube = function () {
    return this.map((num) => num ** 3);
};
Array.prototype.average = function () {
    return this.sum() / this.length;
};
Array.prototype.sum = function () {
    return this.reduce((acc, num) => (acc += num), 0);
};
Array.prototype.even = function () {
    return this.reduce(
        (acc, num) => (num % 2 === 0 ? acc.concat(num) : acc),
        [],
    );
};
Array.prototype.odd = function () {
    return this.reduce(
        (acc, num) => (num % 2 !== 0 ? acc.concat(num) : acc),
        [],
    );
};
