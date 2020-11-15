//Opening and closing menu on click
const burgerBtn = document.querySelector('.open');
const navList = document.querySelector('.nav-list');

burgerBtn.addEventListener('click', () => {
    navList.classList.add('active');
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    navList.classList.remove('active');
});

//dodanie cienia pod menu na telefonie

const navBar = document.querySelector('header .container');
const logo = document.querySelector('.nav-brand img');

window.addEventListener('scroll', () => {
    const y = window.pageYOffset;

    if (y > 1) {
        navBar.classList.add('onScroll');
        navBar.style.position = "fixed";
        logo.classList.add('onScroll');
        burgerBtn.classList.add('onScroll');
    } else if (y === 0) {
        navBar.classList.remove('onScroll');
        burgerBtn.classList.remove('onScroll');
    }
})

//dodanie cienia pod menu na komputerze

const navBarDesktop = document.querySelector('.desktop-navigation');

window.addEventListener('scroll', () => {
    const yDesktop = window.pageYOffset;

    if (yDesktop > 10) {
        navBarDesktop.classList.add('box-shadow');
    } else if (yDesktop === 0) {
        navBarDesktop.classList.remove('box-shadow');
    }
})