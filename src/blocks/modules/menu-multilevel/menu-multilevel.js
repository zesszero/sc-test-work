function MenuMultilevel() {
    let menu = document.querySelector('.menu-multilevel');
    let closeBtn = document.querySelector('.menu-multilevel__close-btn');
    let burgerBtn = document.querySelector('.header__btn');

    setEventListeners();

    function showMenu() {
        menu.classList.add('menu-multilevel--opened');
    }

    function hideMenu() {
        menu.classList.remove('menu-multilevel--opened');
    }

    function setEventListeners() {
        burgerBtn.addEventListener('click', () => showMenu());
        closeBtn.addEventListener('click', () => hideMenu());
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new MenuMultilevel();
});


