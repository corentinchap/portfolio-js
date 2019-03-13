import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


import ProjectList from './ProjectList';

class Admin extends Component {
    componentWillMount(){
        Promise.resolve(this.props.checkAuth).then((res) => {
            console.log(res);
        });
    }
    render() {
        return (
            <div id="content" className="row">
                <div className="col s12">Ugly Admin Interface</div>
                <div className="col s6">
                    <h2>Job Editor</h2>
                    <ProjectList></ProjectList>
                </div>
                <div className="col s6">6-columns (one-half)</div>
            </div>
        )
    }
}


export default connect(null, actions)(Admin);
