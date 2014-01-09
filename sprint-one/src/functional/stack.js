var makeStack = function(){
  var instance = {};
<<<<<<< HEAD
=======

>>>>>>> 2461e96071ce131006c493abe0b6d436722b1d4a
  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
<<<<<<< HEAD
    if(size){
      size--;
      var result = storage[size];
      delete storage[size];
      return result;
    }
=======
    var popped = storage[size-1];        
    storage[size-1] && delete storage[size-1];
    size && size--;
    return popped;
>>>>>>> 2461e96071ce131006c493abe0b6d436722b1d4a
  };

  instance.size = function(){
    return size;
  };
<<<<<<< HEAD

=======
  
>>>>>>> 2461e96071ce131006c493abe0b6d436722b1d4a
  return instance;
};