window.onload = () => {
    if (!localStorage.getItem('cookies')) {
        document.getElementById('cookie-banner').style.display = 'block';
        document.getElementById('cookie-banner-accept').addEventListener('click', () => {
            document.getElementById('cookie-banner').style.display = 'none';
            localStorage.setItem('cookies', 'true');
        });
    }
    // add .active class to the button that's href is the end of the current page href
    const currentHref = document.location.href;
    const currentHrefEnd = currentHref.substring(currentHref.lastIndexOf('/') + 1);
    const activeButton = document.querySelector(`a[href$="${currentHrefEnd}"]`);
    activeButton.classList.add('active');
    activeButton.removeAttribute('href');
};

function onKonamiCode(cb) {
    let input = '';
    const key = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyQ';
    document.addEventListener('keydown', e => {
        input += ("" + e.code);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.code);
    });
}

onKonamiCode(() => {
    const dialog = confirm('Vous avez trouvé un easter-egg ! Cliquez sur OK pour voir la surprise !');
    if (dialog) {
        let newTab = window.open();
        newTab.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});