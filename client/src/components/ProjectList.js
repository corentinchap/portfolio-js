import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';


class ProjectList extends Component {
    componentDidMount(){
        this.props.fetchProjects();
    }

    renderProjects(){

    }

    render() {

        return (
           <div>
               {this.renderProjects()}
           </div>
        )
    }
}

export default connect(null, fetchProjects)(ProjectList);
