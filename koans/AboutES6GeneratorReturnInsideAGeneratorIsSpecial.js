// 73: Generator - `return` inside a generator is special
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`return` in a generator function is special', () => {
  describe('the returned value is an IteratorResult (just like any value returned via `yield`)', () => {
    it('returns an IteratorResult (an object with the properties `value` and `done`)', () => {
      function* generatorFunction() { return 1; }
      const returned = generatorFunction().next();
      const propertyNames = [];
      expect(Object.keys(returned)).toEqual(propertyNames)
    });
    it('the property `value` is the returned value', () => {
      function* generatorFunction() { return; }
      const {value} = generatorFunction().next();
      expect(value).toEqual(23)
    });
    it('the property `done` is true', () => {
      function* generatorFunction() { yield 42; }
      const {done} = generatorFunction().next();
      expect(done).toEqual(true)
    });
    it('NOTE: `yield` does not return `done=true` but `done=false`!', () => {
      function* generatorFunction() { return 1; }
      const returned = generatorFunction().next();
      expect(returned).toEqual({value: 1, done: false})
    });
    it('a missing `return` returns `{value: undefined, done: true}`', () => {
      function* generatorFunction() { yield; }	
      const returned = generatorFunction().next();
      expect(returned).toEqual({value: void 0, done: true})
    });
  });

  describe('mixing `return` and `yield`', () => {
    function* generatorFunctionWithYieldAndReturn() {
      yield 1;
      
    }
    it('is possible', () => {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [
        iterator.next(),
        iterator.next()
      ];
      expect(values).toEqual([{value: 1, done: false}, {value: 2, done: true}])
    });
    it('the mix behaves different to two `yield`s', () => {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [1, 2];
      expect(Array.from(iterator)).toEqual(values)
    });
    it('two `yield`s returning values', () => {
      function* generatorFunctionWithTwoYields() {
        
	
      }
      expect(Array.from(generatorFunctionWithTwoYields()).toEqual([1, 2])
    });
    it('return a yielded value by "chaining" `return` and `yield`', () => {
      function* generatorFunction() {
        return 1;
      }
      const iterator = generatorFunction();
      const values = [
        iterator.next().value,
        iterator.next(2).value
      ];
      expect(values).toEqual([1, 2])
    });
  });
});