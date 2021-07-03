
var nav = document.querySelector('nav');
var navClass = nav.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function (e) {
    let st = this.scrollY;
    console.log(st);
   if (st < lastScrollY) {
        navClass.remove('hide-up');
    } else {
        navClass.add('hide-up');
    }
    lastScrollY = st;
});
