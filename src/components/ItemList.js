import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        let showInput = new Array(props.items.length);
        props.items.forEach(element => {
            showInput[element.id] = false;
        });
        this.state = (
            {
                showInput: showInput,
                items: props.items,
            }
        );
    }

    handleItemBlur = (id, e) => {
        let showInput = [...this.state.showInput];
        showInput[id] = false;
        this.setState({showInput});
    }

    handleItemDoubleClick = (id) => {
        let showInput = [...this.state.showInput];
        showInput[id] = true;
        this.setState({showInput});
    }

    handleItemChange = (id, e) => {
        let items = [...this.state.items];
        let item = {...items[id]};
        item.name = e.target.value;
        items[id] = item;
        this.setState({items});
    }

    handleItemKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    }

    handleItemDone = (id) => {
        console.log('itemdone: ' + id);
    }

    handleItemDelete = (id) => {
        console.log('itemdelete: ' + id);
    }

    render () {
        return (
            <ul>
                {this.state.items.map((item, id) => {
                    return (
                        <Item 
                            key={id} 
                            id={id} 
                            name={item.name}
                            showInput={this.state.showInput[id]}
                            onDoubleClick={this.handleItemDoubleClick}
                            onBlur={this.handleItemBlur}
                            onChange={this.handleItemChange}
                            onKeyDown={this.handleItemKeyDown}
                            onDone={this.handleItemDone}
                            onDelete={this.handleItemDelete}
                        />
                    )
                })}
            </ul>
        );
    }
}