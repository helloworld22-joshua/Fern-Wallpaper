document.addEventListener("mousemove", (e) => {
    let x = `${e.clientX / window.innerWidth * 100}% ${e.clientY / window.innerHeight * 100}%`;
    document.querySelector("#parallax").style.backgroundPosition = x;
});

const logo = document.querySelector("#logo");

function livelyPropertyListener(name, val) {
    switch(name) {
        case "logoColor":
            logo.setAttribute("fill", val);
            break;
        case "logoSize":
            logo.style.scale = val;
            break;   
        case "hideLogo":
            logo.style.display = none;
            break;     
    }
}