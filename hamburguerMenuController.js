/* Called it for each the user show the hamburguer menu */
/* Resize the height hamburguer menu for fit to screen devices */
const resizeHeightMenuMobile = () => {
    const HEADER_HEIGHT = parseFloat(getPropertyValue(document.querySelector('body'), '--header-height').replace('px', ''));
    document.querySelector('header .navbar-mobile').style.height = `${(window.innerHeight - HEADER_HEIGHT)}px;`;
} 

/* Another way to close the hamburguer menu */
/* Called from the translucent black background */
const closeHamburguerMenu = () => {
    const currentInputState = input.checked;
    input.checked = !currentInputState;
}