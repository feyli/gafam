const shared = fetch('../components/topnav.html');
shared.then(response => response.text())
    .then(data => {
            document.getElementById('topnav') ? document.getElementById('topnav').innerHTML = data : console.log('No topnav element found');
    });