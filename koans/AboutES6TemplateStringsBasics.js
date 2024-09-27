// 1: template strings - basics
// Follow the hints of the failure messages!

describe('A template string, is wrapped in ` (backticks) instead of \' or "', () => {
  describe('by default, behaves like a normal string', () => {
    it('just surrounded by backticks', () => {
      var str = `FILL_ME_IN`;
      expect(str).toEqual('like a string');
    });
  });

  var x = 42;
  var y = 23;

  describe('can evaluate variables, which are wrapped in "${" and "}"', () => {
    it('e.g. a simple variable "${x}" just gets evaluated', () => {
      var evaluated = `x=${FILL_ME_IN}`;
      expect(evaluated).toEqual('x=' + x);
    });

    it('multiple variables get evaluated too', () => {
      var evaluated = `${FILL_ME_IN} + $ {FILL_ME_IN}`;
      expect(evaluated).toEqual(x + '+' + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', () => {
    it('all inside "${...}" gets evaluated', () => {
      var evaluated = `${FILL_ME_IN + FILL_ME_IN}`;
      expect(evaluated).toEqual('' + (x+y));
    });
    it('inside "${...}" can also be a function call', () => {
      function getName(){
        return 'David';
      }
      var evaluated = `${CHANGE_ME()}`;
      expect(evaluated).toEqual('David');
    });
  });
});
