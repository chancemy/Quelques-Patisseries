
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


setTimeout(showPage, 4000);

function showPage() {
    var loadingPage = document.querySelector('.loading');
    var body = document.querySelector('body');
    loadingPage.classList.add('hidden');

    setTimeout(function () {
        loadingPage.classList.add('display-none');
        body.classList.remove('loading-animate');
    }, 800);

}
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);