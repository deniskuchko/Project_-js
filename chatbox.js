function openform(){
    document.getElementById("myform").style.display = "block";
}
function closeform(){
    document.getElementById("myform").style.display = "none";
}

document.querySelector('.open_button').addEventListener('click', openform);
document.querySelector('.cancel').addEventListener('click', closeform);


