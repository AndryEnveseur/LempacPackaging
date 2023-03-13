const getPropertyValue = (element, propertyName) => window.getComputedStyle(element).getPropertyValue(propertyName);

const header = document.querySelector('header > div');
const HEADER_HEIGHT = parseFloat(getPropertyValue(document.querySelector('header'), 'min-height').replace('px', ''));

window.onscroll = e => {
    let scrollingToUp = this.oldScroll > this.scrollY;

    if (scrollingToUp) {
        if (this.scrollY > HEADER_HEIGHT) {
            header.style.position = 'fixed';
            header.style.transform = `translateY(${0}px)`;
        } else if (this.scrollY <= 0) {
            header.style.position = 'initial';
        }
    } else {
        if (this.scrollY > HEADER_HEIGHT) {
            header.style.transform = `translateY(${-1 * HEADER_HEIGHT}px)`;
        }
    }

    this.oldScroll = this.scrollY;
}