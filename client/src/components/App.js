import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css'; 


import Landing from './Landing';
import Admin from './Admin';




class App extends Component {
    componentDidMount() {
        console.log(this.props);
       /* this.props.fetchUser().then(res => {
            console.log(res);
        }); */
    }

    render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ Landing } />
                    <Route exact path="/admin" component={ Admin } />
                </div>
            </BrowserRouter>
        </div>
    );
    }
};



export default connect(null, actions)(App);