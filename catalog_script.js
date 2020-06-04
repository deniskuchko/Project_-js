/* Создание кнопки каталога */
function openMenu(){
    document.getElementById('sidebar').classList.toggle('active');
}
document.querySelector('.toogle_btn').addEventListener('click', openMenu);
/* Создание карточек продукции */
class AllProducts{
    constructor(containerProducts, catalogProducts, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts();
    };
    createProducts(){
        let wraper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProducts.length; i++){

            let index = products.indexOf(this.catalogProducts[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Добавить';
            } else {
                activeText = 'Удалить'
            };


            let item  = createProduct.getProductItem({
                nameTag: 'div',
                nameclass: 'item',
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameclass: 'name',
                contentText: this.catalogProducts[i].name
            });
            let img  = createProduct.getProductItem({
                nameTag: 'div',
                nameclass: 'image',
                bgImage: `url('${this.catalogProducts[i].img}')`
            });
            let price = createProduct.getProductItem({
                nameTag: 'div',
                nameclass: 'price',
                contentText: this.catalogProducts[i].price
            });
            let btn = createProduct.getProductItem({
                nameTag: 'i',
                nameclass: 'fas fa-shopping-basket',
                contentText: activeText,
                id: this.catalogProducts[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                womenProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить';
                } else {
                    this.innerHTML = 'Добавить';
                }
            })

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wraper.appendChild(item);
        };

        this.containerProducts.appendChild(wraper);
    };

    
}


let womenProducts = new AllProducts('.containr_products', catalogWomen, '.value_product');
let menProducts = new AllProducts('.containr_products', catalogMen, '.value_product');
let shoesMen = new AllProducts('.containr_products', catalogShoesMen, '.value_product');
let shoesWomen = new AllProducts('.containr_products', catalogShoesWomen, '.value_product');
let accesories = new AllProducts('.containr_products', catalogAccesories, '.value_product');
let bags = new AllProducts('.containr_products', catalogBags, '.value_product');
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
    menProducts = new AllProducts('.containr_products', catalogMen, '.value_product');
    
});

document.getElementById('women').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    womenProducts = new AllProducts('.containr_products', catalogWomen, '.value_product');
});

document.getElementById('shoesmen').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    shoesMen = new AllProducts('.containr_products', catalogShoesMen, '.value_product');
});
document.getElementById('shoeswomen').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    shoesWomen = new AllProducts('.containr_products', catalogShoesWomen, '.value_product');
});

document.getElementById('bags').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    bags = new AllProducts('.containr_products', catalogBags, '.value_product');
});
document.getElementById('accesories').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    accesories = new AllProducts('.containr_products', catalogAccesories, '.value_product');
});

document.getElementById('all_products').addEventListener('click', () =>{
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }
    womenProducts = new AllProducts('.containr_products', catalogWomen, '.value_product');
    menProducts = new AllProducts('.containr_products', catalogMen, '.value_product');
    shoesMen = new AllProducts('.containr_products', catalogShoesMen, '.value_product');
    shoesWomen = new AllProducts('.containr_products', catalogShoesWomen, '.value_product');
    accesories = new AllProducts('.containr_products', catalogAccesories, '.value_product');
    bags = new AllProducts('.containr_products', catalogBags, '.value_product');
});

/* filter  открытие вкладок*/

function openFilter(){
    
    if(document.getElementById('price').style.display === 'none'){
        document.getElementById('price').style.display = 'block';
        document.getElementById('name').style.display = 'block';
      
    } else{
        document.getElementById('price').style.display = 'none';
        document.getElementById('name').style.display = 'none';
        
    }
};

document.querySelector('#filter').onmouseover = openFilter;


  
  