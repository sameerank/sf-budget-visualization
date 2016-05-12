var React = require('react');

var YearSelector = React.createClass({
  handleChange: function(e) {
    this.props.updateYear(e.target.value);
  },
  render: function() {
    return (
      <div className="slide-bar">
        <label> Fiscal Year:
          <input type="range" min="2010" max="2017" onChange={this.handleChange}
            value={this.props.year} id="year-control" />
          <span id="fiscal-year">{this.props.year}-{1 + parseInt(this.props.year)}</span>
        </label>
      </div>
    );
  }

});

module.exports = YearSelector;
