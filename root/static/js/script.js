function navfunc() {
    var nav = document.querySelector(".navbar-container nav");
        var links = document.querySelectorAll(".navbar-container nav a:not(.icon)");

        if (nav.classList.contains("responsive")) {
            nav.classList.remove("responsive");
            links.forEach(link => {
                link.style.order = 0;
            });
        } else {
            nav.classList.add("responsive");
            links.forEach((link, index) => {
                link.style.order = index + 1;
            });
        }
    }