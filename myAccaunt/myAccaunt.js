let newclient = [
    {   
        users:'Client',
        name: '',
        login: '',
        password: '',
        email_users: ''

    }
];

/* Проверка логина и пароля */
function passwordTrue(){
    login = document.getElementById('login').value;
    password = document.getElementById('password1').value;
    
    
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
/* Открытие страницы пользователя */
function myPage(){
    document.querySelector('.form_accaunt').style.display = 'none';
    document.querySelector('.client_page').style.display = 'flex';
    document.querySelector('.form_autorisation').style.display = 'none';
};
document.getElementById('vvod_dannix').addEventListener('click',passwordTrue);

/* открытие страницы Авторизации */
function autorisationPage(){
    document.querySelector('.form_accaunt').style.display = 'none';
    document.querySelector('.form_autorisation').style.display = 'block';
};
document.getElementById('autorisation').addEventListener('click',autorisationPage);

/* регистрация */


function autorisation(){
    let emails = document.getElementById('email_autorisation').value;
    let logins = document.getElementById('logins').value;
    let passwords = document.getElementById('password2').value;
    let passwordsRepeat = document.getElementById('password3').value;
    
    if(emails !== '' && logins !=='' && passwords !== '' && passwordsRepeat !== ''){
        console.log(passwords);
        console.log(passwordsRepeat);

        switch(passwords){
            case(passwordsRepeat):
                newclient.login = `${logins}`;
                newclient.name = `${logins}`;
                newclient.password = `${passwords}`;
                newclient.email_users = `${emails}`;
                /* if(newclient === users[users.length]){
                    alert('The data entered is already in use by other customers');
                } else{
                    users.push(newclient);
                    alert('authorization took place successfully');
                } */
                
                users.push(newclient);
                alert('authorization took place successfully');

            break;
            default:
                alert("not correct second password");
            break;
        }
    }
    
    else {
        alert(`Enter All Data`);
    };
    myPage();
    console.log(users);
    console.log(newclient);
};

document.getElementById('vvod_dannix_autorisation').addEventListener('click', autorisation);