import { connect } from 'react-redux';
import ProductsList from '../components/content/main_content/products_list';

function mapStateToProps(state){
    return {
        products: state.product.product
    }
}

let ProductsContainer = connect(mapStateToProps)(ProductsList);

export default ProductsContainer;