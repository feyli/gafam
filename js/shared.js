const shared = fetch('../components/topnav.html');
shared.then(response => response.text())
    .then(data => {
        if (document.getElementById('topnav')) {
            document.getElementById('topnav').innerHTML = data;
            let activePageButton = document.getElementById(window.location.pathname.split('/').pop().split('.')[0])
            activePageButton.classList.add('active');
            activePageButton.removeAttribute('href');
        }
    });