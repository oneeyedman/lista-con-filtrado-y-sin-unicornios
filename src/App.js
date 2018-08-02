import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);

    this.state = {
      q: '',
      items : [
        {
          name:"Cereales con chocolate",
          description: "Cereales rellenos de chocolate",
          quantity: 2,
          category: "Cereales",
          price: 5
        },
        {
          name:"Hamburguesa con queso",
          description: "Hamburguesa rica y saludable",
          quantity: 1,
          category: "Fast-food",
          price: 15
        },
        {
          name:"Agua mineral",
          description: "Agua de un charco del Himalaya",
          quantity: 2,
          category: "Bebida",
          price: 5
        }
      ]
    }
  }

  changeFilter(e) {
    const query = e.currentTarget.getAttribute('data-q');

    this.setState({
      q: query
    });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" data-q="bebida" onClick={this.changeFilter}>Bebida</button>
        <ul className="item-list">
          {
            this.state.items
              .filter(article=>{
                return article.category.toLocaleLowerCase().includes(this.state.q.toLocaleLowerCase());
              })
              .map(item => {
                return (
                  <li>
                    <div className="item">
                      <h5 className="quantity">{ item.quantity }</h5>
                      <div>
                        <h5>{ item.name }</h5>
                        <h6 className="text-muted">{ item.description }</h6>
                      </div>
                      <div className="badge badge-info">{ item.category }</div>
                      <h5 className="price">{ item.price }€</h5>
                    </div>
                  </li>
                );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
