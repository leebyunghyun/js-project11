const body = document.querySelector("body");
const IMG_NUMBER = 7;
let image

function paintImage(imgNumber) {
    image = new Image();
    Direc = getTemp(imgNumber);
    image.src = Direc;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getTemp(imgNumber) {
    const loadTemp = Number(JSON.parse(localStorage.getItem("Temp")))
    let Direc = "";
    if (loadTemp === 0) {
        Direc=`./images/fish/${imgNumber +1}.jpg`;
    } else {
        if (loadTemp > 26) {
            Direc=`./images/hot/${imgNumber +1}.jpg`;
        } else if (loadTemp < 7) {
            Direc=`./images/cold/${imgNumber +1}.jpg`;
        } else {
            Direc = `./images/medium/${imgNumber +1}.jpg`;
        }
    }
    console.log(loadTemp);
    return Direc;
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    body.removeChild(image)
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
const randomNumber = genRandom();
paintImage(randomNumber);
setInterval(init, 20000);