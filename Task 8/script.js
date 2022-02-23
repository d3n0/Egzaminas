/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const Calculator = () => {
    this.sum = (first, second) => {
        return first+second;
    };
    this.subtraction = (first, second) => {
        return first-second;
    };
    this.multiplication = (first, second) => {
        return first*second;
    };
    this.division = (first, second) => {
        return first / second;
    };
};