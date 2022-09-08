const parallax = document.querySelector("#parallax").style;
const logo = document.querySelector("#logo").style;

document.addEventListener("mousemove", (e) => {
    let x = `${e.clientX / window.innerWidth * 100}% ${e.clientY / window.innerHeight * 100}%`;
    parallax.backgroundPosition = x;
});

function livelyPropertyListener(name, val) {
    switch(name) {
        case "parallaxStrenght":
            parallax.backgroundSize = val + 100 + "%";
            break;  
        case "logoSize":
            logo.scale = val;
            break;   
        case "hideLogo":
            val ?
                logo.opacity = 0
            :
                logo.opacity = 1;
            break;
        case "logoBorderRadius":
            logo.borderRadius = val + "%";
            break;  
    }
}