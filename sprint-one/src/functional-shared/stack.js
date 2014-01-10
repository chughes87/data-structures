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
