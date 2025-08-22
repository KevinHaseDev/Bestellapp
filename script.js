

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
        menu.innerHTML += `
    <main>
        <div>
            <nav>
                <a href="">Vorspeisen</a>
                <a href="">Hauptspeisen</a>
                <a href="">Desserts</a>
                <a href="">Getränke</a>
            </nav>
        </div>
        <h2>Vorspeisen</h2>
            <p></p>
            <p></p>
        <h2>Hauptspeisen</h2>
            <p></p>
            <p></p>
            <p></p>
        <h2>Desserts</h2>
            <p></p>
            <p></p>
        <h2>Getränke</h2>
            <p></p>
            <p></p>
    </main>`
    }
}