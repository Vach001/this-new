/* Person Constructor
->Write a Person Constructor that initializes name and age from arguments.
->All instances of Person should initialize with an empty stomach array.
->Give instances of Person the ability to .eat("someFood"):
->When eating an edible, it should be pushed into the stomach.
->The eat method should have no effect if there are 10 items in the stomach.
->Give instances of Person the ability to .poop():
->When an instance poops, its stomach should empty.
->Give instances of Person a method .toString():
->It should return a string with name and age. Example: "Mary, 50" */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (...foods) {
  this.stomach.push(...foods);
  if (this.stomach.length >= 10) {
    this.stomach.length = 10;
  }
  const result = `There were in ${this.name}'s stomach: ${this.stomach
    .splice(-10)
    .join(" & ")}`;
  return result;
};
Person.prototype.poop = function () {
  this.stomach = [];
  return `${this.name}'s stomach is empty!`;
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const person = new Person("Mary", 27);
console.log(person.toString());
console.log(person.poop());
console.log(
  person.eat(
    "pork",
    "CocaColla",
    "fish",
    "meat",
    "water",
    "juice",
    "egg",
    "lavash",
    "onion",
    "shawarma",
    "someFood"
  )
);
console.log(person.poop());
