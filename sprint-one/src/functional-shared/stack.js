var makeStack = function() {
  prototype = stackMethods; 
  return instance;
};
  
var stackMethods = {
  instance: {},
  storage: {},
  length: 0,
  push: function(value){
    storage[length] = value;
    length++;
  },
  pop: function(){
    var popped = storage[size-1];        
    storage[length-1] && delete storage[length-1];
    length && length--;
    return popped;
  },
  size: function(){
    return length;
  }
};