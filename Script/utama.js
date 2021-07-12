//MENU SHOW Y HIDDEN
const navMenu = document.getElementById('bar-Menu'),
        navApp = document.getElementById('bar-App'),
        tutupBar = document.getElementById('tutup-Bar')

//MENU SHOW
//VALIDATE IF CONSTANT EXISTS
if(navApp){
    navApp.addEventListener('click', () =>{
        navMenu.classList.add('tampilkan')
    }) 
}

//MENU HIDDEN
//VALIDATE IF CONSTANT EXISTS
if(tutupBar){
    tutupBar.addEventListener('click', () =>{
        navMenu.classList.remove('tampilkan')
    }) 
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('link')

function linkAction(){
    const navMenu = document.getElementById('bar-Menu')
    //WHEN WE CLICK ON EACH NAV__LINK, WE REMOVE tampilkan CLASS
    navMenu.classList.remove('tampilkan')
}
navLink.forEach(n => n.addEventListener('click', linkAction))