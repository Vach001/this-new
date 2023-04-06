/* Car Constructor
->Write a Car constructor that initializes model and milesPerGallon from arguments.
->All instances built with Car:
-->should initialize with an tank at 0
-->should initialize with an odometer at 0
->Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
STRETCH: Give cars ability to .drive(distance). The distance driven:
->Should cause the odometer to go up.
->Should cause the the tank to go down taking milesPerGallon into account.
->STRETCH: A car which runs out of fuel while driving can't drive any more distance:
->The drive method should return a string "I ran out of fuel at x miles!" x being odometer.  */

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallon) {
  this.tank += gallon;
  return `You can drive ${this.tank * this.milesPerGallon} miles of ${this.model}.`;
};
Car.prototype.drive = function (distance) {
  if (this.tank > 0) {
    this.tank -= distance / this.milesPerGallon;
    this.odometer += distance;
    return `Your fuel will only be enough to go ${
      this.tank * this.milesPerGallon
    } miles of ${this.model}!`;
  } else {
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

const myCar = new Car("VAZ-2106", 2);
console.log(myCar.fill(100));
console.log(myCar.drive(150));
