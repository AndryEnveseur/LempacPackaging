const header = document.querySelector('.header-sticky');
const HEADER_HEIGHT = 218.53;

window.onscroll = e => {
    let scrollingToUp = this.oldScroll > this.scrollY;

    if (scrollingToUp) {
        if (this.scrollY >= HEADER_HEIGHT * 2) {
            header.classList.remove('header-sticky-hidden');
            header.classList.add('header-sticky-displayed');
        }

        if (this.scrollY <= 0) {
            header.style.opacity = 0;
        }
    //Scroll down
    } else {
        header.classList.remove('header-sticky-displayed');
        header.classList.add('header-sticky-hidden');

        if (this.scrollY > HEADER_HEIGHT) {
            header.style.opacity = 1;
        }
    }

    this.oldScroll = this.scrollY; 
}