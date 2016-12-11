// vedi particle in nature of code
// ogni particle ha una posizione, velocità e accelerazione
// viene aggiornata e resettata ai valori iniziali

function Particle() {
	this.pos = createVector(random(width), random(height));
	//this.vel = createVector(0,0);

	this.vel = p5.Vector.random2D(); //movimento casuale
	this.acc = createVector(0, 0);

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0); //azzera

	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}


	this.show = function() {
		strokeWeight(random(2, 8));
		//stroke(174, 245, 135);
		stroke(250, 155, 130);
		//stroke(0);
		point(this.pos.x, this.pos.y); // punto a sin in alto è la particle aggiunta
	}

	this.edges = function() { //le particles non escono dai limiti
		if (this.pos.x > width) this.pos.x = 0;
		if (this.pos.x < 0) this.pos.x = width;
		if (this.pos.y > height) this.pos.y = 0;
		if (this.pos.y < 0) this.pos.x = height;


	}

}