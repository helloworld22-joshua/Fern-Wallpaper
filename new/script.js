function updateClock() {
    const clock = document.getElementById("time");
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}`;
    clock.textContent = currentTime;
}

updateClock();
setInterval(updateClock, 1000);