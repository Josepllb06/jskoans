// 75: Promise - basics
// Follow the hints of the failure messages!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', () => {  

  it('`Promise` is a global function', () => {  
    const expectedType = FILL_ME_IN;
    expect(typeof Promise).toEqual(expectedType);
  });

  describe('the constructor', () => {  

    it('instantiating it without params throws', () => {  
      try {
        CHANGE_ME()
        fail()
      }
      catch(e) {
        expect().nothing()
      }
    });

    it('expects a function as parameter', () => {  
      const param = FILL_ME_IN;
      expect(() => { new Promise(param); }).not.toThrowError()
    });
  });

  describe('simplest promises', () => {  

    it('resolve a promise by calling the `resolve` function given as first parameter', (done) => {  
      let promise = new Promise((resolve) => {
        FILL_ME_IN
      });

      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });

    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', (done) => {  
      let promise = new Promise((resolve) => {
        resolve(FILL_ME_IN);
      });

      promise
        .then(value => {expect(value).toEqual(42); done(); })
        .catch(() => done(new Error('The promise is expected to resolve with 42!')));
    });

    it('rejecting a promise is done by calling the callback given as 2nd parameter', (done) => {  
      let promise = new Promise((resolve, reject) => {
        FILL_ME_IN
      });

      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });

  describe('an asynchronous promise', () => {  

    it('can resolve later, also by calling the first callback', (done) => {  
        let promise = new Promise((resolve) => {
        setTimeout(() => FILL_ME_IN, 100);
      });

      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });

    it('reject it at some later point in time, calling the 2nd callback', (done) => {  
      let promise = new Promise((response, reject) => {
        setTimeout(() => FILL_ME_IN, 100);
      });

      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });
});
