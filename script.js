

function init() {
    renderMenu();
    loadToLocalstorage();
}

function loadToLocalstorage() {
    if (!localStorage.getItem("menus")) {
        localStorage.setItem("menus", JSON.stringify(menus));
    } else {
        menus = JSON.parse(localStorage.getItem("menus"));
    }
}

function renderMenu() {
    renderStarterMenu();
    renderMainMenu();
    renderDessertMenu();
    renderDrinksMenu();
}
function renderStarterMenu() {
    let menuStarter = document.getElementById("menu_starter");
    for (let i = 0; i < menus.length; i++) {
        const myMenusStarter = menus[i];
        if (menus[i].category == "Vorspeise") {
            menuStarter.innerHTML += getMenuStarter(myMenusStarter, i);
            return myMenusStarter
        }
    }
} 


function renderMainMenu() {
    let menuMain = document.getElementById("menu_main");
    for (let j = 0; j < menus.length; j++) {
        const myMenusMain = menus[j];
        if (menus[j].category == "Hauptspeise") {
            menuMain.innerHTML += getMenuMain(myMenusMain, j);
            return myMenusMain
        }
    }
} 

function renderDessertMenu() {
    let menuDessert = document.getElementById("menu_dessert");
    for (let k = 0; k < menus.length; k++) {
        const myMenusDesserts = menus[k];
        if (menus[k].category == "Dessert") {
            menuDessert.innerHTML += getMenuDessert(myMenusDesserts, k);
            return myMenusDesserts
        }
    }
} 

function renderDrinksMenu() {
    let menuDrinks = document.getElementById("menu_drinks");
    for (let l = 0; l < menus.length; l++) {
        const myMenusDrinks = menus[l];
        if (menus[l].category == "Getränke") {
            menuDrinks.innerHTML += getMenuDrinks(myMenusDrinks, l);
            return myMenusDrinks
        }
    }
} 