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

  /*   <div class="item">
            <div class="name">Product1</div>
            <div class="image"></div>
            <div class="price">111</div>
            <button class="btn">В корзину</button>
        </div> */

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProducts.length; i++){
            let index = products.indexOf(this.catalogProducts[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item'
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                contentText: this.catalogProducts[i].name
            });
            let img = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'image',
                bgImage: `url('${this.catalogProducts[i].img}')`
                
            });
            let price = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                contentText: this.catalogProducts[i].price
            });
            let btn = createProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                contentText: activeText,
                id: this.catalogProducts[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить из корзины';
                } else{
                    this.innerHTML = 'Добавить в корзину';
                }
            })

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.containerProducts.appendChild(wrapper);
    };
}
let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');



/* Сдвиг карточек при открытии списка Menu */

let  containerProducts = document.querySelector('.container_products');
let i = 1;
function sdvig(){
    if(i === 1 && screen.width >= 575){
        i++;
        containerProducts.style.marginLeft = '250px';
        containerProducts.style.transition = '0.6s';
        searchContainer.style.marginLeft = '250px';
        searchContainer.style.transition = '0.6s';
        document.querySelector('.container_cart').style.marginLeft = '250px';
        document.querySelector('.container_cart').style.transition = '0.6s';

    } else{
        i = 1;
        containerProducts.style.marginLeft = '0px';
        containerProducts.style.transition = '0.6s';
        searchContainer.style.marginLeft = '0px';
        searchContainer.style.transition = '0.6s';
        document.querySelector('.container_cart').style.marginLeft = '0px';
        document.querySelector('.container_cart').style.transition = '0.6s';
    }
};
document.querySelector('.toogle_btn').addEventListener('click', sdvig);
/* Вывод на экран только выбранной категории тооваров */


document.getElementById('men').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    menProducts = new AllProducts('.container_products', catalogMen, '.catalog_counter');
    
});

document.getElementById('women').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    womenProducts = new AllProducts('.container_products', catalogWomen, '.catalog_counter');
});

document.getElementById('shoesmen').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    shoesMen = new AllProducts('.container_products', catalogShoesMen, '.catalog_counter');
});
document.getElementById('shoeswomen').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    shoesWomen = new AllProducts('.container_products', catalogShoesWomen, '.catalog_counter');
});

document.getElementById('bags').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    bags = new AllProducts('.container_products', catalogBags, '.catalog_counter');
});
document.getElementById('accesories').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    accesories = new AllProducts('.container_products', catalogAccesories, '.catalog_counter');
});

document.getElementById('all_products').addEventListener('click', () =>{
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }
    womenProducts = new AllProducts('.container_products', catalogWomen, '.catalog_counter');
    menProducts = new AllProducts('.container_products', catalogMen, '.catalog_counter');
    shoesMen = new AllProducts('.container_products', catalogShoesMen, '.catalog_counter');
    shoesWomen = new AllProducts('.container_products', catalogShoesWomen, '.catalog_counter');
    accesories = new AllProducts('.container_products', catalogAccesories, '.catalog_counter');
    bags = new AllProducts('.container_products', catalogBags, '.catalog_counter');
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


  
  