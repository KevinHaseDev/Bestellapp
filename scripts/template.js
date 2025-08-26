function getMenuTemplate(myMenusStarter) {
    return `
    <div class="content">
        <h3 class="menu_name">${myMenusStarter.name}<button class="btn"><img src="./assets/icon/add_button.svg" alt="add button"></button></h3>
            <p class="menu_ingredients">${myMenusStarter.ingredients}</p>
            <p class="menu_price">${myMenusStarter.price}€</p>
            </div>
            `
}