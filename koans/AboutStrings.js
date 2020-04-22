describe("About Strings", () => {

  it("delimiters", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    expect(FILL_ME_IN).toBe(singleQuotedString === doubleQuotedString).withContext('are the two strings equal?');
  });

  it("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    expect(FILL_ME_IN).toBe(fruit + " " + dish).withContext('what is the value of fruit + " " + dish?');
  });

  it("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    expect(FILL_ME_IN).toBe(characterType).withContext('Javascript has no character type');
  });

  it("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    expect(FILL_ME_IN).toBe(stringWithAnEscapedCharacter).withContext('what  is the value of stringWithAnEscapedCharacter?');
  });
});
