/* filter имени */

function vvodName(){
    let nameFilter = document.querySelector('.name_filter').value;
    const nameProducts = [];
    while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
    }

    for(let i = 0; i < catalogProduct.length; i++){
        if(nameFilter === catalogProduct[i].name){
            nameProducts.push(catalogProduct[i]);
        }
        
    }
    let filterName = new AllProducts('.container_products', nameProducts, '.catalog_counter');
    return filterName;
    
};   

document.getElementById('search_name').addEventListener('click', vvodName);


/* filter цены */
  
function vvodPrice(){
    let priceFilterLow = document.querySelector('.price_low').value;
    let priceFilterHigh = document.querySelector('.price_high').value;
    priceFilterLow = +priceFilterLow;
    priceFilterHigh = +priceFilterHigh;
    priceProducts = catalogProduct.filter(function( record ){
        return record.price >= priceFilterLow && record.price <= priceFilterHigh;
    });
    priceProduct = catalogProduct;

        while (containerProducts.firstChild) {
        containerProducts.removeChild(containerProducts.firstChild);
        }
    let filterPrice = new AllProducts('.container_products', priceProducts, '.catalog_counter');
};
document.getElementById('search_price').addEventListener('click',vvodPrice);
