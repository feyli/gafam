const topnav = fetch('../components/topnav.html');
const cookies = fetch('../components/cookies.html');

topnav.then(response => response.text())
    .then(data => {
        document.body.innerHTML = data + document.body.innerHTML;
        let activePageButton = document.getElementById(window.location.pathname.split('/').pop().split('.')[0])
        activePageButton.classList.add('active');
        activePageButton.removeAttribute('href');
    });
cookies.then(response => response.text())
    .then(data => {
        document.body.innerHTML = document.body.innerHTML + data;
    });

window.onload = () => {
    if (!localStorage.getItem('cookies')) {
        document.getElementById('cookie-banner').style.display = 'block';
        document.getElementById('cookie-banner-accept').addEventListener('click', () => {
            document.getElementById('cookie-banner').style.display = 'none';
            localStorage.setItem('cookies', 'true');
        });
    }
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
    let newTab = window.open();
    newTab.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});