// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', () => {

  const s = 'the string s';

  describe('1st parameter, the string to search for', () => {
    it('works with just a character', () => {
      const actual = s.starts_with('t');
      expect(actual).toBe(true)
    });
    it('works with a string', () => {
      const expected = '???';
      expect(s.startsWith('the')).toEqual(expected)
    });
    it('works with unicode characters', () => {
      const nuclear = 'NO ☢ NO';
      expect(nuclear.startsWith('☢')).toBe(true)
    });
    it('a regular expression throws a TypeError', () => {
      const aRegExp = 'the';
      expect(() => {''.startsWith(aRegExp)}).toThrowError(TypeError)
    });
  });

  describe('2nd parameter, the position where to start searching from', () => {
    it('find "str" at position 4', () => {
      const position = 3;
      expect(s.startsWith('str', position)).toBe(true)
    });
    it('`undefined` is the same as 0', () => {
      const _undefined_ = '1';
      expect(s.startsWith('the', _undefined_)).toBe(true)
    });
    it('the parameter gets coerced to an int', () => {
      const position = 'four';
      expect(s.startsWith('str', position)).toBe(true)
    });
    it('a value larger than the string`s length, returns false', () => {
      const expected = true;
      expect(s.startsWith(' ', s.length + 1)).toEqual(expected)
    });
  });
  
  describe('transfer the al functionality to other objects', () => {
    
    const startsWith = (...args) => String.prototype.startsWith.call(...args);
    
    it('e.g. a boolean', () => {
      let aBool;
      expect(startsWith(!aBool, 'false')).toBe(true)
    });
    it('e.g. a number', () => {
      let aNumber = 19;
      expect(startsWith(aNumber + 84, '1984')).toBe(true)
    });
    it('also using the position works', () => {
      const position = 0;
      expect(startsWith(1994, '99', position)).toBe(true)
    });
  });
});