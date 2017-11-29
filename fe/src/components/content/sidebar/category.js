import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component{
    constructor(props){
        super(props);
        this.state = {
            active : this.props.item.active,
            id : this.props.item.id
        }
    }

    render(){
        const item = this.props.item;
        return  <li  className='list-group-item' >
                <Link to={'/category/'+item.id}>{this.props.item.name}</Link>
            </li>;
    }
}
export default Category;