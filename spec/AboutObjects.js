describe("About Objects", () => {
  it("object type", () => {
    var empty_object = {};
    expect(FILL_ME_IN).withContext('what is the type of an object?').toEqual(typeof(empty_object));
  });

  describe("Properties", () => {
    var megalomaniac;

    beforeEach(() => {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", () => {
      expect(megalomaniac.mastermind).toEqual(FILL_ME_IN);
    });

    it("should confirm that properties are case sensitive", () => {
      expect(megalomaniac.henchwoman).toEqual(FILL_ME_IN);
      expect(megalomaniac.henchWoman).toEqual(FILL_ME_IN);
    });

    it("dynamically adding properties", () => {
      var person = {};
      person.__ = "Amory Blaine";
      person.__ = 102;

      expect("Amory Blaine").withContext("what is the person's name?").toEqual(person.name);
      expect(102).withContext("what is the person's age?").toEqual(person.age);
    });

    it("adding properties from strings", () => {
      var person = {};
      person["__"] = "Amory Blaine";
      person["__"] = 102;

      expect("Amory Blaine").withContext("what is the person's name?").toEqual(person.name);
      expect(102).withContext("what is the person's age?").toEqual(person.age);
    });
  });

  it("should know properties that are functions act like methods", () => {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect(FILL_ME_IN).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toEqual(FILL_ME_IN);
    expect(megalomaniac.calculateAge()).toEqual(FILL_ME_IN);
  });

  describe("'in' keyword", () => {
    var megalomaniac;
    beforeEach(() => {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", () => {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toEqual(FILL_ME_IN);
    });

    it("should not have the detonator however", () => {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toEqual(FILL_ME_IN);
    });
  });

  it("should know that properties can be added and deleted", () => {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toEqual(FILL_ME_IN);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toEqual(FILL_ME_IN);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toEqual(FILL_ME_IN);
  });
});
