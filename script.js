document.addEventListener("mousemove", (e) => {
    let x = `${e.clientX / window.innerWidth * 100}% ${e.clientY / window.innerHeight * 100}%`;
    document.querySelector("#parallax").style.backgroundPosition = x;
});

const logo = document.querySelector("#logo").style;

function livelyPropertyListener(name, val) {
    switch(name) {
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