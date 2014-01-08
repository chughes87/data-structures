var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
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