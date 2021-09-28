let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// ấn vào login thì hiện form đăng nhập
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
// ấn nút x để đóng form đăng nhập
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
        // nếu thanh scroll kéo theo trục y thì thêm active
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
        // load lại vẫn giữ nguyên
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}