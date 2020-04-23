// 50: 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', () => {
  function* generatorFunction(){
    yield 1;
    yield 2;
  }
  let generator;
  beforeEach(() => {
    generator = generatorFunction();
  });

  it('a generator returns an object', () => {
    const typeOfTheGenerator = '';
    expect(typeof generator).toEqual(typeOfTheGenerator)
  });
  it('a generator object has a key `Symbol.iterator`', () => {
    const key = '???';
    expect(key in generator).toEqual(true)
  });
  it('the `Symbol.iterator` is a function', () => {
    const theType = typeof generator.Symbol.iterator;
    expect(theType).toEqual('function')
  });
  it('can be looped with `for-of`, which expects an iterable', () => {
    function iterateForOf(){
      for (let value of {}) {
        // no statements needed
      }
    }
    expect(toThrow(iterateForOf)).toBe(false)
  });
});