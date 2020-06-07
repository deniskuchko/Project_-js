class AllSales{
    constructor(containerProducts, catalogSales){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogSales;
        this.createProducts();
    };
    createProducts(){
        let wraper = document.createElement('slot');
        for(let i = 0; i < catalogSales.length; i++){
            i++;
            if(i === catalogSales.length){
                i = 0;
            };
            let item  = this.getProductItem({
                nameTag: 'div',
                nameclass: 'item',
            });
            let name = this.getProductItem({
                nameTag: 'div',
                nameclass: 'name',
                contentText: catalogSales[i].name
            });
            let img  = this.getProductItem({
                nameTag: 'div',
                nameclass: 'image',
                bgImage: `url('${catalogSales[i].img}')`
            });
            let price = this.getProductItem({
                nameTag: 'div',
                nameclass: 'price',
                contentText: catalogSales[i].price
            });
            let btn = this.getProductItem({
                nameTag: 'a',
                nameclass: 'btn',
            });
            let bascket = this.getProductItem({
                nameTag: 'i',
                nameclass: 'fas fa-shopping-basket',
            });
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            btn.appendChild(bascket);
            wraper.appendChild(item);
        };
            
        this.containerProducts.prepend(wraper);
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


let allSales = new AllSales('.sales', catalogSales);

/* слайдер sales */
item = document.querySelectorAll('.item');

for(let i = 0; i < item.length; i++){
    item[i].style.display = 'none';
};

item[0].style.display = 'block';

document.querySelector('.button').addEventListener('click', () =>{
    i++;
    let n = i - 1;
    if(i === item.length){
        i = 0;
    };
    
    item[n].style.display = 'none';
    item[i].style.display = 'block';
});
document.querySelector('.button_before').addEventListener('click', () =>{
    i--;
    let n = i + 1;
    if(i === -1){
        i = item.length-1;
    };
    item[n].style.display = 'none';
    item[i].style.display = 'block';
});
