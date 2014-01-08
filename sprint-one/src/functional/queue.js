var makeQueue = function(){
  var instance = {};
  var storage = {};
  var start = 0;
  var end = 0;
  var size = 0;

  instance.enqueue = function(value){
    storage[end] = value;
    end++;
    size++;
  };

  instance.dequeue = function(){
    if(size){
      size--;
      var result = storage[start];
      delete storage[start];
      start++;
      return result;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

