// Given an array of dishes, create an unordered list of all vegetarian options
const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti and Meatballs",
        vegetarian: false
    },
    {
        name: "Spaghetti and Eggplant",
        vegetarian: true
    },
    {
        name: "Pizza Diavola",
        vegetarian: false
    },
    {
        name: "Cacio e Pepe",
        vegetarian: true
    },
];

const vegetarianDishes = dishes.filter(dish => dish.vegetarian === true);

// Dynamically generate list in DOM of vegetarian items
let listHtml = '';
vegetarianDishes.forEach(vegDish => {
    listHtml += `<li>${vegDish.name}</li>`;
});
listHtml = `<ul>${listHtml}</ul>`;