var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    if(this.head === null && this.tail === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
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
    this.head.prev = null;
    return deletee;
  };

  list.removeTail = function(){
    var deletee = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return deletee;
  };

  list.remove = function(node){
    node.prev || (this.head = node.next);
    node.next || (this.tail = node.prev); 
    node.prev && (node.prev.next = node.next);
    node.next && (node.next.prev = node.prev);
    node.next = null;
    node.prev = null;
  }

  list.find = function(target, validator){
    var result = undefined;
    validator || (validator = function(a,b){return a === b;});
    var currentNode = this.tail;
    while(currentNode){
      if(validator(currentNode.value, target)){
        result || (result = []);
        result.push(currentNode);
      }
      currentNode = currentNode.prev;
    }
    return result;
  };

  list.contains = function(target, validator){
    var result = this.find(target, validator);
    console.log(result);
    return !!result;
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
