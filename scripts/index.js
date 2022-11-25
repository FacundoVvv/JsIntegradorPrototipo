//variables
//banner Container
const bannerContainer = document.querySelector('#bannerContainer');
const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
//suspensive Points Container
const suspensivePointsContainer = document.querySelector('#suspensivePointsContainer');
//section selección de hoy
const leftArrowSection = document.querySelector('#leftArrowSection');
const rightArrowSection = document.querySelector('#rightArrowSection');
const selectedSection = document.querySelector('#selectedImagesSection');
//recommended section array
let shoesSelectedArray = [];
let arrayFiveOfFive = [];
let indice = 0;
let indexRecommended = 0;
//shoes search products
const shoesContainer = document.getElementById('shoesContainer');
const allShoesSeparateInArraysOfTen = [];
const indexNavigatorPaginator = 0;

//show more button
const showMoreButton = document.querySelector('#showMoreButton');
const showLessButton = document.querySelector('#showLessButton');
let navigator = 0;
let buttonStatus = true;

//search product box/input variables
const inputSearchProduct = document.querySelector('#input-search-products');
const searchProductButton = document.querySelector('#searchProductButton');

let actualFilteredShoes = [];

//variables sección CATEGORIA
const categoryOptionsContainer = document.querySelector('#categoryOptionsContainer');
const categoryText = document.querySelector('#category-text');
const categoryArrow = document.querySelector('#category-arrow');
let openedMenu = false;
let arrayForCategorys = [];

//header cart variables
const cartHeaderButton = document.querySelector('#cart-img-button');
const cartShoppingContainer = document.querySelector('#cart-shopping');
let statusDisplayCart = false;
const buttonBuy = document.querySelector('#buttonBuy');
//cart button logic
const itemsCartContainer = document.getElementById('itemsCartContainer');
const leftArrowCart = document.querySelector('#leftLessArrow');
const rightArrowCart = document.querySelector('#rightMoreArrow');
const totalPriceCart = document.querySelector('#total-price-cart');
let addedItemsID = [];
let initialValue = 0; //variable global para manejar el precio del carrito
let cardMethodSelected = false;
//variables container cards (MASTERCARD-VISTA-AMEX)
const payMethodContainer = document.getElementById('payMethod');

//menu hamburguesa
const iconBurguer = document.querySelector('.iconBurguer');
const navList = document.querySelector('.nav-list');
let activated = false;

//mensaje de error variables
const containerErrorMsg = document.querySelector('.error-msg-container');

//local storage
const addedCartItemsLS = JSON.parse(localStorage.getItem('Added cart items'));
let addedSameItems = [];
const detectLs = ()=>{
    //ADDED CART ITEMS 
    
    let actualIDS = [];
    let allShoes = shoesContainer.querySelectorAll('div');
    let actualShoes =[];

    if(addedCartItemsLS){
        addedCartItemsLS.map(e=> actualIDS.push(e.id));

        //busca entre todas las zapatillas renderizadas y selecciona el boton a modificar
        allShoes.forEach(e=> { 
          if(actualIDS.includes(parseInt(e.querySelector('#id-text').textContent))){
            let item = e.querySelector('#addToCartButton');
            updateAddButton(item);
            renderCartProducts(item);
          } 
        })

       
    }

    
    //si detecta que hay contenido en addedCartItemsLS...
    //agrega el boton "agregado".

}

//mensaje de errores style/func
const displayError = (parameter)=>{
    if(parameter == 'emptyCar'){
        
        const emptyCarMsg = document.querySelector('#empty-car')
            containerErrorMsg.style.display="flex";
            emptyCarMsg.style.display="flex";
            setTimeout(()=>{
                containerErrorMsg.style.display="none";
                emptyCarMsg.style.display="none";
            }, 800)
    }
    else if(parameter == 'methodCar'){
        
            const methodCarMsg = document.querySelector('#method-car')
                containerErrorMsg.style.display="flex";
                methodCarMsg.style.display="flex";
                setTimeout(()=>{
                    containerErrorMsg.style.display="none";
                    methodCarMsg.style.display="none";
                }, 800)
    }
    else if(parameter == 'succesfulBought'){
        
        const succesfulBought = document.querySelector('#succesfulBought')
            containerErrorMsg.style.display="flex";
            succesfulBought.style.display="flex";
            setTimeout(()=>{
                containerErrorMsg.style.display="none";
                succesfulBought.style.display="none";
            }, 800)
}

}

