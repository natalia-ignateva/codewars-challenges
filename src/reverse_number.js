/* Challenge: Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321.
You should do this without converting the inputted number into a string.
*/

function reverse(n) {
    let reversed = 0;
    while (n) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return reversed;
}
