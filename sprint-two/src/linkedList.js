var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newNode = makeNode(value);
    newNode.next = this.head;
    this.head && (this.head.prev = newNode);
    this.head = newNode;
    this.tail || (this.tail = newNode);
  };

  list.addToTail = function(value){
    var newNode = makeNode(value);
    newNode.prev = this.tail;
    this.tail && (this.tail.next = newNode);
    this.tail = newNode;
    this.head || (this.head = newNode);
  };

  list.removeHead = function(){
    var deletee = this.head;
    this.head = this.head.next;
    return deletee;
  };

  list.removeTail = function(){
    var deletee = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return deletee;
  };

  list.contains = function(target, node){
    var currentNode = this.head;
    var result = false;
    while(currentNode){
      if(currentNode.value === target){
        result = true;
      }
      currentNode = currentNode.next;
    }
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};
