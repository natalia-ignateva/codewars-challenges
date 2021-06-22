/* Challenge: Make a function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, function should returns 0
*/

function sequenceSum(begin, end, step) {
    if (begin > end) return 0;
    let sequence = [begin];
    for (let i = 1; i <= (end - begin) / step; i++) {
        sequence.push(sequence[sequence.length - 1] + step);
    }
    return sequence.reduce((acc, num) => acc + num, 0);
}
