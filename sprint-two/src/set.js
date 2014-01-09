var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  var result = false;
  for(var prop in this._storage){
    item === prop && (result = true);
  }
  return result;
};

setPrototype.remove = function(item){
  this._storage[item] && (delete this._storage[item]);
};
