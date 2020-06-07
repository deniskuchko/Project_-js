let header = document.getElementById('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle("sticky", window.scrollY > 0);
})
function toogle(){
    header.classList.toggle("active");
}

/* Изменение цвета страницы */

function toogleClass(){
    const body = document.querySelector('body');
    const sec = document.querySelectorAll('.sec');
    body.classList.toggle('light_on');
    for(let i = 0; i < sec.length-1; i++){
        sec[i].style.background = 'none';
    }
};
document.querySelector('.toogleClass').onmouseover = toogleClass;

/* Выпадающий список */

let div =document.createElement('div');
div.className = 'faq';
div.insertAdjacentHTML('afterbegin', `
<a href="./catalog.html">All products</a>
<a href="./catalog.html#men">Men</a>
<a href="./catalog.html#women">Women</a>
<a href="./catalog.html#shoesmen">Shoes For Men</a>
<a href="./catalog.html#shoeswomen">Shoes For Women</a>
<a href="./catalog.html#bags">Bags</a>
<a href="./catalog.html#accesories">Accesories</a>`);
function openFAQShow(){
    document.querySelector('#catalog_FAQ').append(div);
    document.querySelector('.faq').style.display = 'block';
}
function openFAQNone(){
    document.querySelector('.faq').style.display = 'none';
}

document.querySelector('#catalog_FAQ').onmouseover = openFAQShow;
document.querySelector('#catalog_FAQ').onmouseout  = openFAQNone;


/* Перенаправление от sales к каталогу */


function transferSales(){
    location.href = './catalog.html';
};
document.querySelector('.item').addEventListener('click', transferSales);
