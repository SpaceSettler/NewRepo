
let favorites = [];
let favSaveName;
let favSaveImg;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();

        document.querySelector("#img").innerHTML = `<img src="${data.sprites.front_default}" alt="Image of ${data.name}"">`;
        favSaveName = data.name;
        favSaveImg = data.sprites.front_default;
    }
}
function doStuff() {
    let random = document.querySelector("#setName").value;  
    let url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    getPokemon(url);
}

function saveStuff() {
    favorites.push({
        name: favSaveName,
        image: favSaveImg
    });
    const newFav = document.createElement("li");
    newFav.innerHTML = `<p>${favSaveName}</p><img src="${favSaveImg}" alt="Image of ${favSaveName}">`;
    document.querySelector("#favFacts").appendChild(newFav);
}

document.querySelector("#Save").addEventListener("click", () => saveStuff());
document.querySelector("#getName").addEventListener("click", () => doStuff());