var makeQueue = function(){
  var instance = {
    storage: {},
    start: 0,
    end: 0,
    size: 0
  }
  return _.extend(instance,queueMethods);
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.end] = value;
    this.end++;
    this.size++;
  },
  dequeue: function(){
    if(this.size){
      this.size--;
      var result = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return result;
    }
  },
  size: function(){
    return this.size;
  }
};