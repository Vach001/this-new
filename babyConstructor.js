/* Baby Constructor
Write a Baby constructor subclassing Person.
Besides name and age, Baby takes a third argument to initialize favoriteToy.
Besides the methods on Person.prototype, babies have the ability to .play():
Should return a string "Playing with x", x being the favorite toy. */

function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function () {
  let result = `${this.name} is an adult!`;

  if (this.age < 18) {
    result = `${this.name} playing with ${this.favoriteToy}!`;
    return result;
  }
  return result;
};
const babyPerson = new Baby("Bob", 10, "ball");

console.log(babyPerson.play());
