const helloWorld = require('./helloWorld'); //require() is used to import helloWorld.js

describe('Hello World', function() {                //main body of the test
  test('says "Hello, World!"', function() {         //expected test result in English (for reading only)
    expect(helloWorld()).toEqual('Hello, World!');  //expected actual code output
  });
});