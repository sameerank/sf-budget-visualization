var React = require('react');
var JSONStore = require('../stores/json');
var ApiUtil = require('../util/api_util');

var YearSelector = require('./yearSelector');
var NodeSelector = require('./nodeSelector');

var omit = require('object.omit');

var App = React.createClass({
  getInitialState: function() {
    return {
      year: 2015,
      graph: JSONStore.graph(),
      revenue: 'character',
      spending: 'department',
      height: '900px'
    };
  },

  componentDidMount: function() {
    this.eventListener = JSONStore.addListener(this._onChange);
    ApiUtil.fetchJSON(this.state.year, this.state.revenue, this.state.spending);
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  _onChange: function() {
    this.setState({
      graph: JSONStore.graph()
    });

    if (this.state.revenue === 'object' ||
    this.state.spending === 'object' ||
    this.state.revenue === 'sub_object' ||
    this.state.spending === 'sub_object') {
      this.setState({height: '2000px'});
    } else {
      this.setState({height: '1200px'});
    }

    this._visualizeGraph(JSONStore.graph());
  },

  _updateYear: function(newYear) {
    this.setState({year: newYear});
    ApiUtil.fetchJSON(newYear, this.state.revenue, this.state.spending);
  },

  _visualizeGraph: function() {
    d3.select("svg").remove();
    var chart = d3.select("#chart")
    .append("svg")
    .chart("Sankey.Path");

    chart
    .nodeWidth(15)
    .nodePadding(10)
    .draw(this.state.graph);
  },

  _nodeOptionsExcept: function(key) {
    // These columns don't work in my browser: program, fund_type, fund_category
    var options = {
      organization_group: 'Organization Group',
      department: 'Department',
      character: 'Character',
      object: 'Object',
      sub_object: 'Sub-object'
    };
    return omit(options, key);
  },

  _updateRevenue: function(newRevenue) {
    this.setState({revenue: newRevenue});
    ApiUtil.fetchJSON(this.state.year, newRevenue, this.state.spending);
  },

  _updateSpending: function(newSpending) {
    this.setState({spending: newSpending});
    ApiUtil.fetchJSON(this.state.year, this.state.revenue, newSpending);
  },

  render: function() {
    return (
      <div className="container">
        <h2>Cash Flow in the San Francisco Budget</h2>
        <YearSelector year={this.state.year} updateYear={this._updateYear}/>
        <div className="column-label">
          <div>
            Revenue:<br />
          <NodeSelector selected={this.state.revenue}
            nodeOptions={this._nodeOptionsExcept(this.state.spending)}
            updateCategory={this._updateRevenue} />
          </div>
          <div style={{textAlign: 'center'}}>Fund</div>
          <div style={{textAlign: 'right'}}>
            Spending:<br />
          <NodeSelector selected={this.state.spending}
            nodeOptions={this._nodeOptionsExcept(this.state.revenue)}
            updateCategory={this._updateSpending} />
          </div>
        </div>
        <div id="chart" style={{height: this.state.height}}/>
        <div>
          Caveat: Excludes negative cash flow data.
          Data source <a href="https://data.sfgov.org/City-Management-and-Ethics/Budget/xdgd-c79v">here</a>.
          Source code <a href="https://github.com/sameerank/sf-budget-visualization.git">here</a>.
        </div>
      </div>
    );
  }

});

module.exports = App;
