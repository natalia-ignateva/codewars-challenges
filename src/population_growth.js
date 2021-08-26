/*
Challenge:

In a small town the population is p0 = 1000 at the beginning of a year.
The population regularly increases by 2 percent per year
and moreover 50 new inhabitants per year come to live in the town.
How many years does the town need to see its population greater
or equal to p = 1200 inhabitants?

More generally given parameters:

    pCurr (integer, >0) - current population,
    pc (floating number, >=0) - a percentage of population growth per year,
    migrants (integer) - inhabitants coming or leaving each year
    p (integer, >0) - population to surpass,
    getYears - returns n number of entire years needed to get a population greater or equal to p.
*/

function getYears(pCurr, pc, migrants, p) {
    let counter = 0;
    while (pCurr < p) {
        pCurr += (pCurr * pc) / 100 + migrants;
        counter++;
    }
    return counter;
}
