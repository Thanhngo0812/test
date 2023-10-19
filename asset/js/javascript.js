
const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.login_out');
const iconClose =document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
btnPopup.addEventListener('click',function(){
    document.querySelector('.form_login-out').style.display="flex"
})
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    document.querySelector('.form_login-out').style.display="none"
});




var counter =1;
setInterval(function(){
    document.getElementById('radio'+counter).checked =true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);
