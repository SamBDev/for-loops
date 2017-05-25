function breakLines(){
	console.log("=====================================")
}

function displayLoop(){
	console.log(i);
}

for (var i = 5; i < 120; i+=10) {
	displayLoop();
}

breakLines();

for (var i = 4096; i >= 1; i = i/2) {
	displayLoop();
}

breakLines();

var presidentialArray = ["George Washington", "John Adams", "Thomas Jefferson"];

for (var i = 0; i < presidentialArray.length; i++) {
	console.log("President #" + (i+1) + " was " + presidentialArray[i] );
}

breakLines();

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (variable in antSpecies){
	console.log(variable);
}