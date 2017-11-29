import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
const store = createStore(reducers);
ReactDOM.render(
    <Provider store = {store} >
        <AppContainer />
    </Provider>   
    , document.getElementById('root'));
registerServiceWorker();
