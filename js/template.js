
var nav = document.querySelector('nav');
var navClass = nav.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function (e) {
    var st = this.scrollY;
   if (st < lastScrollY) {
        navClass.remove('hide-up');
    } else {
        navClass.add('hide-up');
    }
    lastScrollY = st;
});
