var makeQueue = function(){
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;
  instance.length = 0;
  //_.extend(instance,queueMethods);
  return instance;
};

queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
  this.length++;
};

queueMethods.dequeue = function(){
  if(this.length){
    this.length--;
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

queueMethods.size  =  function(){
  return this.length;
};

