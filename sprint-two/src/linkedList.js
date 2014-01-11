var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if(this.head === null && this.tail === null){
      this.head = this.tail = newNode;
    }else if(this.head === this.tail){
      this.head = newNode;
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  };

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head === null && this.tail === null){
      this.head = this.tail = newNode;
    }else if(this.head === this.tail){
      this.tail = newNode;
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  list.removeHead = function(){
    var deletee = this.head;
    if(!this.head) return null;
    if(this.head.next !== null){
      this.head = this.head.next;
      this.head.prev = null;
    }else{
      this.head = null;
      this.tail = null;
    }
    return deletee;
  };

  list.removeTail = function(){
    var deletee = this.tail;
    if(this.head.next !== null){
      this.tail = this.tail.prev;
      this.tail.next = null;
    }else{
      this.head = null;
      this.tail = null;
    }
    return deletee;
  };

  list.remove = function(node){
    if(node === this.head){
      this.head = node.next;
      this.head.prev = null;
    }else if(node === this.tail){
      this.tail = node.prev;
      this.tail.next = null;
    }else{
      node.prev.next = node.next;
      node.next.prev = node.prev
    }
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
