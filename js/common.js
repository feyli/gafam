const common = fetch('../components/topnav.html');
common.then(response => response.text())
    .then(data => {
        document.body.innerHTML = data + document.body.innerHTML;
        let activePageButton = document.getElementById(window.location.pathname.split('/').pop().split('.')[0])
        activePageButton.classList.add('active');
        activePageButton.removeAttribute('href');
    });