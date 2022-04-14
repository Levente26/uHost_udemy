let backdrop = document.querySelector('.backdrop')
let selectPlanButton = document.querySelectorAll('.plan button')
let modal = document.querySelector('.modal')
let modalNoButton = document.getElementById('no')
let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')
let ctaButton = document.querySelector('.main-nav__item--cta')

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.classList.add('open')
        backdrop.classList.add('open')
        setTimeout(() => {
            backdrop.style.display = "block"
        }, 10)
    })
}

if(modalNoButton) {
    modalNoButton.addEventListener("click", () => {
        modal.classList.remove('open')
        backdrop.classList.remove('open')
        setTimeout(() => {
            backdrop.style.display = "none"
        }, 200)
    })
}

backdrop.addEventListener("click", () => {
    if(modalNoButton) {
        modal.classList.remove('open')
    }
    backdrop.classList.remove('open')
    mobileNav.classList.remove('open')
    setTimeout(() => {
        backdrop.style.display = "none"
    }, 200)
})

toggleButton.addEventListener("click", () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
    setTimeout(() => {
        backdrop.style.display = "block"
    }, 200)
})

ctaButton.addEventListener('animationstart', (e) => {
    console.log("Animation started", e)
})

ctaButton.addEventListener('animationend', (e) => {
    console.log("Animation ended", e)
})

ctaButton.addEventListener('animationiteration', (e) => {
    console.log("Animation iteration", e)
})



