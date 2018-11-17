describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});




DIA - Describe , It , Assert 

describe("pow",function(){
  it ("finds the value", function () {
      assert(pow(2,3),8);
  });
});


Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
Sinon – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.