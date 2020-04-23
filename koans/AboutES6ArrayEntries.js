// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', () => {
    it('returns key+value for each element', () => {
      const arr = ['a', 'b', 'c'];
      const entriesAsArray = Array.from(arr.___());
      
      expect([[0,"a"], [1,"b"], [2,"c"]]).toEqual(entriesAsArray)
    });
    
    it('empty elements contain the value `undefined`', () => {
      const arr = ['one'];
      arr[2] = 'three';
      const secondValue = arr.entries();
    
      expect([1, void 0]).toEqual(secondValue)
    });
  
    describe('returns an iterable', () => {
      it('has `next()` to iterate', () => {
        const arr = ['one'];
        const value = arr;
        
        expect([0, 'one']).toEqual(value)
      });
    });
  });