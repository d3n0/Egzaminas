/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById('submit-btn').addEventListener('click', event => {
    const kgs = Number(document.getElementById('search').value);
    const lbs = kgs * 2.2046;
    const grams = kgs / 0.001;
    const ozs = kgs * 35.274;

    document.getElementById('output').innerHTML = `<h4>${kgs} kilograms is equal to </h4><p>${lbs} <b>Lbs</b></p><p>${grams} <b>Grams</b></p><p>${ozs} <b>Oz</b></p>`;
    event.preventDefault();
});