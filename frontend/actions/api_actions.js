var AppDispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var ApiActions = {
  receiveJSON: function(json, revenueNode, spendingNode) {
    AppDispatcher.dispatch({
      actionType: Constants.JSON_RECEIVED,
      json: json,
      revenueNode: revenueNode,
      spendingNode: spendingNode
    });
  }
};

module.exports = ApiActions;
