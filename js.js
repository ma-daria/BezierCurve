let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let P1 = [0, 0];
let P2 = [0, 0];
let f = true;

document.onclick = function() {
    if (f){
        P1 = [event.clientX, event.clientY];
        f = false;
    }else {
        P2 = [event.clientX, event.clientY];
        f = true;
        Draw();
    }
};

function Draw() {
    context.beginPath();
    context.quadraticCurveTo(P1[0], P1[1], P2[0], P2[1]);
    context.closePath();
    context.stroke();
    console.log(P1, P2)
}