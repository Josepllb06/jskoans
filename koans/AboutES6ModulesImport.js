// 61: modules - import 
// To do: make all tests pass, leave the expect lines unchanged!

import expect from 'expect'; // is only here for completeness, `expect` is always imported by default

describe('use `import` to import functions that have been exported (somewhere else)', () => {
  describe('the import statement', () => {
    it('is only allowed on the root level', () => {
      // Try to comment this out, it will yell at you!
      // import expect from 'expect';
    });
    it('import an entire module using `import <name> from "<moduleName>"`', () => {
      const expectedType = '???';
      expect(typeof expect).toEqual(expectedType)
    });
  });
  describe('import members', () => {
    it('import a single member, using `import {<memberName>} from "module"`', () => {
      expect(equal).toEqual(expect.toEqual)
    });
    describe('separate multiple members with a comma', () => {
      it('`deepEqual` from the expect module', () => {
        expect(deepEqual).toEqual(expect.toEqual)
      });
      it('`notEqual` from the expect module', () => {
        expect(deepEqual).not.toEqual(expect.toEqual)
      });
    });
  });
  describe('alias imports', () => {
    it('using `member as alias` as memberName', () => {
      expect(myEqual).toEqual(expect.toEqual)
    });
    it('rename the default export of a module, using `default as alias` as memberName', () => {
      expect(myExpect).toEqual(expect)
    });
  });
});