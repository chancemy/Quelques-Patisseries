const typeBtns = document.querySelectorAll('.type-btn');
typeBtns.forEach(typeBtn => typeBtn.addEventListener('click', toggleItem), {
    capture: false //為true的話 捕捉的順序由父層向子層
});
function toggleItem(e) {
    e.stopPropagation();
    const item = this.querySelector('.item-btn');
    if (!item) {
        return
    } else {
        item.classList.toggle('hide');
    }
}
const checkBoxes = document.querySelectorAll('.product-type li')
checkBoxes.forEach(checkBox => checkBox.addEventListener('click', toggleCheck), {
    capture: false //為true的話 捕捉的順序由父層向子層
})
function toggleCheck(e) {
    e.stopPropagation();
    checkBoxes.forEach(checkBox => checkBox.classList.remove('checked'));
    this.classList.add('checked');

}