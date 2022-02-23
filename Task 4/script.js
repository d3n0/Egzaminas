/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(response => response.json())
.then(cars => {
    const output = document.getElementById('output');
    cars.forEach(car => {
        let card = document.createElement('div');
        output.append(card);
        let title = document.createElement('h4');
        title.textContent = car.brand;
        card.append(title);
        let modelsList = document.createElement('ul');
        card.append(modelsList);

        car.models.forEach(model => {
            let listItem = document.createElement('li');
            listItem.textContent = model;
            modelsList.append(listItem);
        });
    });
});