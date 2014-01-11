var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
  this.size++;
};

setPrototype.contains = function(item){
  var result = false;
  for(var prop in this._storage){
    (item === prop) && (result = true);
  }
  return result;
};

setPrototype.remove = function(item){
  if(this._storage[item]){
    delete this._storage[item];
    this.size--;
  }
  return this.size;
};

setPrototype.each = function(callback){
  for(var prop in this._storage){
    callback.call(this, this._storage[prop]);
  }
}
