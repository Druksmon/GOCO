const navToggle = document.querySelector('.navbar_toggle')
const navLinks = document.querySelector('.navbar_links')

navToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('navbar_links-visible')
})