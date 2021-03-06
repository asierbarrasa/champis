let moon; //Moon object

let phase = 0.0; // Moon phase [0.0, 2.0]
let speed = 0.002; // Moon phase change speed

let starNumber = 50; // Number of stars in the sky
let stars = []; // Array of stars

function setup() {
    // Create the canvas
    let canvas = createCanvas(document.getElementById('moonAnimation').offsetWidth - 10,
    							document.getElementById('moonAnimation').offsetHeight - 10);

    // Set the canvas parent
    canvas.parent("moonAnimation");

    // Set the canvas position
    canvas.position(5, 5);

    // Generate the stars
    stars = generateStarsBlueNoise(starNumber, width, height);

    // Init the moon object
    moon = new Moon(width/2, height/2, 150);
}

function draw() {
    // Draw the background
    background(0);

    // Draw the stars
    fill(255);
    noStroke();
    stars.forEach(s => ellipse(s.x, s.y, random(2, 6)));

    // Draw the moon
    moon.draw(2*phase);

    // Update the moon phase
    phase = (phase + speed)%1.0;
}

// Function to be called on window resized
function windowResized() {

    //Sore previous canvas size
    let pWidth = width;
    let pHeight = height;

    // Resize the canvas
	resizeCanvas(document.getElementById('moonAnimation').offsetWidth - 10,
    				document.getElementById('moonAnimation').offsetHeight - 10);

	// Recalculate stars position
	for(let i = 0; i < stars.length; i++){
	    stars[i].x = stars[i].x * width/pWidth;
        stars[i].y = stars[i].y * height/pHeight;
    }

	// Recalculate the moon center
	moon.pos.x = width/2;
	moon.pos.y = height/2;

	// Recalculate moon radius
	moon.rad = max(min(150, min(width/2 - 20, height/2 - 20)), 50);
}

