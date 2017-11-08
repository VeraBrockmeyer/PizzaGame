let bg;
function setup(){
createCanvas(windowWidth, windowHeight);
bg= loadImage("/assets/BG.jpg");
}

function draw(){
image(bg,0,0);
}