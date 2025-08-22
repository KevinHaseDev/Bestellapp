function menuTemplate(myMenus,i) {
return `
    <main>
    <div>
        <nav>
            <a href="#starter">Vorspeisen</a>
            <a href="#main">Hauptspeisen</a>
            <a href="#dessert">Desserts</a>
            <a href="#drinks">Getränke</a>
        </nav>
    </div>
    <h2 class="starter">Vorspeisen</h2>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
    <h2 class="main">Hauptspeisen</h2>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
    <h2 class="dessert">Desserts</h2>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
    <h2 class="drinks">Getränke</h2>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
        <h3 class="menu_name">${myMenus.name}</h3>
            <p class="menu_ingredients">${myMenus.ingredients}</p>
            <p class="menu_price">${myMenus.price}</p>
</main>
`;
}