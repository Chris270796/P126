enemyS = "";
WellermanS = "";

function preload() {
    enemyS = loadSound("EnemyS.mp3")
    WellermanS = loadSound("WellermanS.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 600, 500);
}