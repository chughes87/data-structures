var makeStack = function() {
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  _.extend(instance,stackMethods);
  return instance;
};
  
stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  if(this.length){
    this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
    return result;
  }
};

stackMethods.size = function(){
  return this.length;
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
