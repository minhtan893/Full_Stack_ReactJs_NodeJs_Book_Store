import { combineReducers } from 'redux';
import  categories  from './categories/index';
import productReducers from './products/index';

const reducers = combineReducers({
    categories: categories,
    product: productReducers,
});
export default reducers;