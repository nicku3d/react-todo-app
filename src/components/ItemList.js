import React, { Component } from 'react';
import './ItemList.css';
import Item from './Item';
import ItemStatus from '../utils/ItemStatus';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          value: '',
          items: new Map()
        };
    }

    addItem = () => {
        if (this.state.value) {
            let items = new Map(this.state.items);
            items.set(
                this.state.id, 
                {
                    id: this.state.id, 
                    name: this.state.value, 
                    status: ItemStatus.InProgress,
                    showInput: false,
                }
            );
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

    itemMethods = {
        onDoubleClick: (id) => {
            let items = new Map(this.state.items);
            let item = {...items.get(id)};
            item.showInput = true;
            items.set(id, item);
            this.setState({items});
        },
        onBlur: (id, e) => {
            let items = new Map(this.state.items);
            let item = {...items.get(id)};
            item.showInput = false;
            items.set(id, item);
            this.setState({items});
        },
        onKeyDown: (e) => {
            if (e.key === 'Enter') {
                e.target.blur();
            }
        },
        onDone: (id) => {
            let items = new Map(this.state.items);
            let item = {...items.get(id)};
            item.status = ItemStatus.Done;
            items.set(id, item);
            this.setState({items});
        },
        onDelete: (id) => {
            let items = new Map(this.state.items);
            items.delete(id); 
            this.setState({items});
        },
        onChange: (id, e) => {
            let items = new Map(this.state.items);
            let item = {...items.get(id)};
            item.name = e.target.value;
            items.set(id, item);
            this.setState({items});
        },
    }

    render () {
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
                    <ul>
                    {Array.from(this.state.items).map((element) => {
                        const item = element[1];
                        if (item.status === ItemStatus.InProgress) {
                            return (
                                <Item 
                                    key={item.id} 
                                    {...item}
                                    showInput={this.state.items.get(item.id).showInput}
                                    {...this.itemMethods}
                                />
                            );
                        }
                    })}
                    </ul>
                </div>
          </div>
        );
    }
}