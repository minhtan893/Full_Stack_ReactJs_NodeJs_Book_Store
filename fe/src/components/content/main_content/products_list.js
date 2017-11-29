import React, { Component } from 'react';
import Product from './product';
import { getProducts } from '../../../actions/Categories';

class ProductsList extends Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.id != this.props.match.params.id){
            this.props.dispatch(getProducts(nextProps.match.params.id));
        }
    }
    
    render(){
        console.log('render');
        var listItems = this.props.products.map((item, index)=>
         <Product key={index} item = {item} />);
      return <h1>{listItems}</h1>
    }
}
export default ProductsList;