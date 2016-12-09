// rif Daniel Shiffman CC #24
// perlin noise flow field
// codice commentato in italiano

//punto di partenza per spiegare come funziona perlin noise in 2d

var inc = 0.1; // aumentando ci sono più variazioni di colore || default 0.01
var scl = 10; // un vector ogni 10 pixel
var cols, rows;

var fr; //framerate

function setup() {
	createCanvas(200, 200);
	//pixelDensity(1); // annulla la visualizzazione hd del retina display
	cols = floor (width/scl);
	rows = floor (height / scl);
	fr = createP(''); //crea il paragrafo per visualizzare il frameRate corrente
}

function draw() {
var yoff = 0;

  for (var y = 0; y < rows; y++) { //righe dell'array di pixel
    var xoff = 0;											// slittamento in orizzontale del noise
    for (var x = 0; x < cols; x++) { //colonne dell'array di pixel
      var index = (x + y * width) * 4; // visualizzazione di ogni punto in base alla larghezza
      var r = noise(xoff, yoff) * 255; // aggiungo il noise per l'interpolazione
  	  
  	  //invece di riempire la griglia, voglio delle linee vector
  	  var v = p5.Vector.fromAngle(PI); // 0 linee orizzontali PI/2 verticali
  	  xoff += inc;
	   	stroke(0);
	   	push();
	   	
	   	translate(x * scl, y * scl);
	   	rotate(v.heading());
	   	line(0,0, scl, 0);
	   	
	   	pop();
	   	
	   	//fill(random(255));
	   	//fill(r);
   		//rect(x * scl, y * scl, scl,scl); // griglia di pixel
    }
    yoff += inc;
  }
	fr.html(floor(frameRate())); // arrotonda e visualizza il P che contiene il frameRate
}