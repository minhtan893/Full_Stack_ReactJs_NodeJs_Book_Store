import { connect } from 'react-redux';
import CategoriesList from '../components/content/sidebar/categories_list';

function mapStateToProps(state){
    console.log(state);
    return {
        categories: state.categories
    }
}

let CategoriesContainer = connect(mapStateToProps)(CategoriesList);

export default CategoriesContainer;