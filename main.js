//Opening and closing menu on click
const burgerBtn = document.querySelector('.open');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item a');


burgerBtn.addEventListener('click', () => {
    navList.classList.add('active');
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    navList.classList.remove('active');
});

navItems.forEach(navItem => navItem.addEventListener('click', () => {
    navList.classList.remove('active');
}))

//dodanie cienia pod menu na telefonie

const navBar = document.querySelector('header .container');
const logo = document.querySelector('.nav-brand img');
const underline = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const y = window.pageYOffset;

    if (y > 1) {
        navBar.classList.add('onScroll');
        navBar.style.position = "fixed";
        logo.classList.add('onScroll');
        burgerBtn.classList.add('onScroll');
        navItems.forEach(navItem => navItem.classList.add('onScroll'));
        underline.classList.add('onScroll');
    } else if (y === 0) {
        navBar.classList.remove('onScroll');
        burgerBtn.classList.remove('onScroll');
        navList.classList.remove('onScroll');
        navItems.forEach(navItem => navItem.classList.remove('onScroll'));
        underline.classList.remove('onScroll');
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