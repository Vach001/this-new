/* Person
Create a method in the Person class which returns how another person's age compares. Given the
instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the
following format:
{other person name} is {older than / younger than / the same age as} me.
const p1 = Person("Samuel", 24) 
const p2 = Person("Joel", 36) 
const p3 = Person("Lily", 24) 
 
p1.compareAge(p2) ➞ "Joel is older than me." 
p2.compareAge(p1) ➞ "Samuel is younger than me." 
p1.compareAge(p3) ➞ "Lily is the same age as me." */

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.compareAge = function ({ name, age }) {
  if (this.age > age) {
    return `${this.name} is older than ${name}`;
  } else if (this.age < age) {
    return `${this.name} is younger than ${name} `;
  } else {
    return `${this.name} is the same age as ${name} `;
  }
};
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

const compareAge = p1.compareAge(p3);

console.log(compareAge);
