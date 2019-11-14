import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {checkAuth} from '../actions';

import '../styles/App.scss'; 
import Landing from './Landing';

class App extends Component {
    componentDidMount(){
        this.props.checkAuth();
    }

    render() {
    return (
        <>
            <BrowserRouter>
                <>
                    <Route exact path="/" component={ Landing } />
                </>
            </BrowserRouter>
        </>
    );
    }
  
};

function mapStateToProps(state) {
    return { 
        auth: state.auth,
    }
}

App.defaultProps = {
    auth: false
}
  
export default connect(mapStateToProps, {checkAuth})(App);