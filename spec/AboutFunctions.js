describe("About Functions", () => {

  it("should declare functions", () => {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toEqual(FILL_ME_IN);
  });

  it("should know internal variables override outer variables", () => {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toEqual(FILL_ME_IN);
    expect(overrideMessage()).toEqual(FILL_ME_IN);
    expect(message).toEqual(FILL_ME_IN);
  });

  it("should have lexical scoping", () => {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toEqual(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", () => {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toEqual(FILL_ME_IN);
  });

  it("should allow extra function arguments", () => {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toEqual(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toEqual(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toEqual(FILL_ME_IN);
  });

  it("should pass functions as values", () => {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toEqual(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toEqual(FILL_ME_IN);

  });
});
