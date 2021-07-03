
var frontNav = document.querySelector('nav');
const banner = document.querySelector('.banner');
    
window.addEventListener('scroll', function (e) {
    let st = this.scrollY;
    let bannerHeight = banner.offsetHeight;

    if (st > bannerHeight) {
        frontNav.classList.remove('front-nav');
    } else {
        frontNav.classList.add('front-nav');
    }
    
});
