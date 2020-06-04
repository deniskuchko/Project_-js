/* filter имени */

function vvodName(){
    let nameFilter = document.querySelector('.name_filter').value;
    const nameProducts = [];
    while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
    }

    for(let i = 0; i < allOurProducts.length; i++){
        if(nameFilter === allOurProducts[i].name){
            nameProducts.push(allOurProducts[i]);
        }
        
    }
    let filterName = new AllProducts('.containr_products', nameProducts, '.value_product');
    return filterName;
    
};   

document.getElementById('search_name').addEventListener('click', vvodName);


/* filter цены */
  
function vvodPrice(){
    let priceFilterLow = document.querySelector('.price_low').value;
    let priceFilterHigh = document.querySelector('.price_high').value;
    priceFilterLow = +priceFilterLow;
    priceFilterHigh = +priceFilterHigh;
    priceProducts = allOurProducts.filter(function( record ){
        return record.price >= priceFilterLow && record.price <= priceFilterHigh;
    });
    priceProduct = allOurProducts;

        while (containrProducts.firstChild) {
        containrProducts.removeChild(containrProducts.firstChild);
        }
    let filterPrice = new AllProducts('.containr_products', priceProducts, '.value_product');
};
document.getElementById('search_price').addEventListener('click',vvodPrice);
