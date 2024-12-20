const selectedProductKey = 'selectedProducts';

let sortedFruits = fruitsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedDriedFruits = driedFruitsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedExotics = exoticsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedVegetables = vegetablesData.sort((a, b) => a.name.localeCompare(b.name));
let sortedSpices = spicesData.sort((a, b) => a.name.localeCompare(b.name));
let sortedGreens = greensData.sort((a, b) => a.name.localeCompare(b.name));
let sortedNuts = nutsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedGroceries = groceriesData.sort((a, b) => a.name.localeCompare(b.name));
let sortedBerries = berriesData.sort((a, b) => a.name.localeCompare(b.name));
let sortedJuices = juicesData.sort((a, b) => a.name.localeCompare(b.name));
let sortedSweets = sweetsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedTea = teaData.sort((a, b) => a.name.localeCompare(b.name));
let sortedSpain = spainData.sort((a, b) => a.name.localeCompare(b.name));
let sortedPickles = picklesData.sort((a, b) => a.name.localeCompare(b.name));

// Containers
const helloContainer = document.querySelector('.hello__container');
const productContainer = document.querySelector(".products__container");
const basketContainer = document.querySelector(".basket__container");
const contactsContainer = document.querySelector(".contacts__container");

const containers = [
    helloContainer,
    productContainer,
    basketContainer,
    contactsContainer
];

const logoBtn = document.querySelector('.header__logo');

// MENU
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

let fruitsBtn = document.querySelector('#fruits-btn')
let berriesBtn = document.querySelector('#berries-btn')
let fruitsExoticBtn = document.querySelector('#fruits-exotic-btn')
let driedFruitsBtn = document.querySelector('#dried-fruits-btn')
let vegetables = document.querySelector('#vegetables-btn')
let green = document.querySelector('#green-btn')
let nuts = document.querySelector('#nuts-btn')
let spices = document.querySelector('#spices-btn')
let sweets = document.querySelector('#sweets-btn')
let tea = document.querySelector('#tea-btn')
let groceries = document.querySelector('#grocery-btn')
let juices = document.querySelector('#juices-btn')
let contacts = document.querySelector('#contacts-btn')
let spain = document.querySelector('#spain-btn')
let pickles = document.querySelector('#pickles-btn')

let basketBtn = document.querySelector('#basketBtn')
let basketCopyBtn = document.querySelector('#basketCopyBtn')
let basketClearBtn = document.querySelector('#basketClearBtn')

let productViewCard = document.querySelector('.product__view');

fruitsBtn.addEventListener('click', function(){
    fillProductList(sortedFruits);
});

berriesBtn.addEventListener('click', function(){
    fillProductList(sortedBerries);
});

fruitsExoticBtn.addEventListener('click', function(){
    fillProductList(sortedExotics);
});

driedFruitsBtn.addEventListener('click', function(){
    fillProductList(sortedDriedFruits);
});

vegetables.addEventListener('click', function(){
    fillProductList(sortedVegetables);
});

green.addEventListener('click', function(){
    fillProductList(sortedGreens);
});

nuts.addEventListener('click', function(){
    fillProductList(sortedNuts);
});

spices.addEventListener('click', function(){
    fillProductList(sortedSpices);
});

groceries.addEventListener('click', function(){
    fillProductList(sortedGroceries);
});

sweets.addEventListener('click', function(){
    fillProductList(sortedSweets);
});

tea.addEventListener('click', function(){
    fillProductList(sortedTea);
});

juices.addEventListener('click', function(){
    fillProductList(sortedJuices);
});

contacts.addEventListener('click', function(){
    showContainer('contacts__container');
});

spain.addEventListener('click', function(){
    fillProductList(sortedSpain);
});

pickles.addEventListener('click', function(){
    fillProductList(sortedPickles);
});

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

basketBtn.addEventListener('click', function() {
    showContainer('basket__container');

    let basketProductList = document.querySelector('.basket__products-list');

    basketProductList.innerHTML = `
        <div class="basket__products-list-header">
            <span class="item-name-header">Назва</span>
            <span class="item-weight-header">Вага</span>
            <span class="item-weight-header"></span>
        </div>
    `;
    
    if (localStorage[selectedProductKey] === undefined){
        console.log('empty list');
        return;
    }

    let products = JSON.parse('[' + localStorage[selectedProductKey] + ']');

    products.forEach(x => {
        let item = `
            <div class="basket__products-list-item">
                <span class="item-name">${x.name}</span>
                <input class="item-weight" type="number" value=${x.weight}>
                <span class="item-min">X</span>
            </div>
        `;

        basketProductList.insertAdjacentHTML("beforeend", item);
    });
});

