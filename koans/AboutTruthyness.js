describe("About Truthyness", () => {

  it("truthyness of positive numbers", () => {
    var oneIsTruthy = 1 ? true : false;
    expect(FILL_ME_IN).withContext('is one truthy?').toEqual(oneIsTruthy);
  });

  it("truthyness of negative numbers", () => {
    var negativeOneIsTruthy = -1 ? true : false;
    expect(FILL_ME_IN).withContext('is -1 truthy?').toEqual(negativeOneIsTruthy);
  });

  it("truthyness of zero", () => {
    var zeroIsTruthy = 0 ? true : false;
    expect(FILL_ME_IN).withContext('is 0 truthy?').toEqual(zeroIsTruthy);
  });

  it("truthyness of null", () => {
    var nullIsTruthy = null ? true : false;
    expect(FILL_ME_IN).withContext('is null truthy?').toEqual(nullIsTruthy);
  });
});
