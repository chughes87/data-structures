var Graph = function(){
  this.nodes = {};
  this.nodeCount = 0;
};

Graph.prototype.addNode = function(newNode, toNode){

  this._addNode(newNode);

  if(!toNode && this.nodeCount === 2){
    for(var prop in this.nodes){
      this.addEdge(prop,newNode);
    }
  }

  //if passed two node names, connect them
  if(newNode && toNode){
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype._addNode = function(newNode){
  if(!this.nodes[newNode]){
    var newSet = makeSet();
    newSet.add(newNode);
    this.nodes[newNode] = newSet;
    this.nodeCount++;
  }else{
    throw("ERR: This node already exists in this graph.");
  }
};

Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  if(!this.nodes[node]){
    return;
  }
  var callback = function(neighbor){this.removeEdge(node, neighbor);};
  callback.bind(this);
  this.nodes[node].each(callback);
  delete this.nodes[node];
  this.nodeCount--;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(!fromNode || !toNode || fromNode === toNode){
    return;
  }
  return this.nodes[fromNode].contains(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(!fromNode || !toNode || 
     !this.nodes[fromNode] || !this.nodes[toNode] ||
     fromNode === toNode){
    return;
  }
  var edges = this.nodes[fromNode];
  edges.add(toNode);

  edges = this.nodes[toNode];
  edges.add(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(!fromNode || !toNode || 
     !this.nodes[fromNode] || !this.nodes[toNode] ||
     fromNode === toNode){
    return;
  }
  var edges = this.nodes[fromNode];
  var size = edges.remove(toNode);
  if(size === 0){
    this.removeNode(fromNode);
  }
  edges = this.nodes[toNode];
  size = edges.remove(fromNode);
  if(size === 0){
    this.removeNode(toNode);
  }
};