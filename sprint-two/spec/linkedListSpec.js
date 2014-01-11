var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head')
    expect(linkedList).to.have.property('tail')
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    console.log(linkedList)
    linkedList.removeHead();
        console.log(linkedList) 
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  it("should be able to remove tail", function(){
    linkedList.addToTail(0);
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.removeTail();
    assert.isFalse(linkedList.contains(3));
  });

  it("should be able to add to head", function(){
    linkedList.addToHead(0);
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    linkedList.addToHead(4);
    expect(linkedList.removeHead().value).to.equal(4);
  });

  it("contains should be able to use a validator", function(){
    linkedList.addToHead([0,'a']);
    linkedList.addToHead([1,'b']);
    linkedList.addToHead([2,'c']);
    linkedList.addToHead([3,'d']);
    linkedList.addToHead([4,'e']);
    var validator = function(a,b){return a[0] === b;};
    expect(linkedList.contains(4,validator)).to.equal(true);
    expect(linkedList.contains(2,validator)).to.equal(true);
  });

  it("get should return value requested", function(){
    linkedList.addToHead([0,'a']);
    linkedList.addToHead([1,'b']);
    linkedList.addToHead([2,'c']);
    linkedList.addToHead([3,'d']);
    linkedList.addToHead([4,'e']);
    linkedList.addToHead([1,'z']);
    var validator = function(a,b){return a[0] == b;};
    var result = linkedList.find(1, validator);
    expect(result[0].value).to.eql([1,'b']);
    expect(result[1].value).to.eql([1,'z']);
  });

  it("should be able to remove middle node", function() {
    linkedList.addToHead(0);
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    var tail = linkedList.find(0);
    var middle = linkedList.find(1);
    var head = linkedList.find(2);
    linkedList.remove(middle);
    expect(linkedList.find(1)).to.equal(undefined);
    expect(tail.prev).to.equal(head);
    expect(tail.next).to.equal(null);
    expect(head.prev).to.equal(null);
    expect(head.next).to.equal(tail);
    expect(middle.next).to.equal(null);
    expect(middle.prev).to.equal(null);
  });

  it("should be able to remove head node", function() {
    linkedList.addToHead(0);
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.remove(linkedList.find(2));
    expect(linkedList.find(2)).to.equal(undefined);
  });

  it("should be able to remove tail node", function() {
    linkedList.addToHead(0);
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.remove(linkedList.find(0));
    expect(linkedList.find(0)).to.equal(undefined);
  });
});
