import React, { Component } from 'react';
import Category from './category';

class CategoriesList extends Component{
    render(){
        var listItems = this.props.categories.category.map((item, index)=>
             <Category key={index} item = {item}  dispatch={this.props.dispatch} />    
        );
        return <div className="col-xs-12 col-sm-3">
                    <ul className="list-group">
                        {listItems}
                    </ul> 
                </div>
    }
}
export default CategoriesList;