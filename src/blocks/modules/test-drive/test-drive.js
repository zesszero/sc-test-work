import $ from 'jquery/src/jquery';
import IMask from "imask";

function TestDrive(block = document) {
    let regionBlock = block.querySelector('.test-drive__region');
    let selectedRegion = block.querySelector('.test-drive__region-selected');
    let regionList = block.querySelector('.test-drive__region-list');
    let regionListItems = block.querySelectorAll('.test-drive__region-item');
    let phoneMask;
    let regionsCodesList = {
        RU: '7',
        EN: '44',
        US: '1',
        CN: '86',
    };

    init();

    function init() {
        setEventListeners();
        setPhoneMask();
    }

    function initBlocks() {

    }

    function setEventListeners() {
        block.querySelectorAll('.test-drive__form-input').forEach(formInput => {
            formInput.addEventListener('keyup', () => {
                let value = formInput.value;

                formInput.classList.toggle('test-drive__form-input--filled', value.length !== 0)
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
        let phoneInput = block.querySelector('.test-drive__form-input[name="phone"]');

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
    document.querySelectorAll('.test-drive').forEach(testDrive => {
        new TestDrive(testDrive);
    });
});