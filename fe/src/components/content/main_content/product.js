import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return  <li  className='list-group-item' >
                <a >{this.props.item.name}</a>
            </li>;
    }
}
export default Product;