var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    this.tail && (this.tail.next = newNode);
    this.tail = newNode;
    this.head || (this.head = newNode);
  };

  list.removeHead = function(){
    var deletee = this.head;
    this.head = this.head.next;
    delete deletee;
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

  return node;
};
