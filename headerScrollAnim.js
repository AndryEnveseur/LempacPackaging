//#region | Header animation with scroll
const getPropertyValue = (element, propertyName) => window.getComputedStyle(element).getPropertyValue(propertyName);

const header = document.querySelector('header > div');
const HEADER_HEIGHT = parseFloat(getPropertyValue(document.querySelector('header'), 'max-height').replace('px', ''));

console.log(getComputedStyle(document.querySelector('body')).getPropertyValue('--header-top-height'));

window.onscroll = (e) => {

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
//#endregion

const MEDIA_QUERY_MAX_WIDTH_900PX = 990;
const headerTop = document.querySelector('header nav:first-of-type');
const headerBottom = document.querySelector('header nav:last-of-type');
const headerTopHeight = parseFloat(getPropertyValue(headerTop, 'min-height').replace('px', ''));

window.addEventListener('resize', () => {
    if (window.innerWidth <= MEDIA_QUERY_MAX_WIDTH_900PX) {
        headerBottom.style.height = `${(window.innerHeight - headerTopHeight)}px`;
    } else {
        headerBottom.style.height = 'auto';
    }
});

/* If the hamburguer mobile menu is opened the user will not scroll vertically */
const restrictScrollY = (e) => document.querySelector('body').style.overflowY = e.checked ? 'hidden' : 'auto';

