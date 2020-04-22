describe("About Reflection", () => {

  function A() {
    this.aprop = "A";
  };

  function B() {
    this.bprop = "B";
  };

  it("typeof", function() {
    expect(FILL_ME_IN).toBe(typeof({})).withContext('what is the type of an empty object?');
    expect(FILL_ME_IN).toBe(typeof('apple')).withContext('what is the type of a string?');
    expect(FILL_ME_IN).toBe(typeof(-5)).withContext('what is the type of -5?');
    expect(FILL_ME_IN).toBe(typeof(false)).withContext('what is the type of false?');
  });

  it("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(var propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    expect(keys.equalTo(['FILL_ME_IN','FILL_ME_IN','FILL_ME_IN'])).toBeTruthy().withContext('what are the property names of the object?');
    expect(values.equalTo(['FILL_ME_IN',FILL_ME_IN,FILL_ME_IN])).toBeTruthy().withContext('what are the property values of the object?');
  });

  it("hasOwnProperty", function() {
    var b = new B();
    var propertyName;

    var keys = [];
    for (propertyName in b) {
        keys.push(propertyName);
    }
    expect(FILL_ME_IN).toEqual(keys.length, 'how many elements are in the keys array?');
    expect([FILL_ME_IN, FILL_ME_IN]).toEqual(keys).withContext('what are the properties of the array?');
  });

  it("constructor property", function () {
    var a = new A();
    expect(FILL_ME_IN).toBe(typeof(a.constructor)).withContext("what is the type of a's constructor?");
    expect(FILL_ME_IN).toBe(a.constructor.name).withContext("what is the name of a's constructor?");
  });

  it("eval", function() {
    // eval executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    expect(FILL_ME_IN).toBe(result).withContext('what is the value of result?');
  });

});
