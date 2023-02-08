document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cookie-banner").style.display = "block";

    document.getElementById("cookie-banner-accept").addEventListener("click", function() {
        document.getElementById("cookie-banner").style.display = "none";
    });
});

