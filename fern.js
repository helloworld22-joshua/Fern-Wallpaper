document.addEventListener("mousemove", (e) => {
    let x = `${e.clientX / window.innerWidth * 100}% ${e.clientY / window.innerHeight * 100}%`;
    document.querySelector("#parallax").style.backgroundPosition = x;
});

const logo = document.querySelector("#logo");

function livelyPropertyListener(name, val) {
    switch(name) {
        case "logoSize":
            logo.style.scale = val;
            break;   
        case "hideLogo":
            val ?
                logo.style.opacity = 0
            :
                logo.style.opacity = 1;
            break;
    }
}