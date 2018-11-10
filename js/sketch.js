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
    // Resize the canvas
	resizeCanvas(document.getElementById('moonAnimation').offsetWidth - 10,
    				document.getElementById('moonAnimation').offsetHeight - 10);

	// Regenerate the stars array
	stars = generateStarsBlueNoise(starNumber, width, height);

	// Recalculate the moon center
	moon.pos.x = width/2;
	moon.pos.y = height/2;
}

