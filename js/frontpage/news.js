

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    // slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
});

//分頁按鈕控制
var pageBtns = document.querySelectorAll('.page-btn');
pageBtns.forEach(pageBtn => {
    pageBtn.addEventListener('click', function () {
        pageBtns.forEach(function (pageBtn) {
            pageBtn.style.color = 'black';
            pageBtn.style.borderColor = '#42210B';
        });
        this.style.color = '#036893';
        this.style.borderColor = '#036893';
        var index = Number(this.innerText) - 1;
        swiper.slideTo(index);
        console.log(swiper.activeIndex);
    });
});


///分類公告
var typeCheckBoxs = document.querySelectorAll('.type');
typeCheckBoxs.forEach(function (typeCheckBox) {
    typeCheckBox.addEventListener('click', function () {
        this.classList.toggle('checked'), ':before';
        this.classList.toggle('border-checked');
        var checked = this;
        typeCheckBoxs.forEach(function (typeCheckBox) {
            if (typeCheckBox != checked) {
                typeCheckBox.classList.remove('checked'), ':before';
                typeCheckBox.classList.remove('border-checked') ;
            }
        });
    })
});


//圖文動畫
var hoverBlocks = document.querySelectorAll('.line-frame');
hoverBlocks.forEach(block => {
    block.addEventListener('mouseover', function () {
        // console.log(this.getElementsByClassName('photo'));
        var photo = this.querySelector('.photo');
        var description = this.querySelector('.description');
        photo.classList.add('photo-active');
        description.classList.add('description-active');

    })
    block.addEventListener('mouseout', function () {
        var photo = this.querySelector('.photo');
        var description = this.querySelector('.description');
        photo.classList.remove('photo-active');
        description.classList.remove('description-active');
    })
});
