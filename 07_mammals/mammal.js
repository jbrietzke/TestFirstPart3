function Mammal(firstName){
	this.name = firstName;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + ", I'm a Mammal";
}

Mammal.prototype.haveBaby = function(){
	var newBaby = new Mammal("Baby Joe");
	this.offspring.push(newBaby);
	return newBaby;
}

function Cat(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color){
	var name = "Baby Garfield";
	var baby = new Cat(name, color);
	this.offspring.push(baby);
	return baby;
}

