import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkAuth} from '../actions/index';

import ProjectList from './projects/ProjectList';
import ProjectNewForm from './projects/ProjectNewForm';



class Admin extends Component {
     
    render() {
        return(
            <div>
                 <div id="content" className="row">
                    <div className="col s12">Ugly Admin Interface</div>
                        <div className="content col m2 s12">
                            <h2>Job Editor</h2>
                            <ProjectList></ProjectList>
                        </div>
                        <div className="col s12 m10">
                            <ProjectNewForm/>
                        </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { auth: state.auth }
}
  
  export default connect(mapStateToProps, {checkAuth})(Admin);