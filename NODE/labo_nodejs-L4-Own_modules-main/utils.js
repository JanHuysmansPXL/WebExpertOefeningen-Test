//  In utils.js schrijf je een functie die twee getallen optelt. 
//  De getallen moeten als argumenten kunnen meegegeven worden aan de functie. 
//  Wijs vervolgens de functie toe aan een constante.

const sum = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const multiply = function(a, b) {
    return a * b;
};
const divide = function(a, b) {
    return a / b;
};

module.exports = {
    sum,
    subtract,
    multiply,
    divide
};