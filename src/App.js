import React, { Component } from 'react';
import FilterButton from './components/FilterButton';
import FilteredList from './components/FilteredList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);

    this.state = {
      q: '',
      telita: 5,
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
        <ul>
          <li><FilterButton label="Bebida" q="bebida" filter={this.changeFilter} /></li>
          <li><FilterButton label="Cereales" q="cereal" filter={this.changeFilter} /></li> 
          <li><FilterButton label="Fast food" q="fast-food" filter={this.changeFilter} /></li> 
        </ul>
      
        <FilteredList articles={this.state.items} q={this.state.q} latela={this.state.telita} />
        
      </div>
    );
  }
}

export default App;
