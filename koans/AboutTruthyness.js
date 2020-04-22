desribe("About Truthyness", () => {

  it("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    expect(FILL_ME_IN).toBe(oneIsTruthy).withContext('is one truthy?');
  });

  it("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    expect(FILL_ME_IN).toBe(negativeOneIsTruthy).withContext('is -1 truthy?');
  });

  it("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    expect(FILL_ME_IN).toBe(zeroIsTruthy).withContext('is 0 truthy?');
  });

  it("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    expect(FILL_ME_IN).toBe(nullIsTruthy).withContext('is null truthy?');
  });
});
