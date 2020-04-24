describe("About Control Structures", () => {

  it("if", function() {
    var isPositive = false;
    if (2 > 0) {
        isPositive = true;
    }
    expect(FILL_ME_IN).withContext('what is the value of isPositive?').toEqual(isPositive);
  });

  it("for", function() {
    var counter = 10;
    for (var i = 1; i <= 3; i++) {
        counter = counter + i;
    }
    expect(FILL_ME_IN).withContext('what is the value of counter?').toEqual(counter);
  });

  it("for in", function() {
    // this syntax will be explained in about objects
    var person = {
        name: "Amory Blaine",
        age: 102
    };
    var result = "";
    // for in enumerates the property names of an object
    for (var property_name in person) {
        result = result + property_name;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("for of", function() {
    // this syntax will be explained in about objects
    var person = {
        number: 3,
        age: 102
    };
    var result = 0;
    // for in enumerates the property values of an object
    for (var value of person) {
        result = result + value;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("ternary operator", function() {
    var fruit = true ? "apple" : "orange";
    expect(FILL_ME_IN).withContext('what is the value of fruit?').toEqual(fruit);

    fruit = false ? "apple" : "orange";
    expect(FILL_ME_IN).withContext('now what is the value of fruit?').toEqual(fruit);
  });

  it("switch", function() {
    var result = 0;
    switch (2) {
        case 1:
            result = 1;
            break;
        case 1+1:
            result = 2;
            break;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("null coalescing", function() {
    var result = null || "a value";
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

});
