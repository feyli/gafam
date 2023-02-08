document.addEventListener("DOMContentLoaded", function () {
    if (window.localStorage.getItem("cookie") !== "true") {
        document.getElementById("cookie-banner").style.display = "block";
        document.getElementById("cookie-banner-accept").addEventListener("click", function () {
            document.getElementById("cookie-banner").style.display = "none";
            window.localStorage.setItem("cookie", "true");
        });
    }
});