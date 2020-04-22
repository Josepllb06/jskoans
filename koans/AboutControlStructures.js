describe("About Control Structures", () => {

  it("if", function() {
    var isPositive = false;
    if (2 > 0) {
        isPositive = true;
    }
    expect(FILL_ME_IN).toBe(isPositive).withContext('what is the value of isPositive?');
  });

  it("for", function() {
    var counter = 10;
    for (var i = 1; i <= 3; i++) {
        counter = counter + i;
    }
    expect(FILL_ME_IN).toBe(counter).withContext('what is the value of counter?');
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
    expect(FILL_ME_IN).toBe(result).withContext('what is the value of result?');
  });

  it("ternary operator", function() {
    var fruit = true ? "apple" : "orange";
    expect(FILL_ME_IN).toBe(fruit).withContext('what is the value of fruit?');

    fruit = false ? "apple" : "orange";
    expect(FILL_ME_IN).toBe(fruit).withContext('now what is the value of fruit?');
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
    expect(FILL_ME_IN).toBe(result).withContext('what is the value of result?');
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
    expect(FILL_ME_IN).toBe(result).withContext('what is the value of result?');
  });

  it("null coalescing", function() {
    var result = null || "a value";
    expect(FILL_ME_IN).toBe(result).withContext('what is the value of result?');
  });

});
