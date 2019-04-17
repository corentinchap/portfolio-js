import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkAuth} from '../actions/index';

import ProjectList from './projects/ProjectList';
import ProjectNew from './projects/ProjectNew';



class Admin extends Component {
    componentDidMount(){
        this.props.checkAuth();
    }

    renderContent(){
        switch (this.props.auth) {
            case null:
              return;
            case false:
              return <li><a href="/auth/google">Login With Google</a></li>;
            default:
              return [
                <div id="content" className="row">
                    <div className="col s12">Ugly Admin Interface</div>
                    <div className="col s6">
                        <h2>Job Editor</h2>
                        <ProjectList></ProjectList>
                    </div>
                    <div className="col s6">
                        <ProjectNew/>
                    </div>
                </div>
              ];
          }
    }

    render() {
        return(
            <div>
                 {this.renderContent()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { auth: state.auth }
}
  
  export default connect(mapStateToProps, {checkAuth})(Admin);