import React from "react";
import FilteredItem from './FilteredItem';

class FilteredList extends React.Component {
  render() {
    return (
      <ul className="item-list">
          {
            this.props.articles
              .filter(article=>{
                return article.category.toLocaleLowerCase().includes(this.props.q.toLocaleLowerCase());
              })
              .filter(obj=>{
                return obj.price <= this.props.latela;
              })
              .map(item => {
                return (
                  <li>
                    <FilteredItem filterdItem={item} />
                  </li>
                );
            })
          }
        </ul>
    );
  }
}

export default FilteredList;