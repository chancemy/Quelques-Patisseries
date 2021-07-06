var imgContainers = document.querySelectorAll('.img-container')
var bigImg = document.querySelector('.img-big img')
imgContainers.forEach(img => img.addEventListener('click',changeImg))
function changeImg(e){
    let newSrc = this.querySelector('img').dataset.src;
    bigImg.src = newSrc;

}