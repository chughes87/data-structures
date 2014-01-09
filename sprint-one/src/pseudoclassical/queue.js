var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
  this.length = 0;
};

//var makeQueue = function(){
//  var instance = new Queue();
//  return instance;
//};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
  this.length++;
};

Queue.prototype.dequeue = function(){
  if(this.length){
    this.length--;
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.length;
};

