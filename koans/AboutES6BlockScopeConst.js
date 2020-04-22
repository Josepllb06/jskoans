// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`const` is like `let` plus read-only', () => {
  describe('scalar values are read-only', () => {
    it('e.g. a number', () => {
      const FILL_ME_IN = 0;
      expects(() => { constNum = 1 }).toThrowError()
    });

    it('or a string', () => {
      const FILL_ME_IN = 'I am a const';
      expects(() => { constString = 'Cant change you?' }).toThrowError()
    });
  });

  const notChangeable = 23;

  it('const scope leaks too', () => {
    expects(FILL_ME_IN).toEqual(23);
  });

  describe('complex types are NOT fully read-only', () => {
    it('array`s items can be changed', () => {
      const arr = [];
      arr[0] = 0;
      expects(arr[0]).toEqual(FILL_ME_IN);
    });

    it('object`s can be modified', () => {
      const obj = {x: 1};
      obj.x = 2;
      expects(obj.x).toEqual(FILL_ME_IN);
    });
  });
});
