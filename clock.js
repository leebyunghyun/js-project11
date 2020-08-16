const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector('h2');//정리시 주의 div
const clockAF = clockContainer.querySelector('h3');
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours > 12) {
        hours = hours - 12;
        clockAF.innerText = "FM"
    }
    const seconds = date.getSeconds();
    clockTitle.innerText =
    `${hours
    }:${minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    getTime();
    setInterval(getTime, 500);
}

init();
