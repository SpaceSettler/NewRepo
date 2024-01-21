/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "J Richardson";
const currentYear = "2024";
let profilePicture = 'images/profile.png';
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#img');
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);
let foodArray = ["Mango", "Orange", "Banana", "Milk"];
foodElement.textContent = foodArray;
let singleFavFood = "Water";
foodArray.push(singleFavFood);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;


/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






