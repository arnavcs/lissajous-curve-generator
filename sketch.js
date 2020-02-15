let winHeight = window.innerHeight;
let winWidth = window.innerWidth;

let a = 1;
let b = 1;
let variety = 10;

function setup() {
    createCanvas(winWidth, winHeight);
    background(90, 63, 102);
    stroke('rgba(255, 53, 102, 0.6)');
    strokeWeight(5);
    textSize(winHeight/2.4);
    textAlign(CENTER, CENTER);
    fill('rgba(195, 53, 102, 0.6)');
    text(`a:${a} b:${b}`, winWidth / 2, winHeight / 2);
    angleMode(DEGREES);
}

let sectiondim = {
    x: winWidth / variety,
    y: winHeight / variety
};

let t = 0;
let pcor = {
    x: 0,
    y: 0
};
let cor = {
    x: 0,
    y: 0
};

function draw() {
    pcor = cor;
    cor = {
        x: ((0.9 * winWidth / 2) * sin(a * t)) + winWidth/2,
        y: ((0.9 * winHeight / 2) * sin(b * t)) + winHeight/2
    };
    if (t > 2) {
        line(pcor.x, pcor.y, cor.x, cor.y);
    }
    t += 1;
}

function mouseMoved() {
    if (!(a == Math.ceil(mouseX / sectiondim.x)) || !(b == Math.ceil(mouseY / sectiondim.y))) {
        a = Math.ceil(mouseX / sectiondim.x);
        b = Math.ceil(mouseY / sectiondim.y);
        clear();
        background(90, 63, 102);
        text(`a:${a}  b:${b}`, winWidth / 2, winHeight / 2);
        t = 0;
    }
}