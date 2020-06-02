function passwordTrue(){
    login = document.getElementById('login').value;
    password = document.getElementById('password').value;
    
    
    for(let i = 0; i < users.length; i++){
        if( login === users[i].login && password === users[i].password){
            
                console.log(i);
                myPage();
                    break;
            }  else if(login !== users[i].login && password === users[i].password) {
                alert('login false');
                break;
            } else if(login === users[i].login && password !== users[i].password){
                alert('password false');
                break; 
            }else if (login !== users[i].login && password !== users[i].password){
                alert('Client none');
                break;
            }
        
    }
};

function myPage(){
    document.querySelector('.form_accaunt').style.display = 'none';
    document.querySelector('.client_page').style.display = 'flex';
};
document.getElementById('vvod_dannix').addEventListener('click',passwordTrue);