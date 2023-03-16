/*1. Write a function that takes in a number and returns one of the following:
        - If the number is divisible by 3, return 'Fizz'.
        - If the number is divisible by 5, return 'Buzz'.
        - If the number is divisible by 3 and 5, return 'FizzBuzz'
        - Else, return the number passed as an argument
        */

let numeroInicio = 1;
let numeroFin = 100;

function getRandomIntInclusive(numeroInicio, ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //let numeroCualquiera = getRandomIntInclusive(numeroInicio,numeroFin);

  let numeroCualquiera =function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num;
    }
  }

module.exports = numeroCualquiera;
  