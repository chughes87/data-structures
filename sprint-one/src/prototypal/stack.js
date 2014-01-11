var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;
  return instance;
};
  
stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};
stackMethods.pop = function(){
  this.length || return undefined;
  this.length--;
  var result = this.storage[this.length];
  delete this.storage[this.length];
  return result;
};
stackMethods.size = function(){
  return this.length;
};
