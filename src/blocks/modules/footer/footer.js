import $ from 'jquery/src/jquery';

function FooterMenu() {
    let btnSelector = '.footer__menu-title';

    setEventListeners();
    initToUpBTn();

    function initToUpBTn() {
        let btn = $('.footer__scroll-btn');

        $(window).scroll(() => {
            btn.toggleClass('footer__scroll-btn--show', $(window).scrollTop() > 300)
        });

        btn.on('click', e => {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        })
    }

    function setEventListeners() {
        document.querySelectorAll(btnSelector).forEach(btn => {
            btn.addEventListener('click', () => {
                let column = btn.closest('.footer__menu');
                let list = column.querySelector('.footer__menu-list');

                $(list).slideToggle(() => {
                    btn.classList.toggle('footer__menu--active', !list.style.display);
                });
            });
        });

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth >= 470) {
                document.querySelectorAll('.footer__menu-list').forEach(list => {
                    list.style.display = '';
                })
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FooterMenu();
});