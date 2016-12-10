// vedi particle in nature of code
// ogni particle ha una posizione, velocità e accelerazione
// viene aggiornata e resettata ai valori iniziali

function Particle () {
	this.pos = createVector(0,0);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	
	this.update = function () {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0); //azzera
		
	}
	
	this.applyForce = function (force) {
		this.acc.add(force);
	}
	
	
	this.show = function () {
		
		stroke(0);
		point(this.pos.x, this.pos.y); // punto a sin in alto è la particle aggiunta
	} 
	
}