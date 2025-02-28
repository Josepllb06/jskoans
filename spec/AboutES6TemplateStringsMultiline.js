// 2: template strings - multiline
// Follow the hints of the failure messages!

describe('Template string, can contain multiline content', () => {
  it('wrap it in backticks (`) and add a newline, to span across two lines', () => {
    var normalString = `FILL_ME_IN
FILL_ME_IN`;
    expect(normalString).toEqual('line1\nline2');
  });

  it('even over more than two lines', () => {
    var multiline = `FILL_ME_IN
`;
    expect(multiline.split('\n').length).toEqual(4);
  });

  describe('and expressions inside work too', () => {

    it('like simple variables', () => {
      var x = 42;
      var multiline = `line 1
      ${FILL_ME_IN}`;
      expect(multiline).toEqual('line 1\n      42');
    });

    it('also here spaces matter', () => {
      var multiline = `FILL_ME_IN`;
      expect(multiline).toEqual(' \n ');
    });
  });
});