basketCopyBtn.addEventListener('click', function() {
    let basketProductList = document.querySelectorAll('.basket__products-list-item');

    let order = '';

    basketProductList.forEach(element => {
        let productName = element.querySelector('.item-name');
        let productWeight = element.querySelector('.item-weight');

        order += productName.innerHTML + ' ' + productWeight.value + ';\n'
    });

    console.log(order);
});

basketClearBtn.addEventListener('click', function() {
    localStorage.removeItem('selectedProducts');

    console.log(localStorage['selectedProducts']);
});

menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})

function fillProductList(items) {
    showContainer('products__container');
    
    productContainer.innerHTML = '';

    items
        .forEach(x => {
            var item = `
                <div class="products__card" onclick="productClick()" productCategory="${x.category}" productId="${x.id}">
                    <div class="product-img-container" style="background-image: url('img/${x.category}/${x.id}.jpg');">
                    </div>
                    <div class="product-body">
                        <p class="product-title">${x.name}</p>
                        <p class="product-available ${x.available ? "in-stock" : "out-stock"}">
                            ${x.available ? "В наявності" : "Під замовлення"}
                        </p>
                        <p class="product-min-order">Мін. замовлення ${x.minOrder}</p>
                        <p class="product-price ${x.price == undefined || x.price == '' ? 'hide' :''}">Ціна: ${x.price} ₴ / ${x.minOrder}</p>
                    </div>
                </div>
            `;

        productContainer.insertAdjacentHTML("beforeend", item);
    });
}

function productClick(){ 
    // let clickedElement = this.event.currentTarget;
    // let rootElement = clickedElement.closest('.products__card');

    // let productCategory = rootElement.getAttribute("productCategory");
    // let productId = rootElement.getAttribute("productId");

    // let x = null;
    // switch (productCategory) {
    //     case 'fruits':
    //         x = fruitsData.find(x => x.id == productId);
    //         break;
    //     case 'vegetables':
    //         x = vegetablesData.find(x => x.id == productId);
    //         break;
    //     case 'grocery':
    //         x = spicesData.find(x => x.id == productId);
    //         break;
    // }

    // let itemHtml = `
    //     <div class="product__view-container">
    //         <div class="product__view-img" style="background-image: url('img/${x.category}/${x.code}.jpg');"></div>
    //         <p class="product__view-title">${x.name}</p>
    //         <p class="product__view-min-weight">Мін. замовлення ${x.minOrder}</p>
    //         <p class="product__view-available ${x.available ? "hide" : "red-text"}">
    //             ${x.available ? "" : "Під замовлення"}
    //         </p>
    //         <input class="product__view-weight-value" type="number" min="${x.minOrder.split(' ')[0]}" placeholder="Введіть кількість...">
    //         <div class="product__view-buttons">
    //             <button id="product__view-addBtn" 
    //                 onclick="addProductToBasketBtn()">
    //             </button>
    //             <button id="product__view-closeBtn" onclick="closeProductViewPopup()"></button>
    //         </div>
    //     </div>
    // `;

    // productViewCard.innerHTML = '';
    // productViewCard.insertAdjacentHTML("beforeend", itemHtml);
    // productViewCard.classList.toggle('hide');
}

function addProductToBasketBtn() {
    let clickedElement = this.event.currentTarget;
    let rootElement = clickedElement.closest('.product__view-container');

    let weight = rootElement.querySelector('.product__view-weight-value');
    let minWeight = weight.getAttribute('min');

    if (minWeight > weight.value) {
        let minOrder = rootElement.querySelector('.product__view-min-weight');
        minOrder.classList.add('red-text');

        return;
    }

    let productName = rootElement.querySelector('.product__view-title');

    let p = {
        name: productName.innerHTML,
        weight: weight.value
    };

    if (localStorage[selectedProductKey] === undefined){
        localStorage[selectedProductKey] = JSON.stringify(p);
    } else {
        localStorage[selectedProductKey] += ', ' + JSON.stringify(p);
    }

    productViewCard.classList.toggle('hide');
}

function closeProductViewPopup() {
    productViewCard.classList.toggle('hide');
}

function showContainer(containerKey){
    containers.forEach(x => {
        if (x.classList.contains(containerKey)) {
            x.classList.remove('hide');
        } else if (!x.classList.contains('hide')) {
            x.classList.add('hide');
        }
    });
}

logoBtn.addEventListener('click', function() {
    showContainer('hello__container');
});

// fillProductList(sortedPickles);