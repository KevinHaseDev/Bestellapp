function getMenuTemplate(myMenusStarter, i) {
    return `
    <div class="content">
        <h3 class="menu_name">${myMenusStarter.name}<button class="btn" onclick="onAddMenu(${i})"><img src="./assets/icon/add_button.svg" alt="add button"></button></h3>
            <p class="menu_ingredients">${myMenusStarter.ingredients}</p>
            <p class="menu_price">${myMenusStarter.price}€</p>
            </div>
            `
}

function getCartTemplate(myCart) {
    return `
    <div class="content">
        <h3 class="menu_name">${myCart.name}</h3>
            <p class="menu_ingredients"> <img class="btn_amount" onclick="reduceAmountCart" src="./assets/icon/reduce_circle.svg" alt="reduce button">${myCart.amount}<img class="btn_amount" onclick="addAmountCart" src="./assets/icon/add_circle.svg" alt="add button"></p>
            <p class="menu_price">${myCart.price * myCart.amount}€</p>
    </div>
     `
}