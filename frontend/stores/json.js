var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var JSONStore = new Store(AppDispatcher);

var _graph = {"nodes" : [], "links" : []};

JSONStore.graph = function() {
  return _graph;
};

var resetJSON = function(jsons, revenueNode, spendingNode){
  _graph = {"nodes" : [], "links" : []};
  jsons.forEach(function (json, idx) {
    json.forEach(function (d) {
      if (+d.sum_amount > 0) {
        if (idx === 0) {
          _graph.nodes.push({ "name": d[revenueNode] });
          _graph.nodes.push({ "name": d["fund"] });
          _graph.links.push({ "source": d[revenueNode],
          "target": d["fund"],
          "value": +d["sum_amount"] });
        } else {
          _graph.nodes.push({ "name": d["fund"] });
          _graph.nodes.push({ "name": d[spendingNode] });
          _graph.links.push({ "source": d["fund"],
          "target": d[spendingNode],
          "value": +d["sum_amount"] });
        }
      }
    });
  });

  // return distinct nodes
  _graph.nodes = d3.keys(d3.nest()
  .key(function (d) { return d.name; })
  .map(_graph.nodes));

  // replace source and target with indices
  _graph.links.forEach(function (d, i) {
    _graph.links[i].source = _graph.nodes.indexOf(_graph.links[i].source);
    _graph.links[i].target = _graph.nodes.indexOf(_graph.links[i].target);
  });

  // make nodes an array of objects, not strings
  _graph.nodes.forEach(function (d, i) {
    _graph.nodes[i] = { "name": d };
  });
};

JSONStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case Constants.JSON_RECEIVED:
      resetJSON(payload.json,
        payload.revenueNode,
        payload.spendingNode
      );
      JSONStore.__emitChange();
      break;
  }
}

module.exports = JSONStore;
