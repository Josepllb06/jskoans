// 22: class - creation
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    const instance = new TestClass();
    expects(typeof instance).toEqual(FILL_ME_IN);
  });

  it('a class is block scoped', () => {
    class Outside {}
    {class Inside {}}
    expects(typeof FILL_ME_IN, 'undefined');
  });

  it('the `constructor` is a special method', function() {
    class User {
      constructor(id) { this.id = id }
    }
    const user = new User(42);
    expects(user.id, FILL_ME_IN);
  });

  it('defining a method by writing it inside the class body', function() {
    class User {
        writesTests() {
            return true
        }
    }
    const notATester = new User();
    expects(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      constructor() { this.everWroteATest = FILL_ME_IN }

      wroteATest() { this.everWroteATest = FILL_ME_IN; }

      isLazy() { return this.everWroteATest }
    }

    const tester = new User();
    expects(tester.isLazy(), true);
    tester.wroteATest();
    expects(tester.isLazy(), false);
  });

  it('anonymous class', () => {
    const classType = typeof {};

    expects(classType, FILL_ME_IN);
  });
});
