// Given some JSON data returned from an API, dynamically generate content
// Use Fetch API
// https://randomuser.me/api/?results=5
// Use async/await

import fetch from 'node-fetch';

const apiUrl = 'https://randomuser.me/api/?results=5';
const newList = document.createElement('ul');
const newFragment = document.createDocumentFragment();

async function generateData(apiUrl) {
    let obj = await fetch(apiUrl);
    let text = await obj.text();
    let jsonified = await JSON.parse(text);

    jsonified.results.forEach(person => {
        let newListItem = document.createElement('li');
        newListItem.innerHTML = `<img src=${person.picture.medium} /><span>${person.name.first} ${person.name.last}</span>`;
        newFragment.appendChild(newListItem);
    });

    newList.append(newFragment);
    document.body.appendChild(newList);
}

generateData(apiUrl);

// NOTE need webpack / babel to run this without an error RE fetch/modules/require