const  closeMenuBurguer = (target)=>{
    if(!navList.contains(target) && target !== iconBurguer){
        if(screen.width <= 900){
            burguerMenuDisplayFunc('hide');
        }
    }else if(target === iconBurguer){
        burguerMenuDisplayFunc('show');
    }
}
//menú hamburguesa funcionalidad
burguerMenuDisplayFunc = (action)=>{
        if(action === 'show'){
            navList.style.visibility ="visible";
            activated = true;
        }
        else if(action === 'hide'){
            navList.style.visibility ="hidden";
            activated = false;
        }
}

const addedItems = []; //variable global para saber que items están agregados al carrito

const addButtonClass = (id) =>{
    let all = shoesContainer.querySelectorAll('div');
    
        for(let i = 0; i < all.length; i++){
            
            let idActual = shoesContainer.children[i].querySelector('#id-text').textContent;
            if(idActual == id){
                let button = shoesContainer.children[i].querySelector('#addToCartButton');
                button.classList.add('agregado');
                button.textContent = 'Agregado';
            }
        }
}
//funcion para actualizar boton "agregar"
const updateAddButton = (item)=>{
    
    item.classList.add('agregado');
    item.textContent = "Agregado";
   
}
//reset add button styles
const resetAddButton = (id)=>{
    let all = shoesContainer.querySelectorAll('div');
    
    for(let i = 0; i < all.length; i++){
        
        let idActual = shoesContainer.children[i].querySelector('#id-text').textContent;
        if(idActual == id){
            let button = shoesContainer.children[i].querySelector('#addToCartButton');
            button.classList.remove('agregado');
            button.textContent = 'Agregar';
        }
    }

   
}
//función para vaciar el carrito
const resetCart = ()=>{
    
    itemsCartContainer.innerHTML = '';
    initialValue = 0;
    cardMethodSelected = false;
    addedItemsID = [];
    resetDropEffect(payMethodContainer);
    totalPriceCart.textContent = '$ 0';
}

//resetea el estado "agregado" del boton COMPRAR de TODAS las cards
const resetRender = ()=>{
    let all = shoesContainer.querySelectorAll('div');
    
    for(let i = 0; i < all.length; i++){
        let button = shoesContainer.children[i].querySelector('#addToCartButton');
        button.classList.remove('agregado');
        button.textContent = 'Agregar';
    }
}

const verifyBought = ()=>{

   
    if(itemsCartContainer.children.length == 0){
        
        displayError('emptyCar');

    }
    else if(!cardMethodSelected){
        displayError('methodCar');
    }
    else{
        displayError('succesfulBought');
        resetCart();
        resetRender();
        cardMethodSelected = false;
        addedItemsID = [];
        localStorage.removeItem('Added cart items')
    }

    
}
const resetDropEffect = (target)=>{
    
    const allCardImgs = target.parentElement.querySelectorAll('img');
    
    //recorre todas las imagenes y si alguna contiene dropshadow, lo elimina.
    for(let i = 0; i< allCardImgs.length; i++ ){
        if(allCardImgs[i].classList.contains('dropshadow')){
            allCardImgs[i].classList.remove('dropshadow');
            
        }
        cardMethodSelected = false;
    }
}
//pay method function (selección de cards en el cart)
payMethodSelect = (target)=>{
    resetDropEffect(target);
    //de los tantos targets, filtro por los que sean CARDS
    if(target.classList.contains('visa-img') || target.classList.contains('mastercard-img') 
        || target.classList.contains('amex-img')){

            target.classList.add('animation-vibrate-cards');
        
            setTimeout(e=>{
                target.classList.remove('animation-vibrate-cards');
            }, 1000)
    
            target.classList.add('dropshadow');
            cardMethodSelected = true;
    
    }
}

//actualiza el precio cuando tocas las flechitas
const sumOrRestCartPrice = (target, operation)=>{
    
    if(operation == '+'){
        initialValue += target[0].precio;
        totalPriceCart.textContent = `$ ${initialValue}`;
    }else if(operation == '-'){
        initialValue -= target[0].precio;
        totalPriceCart.textContent = `$ ${initialValue}`;
    }
}
//actualiza el precio cuando agregas un item

