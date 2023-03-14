//Extracted it from CSS file. Is a media query size
const MEDIA_QUERY_MAX_WIDTH = 990;

//Event called it when the user resize the window
window.onresize = () => {
    //When the window is bigger than 990px the input check for hamburguer menu will be disable
    if (window.innerWidth > MEDIA_QUERY_MAX_WIDTH)
        input.checked = false;
}