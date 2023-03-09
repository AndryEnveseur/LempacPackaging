const header = document.querySelector('.header-sticky');
const main = document.querySelector('main');
const HEADER_HEIGHT = 218.53;

window.onscroll = e => {
    let scrollingToUp = this.oldScroll > this.scrollY;

    if (scrollingToUp) {
        if (this.scrollY >= HEADER_HEIGHT) {
            header.classList.remove('header-sticky-hide');
            header.classList.add('header-sticky-displayed');
        }

        if (this.scrollY <= 2) {
            header.classList.remove('header-sticky-opacity-1');
            header.classList.remove('header-sticky-displayed');
            header.classList.add('header-sticky-hide');
        }

    //Scroll down
    } else {
        header.classList.add('header-sticky-hide');
        header.classList.remove('header-sticky-displayed');

        if (this.scrollY >= HEADER_HEIGHT) {
            header.classList.add('header-sticky-opacity-1');
        }


    }

    this.oldScroll = this.scrollY;
}