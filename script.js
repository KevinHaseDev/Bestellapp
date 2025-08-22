

function init() {
    renderMenu();
    loadToLocalstorage();
    //menü anzeigen lassen

    //wert zurückgeben
}

function loadToLocalstorage() {
    if (!localStorage.getItem("menus")) {
        localStorage.setItem("menus", JSON.stringify(books));
    } else {
        books = JSON.parse(localStorage.getItem("menus"));
    }
}

function renderMenu() {
    let menu = document.getElementById("menu");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}