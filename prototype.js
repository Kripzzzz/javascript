
function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("Virat", "Kohli");
var person2 = new Human("kripa", "Kalai");
console.log(Human.prototype);
console.log(person1)
console.log(person2)