const updatePrice = (item)=>{
    const id = item.parentElement.querySelector('#id-text').textContent;
    const actualItem = shoes.filter(e=> e.id == id);
    initialValue += actualItem[0].precio;
    totalPriceCart.textContent =`$ ${initialValue}`;

}
//actualizar datos cuando detecta que agregaste el mismo item
const detectedSameItem = (id)=>{
    const allItems = itemsCartContainer.querySelectorAll('.items-car');
    let item;
    allItems.forEach(e=> {
        let actualFItem = e.querySelector('.id-cart-text');
        if(actualFItem.textContent == id){
            item = e;
        }
        
    });
    //valida cuantos items hay agregados y actualiza el precio
   if(item){
    let sectionPrice = item.querySelector('.price-and-add-button-container');
    
    let numberCart = sectionPrice.querySelector('#numberCart');
    let numberCartToNumber = parseInt(numberCart.textContent);
    const newNumberCart = numberCartToNumber + 1;
    
    numberCart.textContent = newNumberCart;
    addedSameItems.push(item)
    
}
}
const renderCartProducts = (item)=>{
   
    if(item.id === 'addToCartButton'){
        let actualItem = shoes.filter(e=> e.id == item.parentElement.querySelector('#id-text').textContent);
        const {src, id, nombre, precio} = actualItem[0];
        //se verifica que el item a agregar no exista en el array de added's
        if(!addedItemsID.includes(actualItem[0].id)){
            itemsCartContainer.innerHTML += `<div class="items-car">
            <img class="items-img" src="${src}" alt="">
            <span class="items-title" id="title-cart">${nombre}</span>
            <div class="price-and-add-button-container">
                <span class="items-price" id="actualItemPrice">$ ${precio}</span>
                <img id="leftLessArrow" class="lessImg" src="/assets/mainImages/left_arrow.png" alt="">
                <span id="numberCart" class="numberCart">1</span>
                <img id="rightMoreArrow" class="moreImg" src="/assets/mainImages/right_arrow.png" alt="">
            </div>
            <span class="id-cart-text" value="${id}"> ${id} </span>
        </div>` 
        //se guarda el objeto en un array y se llama al update price
        updatePrice(item);
        addedItemsID.push(actualItem[0].id);
        addedItems.push(actualItem[0]);
        //se actualiza el estado del boton AGREGAR
        updateAddButton(item);
       
        //se agrega el item al local storage
        localStorage.setItem('Added cart items', JSON.stringify(addedItems));
            
        }else{
            alert("Se ha sumado un producto igual.");
            //actualiza el precio total
            sumOrRestCartPrice(actualItem, '+');
            //cambia datos de cada item particular
            detectedSameItem(actualItem[0].id);
            
        }
        
        
    }

}

//actualiza numero de pedidos cart y elimina items
const sumProductsCart = (target)=>{
    
    let actualItem = shoes.filter(e=> e.id == target.parentElement.parentElement.querySelector('.id-cart-text').textContent);
    let numberCart = target.parentElement.parentElement.querySelector('#numberCart')
    
    if(target.id === 'leftLessArrow'){
        if(numberCart.textContent == 1){
            addedItemsID.pop(addedItemsID.filter(e=> e.id == actualItem[0].id));
            itemsCartContainer.removeChild(target.parentElement.parentElement);
            resetAddButton(actualItem[0].id);
            
        }
        numberCart.textContent = Number(numberCart.textContent)-1;
        sumOrRestCartPrice(actualItem, '-')
        
    }
    if(target.id === 'rightMoreArrow')
    {   
        if(parseInt(actualItem[0].stock) > parseInt(numberCart.textContent)){
            numberCart.textContent = Number(numberCart.textContent)+1;
            sumOrRestCartPrice(actualItem, '+')
        }else{
            alert("stock insuficiente.")
        }
        
        
    }
    
}

const closeMenuFunc = (target)=>{
    if(!cartShoppingContainer.contains(target) && target !== cartHeaderButton && target !== target.parentElement.querySelector('#leftLessArrow')){
            cartShoppingContainer.style.display="none";
            statusDisplayCart = false;
    }
}
const displayCart = ()=>{
    if(statusDisplayCart){
        cartShoppingContainer.style.display="none";
        statusDisplayCart = false;
    }else{
        cartShoppingContainer.style.display="grid";
        statusDisplayCart = true;
        
    }



}


const categoryOptionClicked = (target)=>{
    let filteredShoesForCategory = [];
    filteredShoesForCategory.push(shoes.filter(e=> e.category == target.textContent));
    shoesContainer.innerHTML = '';
    filteredShoesForCategory[0].map(e=> desestructureShoes(e));
    categoryOptionsContainer.style.display="none";
    openedMenu = false;
   
}

