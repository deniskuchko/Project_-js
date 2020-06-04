class CreateProduct{
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
        if('id' in card){
            element.setAttribute('id', card.id);
        }
        return element;
    };
    
}

let createProduct = new CreateProduct('.value_product',allOurProducts);