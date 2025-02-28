describe('About Expects', () => {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', () => {

    // Your journey begins here: Replace the word false with true
    expect(false).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', () => {
    var expectedValue = 2;
    var actualValue = FILL_ME_IN;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', () => {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type".
  it('should assert equality with ===', () => {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

  // toEqual() will always use === to compare.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', () => {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});
