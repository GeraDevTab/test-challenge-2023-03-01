// You already have the methods imported
//const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
test('Vericando un dato de usuario',()=>{
    expect(getUser(1).email).toBe('sirious90@gmail.com');
});

test('Vericando un dato de usuario',()=>{
    expect(getUser(2).username).toBe('piderman');
});

test('Vericando un dato de usuario',()=>{
    expect(getUser(3).password).toBe('12345abcde');
});

test('Vericando un dato de usuario',()=>{
    expect(getUser(4).password).toBe('Kashmir1970');
});


// READ documentation