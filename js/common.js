// import topnav from ../components/topnav.html
$(function() {
  $("body").prepend("<div id='temp-container'></div>");
  $("#temp-container").load("../components/topnav.html", function() {
    $("#temp-container").contents().unwrap();
  });
});


window.onload = () => {
    if (!localStorage.getItem('cookies')) {
        $("body").append("<div id='cookie-temp-container'></div>");
        $("#cookie-temp-container").load("../components/cookies.html", function() {
            $("#cookie-temp-container").contents().unwrap();
            $('#cookie-banner-accept').on('click', () => {
            document.getElementById('cookie-banner').style.display = 'none';
            localStorage.setItem('cookies', 'true');
        });
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