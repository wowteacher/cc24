// rif Daniel Shiffman CC #24
// perlin noise flow field
// codice commentato in italiano

//punto di partenza per spiegare come funziona perlin noise in 2d

var inc = 0.1; // aumentando ci sono più variazioni di colore || default 0.01
var scl = 25; // un vector ogni n pixel
var cols, rows;

//terza dimensione in questo caso è il tempo e agisce sull'angolo
var zoff = 0;

var fr; //framerate

var particles = []; //array

function setup() {
	createCanvas(500, 550);
	//pixelDensity(1); // annulla la visualizzazione hd del retina display
	cols = floor(width / scl);
	rows = floor(height / scl);
	fr = createP(''); //crea il paragrafo per visualizzare il frameRate corrente

	//implemento array di particles
	
	// aggiungo 100 particles con un for loop
	for (var i =0; i < 100; i++) {
		particles[i] = new Particle();
	}
}

function draw() {
	//background(200, 100, 150, 10);
	background(255);
	//randomSeed(10); //seed value restituisce numeri pseudo casuali a ogni loop
	var yoff = 0;

	for (var y = 0; y < rows; y++) { //righe dell'array di pixel
		var xoff = 0; // slittamento in orizzontale del noise
		for (var x = 0; x < cols; x++) { //colonne dell'array di pixel
			var index = (x + y * width) * 4; // visualizzazione di ogni punto in base alla larghezza
			//var r = noise(xoff, yoff) * 255; // aggiungo il noise per l'interpolazione (255 variazioni di grigio)

			// invece delle variazioni di grigio voglio visualizzare le variazione degli angoli
			var angle = noise(xoff, yoff, zoff) * TWO_PI;
			var v = p5.Vector.fromAngle(angle);

			//invece di riempire la griglia, voglio delle linee vector
			//var v = p5.Vector.fromAngle(random(TWO_PI)); // 0 linee orizzontali PI/2 verticali
			xoff += inc;
			//strokeWeight(random(2.0));
			//stroke(0, 100);

			stroke(0)
			push();

			translate(x * scl, y * scl);
			rotate(v.heading());
			line(0, 0, scl, 0);

			pop();

			//fill(random(255));
			//fill(r);
			//rect(x * scl, y * scl, scl,scl); // griglia di pixel
		}
		yoff += inc;

		zoff += 0.0002; // incremento 3d del noise

	}
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].show();
}
	
	//r.html(floor(frameRate())); // arrotonda e visualizza il P che contiene il frameRate
}