function Tariffs() {
    const tabLinks = document.querySelectorAll('.tariffs__tabs-link');
    const tabPanels = document.querySelectorAll('.tariffs__tabs-panel');

    addEventListeners();

    function addEventListeners() {
        tabLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                let index = [...tabLinks].indexOf(link) + 1;
                let panel = document.querySelector('.tariffs__tabs-panel:nth-child(' + index + ')');

                document.querySelector('.tariffs__tabs-item--active').classList.remove('tariffs__tabs-item--active');
                document.querySelector('.tariffs__tabs-panel--active').classList.remove('tariffs__tabs-panel--active');

                link.closest('.tariffs__tabs-item').classList.add('tariffs__tabs-item--active');
                panel.classList.add('tariffs__tabs-panel--active');
            })
        })
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new Tariffs();
})
