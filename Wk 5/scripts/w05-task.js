/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let art = document.createElement("article");
        let head3 = document.createElement("h3");
        head3.textContent = temple.templeName;
        let imag = document.createElement("img");
        imag.setAttribute("src", temple.imageUrl);
        imag.setAttribute("alt", temple.location);
        art.appendChild(head3);
        art.appendChild(imag);
        templesElement.appendChild(art);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.querySelector("#filtered").value;
    let utahTList = temples.filter((temple) => temple.location.includes("Utah"));
    switch (filter) {
        case ("utah"):
            displayTemples(utahTList);
            break;
        case ("notutah"):
            let noutahTList = temples.filter((temple) => !temple.location.includes("Utah"));
            displayTemples(noutahTList);
            break;
        case ("older"):
            let olderTList = temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTList);
            break;
        case ("all"):
            displayTemples(temples);
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });