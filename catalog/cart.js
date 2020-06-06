class Cart{
    constructor(containerCart, catalogCounter, allOurProducts){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.allOurProducts = allOurProducts;
        this.createCart();

    };

    createCart(){
        this.catalogCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            wrapper.className = 'wrapper_cart';
            for(let i = 0; i < productsCart.length; i++){
                let item  = createProduct.getProductItem({
                    nameTag: 'div',
                    nameclass: 'item',
                });
                let name = createProduct.getProductItem({
                    nameTag: 'div',
                    nameclass: 'name',
                    contentText: productsCart[i].name
                });
                let img  = createProduct.getProductItem({
                    nameTag: 'div',
                    nameclass: 'image',
                    bgImage: `url('${productsCart[i].img}')`
                });
                let price = createProduct.getProductItem({
                    nameTag: 'div',
                    nameclass: 'price',
                    contentText: productsCart[i].price
                });
                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);
            }

            let close = createProduct.getProductItem({/*  */
                nameTag: 'div',
                nameClass: 'close',
                contentText: 'X'
            });
            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';
            });
            cart.containerCart.appendChild(wrapper);
            cart.containerCart.appendChild(close);
        });
    }

    getProductCart(){
        let products = store.getProducts();
        let productsInCart = [];

        for(let i = 0; i < this.allOurProducts.length; i++){
            if(products.indexOf(this.allOurProducts[i].id) !== -1){
                productsInCart.push(this.allOurProducts[i]);
            }
        };
        return productsInCart;
    }

}

let cart = new Cart('.container_cart','.containr_products',allOurProducts);