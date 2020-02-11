import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/App.scss'; 
import Landing from './Landing';

class App extends Component {

    render() {
    return (
        <>
            <BrowserRouter>
                <>
                    <Route exact path="/" component={Landing} />
                </>
            </BrowserRouter>
        </>
    );
    }
  
};
 
export default App;