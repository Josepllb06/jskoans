// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators can be created in multiple ways', () => {
  it('the most common way is by adding `*` after `function`', () => {
    function g() {}
    assertIsGenerator(g());
  });
  it('as a function expression, by adding a `*` after `function`', () => {
    let g = function() {};
    assertIsGenerator(g());
  });
  it('inside an object by prefixing the function name with `*`', () => {
    let obj = {
      g() {}
    };
    assertIsGenerator(obj.g());
  });
  it('computed generator names, are just prefixed with a `*`', () => {
    const generatorName = 'g';
    let obj = {
      [generatorName]() {}
    };
    assertIsGenerator(obj.g());
  });
  it('inside a class the same way', () => {
    const generatorName = 'g';
    class Klazz {
      [generatorName]() {}
    }
    assertIsGenerator(new Klazz().g());
  });

  function assertIsGenerator(gen) {
    const toStringed = '' + gen;

    expect(toStringed).toEqual('[object Generator]');
  }
});