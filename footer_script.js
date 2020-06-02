/* let footer = document.getElementById('footer');
let div = document.createElement('div');

let h4 = document.createElement('h4');
let teg_a = document.createElement('a');
let n = 0;
if(n < footerArr.length){
    div.id = `container${i+1}`;
    i++;
    console.log(i);
    footer.appendChild(div);
    div.appendChild(h4);
    
}

console.log(footer); */
for(let i = 0; i < shops.length; i++){
    let teg_a = document.createElement('a');
    teg_a.href = `#${shops[i].split(' ').join('')}`;
    teg_a.innerHTML = shops[i];

    document.getElementById('container_1').appendChild(teg_a);
     
}
for(let i = 0; i < information.length; i++){
    let teg_a = document.createElement('a');
    teg_a.href = `#${information[i].split(' ').join('')}`;
    teg_a.innerHTML = information[i];

    document.getElementById('container_2').appendChild(teg_a);
     
}
for(let i = 0; i < customerService.length; i++){
    let teg_a = document.createElement('a');
    teg_a.href = `#${customerService[i].split(' ').join('')}`;
    teg_a.innerHTML = customerService[i];

    document.getElementById('container_3').appendChild(teg_a);
     
}
