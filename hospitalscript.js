let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.reponsive-drop');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
//from ram
    //adad
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
