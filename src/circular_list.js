/*
Challenge:

Create a Circular List

A circular list is of finite size,
but can infititely be asked for its previous and next elements.
This is because it acts like it is joined at the ends and loops around.

For example, imagine a CircularList of [1, 2, 3, 4].
Five invocations of next() in a row should return 1, 2, 3, 4 and then 1 again.
At this point, five invocations of prev() in a row should return 4, 3, 2, 1
and then 4 again.

Your CircularList is created by passing a vargargs parameter in,
e.g. new CircularList(1, 2, 3).
Your list constructor/init code should throw an Exception if nothing is passed in.
*/

class CircularList {
    constructor(...args) {
        this.counter = -1;
        this.arr = [...args];
        if (this.arr.length === 0) {
            throw new Error('Invalid input!');
        }
    }

    next() {
        this.counter !== this.arr.length - 1
            ? this.counter++
            : (this.counter = 0);
        return this.arr[this.counter];
    }

    prev() {
        this.counter > 0
            ? this.counter--
            : (this.counter = this.arr.length - 1);
        return this.arr[this.counter];
    }
}
