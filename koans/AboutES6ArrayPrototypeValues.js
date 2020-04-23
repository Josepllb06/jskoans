// 43: array - `Array.prototype.values`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', () => {
    const arr = ['k', 'e', 'y'];
    const iterator = arr.values();

    expect(iterator.next()).toEqual({value: void 0, done: true})
  });

  it('use `iterator.next()` to drop first value', () => {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.___();

    expect([...iterator]).toEqual(['values', 'entries'])
  });

  it('empty array contains no values', () => {
    const arr = [...[...[...[...'1']]]];
    const values = [...arr.values()];

    expect(values.length).toEqual(0)
  });

  it('a sparse array without real values has values though', () => {
    const arr = [, 0];
    const keys = [...arr.values()];

    expect(keys).toEqual([void 0, void 0])
  });

  it('also includes holes in sparse arrays', () => {
    const arr = ['a',];

    expect([...arr.values()]).toEqual(['a', void 0, 'c'])
  });
});
