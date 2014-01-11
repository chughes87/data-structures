var makeStack = function(){
  var instance = {};
  var storage = {};
  var length = 0;

  instance.push = function(value){
    storage[length] = value;
    length++;
  };

  instance.pop = function(){
    if(length){
      length--;
      var result = storage[length];
      delete storage[length];
      return result;
    }
  };

  instance.size = function(){
    return length;
  };
  return instance;
};