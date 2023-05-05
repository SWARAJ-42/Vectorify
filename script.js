burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')
logo = document.querySelector('.logo')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

function hide_navigator(){
    rightnav.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
}