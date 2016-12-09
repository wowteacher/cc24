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
  loadPixels();
  for (var y = 0; y < height; y++) { //colonne dell'array di pixel
    var xoff = 0;											// slittamento in orizzontale del noise
    for (var x = 0; x < width; x++) { //righe dell'array di pixel
      var index = (x + y * width) * 4; // visualizzazione di ogni punto in base alla larghezza
      var r = noise(xoff, yoff) * 255; // aggiungo il noise per l'interpolazione
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();


}