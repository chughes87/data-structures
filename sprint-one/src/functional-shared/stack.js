var makeStack = function() {
  var instance = {
    storage: {},
    size: 0
  }
  return _.extend(instance,stackMethods);
};
  
var stackMethods = {
  push: function(value){
    this.storage[this.size] = value;
    this.size++;
  },
  pop: function(){
    if(this.size){
      this.size--;
      var result = this.storage[this.size];
      delete this.storage[this.size];
      return result;
    }
  },
  size: function(){
    return this.size;
  }
};