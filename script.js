

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
    let menuStarter = document.getElementById("menu_starter");
    let menuMain = document.getElementById("menu_main");
    let menuDessert = document.getElementById("menu_dessert");
    let menuDrinks = document.getElementById("menu_drinks");
    for (let i = 0; i < menus.length; i++) {
        
        if (menus[i].category == "Vorspeise") {
            menuStarter.innerHTML += getMenuTemplate(menus[i], i);
        }else if (menus[i].category == "Hauptspeise") {
            menuMain.innerHTML += getMenuTemplate(menus[i], i);
        }else if (menus[i].category == "Dessert") {
            menuDessert.innerHTML += getMenuTemplate(menus[i], i);
        }else if (menus[i].category == "Getränke") {
            menuDrinks.innerHTML += getMenuTemplate(menus[i], i);
        } 
    }
}
