const catalogBrands = ['./ourbrands/brand1.png', './ourbrands/brand2.png', './ourbrands/brand3.png'];
let i = 0;
function next(){
    console.log(i);
    i++;
    if(i === catalogBrands.length){
        i = 0;
    }
    document.getElementById('home').style.backgroundImage = `url('${catalogBrands[i]}')`;

};

function previw(){
    console.log(i);
    i = i-1;
    if(i < 0 ){
        i = catalogBrands.length - 1;
    }
    document.getElementById('home').style.backgroundImage = `url('${catalogBrands[i]}')`;
};
document.getElementById('button_next').addEventListener('click', next);
document.getElementById('button_previw').addEventListener('click', previw);
document.querySelector('.button_next').addEventListener('click', next);
document.querySelector('.button_previw').addEventListener('click', previw);
