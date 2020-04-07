import $ from 'jquery/src/jquery';

function CompareMobile() {
    let btnSelector = '.compare-mobile__btn';

    setEventListeners();

    function setEventListeners() {
        document.querySelectorAll(btnSelector).forEach(btn => {
            btn.addEventListener('click', () => {
                let column = btn.closest('.compare-mobile__column');
                let list = column.querySelector('.compare-mobile__list');

                $(list).slideToggle(() => {
                    btn.classList.toggle('compare-mobile__btn--active', !list.style.display);
                });
            });
        });

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth >= 470) {
                document.querySelectorAll('.compare-mobile__list').forEach(list => {
                    list.style.display = '';
                })
            }
        })
    }


}

document.addEventListener('DOMContentLoaded', () => {
    new CompareMobile();

});