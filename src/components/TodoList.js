import React, { Component } from 'react'
import './TodoList.css';
import ItemList from './ItemList';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      items: []
    };
  }

  addItem = () => {
    if (this.state.value) {
      let items = [...this.state.items];
      items[this.state.id] = {
        id: this.state.id, 
        name: this.state.value, 
        status: ''
      };

      this.setState({
        items: items,
        id: this.state.id+1,
        value: '',
      });
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }

  render() {

    return (
      <div className="App">
        <div>
          <input 
            value={this.state.value} 
            onChange={this.handleChange} 
            onKeyDown={this.handleKeyDown} 
            type="text" 
          />
          <button onClick={this.addItem}>+</button>
          <ItemList items={this.state.items} />
        </div>
      </div>
    );
  }
}