/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "J",
    photo: "imgs/profile.png",
    photoName: "Me",
    favoriteFoods: ["Pizza", "Coleslaw", "Rice", "Mayonnaise"],
    hobbbies: ["Golf", "Lounge", "Eat", "Bird Watching"],
    placesLived: [],
};
myProfile.placesLived.push(
    {
        place: "35°29'50N 138°45'17E",
        length: "[REDACTED]"
    }
);
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.photoName;
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
myProfile.hobbbies.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#hobbies').appendChild(li);
});
myProfile.placesLived.forEach(food => {
    let dt = document.createElement('dt');
    dt.textContent = food.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = food.length;
    document.querySelector('#places-lived').appendChild(dd);
})

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


