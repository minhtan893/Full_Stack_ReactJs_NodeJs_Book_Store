import React, { Component } from 'react';
import CategoriesContainer from './containers/categories';
import ProductsContainer from './containers/products';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import fetchJsonp from 'fetch-jsonp';
import { Init } from './actions/Init';

class App extends Component {
  constructor(props){
    super(props);
    var that = this;
    fetchJsonp('http://localhost:5000/api/book/init')
    .then(function(response) {
      response.json().then(data=>{
        that.props.dispatch(Init(data));
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });

  }

  render() {
    return (
      <Router>
          <div className='row'>
           <CategoriesContainer/>
           <Switch>
            <Route path='/category/:id'  component={ProductsContainer} />
             <Route path='/'  component={ProductsContainer} />
           </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;