const defaultCategoryOptionsRender = ()=>{

    const allCategorys = shoes.map(e=> e.category);
    allCategorys.forEach(e=>{
        if(!arrayForCategorys.includes(e)){
            arrayForCategorys.push(e);
        }
    })
    arrayForCategorys.map(category => {
        categoryOptionsContainer.innerHTML += `<span class="category-text-options" id="category${category}">${category}</span>`;
    });
    
}   

const openCategoryMenu = ()=>{
    if(!openedMenu){
        categoryOptionsContainer.style.display="flex";
        openedMenu = true;
    }else{
        categoryOptionsContainer.style.display="none";
        openedMenu = false;
    }
}

//search input box logic

const filterProducts = ()=>{
    let id;
    let inputToLowerCase = inputSearchProduct.value.toLowerCase();
    actualFilteredShoes = [];

        //por defecto las coincidencias se pushean al filtered
        shoes.map(e=>{
            if(e.nombre.toLowerCase().includes(inputToLowerCase)){
                actualFilteredShoes.push(e);
            }
            
        })
        // console.log(actualFilteredShoes)
    //si hay elementos filtrados en el array de filtered, los renderiza
    if(actualFilteredShoes.length > 0){
        shoesContainer.innerHTML = '';
        
        actualFilteredShoes.map(e=> {
            (desestructureShoes(e)) 
            id = e.id;
            if(addedItemsID.includes(id)){
                addButtonClass(id);
            }
        });
        
       

    }else{
        shoesContainer.innerHTML = '';
        shoesContainer.innerHTML = `<h2 class="error-shoes-not-found">No hay coincidencias. ¿Lo has escrito bien?</h2>`
    }

    
    
}


const showLessButtonLogic = ()=>{
    //reset
    buttonStatus = true;
    navigator = 0;
    shoesContainer.innerHTML = '';
    //default render
    renderShoes(navigator);
    //reset buttons
    showLessButton.style.visibility = 'hidden';
    showMoreButton.style.visibility = 'visible';
}
const showMoreButtonLogic = ()=>{
    if(navigator < (allShoesSeparateInArraysOfTen.length)){
        renderShoes(navigator++);
        if(navigator === allShoesSeparateInArraysOfTen.length){
            buttonStatus = false;
        }
    }

    if(!buttonStatus){
        showMoreButton.style.visibility = 'hidden';
        showLessButton.style.visibility = 'visible';
    }

}

const desestructureShoes = (obj)=>{
    const {nombre, precio, src, category, marca, talles, stock, color, oferta, infoText,id} = obj;

    shoesContainer.innerHTML += `<div class="card-container">
    <button class="add-cart-button" id="addToCartButton">
        <img class="cart-img" src="/assets/sectionCards/shopping-cart.png" alt="Imagen de zapatilla">
        Agregar
    </button>
    <img id="imgSRC" class="card-img-shoes" src="${src}" alt="">
    <span class="category">${category.toUpperCase()}</span>
    <h3 class="shoesTitle" id="shoesTitle">${nombre.toUpperCase()}</h3>
    <span class="informacion-text">${infoText}</span>
    <span id="priceShoesText" class="precio">$${precio.toLocaleString('es-AR')}</span>
    <span class="stock">Stock: ${stock} </span> 
    <span class="id-text" id="id-text" value="${id}">${id}</span>
    </div>`
    addToCartButton = document.querySelector('#addToCartButton');
    
}

const renderShoes = (indexNavigator) =>{
    allShoesSeparateInArraysOfTen[indexNavigator].map(e=> desestructureShoes(e));
}

const separateTenOfTen = ()=>{
    for(let i = 0; i< shoes.length; i+= 10){
        let firstTen = shoes.slice(i, i+ 10);
        allShoesSeparateInArraysOfTen.push(firstTen);
    }
   
}

const separateFiveOfFive = ()=>{
    for(let i = 0; i< shoesSelectedArray.length; i+= 5){
        let firstFive = shoesSelectedArray.slice(i, i + 5);
        arrayFiveOfFive.push(firstFive);
    }
}

const generateRandomNum = ()=>{
    indice =  Math.floor(Math.random()*shoes.length);
}

const filterSelectedShoes = ()=>{
    for(let i = 0; i< 20; i++){
        generateRandomNum();
        if(!shoesSelectedArray.includes(shoes[indice])){
            shoesSelectedArray.push(shoes[indice]);
        }
        else{
            i--;
        }
    }

}

const renderImages = (index)=>{
    let actualElement = arrayFiveOfFive[index];
    actualElement.map(e=> selectedSection.innerHTML += `<img class="selectedShoesImg" src="${e.src}" alt="">`);
}

