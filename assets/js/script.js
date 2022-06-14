/*------- SIDEBAR -------*/
const navMenu = document.getElementById('sidebar')
navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')


/*-- MOSTRAR O SIDEBAR - na responsividade --*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*-- ENCONDER O SIDEBAR - na responsividade --*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*------- BARRA DE CONHECIMENTOS - Setas -------*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove('skills__active')

        })

        tab.classList.add('skills__active')
    })

})


/*------- MIXITUP FILTER PROJETOS -------*/
let mixerprojeto = mixitup('.projeto__container', {
    selectors: {
        target: '.projeto__card'
    },
    animation: {
        duration: 300
    }
});


/*------- LINK ATIVADO PORTFOLIO - ao clicar -------*/
const linkprojeto = document.querySelectorAll('.projeto__item')

function activeprojeto() {
    linkprojeto.forEach(l => l.classList.remove('active-projeto'))
    this.classList.add('active-projeto')
}

linkprojeto.forEach(l => l.addEventListener("click", activeprojeto))


/*------- POPUP DOS PROJETOS -------*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("projeto__button")) {
        toggleprojetoPopup();
        projetoItemDetails(e.target.parentElement);
    }
})

function toggleprojetoPopup() {
    document.querySelector(".projeto__popup").classList.toggle("open");
}

document.querySelector(".projeto__popup-close").addEventListener("click", toggleprojetoPopup)

function projetoItemDetails(projetoItem) {
    document.querySelector(".pp__thumbnail img").src = projetoItem.querySelector(".projeto__img").src;
    document.querySelector(".projeto__popup-subtitle span").innerHTML = projetoItem.querySelector(".projeto__title").innerHTML;
    document.querySelector(".projeto__popup-body").innerHTML = projetoItem.querySelector(".projeto__item-details").innerHTML;
}


/*------- INPUT ANIMATION -------*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


/*------- ATIVAÇÃO DO MENU SEÇÕES - ao clicar -------*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
