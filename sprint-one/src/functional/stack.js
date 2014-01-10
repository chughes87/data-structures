var makeStack = function(){
  var instance = {};
  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if(size){
      size--;
      var result = storage[size];
      delete storage[size];
      return result;
    }
    var popped = storage[size-1];        
    storage[size-1] && delete storage[size-1];
    size && size--;
    return popped;
  };

  instance.size = function(){
    return size;
  };
  return instance;
};