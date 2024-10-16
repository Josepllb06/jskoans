describe("About Equality", () => {

  it("numeric equality", () => {
    expect(3 + 4).toEqual(7);
  });

  it("string equality", () => {
    expect("3" + '7').withContext("concatenate the strings").toEqual("37");
  });

  it("equality with type coercion", () => {
    expect(3 === 3).withContext('what is exactly equal to 3?').toBeTruthy();
  });

  it("equality without type coercion", () => {
    expect(3 == '3').withContext('what string is equal to 3, without type coercion?').toBeTruthy();
  });

  it("string literals", () => {
    expect("frankenstein").withContext("quote types are interchangable, but they must match.").toEqual('frankenstein');
    expect('frankenstein').withContext("quote types can use both single and double quotes.").toEqual("frankenstein");
  });
});
