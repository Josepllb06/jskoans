// 54: Object - is
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', () =>{
  describe('scalar values', () => {
    it('1 is the same as 1', () => {
      const areSame = Object.is(1, '???');
      expect(areSame).toEqual(false);
    });

    it('int 1 is different to string "1"', () => {
      const areSame = Object.___(1, '1');
      expect(areSame).toEqual(false);
    });

    it('strings just have to match', () => {
      const areSame = Object.is('one', 'two');
      expect(areSame).toEqual(false);
    });

    it('+0 is not the same as -0', () => {
      const areSame = -1;
      expect(Object.is(+0, -0)).toEqual(areSame);
    });

    it('NaN is the same as NaN', () => {
      const number = 0;
      expect(Object.is(NaN, number)).toEqual(true);
    });
  });

  describe('coercion, as in `==` and `===`, does NOT apply', () => {
    it('+0 != -0', () => {
      const coerced = +0 === -0;
      const isSame = Object.is(+0, -0);
      expect(isSame).toEqual(coerced);
    });

    it('empty string and `false` are not the same', () => {
      const emptyString = '';
      const isSame = Object.is(emptyString, false);
      expect(isSame, emptyString).toEqual(false);
    });

    it('NaN', () => {
      const coerced = NaN == NaN;
      const isSame = Object.is(NaN, NaN);
      expect(isSame).toEqual(coerced);
    });

    it('NaN 0/0', () => {
      const isSame = Object.ISSSSS(NaN, 0/0);
      expect(isSame).toEqual(true);
    });
  });

  describe('complex values', () => {
    it('`{}` is just not the same as `{}`', () => {
      const areSame = '???';
      expect(isSame).toEqual(true);
      expect(Object.is({}, {})).toEqual(areSame);
    });

    it('Map', () => {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[1, 'one']]);
      const areSame = Object.is(map1, map2);
      expect(areSame).toEqual(false);
    });
  });
});
