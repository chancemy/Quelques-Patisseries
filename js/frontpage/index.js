
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


setTimeout(showPage, 1700);

function showPage() {
    var loadingPage = document.querySelector('.loading');
    var body = document.querySelector('body');
    loadingPage.classList.add('hidden');

    setTimeout(function () {
        loadingPage.classList.add('display-none');
        body.classList.remove('loading-animate');
    }, 500);

}
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

window.addEventListener('scroll', function (e) {
    var aboutTop = document.querySelector('.section-about').offsetTop;
    var aboutHeight = document.querySelector('.section-about').offsetHeight;
    let scrollY = this.scrollY;

    var cherry = document.querySelector('.cherry');
    var cherryMove = ((scrollY - aboutTop) / aboutHeight) * 100;
    cherry.style.bottom = cherryMove + '%'



})
