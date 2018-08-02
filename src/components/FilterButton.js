import React from "react";

class FilterButton extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" data-q={this.props.q} onClick={this.props.filter}>{this.props.label}</button>
    );
  }
}

export default FilterButton;