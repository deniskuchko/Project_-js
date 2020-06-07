class CreateProduct{

    getProductItem(card){
        let element = document.createElement(card.nameTag);
        if('nameClass' in card){
            element.setAttribute('class', card.nameClass);
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

let createProduct = new CreateProduct('.catalog_counter', catalogProduct);
