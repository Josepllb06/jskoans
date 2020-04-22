describe("About Numbers", () => {

  it("types", function() {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);

    expect(FILL_ME_IN).toBe(typeOfIntegers === typeOfFloats).withContext('are ints and floats the same type?');
    expect(FILL_ME_IN).toBe(typeOfIntegers).withContext('what is the javascript numeric type?');
    expect(FILL_ME_IN).toBe(1.0).withContext('what is a integer number equivalent to 1.0?');
  });

  it("NaN", function() {
    var resultOfFailedOperations = 7/'apple';
    expect(FILL_ME_IN).toBe(isNaN(resultOfFailedOperations)).withContext('what will satisfy the equals assertion?');
    expect(FILL_ME_IN).toBe(resultOfFailedOperations == NaN).withContext('is NaN == NaN?');
  });
});
