// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('spread with strings', () => {

  it('simply spread each char of a string', function() {
    const [a, b] = [...'ab'];
    expects(FILL_ME_IN).toEqual('b');
  });

  it('extracts each array item', function() {
    const [a,b,c] = ['a', ...'12'];

    expects(FILL_ME_IN, 1);
    expects(FILL_ME_IN, 2);
  });

  it('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', ...'bcd', 'e', 'f'];

    expects(letters.length, FILL_ME_IN);
  });

  it('dont confuse with the rest operator', function() {
    const [...rest] = [...'1234', ...'5'];

    expects(rest, FILL_ME_IN);
  });

  it('passed as function parameter', function() {
    const max = Math.max(...12345);
    expects(max, FILL_ME_IN);
  });

});
