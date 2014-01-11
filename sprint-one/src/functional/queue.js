var makeQueue = function(){
  var instance = {};
  var storage = {};
  var start = 0;
  var end = 0;
  var length = 0;

  instance.enqueue = function(value){
    storage[end] = value;
    end++;
    length++;
  };

  instance.dequeue = function(){
    length || return undefined;
    length--;
    var result = storage[start];
    delete storage[start];
    start++;
    return result;
  };

  instance.size = function(){
    return length;
  };

  return instance;
};

