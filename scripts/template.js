function getMenuStarter(myMenusStarter, i) {
    return `
        <h3 class="menu_name">${myMenusStarter.name}</h3>
            <p class="menu_ingredients">${myMenusStarter.ingredients}</p>
            <p class="menu_price">${myMenusStarter.price}</p>
            `
}

function getMenuMain(myMenusMain, j) {
    return `
        <h3 class="menu_name">${myMenusMain.name}</h3>
            <p class="menu_ingredients">${myMenusMain.ingredients}</p>
            <p class="menu_price">${myMenusMain.price}</p>
            `
}

function getMenuDessert(myMenusDesserts, k) {
    return `
        <h3 class="menu_name">${myMenusDesserts.name}</h3>
            <p class="menu_ingredients">${myMenusDesserts.ingredients}</p>
            <p class="menu_price">${myMenusDesserts.price}</p>
            `
}

function getMenuDrinks(myMenusDrinks, l) {
    return `  
        <h3 class="menu_name">${myMenusDrinks.name}</h3>
            <p class="menu_ingredients">${myMenusDrinks.ingredients}</p>
            <p class="menu_price">${myMenusDrinks.price}</p>
        
`
}