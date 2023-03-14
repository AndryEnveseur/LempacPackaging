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



/* If the hamburguer mobile menu is opened the user will not scroll vertically */
const restrictScrollY = (e) => document.querySelector('body').style.overflowY = e.checked ? 'hidden' : 'auto';

const resizeHeightMenuMobile = () => {
    console.log(HEADER_HEIGHT)
    document.querySelector('header .navbar-mobile').style.height = `${(window.innerHeight - HEADER_HEIGHT)}px;`
}