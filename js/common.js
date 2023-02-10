// display cookie banner if not accepted
if (!localStorage.getItem('cookies')) {
    document.getElementById('cookie-banner').style.display = 'block';
    document.getElementById('cookie-banner-accept').addEventListener('click', () => {
        document.getElementById('cookie-banner').style.display = 'none';
        localStorage.setItem('cookies', 'true');
    });
}
// add .active class to the current page button and remove its href attribute to prevent it from being clickable
const currentHref = document.location.href;
const currentHrefEnd = currentHref.substring(currentHref.lastIndexOf('/') + 1);
const activeButton = document.querySelector(`a[href$="${currentHrefEnd}"]`);
activeButton.classList.add('active');
activeButton.removeAttribute('href');

// function that runs a callback function once the konami code is entered
// when a key is pressed, it adds the key code to the input variable and compares it to the konami code
// if the input is the same as the konami code, the callback function is executed
function onKonamiCode(cb) {
    // declare a variable to store the input
    let input = '';
    // declare a variable to store the konami code
    const key = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyQ';
    // listen to keydown event on the whole document
    document.addEventListener('keydown', e => {
        // add the key code to the input variable
        input += ("" + e.code);
        // if the input is the same as the konami code, execute the callback function
        if (input === key) {
            return cb();
        }
        // if the input is not the same as the konami code, reset the input variable
        if (!key.indexOf(input)) return;
        input = ("" + e.code);
    });
}

// call the function onKonamiCode and pass a callback function as argument
onKonamiCode(() => {
    const dialog = confirm('Vous avez trouvé un easter-egg ! Cliquez sur OK pour voir la surprise !');
    // if the user clicks on OK, open a new tab with the surprise (it's a rick roll)
    if (dialog) {
        let newTab = window.open();
        newTab.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});