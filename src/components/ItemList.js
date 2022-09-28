import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                items: props.items
            }
        );
    }
    render () {
        return (
            <ul>
                {this.props.items.map((item) => {
                    return (
                        <Item key={item.id} name={item.name}/>   
                    )
                })}
            </ul>
        );
    }
}