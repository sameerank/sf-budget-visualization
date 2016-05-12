var ApiActions = require('../actions/api_actions');

var ApiUtil = {

  fetchJSON: function (year, revenueNode, spendingNode) {
      var url1 = "https://data.sfgov.org/resource/727n-u3zg.json?$select=fund," +
        revenueNode + ",sum(amount)&$where=revenue_or_spending%20=%20%27Revenue%27"+
        "&fiscal_year=" + year + "&$group=fund," + revenueNode;
      var url2 = "https://data.sfgov.org/resource/727n-u3zg.json?$select=fund," +
        spendingNode + ",sum(amount)&$where=revenue_or_spending%20=%20%27Spending%27"+
        "&fiscal_year=" + year + "&$group=fund," + spendingNode;
      d3.json(url1, function (error, json1) {
        d3.json(url2, function(error, json2) {
          ApiActions.receiveJSON([json1].concat([json2]), revenueNode, spendingNode);
        });
      });
    }
};

module.exports = ApiUtil;
