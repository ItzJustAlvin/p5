function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(500, 130);
    video = createCapture(VIDEO);
    video.hide();
} 

function draw() {
    image(video, 160, 120, 320, 240);
    stroke(124, 142, 207);
    fill(124, 142, 207);
    circle(100, 70, 60);
    circle(100, 410, 60);
    circle(540, 70, 60);
    circle(540, 410, 60);
    stroke(157, 124, 207);
    fill(157, 124, 207);
    rect(126, 60, 388, 25)
    rect(126, 400, 388, 25)
    rect(86, 98, 25, 286)
    rect(529, 98, 25, 286)
}

function take_snapshot() {
    save('i_still_haunt_You.png');
}