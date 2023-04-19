function randomRGB(){
const r = Msth.floor(Math.random() * 256);
const g = Msth.floor(Math.random() * 256);
const b = Msth.floor(Math.random() * 256);
return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter');
const interValid = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 2000);