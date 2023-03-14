
const header = document.querySelector('header > div');

/* Event invoked when the user scrolling window */
window.onscroll = (e) => {
    const HEADER_HEIGHT = parseFloat(getPropertyValue(document.querySelector('body'), '--header-height').replace('px', ''));

    //If the hamburguer menu is displayed.
    if (input.checked) {
        //Fix header at top.
        header.style.position = 'fixed';
        header.style.transform = `translateY(${0}px)`;
        
        return;
    }

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

    //To know if the user is scrolling up or down
    this.oldScroll = this.scrollY;
}

