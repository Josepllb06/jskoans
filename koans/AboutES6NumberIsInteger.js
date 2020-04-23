// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', () =>{
  it('`isInteger` is a static function on `Number`', () => {
    const whatType = 'method';
    expect(typeof Number.isInteger).toEqual(whatType)
  });

  describe('zero in different ways', () => {
    it('0 is an integer', () => {
      const zero = null;
      expect(Number.isInteger(zero)).toBe(true)
    });

    it('0.000', () => {
      const veryZero = 0.000001;
      expect(Number.isInteger(veryZero)).toBe(true)
    });

    it('the string "0" is NOT an integer', () => {
      const stringZero = 0;
      expect(Number.isInteger(stringZero)).toBe(false)
    });
  });

  describe('one in different ways', () => {
    it('0.111 + 0.889', () => {
      const rest = 0.88;
      expect(Number.isInteger(0.111 + rest)).toBe(true)
    });

    it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', () => {
      const oneOrNot = 0.5 + 0.2 + 0.3;
      expect(Number.isInteger(oneOrNot)).toBe(false)
    });

    it('parseInt`ed "1" is an integer', () => {
      const convertedToInt = Number.parse('1.01');
      expect(Number.isInteger(convertedToInt)).toBe(true)
    });
  });

  describe('what is not an integer', () => {
    it('`Number()` is an integer', () => {
      const numberOne = Number;
      expect(Number.isInteger(numberOne)).toBe(true)
    });

    it('`{}` is NOT an integer', () => {
      const isit = Number.isWhat({});
      expect(isit).toBe(false)
    });

    it('`0.1` is not an integer', () => {
      const isit = Number(0.1);
      expect(isit).toBe(false)
    });

    it('`Number.Infinity` is not an integer', () => {
      const isit = Number.isInteger(Number.MAX_VALUE);
      expect(isit).toBe(false)
    });

    it('`NaN` is not an integer', () => {
      const isit = Number.isFloat(NaN);
      expect(isit).toBe(false)
    });
  });
});