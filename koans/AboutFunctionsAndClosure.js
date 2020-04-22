describe("About Functions And Closure", () => {
    it("defining functions directly", () => {
        var result = "a";
        function changeResult() {
            // the ability to access a variables defined in the same scope as the function is known as 'closure'
            result = "b";
        };
        changeResult();
        expect(result).toEqual(FILL_ME_IN).withContext('what is the value of result?');
    });
    
    it("assigning functions to variables", () => {
        var triple = (input) => {
            return input * 3;
        };
        expect(triple(4)).toEqual(FILL_ME_IN).withContext('what is triple 4?');
    });
    
    it("self invoking functions", () => {
        var publicValue = "shared";
    
        // self invoking functions are used to provide scoping and to alias variables
        ((pv) => {
            var secretValue = "password";
            expect(pv).toEqual(FILL_ME_IN).withContext('what is the value of pv?');
            expect(typeof(secretValue)).toEqual("__").withContext('is secretValue available in this context?');
            expect(typeof(publicValue)).toEqual("__").withContext('is publicValue available in this context?');
        })(publicValue);

        expect(typeof(secretValue)).toEqual("__").withContext('is secretValue available in this context?');
        expect(typeof(publicValue)).toEqual("__").withContext('is publicValue available in this context?');
    });
    
    it("arguments array", () => {
        var add = () => {
            var total = 0;
            for(var i = 0; i < arguments.length; i++) {
                // complete the implementation of this method so that it returns the sum of its arguments
                // __
            }
            // __
        };
        
        expect(add(1,2,3,4,5)).toEqual(15).withContext('add 1,2,3,4,5');
        expect(add(4,7,-2)).toEqual(9).withContext('add 4,7,-2');
    });
    
    it("using call to invoke function", () => {
        var invokee = (message) => {
            return this + message;    
        };
        
        //another way to invoke a function is to use the call function which allows 
        //you to set the callers "this" context.  Call can take any number of arguments: 
        //the first one is always the context that this should be set to in the called
        //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
        var result = invokee.call("I am this!", "Where did it come from?");
            
        expect(result).toEqual(FILL_ME_IN).withContext("what will the value of invokee's this be?");
    });
    
    it("using apply to invoke function", () => {
        var invokee = (message1, message2) => {
            return this + message1 + message2;    
        };
        
        //similar to the call function is the apply function.  Apply only has two
        //arguments:  the first is the context that this should be set to in the called
        //function and the second is the array of arguments to be passed into the called function.
        var result = invokee.apply("I am this!", ["I am arg1","I am arg2"]);
            
        expect(result).toEqual(FILL_ME_IN).withContext("what will the value of invokee's this be?");
    });
});

