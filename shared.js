let backdrop = document.querySelector('.backdrop')
let selectPlanButton = document.querySelectorAll('.plan button')
let modal = document.querySelector('.modal')
let modalNoButton = document.getElementById('no')
let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')


for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

if(modalNoButton) {
    modalNoButton.addEventListener("click", () => {
        modal.classList.remove('open')
        backdrop.classList.remove('open')
    })
}

backdrop.addEventListener("click", () => {
    if(modalNoButton) {
        modal.classList.remove('open')
    }
    backdrop.classList.remove('open')
    mobileNav.classList.remove('open')
})

toggleButton.addEventListener("click", () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})




