let FB = require('../fizzBuzz');

test('Test FizzBuzz', ()=>{
    expect(FB(15)).toEqual('FizzBuzz');
});

test('Test Buzz', ()=>{
    expect(FB(12)).toEqual('Fizz');
});

test('Test Fizz', ()=>{
    expect(FB(25)).toEqual('Buzz');
});

test('Test number', ()=>{
    expect(FB(8)).toEqual(8);
});