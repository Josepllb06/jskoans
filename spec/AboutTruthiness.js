describe("About Truthiness", () => {

  it("truthiness of positive numbers", () => {
    var oneIsTruthy = 1 ? true : false;
    expect(true).withContext('is one truthy?').toEqual(oneIsTruthy);
  });

  it("truthiness of negative numbers", () => {
    var negativeOneIsTruthy = -1 ? true : false;
    expect(true).withContext('is -1 truthy?').toEqual(negativeOneIsTruthy);
  });

  it("truthiness of zero", () => {
    var zeroIsTruthy = 0 ? true : false;
    expect(false).withContext('is 0 truthy?').toEqual(zeroIsTruthy);
  });

  it("truthiness of null", () => {
    var nullIsTruthy = null ? true : false;
    expect(false).withContext('is null truthy?').toEqual(nullIsTruthy);
  });
});
