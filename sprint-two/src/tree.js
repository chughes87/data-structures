var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
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
  var newChild = makeTree(value, this);
  this.children.push(newChild);
  return newChild;
};

treeMethods.contains = function(target){
  var searchTree = function(node){
    var result = false;
    if(node.value === target){
      result = true;
    }else{
      for(var i = 0; i < node.children.length; i++){
        if(searchTree(node.children[i])){
          result = true;
          break;
        }
      }
    }
    return result;
  }
  return searchTree(this);
};

