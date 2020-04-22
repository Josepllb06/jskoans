describe("About Equality", () => {

  it("numeric equality", function() {
    expect(3 + FILL_ME_IN).toBe(7);
  });

  it("string equality", function() {
    expect("3" + FILL_ME_IN).toBe("37").withContext("concatenate the strings");
  });

  it("equality without type coercion", function() {
    expect(3 === __).toBeTruthy().withContext('what is exactly equal to 3?');
  });

  it("equality with type coercion", function() {
    expect(3 == "__").toBeTruthy().withContext('what string is equal to 3, with type coercion?');
  });

  it("string literals", function() {
    expect("frankenstein").toBe(FILL_ME_IN).withContext("quote types are interchangable, but must match.");
    equal('frankenstein').toBe(FILL_ME_IN).withContext("quote types can use both single and double quotes.");
  });
});
