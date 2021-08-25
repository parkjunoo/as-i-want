const [itemBox] = document.getElementsByClassName('select-item-box');
const [selectorButton] = document.getElementsByClassName('custom-selector-select-arrow');

selectorButton.addEventListener('click', function () {
    itemBox.classList.toggle('hide');
})


