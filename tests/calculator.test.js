//const { default: expect } = require('expect');

const { power } = require('../calculator');
const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(5,8)).toBe(13);
})

test('substracts a - b', () => {
   expect(calculator.substract(10,3)).toBe(7);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(3,3)).toBe(9)
})

test('divides a / b', () => {
    // Consider decimals
    expect(calculator.divide(6,2)).toBe(3)
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(6,3)).toBe(216)
})
