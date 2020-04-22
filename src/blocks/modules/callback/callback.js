import Swiper from "swiper";

function Callback() {
    let callbackSlider;
    let sliderSelector = '.callback__slider';
    let params = {
        direction: 'horizontal',
        loop: true ,
        slidesPerView: 1,
        pagination: {
            el: '.callback__slider-pagination' ,
            bulletClass: 'callback__slider-dot',
            clickable: true,
            bulletActiveClass: 'callback__slider-dot--active',
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            }
        }
    };
    let namespaces = {
        containerModifierClass: 'callback__slider--',
        slideClass: 'callback__slide',
        slideActiveClass: 'callback__slide--active',
        slideDuplicateActiveClass: 'callback__slide--duplicate-active',
        slideVisibleClass: 'callback__slide--visible',
        slideDuplicateClass: 'callback__slide--duplicate',
        slideNextClass: 'callback__slide--next',
        slideDuplicateNextClass: 'callback__slide--duplicate-next',
        slidePrevClass: 'callback__slide--prev',
        slideDuplicatePrevClass: 'callback__slide--duplicate-prev',
        wrapperClass: 'callback__slider-wrapper',
    };
    let breakpoints = {
        breakpoints: {
            1024: {
                slidesPerView: 2,
            },
        }
    };

    initSlider();

    function initSlider() {
        callbackSlider = new Swiper(sliderSelector, {
            ...params,
            ...namespaces,
            ...breakpoints,
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Callback();
});