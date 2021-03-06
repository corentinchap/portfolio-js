import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './containers/App'
import reducers from './reducers';

import ReactGA from 'react-ga';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

ReactGA.initialize('UA-46181834-6');
ReactGA.pageview(window.location.pathname + window.location.search);


// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

// const store = createStore(
//     reducers, 
//     composeEnhancers(applyMiddleware(reduxThunk, logger)));


const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}> <App /> </Provider>, 
document.querySelector('#root'));
