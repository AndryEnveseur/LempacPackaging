const header = document.querySelector('header:first-of-type > div');
const HEADER_HEIGHT = 218.53;

window.onscroll = e => {
    let scrollingToUp = this.oldScroll > this.scrollY;

    if (scrollingToUp) {

        if (this.scrollY > HEADER_HEIGHT) {

            header.style.position = 'fixed';
            header.style.transform = `translateY(${0}px)`;

        } else if (this.scrollY <= 1) {

            header.style.position = 'initial';

        }

    } else {

        if (this.scrollY > HEADER_HEIGHT) {
            header.style.transform = `translateY(${-1 * HEADER_HEIGHT}px)`;
        }

    }

    this.oldScroll = this.scrollY;
}