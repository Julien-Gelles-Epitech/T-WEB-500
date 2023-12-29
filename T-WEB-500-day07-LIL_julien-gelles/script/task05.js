let pausesong = document.getElementsByTagName("button")[0]
let stopsong = document.getElementsByTagName("button")[1]
let mutesong = document.getElementsByTagName("button")[2]
console.log(pausesong, stopsong, mutesong);


var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');
console.log(canvas, context);

context.lineWidth = 1;
context.fillStyle = "white";
context.beginPath();
context.moveTo(6, 6);
context.lineTo(14, 10);
context.lineTo(6, 14);
context.closePath();
context.fill();

var audio = new Audio('./script/nightcall.mp3');

canvas.addEventListener("click", () => {
    audio.play()
})
pausesong.addEventListener("click", () => {
    audio.pause()
})
stopsong.addEventListener("click", () => {
    audio.load();
    audio.pause();
})
mutesong.addEventListener("click", () => {
    if (!audio.muted) {
        audio.muted = true;
    } else {
        audio.muted = false;
    }
})
