import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkAuth} from '../actions/index';

import ProjectList from './projects/ProjectList';
import ProjectNewForm from './projects/ProjectNewForm';



class Admin extends Component {
    constructor(props){
        super(props);
        this.state({
            selectedProject: '-1'
        })
        this.onProjectClick = this.onProjectClick.bind(this);

    }
    onProjectClick(e,i){
        this.setState({selectedProject: i});
    }
    render() {
        return(
            <div>
                 <div id="content" className="row">
                    <div className="col s12">Ugly Admin Interface</div>
                        <div className="content col m2 s12">
                            <h4>Job Editor</h4>
                            <ProjectList onProjectClick={this.onProjectClick}></ProjectList>
                        </div>
                        <div className="col s12 m10">
                            <ProjectNewForm   />
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