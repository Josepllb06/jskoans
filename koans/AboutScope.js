describe("About Scope", () => {
    var thisIsAGlobalVariable = 77;

    it("global variables", () => {
        expect(thisIsAGlobalVariable).toEqual(FILL_ME_IN).withContext('is thisIsAGlobalVariable defined in this scope?');
    });
    
    it("variables declared inside of a function", () => {
        var outerVariable = "outer";
    
        // this is a self-invoking function. Notice that it calls itself at the end ().
        (() => {
            var innerVariable = "inner";
            expect(outerVariable).toEqual(FILL_ME_IN).withContext('is outerVariable defined in this scope?');
            expect(innerVariable).toEqual(FILL_ME_IN).withContext('is innerVariable defined in this scope?');
        })();
        
        expect(outerVariable).toEqual(FILL_ME_IN).withContext('is outerVariable defined in this scope?');
        expect(typeOf(innerVariable)).toEqual(FILL_ME_IN).withContext('is innerVariable defined in this scope?');
    });
});


