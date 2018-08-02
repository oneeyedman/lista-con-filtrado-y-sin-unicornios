import React from "react";

class FilteredItem extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{ this.props.filterdItem.quantity }</h5>
        <div>
          <h5>{ this.props.filterdItem.name }</h5>
          <h6 className="text-muted">{ this.props.filterdItem.description }</h6>
        </div>
        <div className="badge badge-info">{ this.props.filterdItem.category }</div>
        <h5 className="price">{ this.props.filterdItem.price }€</h5>
      </div>
    );
  }
}

export default FilteredItem;