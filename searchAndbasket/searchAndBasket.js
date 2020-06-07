/* Search */
let searchArr = [];
let search = document.getElementById('search-btn');
let searchContainer =  document.querySelector('.searchContainer');
function searchProductInCatalog(){
    searchArr = [];
    let nameSearch = document.querySelector('.search-txt').value;
    
    while (searchContainer.firstChild) {
        searchContainer.removeChild(searchContainer.firstChild);
    }

    if(searchContainer.style.display = 'none'){
        searchContainer.style.display = 'flex';
        containerProducts.style.opacity =  "0.3";
    } 
    
    for(let i = 0; i < catalogProduct.length; i++){
        if(nameSearch.toLowerCase() === catalogProduct[i].name.toLowerCase()){
            searchArr.push(catalogProduct[i]);  
            console.log(catalogProduct[i]);
            console.log(searchArr);

        } 
    }
    
    let searchOurProducts = new AllProducts('.searchContainer', searchArr, '.catalog_counter');
    
}

function closeSearch(){
    searchContainer.style.display = 'none';
    containerProducts.style.opacity =  "1";
}

search.addEventListener('click', searchProductInCatalog);
document.querySelector('.search-txt').addEventListener('click', closeSearch);
