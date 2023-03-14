//#region | Header animation with scroll
const getPropertyValue = (element, propertyName) => window.getComputedStyle(element).getPropertyValue(propertyName);

const header = document.querySelector('header > div');
const input = document.querySelector('input#hamburguer-menu');
const HEADER_HEIGHT = parseFloat(getPropertyValue(document.querySelector('header'), 'max-height').replace('px', ''));

window.onscroll = (e) => {

    let scrollingToUp = this.oldScroll > this.scrollY;

    //If the hamburguer menu is displayed, 
    if (input.checked) {
        header.style.position = 'fixed';
        header.style.transform = `translateY(${0}px)`;
        
        return;
    }

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

const restrictScrollY = () => document.querySelector('body').classList.toggle('noscroll'); 

const resizeHeightMenuMobile = () => document.querySelector('header .navbar-mobile').style.height = `${(window.innerHeight - HEADER_HEIGHT)}px;`;

const closeHamburguerMenu = () => {
    console.log('xd')
    const input = document.querySelector('input#hamburguer-menu');
    const currentInputState = input.checked;

    input.checked = !currentInputState;
}