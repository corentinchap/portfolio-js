import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';


import App from './components/App';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(reduxThunk, logger)));

ReactDOM.render(
    <Provider store={store}> <App /> </Provider>, 
document.querySelector('#root'));
