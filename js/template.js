
var nav = document.querySelector('nav');
var navClass = nav.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function (e) {
    let st = this.scrollY;
    if (st < lastScrollY) {
        navClass.remove('hide-up');
    } else {
        navClass.add('hide-up');
    }
    lastScrollY = st;
});
//滾輪效果套件初始化
AOS.init();
