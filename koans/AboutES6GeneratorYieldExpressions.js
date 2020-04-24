// 51: Generator - Yield Expressions
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
  function* generatorFunction() {
    yield 'hello';
    yield 'world';
  }
  let generator;

  beforeEach(() => {
    generator = generatorFunction();
  });

  it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
    let values = Array.from(generatorFunction);
    expect(values).toEqual(['hello', 'world'])
  });

  describe('after the first `generator.next()` call', () => {
    it('the value is "hello"', () => {
      const {value} = generator.next;
      expect(value).toEqual('hello')
    });
    it('and `done` is false', () => {
      const {done} = generator;
      expect(done).toEqual(false)
    });
  });

  describe('after the second `next()` call', () => {
    let secondItem;
    beforeEach(() => {

      secondItem = generator.next();
    });

    it('`value` is "world"', () => {
      let {value} = secondItem;
      expect(value).toEqual('world')
    });

    it('and `done` is still false', () => {
      const done = secondItem;
      expect(done).toEqual(false)
    });
  });

  describe('after stepping past the last element, calling `next()` that often', () => {
    it('`done` property equals true, since there is nothing more to iterator over', () => {
      generator.next();
      generator.next();
      let done = generator.done;
      expect(done).toEqual(true)
    });
  });
});
