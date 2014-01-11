var makeBinarySearchTree = function(value){
  var tree = Object.create(binarySearchTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(val){
  if(val > this.value){
    if(!this.right){
      this.right = makeBinarySearchTree(val);
    }else{
      this.right.insert(val);
    }
  }else if(val < this.value){
    if(!this.left){
      this.left = makeBinarySearchTree(val);
    }else{
      this.left.insert(val);
    }
  }
};

binarySearchTreeMethods.contains = function(val){
  var result = false;
  if(val === this.value){
    result = true;
  }else if(val > this.value){
    if(this.right){
      result = this.right.contains(val); 
    }
  }else if(val < this.value){
    if(this.left){
      result = this.left.contains(val);
    }
  }
  return result;
};

binarySearchTreeMethods.traverse = function(callback){
  callback.call(this, this.value);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};

binarySearchTreeMethods.depthFirstLog = function(){
  var callback = function(value){console.log(value)};
  this.traverse(callback);
};