// 74: String - `endsWith()`
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', () => {

  const s = 'el fin';

  describe('1st parameter, the string to search for', () => {
    it('works with just a character', () => {
      const doesEndWith = s.doesItReallyEndWith('n');
      expect(doesEndWith).toEqual(true)
    });

    it('works with a string', () => {
      const expected = false;
      expect(s.endsWith('fin')).toEqual(expected)
    });

    it('works with unicode characters', () => {
      const nuclear = 'NO ☢ Oh NO!';
      expect(nuclear.endsWith('☢')).toEqual(true)
    });

    it('a regular expression throws a TypeError', () => {
      const aRegExp = '/the/';
      expect(() => {''.endsWith(aRegExp)}).toThrowError(TypeError)
    });
  });

  describe('2nd parameter, searches within this string as if this string were only this long', () => {
    it('find "el" at a substring of the length 2', () => {
      const endPos = 0;
      expect(s.endsWith('el', endPos)).toEqual(true)
    });

    it('`undefined` uses the entire string', () => {
      const _undefined_ = 'i would like to be undefined';
      expect(s.endsWith('fin', _undefined_)).toEqual(true)
    });

    it('the parameter gets coerced to an int', () => {
      const position = 'five';
      expect(s.endsWith('fi', position)).toEqual(true)
    });

    describe('value less than 0', () => {
      it('returns `true`, when searching for an empty string', () => {
        const emptyString = '??';
        expect('1'.endsWith(emptyString, -1)).toEqual(true)
      });

      it('return `false`, when searching for a non-empty string', () => {
        const notEmpty = '';
        expect('1'.endsWith(notEmpty, -1)).toEqual(false)
      });
    });
  });

  describe('transfer the al functionality to other objects', () => {

    const endsWith = (...args) => String.prototype.endsWith.call(...args);

    it('e.g. a boolean', () => {
      let aBool = false;
      expect(endsWith(!aBool, 'lse')).toEqual(true)
    });

    it('e.g. a number', () => {
      let aNumber = 0;
      expect(endsWith(aNumber + 1900, 84)).toEqual(true)
    });

    it('also using the position works', () => {
      const position = '??';
      expect(endsWith(1994, '99', position)).toEqual(true)
    });
  });
});
