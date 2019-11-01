import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {checkAuth} from '../actions';

import '../styles/App.scss'; 
import Landing from './Landing';
import Admin from './Admin';

class App extends Component {
    componentDidMount(){
        this.props.checkAuth();
    }

   
    render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ Landing } />
                    <Route exact path="/admin" component={ this.props.auth ? Admin : Component } />
                </div>
            </BrowserRouter>
        </div>
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