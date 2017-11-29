import { connect } from 'react-redux';
import App from '../App';

function mapStateToProps(state){
    return {
        categories: state.categories
    }
}

let AppContainer = connect(mapStateToProps)(App);

export default AppContainer;