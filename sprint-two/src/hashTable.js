var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._elementCount = 0;
};

HashTable.prototype.insert = function(k, v){
  if(this._elementCount+1 >= (this._limit*0.75)){
    this.expand();
  }
  
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  if(!list){
    list = makeLinkedList();
    list.addToTail([k,v]);
    this._storage.set(i,list);
  }else{
    list.addToTail([k,v]);
  }
  this._elementCount++;
};

HashTable.prototype.retrieve = function(k){
  var result = null;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var validator = function(a,b){
    return a[0] === b;
  };
  var list = this._storage.get(i);
  if(list !== null){
    var firstPair = list.find(k, validator)[0];
    result = firstPair.value[1];
  }
  return result;
};

HashTable.prototype.remove = function(k){
  if(this._elementCount-1 <= (this._limit*0.25) &&
     this._limit > 8){
    this.contract();
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, index, coll){
    if(index === i){
      coll[index] = null;
    }
  });
  this._elementCount--;
  //this._storage.set(i, null);
};

HashTable.prototype.each = function(callback){
  this._storage.each(callback);
};

HashTable.prototype.expand = function(){
  var oldStorage = this._storage;
  this._limit *= 2;
  this._storage = makeLimitedArray(this._limit);
  this._elementCount = 0;

  var reHash = function(list){
    if(!list){
      return;
    }
    var currentNode = list.removeHead();
    while(currentNode){
      this.insert(currentNode.value[0], currentNode.value[1]);
      currentNode = list.removeHead();
    }
  };
  oldStorage.each(reHash.bind(this));
};

HashTable.prototype.contract = function(){
  var oldStorage = this._storage;
  this._limit = (this._limit/2);
  this._storage = makeLimitedArray(this._limit);
  this._elementCount = 0;
  
  var reHash = function(list){
    if(!list){
      return;
    }
    var currentNode = list.removeHead();
    while(currentNode){
      this.insert(currentNode.value[0], currentNode.value[1]);
      currentNode = list.removeHead();
    }
  };
  oldStorage.each(reHash.bind(this));
};

