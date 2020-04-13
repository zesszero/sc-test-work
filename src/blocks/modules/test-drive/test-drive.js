import $ from 'jquery/src/jquery';
import IMask from "imask";

function TestDrive() {
    let regionBlock = document.querySelector('.test-drive__region');
    let selectedRegion = document.querySelector('.test-drive__region-selected');
    let regionList = document.querySelector('.test-drive__region-list');
    let regionListItems = document.querySelectorAll('.test-drive__region-item');
    let phoneMask;
    let regionsCodesList = {
        RU: '7',
        EN: '8',
        KZ: '9',
    };

    init();

    function init() {
        setEventListeners();
        setPhoneMask();
    }

    function setEventListeners() {
        document.querySelectorAll('.test-drive__form-input').forEach(formInput => {
            formInput.addEventListener('keyup', () => {
                let value = formInput.value;

                formInput.classList.toggle('test-drive__form-field--filled', value.length !== 0)
            });
        });

        selectedRegion.addEventListener('click', () => {
            $(regionList).slideToggle(() => updateRegionBlockActive());
        });

        regionListItems.forEach(item => {
            item.addEventListener('click', () => {
                selectRegion(item.getAttribute('data-value'));
                closeRegionsList();
            });
        });
    }

    function setPhoneMask() {
        let phoneInput = document.querySelector('.test-drive__form-input[name="phone"]');

        phoneMask = IMask(phoneInput, {
            mask: '+{7} (000) 000-00-00',
            lazy: false,
            placeholderChar: '_'
        });
    }

    function updatePhoneMask(regionCode) {
        phoneMask.updateOptions({mask: '+{' + regionCode + '} (000) 000-00-00',})
    }

    function selectRegion(region) {
        if (regionsCodesList.hasOwnProperty(region)) {
            updatePhoneMask(regionsCodesList[region]);
            selectedRegion.innerText = region;
        }

    }

    function closeRegionsList() {
        $(regionList).slideUp();
        updateRegionBlockActive();
    }

    function updateRegionBlockActive() {
        regionBlock.classList.toggle('test-drive__region--active', !regionList.style.display);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TestDrive();
});