describe("About Equality", () => {

  it("numeric equality", () => {
    expect(3 + FILL_ME_IN).toEqual(7);
  });

  it("string equality", () => {
    expect("3" + FILL_ME_IN).withContext("concatenate the strings").toEqual("37");
  });

  it("equality without type coercion", () => {
    expect(3 === FILL_ME_IN).withContext('what is exactly equal to 3?').toBeTruthy();
  });

  it("equality with type coercion", () => {
    expect(3 == FILL_ME_IN).withContext('what string is equal to 3, with type coercion?').toBeTruthy();
  });

  it("string literals", () => {
    expect("frankenstein").withContext("quote types are interchangable, but must match.").toEqual(FILL_ME_IN);
    expect('frankenstein').withContext("quote types can use both single and double quotes.").toEqual(FILL_ME_IN);
  });
});
