function init() {
    loadMenuToLocalstorage();
    loadCartFromLocalstorge();
    renderMenu();
    renderCart();
}

function loadCartFromLocalstorge() {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
}

function loadMenuToLocalstorage() {
    if (!localStorage.getItem("menus")) {
        localStorage.setItem("menus", JSON.stringify(menus));
    } else {
        menus = JSON.parse(localStorage.getItem("menus"));
    }
}

function saveCartToLocalstorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
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
    let headline = document.getElementById("cart_headline")
    let dialog = document.getElementById("dialog_section")
    basket.innerHTML = "";
    dialog.innerHTML = "";
    if (cart.length == 0) {
        basket.innerHTML = `<img class="cart_img" src="./assets/img/empty_cart_two.jpg" alt="slogan for empty cart">`;
        headline.classList.add("d_none");
    }else {
        for (let i = 0; i < cart.length; i++) {
            basket.innerHTML += getCartTemplate(cart[i], i);
            dialog.innerHTML += getCartTemplate(cart[i], i);
            headline.classList.remove("d_none");
        }
    }
    allPriceAdd();
}
function addAmountCart(i) {
    cart[i].amount = cart[i].amount + 1;
    saveCartToLocalstorage();
    renderCart();
}

function deleteCart() {
    cart = [];
    saveCartToLocalstorage();
    renderCart();
}

function onAddMenu(i) {
    let index = getMenuIndex(menus[i].name);
    if (index == -1) {
        cart.push({
            name: menus[i].name,
            price: menus[i].price,
            amount: 1
        });
    } else {
        cart[index].amount += 1;
    }
    saveCartToLocalstorage();
    renderCart();
}

function reduceAmountCart(i) {
    cart[i].amount = cart[i].amount - 1;
    if (cart[i].amount == 0) {
        cart.splice(i, 1);
    }
    saveCartToLocalstorage();
    renderCart();
}
function deleteCartArrayIndex(i) {
    cart.splice(i, 1);
    saveCartToLocalstorage(); 
    renderCart();  
}

function allPriceAdd() {
    let total = 0;
    let basketSum = document.getElementById("basket_sum");
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].amount;
    }

    if (cart.length === 0) {
        basketSum.innerHTML = "";
    } else {
        basketSum.innerHTML = `
            <div class="basket_total">
                Gesamt: ${parseFloat(total.toFixed(2))} €
            </div>
        `;
    }
}

function getMenuIndex(menuName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == menuName) {
            return i;
        }
    }
    return -1;
}

function openDialog() {
    let dialogRef = document.getElementById("overlay")
    dialogRef.showModal();
    dialogRef.classList.add("opened")
}
function closeDialog() {
    let dialogRef = document.getElementById("overlay")
    dialogRef.close();
    dialogRef.classList.remove("opened")
}

function clickToPurchase() {
    let purchase = document.getElementById("purchase_dialog");
    purchase.showModal();
    deleteCart();
    saveCartToLocalstorage();
    renderCart();
}

function closePurchaseDialog() {
    let purchase = document.getElementById("purchase_dialog");
    purchase.close();
}
