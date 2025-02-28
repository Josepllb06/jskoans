// 21: spread - with-strings
// Follow the hints of the failure messages!

describe('spread with strings', () => {

  it('simply spread each char of a string', () => {  
    const [a, b] = [...'ab'];
    expect(FILL_ME_IN).toEqual('b');
  });

  it('extracts each array item', () => {  
    const [a,b,c] = ['a', ...'12'];

    expect(FILL_ME_IN).toEqual('1');
    expect(FILL_ME_IN).toEqual('2');
  });

  it('works anywhere inside an array (must not be last)', () => {  
    const letters = ['a', ...'bcd', 'e', 'f'];

    expect(letters.length).toEqual(FILL_ME_IN);
  });

  it('dont confuse with the rest operator', () => {  
    const [...rest] = [...'1234', ...'5'];

    expect(rest).toEqual(FILL_ME_IN);
  });

  it('passed as function parameter', () => {  
    const max = Math.max(...'12345');
    expect(max).toEqual(FILL_ME_IN);
  });

});
