const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiperNews = new Swiper('.swiperNews', {
    loop: true,

    pagination: {
        el: '.swiper-pagination-new',
        bulletClass: '.swiper-pagination-newbullet'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const burger = document.querySelector('.menu-burger__header')
const menu = document.querySelector('.header__wrapper-mobile')
function handleBurgerClick() {
    menu.classList.toggle('header__wrapper-mobile_active')
    burger.classList.toggle('menu-burger__header_active')
}

burger.addEventListener('click', handleBurgerClick)
