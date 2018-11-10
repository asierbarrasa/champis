let moon;

let phase = 0.0;
let speed = 0.002;

let starNumber = 50;
let stars = [];

function setup() {
    let canvas = createCanvas(document.getElementById('moonAnimation').offsetWidth - 10,
    							document.getElementById('moonAnimation').offsetHeight - 10);
    canvas.parent("moonAnimation");
    canvas.position(5, 5);

    stars = generateStarsBlueNoise(starNumber, width, height);
    moon = new Moon(width/2, height/2, 150);
}

function draw() {
    background(0);

    fill(255);
    noStroke();
    stars.forEach(s => ellipse(s.x, s.y, random(2, 6)));

    moon.draw(2*phase);

    phase = (phase + speed)%1.0;
}

function windowResized() {
	resizeCanvas(document.getElementById('moonAnimation').offsetWidth - 10,
    				document.getElementById('moonAnimation').offsetHeight - 10);
	stars = generateStarsBlueNoise(starNumber, width, height);
	moon.pos.x = width/2;
	moon.pos.y = height/2;
}

