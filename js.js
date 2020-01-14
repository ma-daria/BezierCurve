let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let color_id= 'black';

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

context.fillText("Для отрисовки необходимо кликнуть по экрану в 2х местах", 10, 10);
context.stroke();

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
    context.strokeStyle = color_id;
    context.quadraticCurveTo(P1[0], P1[1], P2[0], P2[1]);
    context.closePath();
    context.stroke();
}


let FizzyText = function() {
    this.color_change = 'black';

};

window.onload = function() {
    var text = new FizzyText();
    var gui = new dat.GUI();
    var controllerColorChange = gui.add(text, 'color_change', ['black', 'red', 'green', 'blue' ] );


    controllerColorChange.onChange(function(value) {
        if (value == 'red')
            color_id = value;
        if (value == 'green')
            color_id = value;
        if (value == 'blue')
            color_id = value;
        if (value == 'black')
            color_id = value;
    });
};