//suspensive points
const renderDefaultPoints = ()=>{
    const redPointIMG = imageConstructor(points[0]);
    redPointIMG.id="redPointID";
    suspensivePointsContainer.appendChild(redPointIMG);
    for(let i = 0; i <= banners.length -2; i++){
        const whiteIMG = imageConstructor(points[1]);
        whiteIMG.style.order = i;
        suspensivePointsContainer.appendChild(whiteIMG);
    }

}
const changePoint = ()=>{
    const redPointID = document.querySelector('#redPointID');
    redPointID.style.order= indexBanner;
}

// funcionalidad del banner de anuncios
let indexBanner = 0;

const imageConstructor = (obj)=>{
    const {src, alt, id, classs} = obj;
    const img = new Image();
    img.src =`${src}`;
    img.alt =`${alt}`;
    img.id =`${id}`;
    img.className =`${classs}`;
    return img;
}
const checkStatusBanner = (arrow)=>{
    if(arrow.target === leftArrow){
        indexBanner === 0 ? indexBanner = parseInt(banners.length) -1 : indexBanner -=1;
    }else if(arrow.target === rightArrow){
        indexBanner === parseInt(banners.length) -1 ? indexBanner = 0 : indexBanner +=1;
    }

}
const renderImage = (arrow)=>{
    const actualBannerImage = document.querySelector('#actualBannerImage');
    checkStatusBanner(arrow);
    changePoint();
    const imgToRender = imageConstructor(banners[indexBanner]);
    bannerContainer.contains(actualBannerImage) ? bannerContainer.removeChild(actualBannerImage) : '';
    bannerContainer.appendChild(imgToRender);
    
}
const init = ()=>{
    leftArrow.addEventListener('click', (arrow)=> renderImage(arrow));
    rightArrow.addEventListener('click', (arrow)=> renderImage(arrow));
    renderDefaultPoints();
    filterSelectedShoes();
    separateFiveOfFive();

    for(let i = 0; i< arrayFiveOfFive.length; i++){
        renderImages(i);
    }
    selectedSection.addEventListener('wheel', (e)=>{
        e.preventDefault();
        if (e.deltaY > 0) {
            selectedSection.scrollLeft += 500;
            e.preventDefault();
          }
          else {
            selectedSection.scrollLeft -= 500;
            e.preventDefault();
          }
        ;
    })
    separateTenOfTen();
    //render default shoes. Por defecto el index es 0.
    renderShoes(indexNavigatorPaginator);
    // show more button default
    showMoreButton.style.visibility = 'visible';
    showLessButton.style.visibility = 'hidden';
    showMoreButton.addEventListener('click', ()=>(showMoreButtonLogic()));
    showLessButton.addEventListener('click', ()=>(showLessButtonLogic()));

    //input search box products logic
    searchProductButton.addEventListener('click', () =>(filterProducts()));
    //categoría
    defaultCategoryOptionsRender();
    categoryArrow.addEventListener('click', () => (openCategoryMenu()));
    categoryText.addEventListener('click', () => (openCategoryMenu()));
    
    //clicked en alguna de las opciones del menú.
    categoryOptionsContainer.addEventListener('click', (e) => categoryOptionClicked(e.target));
    
    //cart button event
    cartHeaderButton.addEventListener('click', ()=>{
        displayCart();
        
    })
    document.body.addEventListener('click', (e) =>{
        closeMenuFunc(e.target);
        closeMenuBurguer(e.target);
    })
    //evento click car items (arrow)
    itemsCartContainer.addEventListener('click', (e) =>{sumProductsCart(e.target)});
    //evento cards de shoes
    shoesContainer.addEventListener('click', (e)=> {renderCartProducts(e.target);  
    });
    //evento click cards (MASTERCARD-VISTA-AMEX)
    payMethodContainer.addEventListener('click', (e) => payMethodSelect(e.target));
    //evento click COMPRAR cart
    buttonBuy.addEventListener('click', () => verifyBought());
    //icon burguer event
    iconBurguer.addEventListener('click', (e)=>{
        
        burguerMenuDisplayFunc(e.target, navList);
    })
    //event resize
    window.addEventListener('resize', (e)=>{
        if(screen.width >= 900){
            burguerMenuDisplayFunc('show');
        }else{
            burguerMenuDisplayFunc('hide');
        }
        
    })
    
    document.addEventListener('DOMContentLoaded', (e) =>{
        detectLs();
        
    }) 

}   

init();