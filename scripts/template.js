function getMenuStarter(myMenusStarter) {
    return `
    <div class="content">
        <h3 class="menu_name">${myMenusStarter.name}</h3>
            <p class="menu_ingredients">${myMenusStarter.ingredients}</p>
            <p class="menu_price">${myMenusStarter.price}</p>
            </div>
            `
}

function getMenuMain(myMenusMain) {
    return `
    <div class="content">
        <h3 class="menu_name">${myMenusMain.name}</h3>
            <p class="menu_ingredients">${myMenusMain.ingredients}</p>
            <p class="menu_price">${myMenusMain.price}</p>
            </div>
            `
}

function getMenuDessert(myMenusDesserts) {
    return `
    <div class="content">
        <h3 class="menu_name">${myMenusDesserts.name}</h3>
            <p class="menu_ingredients">${myMenusDesserts.ingredients}</p>
            <p class="menu_price">${myMenusDesserts.price}</p>
            </div>
            `
}

function getMenuDrinks(myMenusDrinks) {
    return ` 
    <div class="content"> 
        <h3 class="menu_name">${myMenusDrinks.name}</h3>
            <p class="menu_ingredients">${myMenusDrinks.ingredients}</p>
            <p class="menu_price">${myMenusDrinks.price}</p>
            </div>
        
`
}