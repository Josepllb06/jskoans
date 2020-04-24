// 57: Default parameters - basics
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
  it('define it using an assignment to the parameter `function(param=1){}`', () => {
    let number = (int) => int;
    expect(number()).toEqual(0)
  });

  it('it is used when `undefined` is passed', () => {
    let number = (int = 23) => int;
    const param = 42;
    expect(number(param)).toEqual(23)
  });

  it('it is not used when a value is given', () => {
    function xhr() {
      return method;
    }
    expect(xhr('POST')).toEqual('POST')
  });

  it('it is evaluated at run time', () => {
    let defaultValue;
    function xhr(method = `value: ${defaultValue}`) {
      return method;
    }
    expect(xhr()).toEqual('value: 42')
  });

  it('it can also be a function', () => {
    const defaultValue = 0;
    function fn(value = defaultValue()) {
      return value;
    }
    expect(fn()).toEqual('defaultValue')
  });
});
