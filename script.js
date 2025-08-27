function init() {
    loadMenuToLocalstorage();
    loadCartToLocalstorge();
    renderMenu();
    renderCart();
}

function loadMenuToLocalstorage() {
    if (!localStorage.getItem("menus")) {
        localStorage.setItem("menus", JSON.stringify(menus));
    } else {
        menus = JSON.parse(localStorage.getItem("menus"));
    }
}

function loadCartToLocalstorge() {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        cart = JSON.parse(localStorage.getItem("cart"));
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
        } else if (menus[i].category == "Hauptspeise") {
            menuMain.innerHTML += getMenuTemplate(menus[i], i);
        } else if (menus[i].category == "Dessert") {
            menuDessert.innerHTML += getMenuTemplate(menus[i], i);
        } else if (menus[i].category == "Getränke") {
            menuDrinks.innerHTML += getMenuTemplate(menus[i], i);
        }
    }
}

function renderCart() {
    let basket = document.getElementById("basket");
    basket.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        basket.innerHTML += getCartTemplate(cart[i], i);
    }
}

function saveCartToLocalstorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function onAddMenu(i) {
    let index = getMenuIndex(menus[i].name);
   let priceNumber = menus[i].price;
    priceNumber = Math.round(priceNumber * 100) / 100;

    if (index == -1) {
        cart.push({
            name: menus[i].name,
            price: priceNumber,
            amount: 1
        });
    } else {
        cart[index].amount += 1;
    }
    saveCartToLocalstorage();
    renderCart();
}

function getMenuIndex(menuName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == menuName) {
            return i;
        }
    } return -1;

}

function reduceAmountCart(i) {
    cart[i].amount = cart[i].amount - 1;
    if (cart[i].amount == 0) {
        cart.splice(i, 1)
    }
    saveCartToLocalstorage();
    renderCart()
}

function addAmountCart(i) {
    cart[i].amount = cart[i].amount + 1;
    saveCartToLocalstorage();
    renderCart()
} 

function deleteCart(){
    cart = [];
    saveCartToLocalstorage();
    renderCart();
}

// Ich brauche eine Funktion die alle Preise zusammen rechnet und das ergebnis in der div delete and purchase einfügt.
// default wert wenn nichts im Warenkorb steht.