var React = require('react');

var NodeSelector = React.createClass({
  _handleChange: function(e) {
    this.props.updateCategory(e.target.value);
  },
  render: function() {
    return (
      <select value={this.props.selected} onChange={this._handleChange}>
        {
          Object.keys(this.props.nodeOptions).map(function(node, index) {
            return <option key={index} value={node}>{this.props.nodeOptions[node]}</option>
          }.bind(this))
        }
      </select>
    );
  }

});

module.exports = NodeSelector;
