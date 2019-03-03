import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


import WorkEditor from './WorkEditor';

class Admin extends Component {
    componentWillMount(){
        console.log(this.props.checkAuth());
    }
    render() {
        return (
            <div id="content" className="row">
                <div className="col s12">Ugly Admin Interface</div>
                <div className="col s6">
                    <h2>Job Editor</h2>
                    <div className="editor">

                        <WorkEditor />
                    </div>
                </div>
                <div className="col s6">6-columns (one-half)</div>
            </div>
        )
    }
}

export default connect(null, actions)(Admin);
