var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(target, mixin){
  for(var prop in mixin){
    target[prop] || (target[prop] = mixin[prop]);
  }
  return target;
}

var treeMethods = {};

treeMethods.addChild = function(value){
  return this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var innerFun = function(node){
    var result = false;
    if(node.value === target){
      result = true;
    }else{
      for(var i = 0; i < node.children.length; i++){
        if(innerFun(node.children[i])){
          result = true;
          break;
        }
      }
    }
    return result;
  }
  return innerFun(this);
};

