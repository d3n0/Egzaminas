/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

fetch(ENDPOINT)
.then(response => response.json())
.then(data => {
    return users = data.map(user => {return {login: user.login, avatar: user.avatar_url};});
});

document.getElementById('btn').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerHTML = '';
    users.forEach(user => {
        let card = document.createElement('div');
        card.innerHTML = `<span><a href='${user.avatar}' target='_blank'><img src='${user.avatar}'></a><span class='login'>${user.login}</span></span>`;
        output.append(card);
    });
});

