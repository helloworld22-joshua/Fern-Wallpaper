const parallax = document.querySelector("#parallax");
const logo = document.querySelector("#logo");

document.addEventListener("mousemove", (e) => {
    let x = `${e.clientX / window.innerWidth * 100}% ${e.clientY / window.innerHeight * 100}%`;
    /* parallax.style.objectPosition = x; */
    parallax.style.backgroundPosition = x;
});

function livelyPropertyListener(name, val) {
    switch(name) {
        case "selectWallpaper":
            parallax.style.backgroundImage = `url("${val.replace("\\", "/")}")`;
            break;
        case "selectLogo":
            logo.setAttribute("src", val.replace("\\", "/"));
            break;
        case "parallaxStrenght":
            parallax.style.backgroundSize = val + 100 + "%";
            break;
        case "logoSize":
            logo.style.height = val + "%";
            break;
        case "logoBorderRadius":
            logo.style.borderRadius = val + "%";
            break;
        case "hideLogo":
            val ?
                logo.style.opacity = 0
            :
                logo.style.opacity = 1;
            break;
    }
}