/* Challenge:
You've just moved into a street with exactly the same amount n of houses on either side of the road.
Naturally, you would like to find out the house number on the other side of the street.

Evens increase on the right; odds decrease on the left.
House numbers start at 1 and increase without gaps.
When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
So, the street looks like this:

1| |6
3| |4
5| |2
*/

function numberOverTheRoad(address, housesInLineCount) {
    return housesInLineCount * 2 + 1 - address;
}
