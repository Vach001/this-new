/* Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers   */

function Calculator() {}

Calculator.prototype.add = function (firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new Error("You are entered is invailed number!");
  }
  return firstNumber + secondNumber;
};
Calculator.prototype.subtract = function (firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new Error("You are entered is invailed number!");
  }
  return firstNumber - secondNumber;
};
Calculator.prototype.multiply = function (firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new Error("You are entered is invailed number!");
  }
  return firstNumber * secondNumber;
};
Calculator.prototype.divide = function (firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new Error("You are entered is invailed number!");
  }
  return firstNumber / secondNumber;
};

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
