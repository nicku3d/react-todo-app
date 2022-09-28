import React, { Component } from 'react'
import './App.css';
import ItemList from './components/ItemList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      value: '',
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem () {
    this.setState({
      items: this.state.items.concat({id: this.state.id, name: this.state.value, status: ''}),
      id: this.state.id+1,
    });
    // clearing the value after adding
    this.setState({value: ''});
  }

  handleChange (e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          <input value={this.state.value} onChange={this.handleChange} type="text" name="item-action"/>
          <button onClick={this.addItem}>+</button>
          <ItemList items={this.state.items} />
        </div>
      </div>
    );
  }
}