
describe("About Regular Expressions", () => {
    it("exec", () => {
        var numberFinder = /(\d).*(\d)/;
        var results = numberFinder.exec("what if 6 turned out to be 9?");
        expect(results).toEqual([FILL_ME_IN, FILL_ME_IN, FILL_ME_IN]).withContext('what is the value of results?');		
    });
    
    it("test", () => {
        var containsSelect = /select/.test("  select * from users ");
        expect(containsSelect).toEqual(FILL_ME_IN).withContext('does the string provided contain "select"?');
    });
    
    it("match", () => {
        var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
        expect(matches).toEqual([FILL_ME_IN, FILL_ME_IN]).withContext('what is the value of matches?');
    });
    
    it("replace", () => {
        var pie = "apple pie".replace("apple", "strawberry");
        expect(pie).toEqual(FILL_ME_IN).withContext('what is the value of pie?');
    
        pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) { // the second parameter can be a string or a function
            var map = {'6': 'six','9': 'nine'};
            return map[number];
        });
        expect(pie).toEqual(FILL_ME_IN).withContext('what is the value of pie?');
    });
});

