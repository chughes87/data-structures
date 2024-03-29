var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

  it("shoud be able to store functions", function(){
    var testFn = function(){return "test"};
    set.add(testFn);
    assert.isTrue(set.contains(testFn));
  });

  it("should be able to store objects", function(){
    var obj = {a:1, b:2}
    set.add(obj);
    assert.isTrue(set.contains(obj));
  });

});
