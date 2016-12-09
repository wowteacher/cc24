// rif Daniel Shiffman CC #24
// perlin noise flow field
// codice commentato in italiano

//punto di partenza per spiegare come funziona perlin noise in 2d

var inc = 0.01; // aumentando ci sono più variazioni di colore
var scl = 20; // un vector ogni 20 pixel
var cols, rows;

function setup() {
	createCanvas(200, 200);
	//pixelDensity(1); // annulla la visualizzazione hd del retina display
	cols = floor (width/scl);
	rows = floor (height / scl);
}

function draw() {
var yoff = 0;

  for (var y = 0; y < rows; y++) { //righe dell'array di pixel
    var xoff = 0;											// slittamento in orizzontale del noise
    for (var x = 0; x < cols; x++) { //colonne dell'array di pixel
      var index = (x + y * width) * 4; // visualizzazione di ogni punto in base alla larghezza
      var r = noise(xoff, yoff) * 255; // aggiungo il noise per l'interpolazione
   
      xoff += inc;
   	fill(random(255));
   	rect(x * scl, y * scl, scl,scl); // griglia di pixel
    }
    yoff += inc;
  }
  updatePixels();


}