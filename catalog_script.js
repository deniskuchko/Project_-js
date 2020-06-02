/* Создание кнопки каталога */
function openMenu(){
    document.getElementById('sidebar').classList.toggle('active');
}
document.querySelector('.toogle_btn').addEventListener('click', openMenu);
/* Создание карточек продукции */
class AllProducts{
    constructor(containerProducts, catalogProducts){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProducts();
    };
    createProducts(){
        let wraper = document.createElement('slot');
        for(let i = 0; i < this.catalogProducts.length; i++){
            let item  = this.getProductItem({
                nameTag: 'div',
                nameclass: 'item',
            });
            let name = this.getProductItem({
                nameTag: 'div',
                nameclass: 'name',
                contentText: this.catalogProducts[i].name
            });
            let img  = this.getProductItem({
                nameTag: 'div',
                nameclass: 'image',
                bgImage: `url('${this.catalogProducts[i].img}')`
            });
            let price = this.getProductItem({
                nameTag: 'div',
                nameclass: 'price',
                contentText: this.catalogProducts[i].price
            });
            let btn = this.getProductItem({
                nameTag: 'i',
                nameclass: 'fas fa-shopping-basket'
                
            });

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wraper.appendChild(item);
        };
        this.containerProducts.appendChild(wraper);
    };

    getProductItem(card){
        let element = document.createElement(card.nameTag);
        if('nameclass' in card){
            element.setAttribute('class', card.nameclass);
        };
        if('contentText' in card){
            element.innerHTML = card.contentText;
        };
        if('bgImage' in card){
            element.style.backgroundImage = card.bgImage;
        };
        return element;
    };
}


let womenProducts = new AllProducts('.containr_products', catalogWomen);
let menProducts = new AllProducts('.containr_products', catalogMen);
let shoesMen = new AllProducts('.containr_products', catalogShoesMen);
let shoesWomen = new AllProducts('.containr_products', catalogShoesWomen);
let accesories = new AllProducts('.containr_products', catalogAccesories);
let bags = new AllProducts('.containr_products', catalogBags);
/* Сдвиг карточек при открытии списка Menu */

let  containrProducts = document.querySelector('.containr_products');
let i = 1;
function sdvig(){
    if(i === 1){
        i++;
         containrProducts.style.marginLeft = '250px';
         containrProducts.style.transition = '0.6s'
    } else{
        i = 1;
        containrProducts.style.marginLeft = '0px';
        containrProducts.style.transition = '0.6s'

    }
};

document.querySelector('.toogle_btn').addEventListener('click', sdvig);
/* Вывод на экран только выбранной категории тооваров */


document.getElementById('men').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    menProducts = new AllProducts('.containr_products', catalogMen);
    
});

document.getElementById('women').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    womenProducts = new AllProducts('.containr_products', catalogWomen);
});

document.getElementById('shoesmen').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    shoesMen = new AllProducts('.containr_products', catalogShoesMen);
});
document.getElementById('shoeswomen').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    shoesWomen = new AllProducts('.containr_products', catalogShoesWomen);
});

document.getElementById('bags').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    bags = new AllProducts('.containr_products', catalogBags);
});
document.getElementById('accesories').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    accesories = new AllProducts('.containr_products', catalogAccesories);
});

document.getElementById('all_products').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    womenProducts = new AllProducts('.containr_products', catalogWomen);
    menProducts = new AllProducts('.containr_products', catalogMen);
    shoesMen = new AllProducts('.containr_products', catalogShoesMen);
    shoesWomen = new AllProducts('.containr_products', catalogShoesWomen);
    accesories = new AllProducts('.containr_products', catalogAccesories);
    bags = new AllProducts('.containr_products', catalogBags);
});

/* filter  открытие вкладок*/

document.getElementById('filter').addEventListener('click', () =>{
    
    if(document.getElementById('price').style.display === 'none'){
        document.getElementById('price').style.display = 'block';
        document.getElementById('name').style.display = 'block';
      
    } else{
        document.getElementById('price').style.display = 'none';
        document.getElementById('name').style.display = 'none';
        
    }
});

/* filter имени */

function vvodName(){
    let nameFilter = document.querySelector('.name_filter').value;

    console.log(nameFilter);
};
document.getElementById('search_name').addEventListener('click', vvodName);