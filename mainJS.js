//MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
        navAppJS = document.getElementById('nav-app'),
        navClose = document.getElementById('nav-close')

//MENU SHOW
//VALIDATE IF CONSTANT EXISTS
if(navAppJS){
    navAppJS.addEventListener('click', () =>{
        navMenu.classList.add('pop-up')
    }) 
}

//MENU HIDDEN
//VALIDATE IF CONSTANT EXISTS
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('pop-up')
    }) 
}

//REMOVE MENU MOBILE
const navLinkJS = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('pop-up')
    //WHEN WE CLICK ON EACH NAV__LINK, WE REMOVE SHOW-MENU CLASS
    navMenu.classList.remove('pop-up')
}
navLinkJS.forEach(n => n.addEventListener('click', linkAction))