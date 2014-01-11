var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  if(!list){
    list = makeLinkedList();
    list.addToTail([k,v]);
    this._storage.set(i,list);
  }else{
    list.addToTail([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pair = this._storage.get(i).contains(k);
  return pair[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, index, coll){
    if(index === i){
      coll[index] = null;
    }
  });
  //this._storage.set(i, null);
};

