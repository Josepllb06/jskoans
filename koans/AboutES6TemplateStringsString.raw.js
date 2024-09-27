// 4: template strings - String.raw
// Follow the hints of the failure messages!

describe('Use the `raw` property of tagged template strings like so `s.raw`', () => {  
  it('the `raw` property accesses the string as it was entered', () => {  
    function firstChar(strings) {
      return strings.raw;
    }
    expect(firstChar`\n`).toEqual(FILL_ME_IN);
  });

  it('`raw` can access the backslash of a line-break', () => {  
    function firstCharEntered(strings) {
      var lineBreak = strings.raw;
      return lineBreak;
    }
    expect(firstCharEntered`\n`).toEqual(FILL_ME_IN);
  });

  describe('`String.raw` as a static function', () => {  
    it('concats the raw strings', () => {  
      expect(String.raw`\n`).toEqual(FILL_ME_IN);
    });

    it('two raw-templates-string-backslashes equal two escaped backslashes', () => {  
      expect(String.raw`\\`).toEqual(FILL_ME_IN);
    });

    it('works on unicodes too', () => {  
      var actual = String.raw`\u{1F600}`;
      expect(actual).toEqual(FILL_ME_IN);
    });
  });
});
