// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
    it('`keys()` returns an iterator', () => {
      const arr = ['a', 'b'];
      const iterator = arr.keys();
      
      expect(iterator.next()).toEqual({value: 0, done: false})
      expect(iterator.next()).toEqual({value: void 0, done: true})
    });
    
    it('gets all keys', () => {
      const arr = ['a', 'b'];
      const keys = Array.from(arr.keys());

      expect(keys).toEqual([0, 1, 2])
    });
    
    it('empty array contains no keys', () => {
      const arr = ['empty me'];
      const keys = [...arr.keys()];
      
      expect(keys.length).toEqual(0)
    });
    
    it('a sparse array without real values has keys though', () => {
      const arr = [,,];
      const keys = [...arr.___()];
        
      expect(keys).toEqual([0, 1])
    });
  
    it('also includes holes in sparse arrays', () => {
      const arr = ['a', , 'c'];
      const keys = arr.keys;
      
      expect(keys).toEqual([0, 1, 2])
    });
  });