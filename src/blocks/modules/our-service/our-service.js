function OurService() {
    const tabLinks = document.querySelectorAll('.our-service__tabs-link');
    const tabPanels = document.querySelectorAll('.our-service__tabs-panel');

    addEventListeners();

    function addEventListeners() {
        tabLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                let index = [...tabLinks].indexOf(link) + 1;
                let panel = document.querySelector('.our-service__tabs-panel:nth-child(' + index + ')');

                document.querySelector('.our-service__tabs-item--active').classList.remove('our-service__tabs-item--active');
                document.querySelector('.our-service__tabs-panel--active').classList.remove('our-service__tabs-panel--active');

                link.closest('.our-service__tabs-item').classList.add('our-service__tabs-item--active');
                panel.classList.add('our-service__tabs-panel--active');
            })
        })
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new OurService();
})