import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {checkAuth} from '../actions';
import './App.css'; 


import Landing from './Landing';
import Admin from './Admin';
import DummyComponent from './DummyComponent';




class App extends Component {
    componentDidMount(){
        console.log(this.props.auth);
        console.log(this.props.checkAuth());
    }
    render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ Landing } />
                    <Route exact path="/projects/:name" component={ Landing } />
                    <Route exact path="/admin" component={ this.props.auth ? Admin : DummyComponent } />
                </div>
            </BrowserRouter>
        </div>
    );
    }
};


function mapStateToProps(state) {
    return { auth: state.auth }
}
  
  export default connect(mapStateToProps, {checkAuth})(App);