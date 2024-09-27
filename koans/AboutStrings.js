describe("About Strings", () => {

  it("delimiters", () => {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    expect(FILL_ME_IN).withContext('are the two strings equal?').toEqual(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", () => {
    var fruit = "apple";
    var dish = "pie";
    expect(FILL_ME_IN).withContext('what is the value of fruit + " " + dish?').toEqual(fruit + " " + dish);
  });

  it("character Type", () => {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    expect(FILL_ME_IN).withContext('Javascript has no character type').toEqual(characterType);
  });

  it("escape character", () => {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    expect(FILL_ME_IN).withContext('what  is the value of stringWithAnEscapedCharacter?').toEqual(stringWithAnEscapedCharacter);
  });
});
