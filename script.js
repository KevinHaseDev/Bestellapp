

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
    menu.innerHTML = "";
    for (let i = 0; i < menus.length; i++) {
        const myMenus = menus[i];
        menu.innerHTML += menuTemplate(myMenus,i);
    }
    return console.log(renderMenu());
    
}