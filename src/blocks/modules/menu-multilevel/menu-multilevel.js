import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-multilevel__close-btn').addEventListener('click', () => {
        $('.menu-multilevel').animate({ left: "-100%" }, 200);
    });

    document.querySelector('.header__btn').addEventListener('click', () => {
        $('.menu-multilevel').animate({ left: "0" }, 200);
    });
});

