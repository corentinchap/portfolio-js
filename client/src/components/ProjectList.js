import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';


class ProjectList extends Component {
    componentDidMount(){
        this.props.fetchProjects();
    }

    render() {

        return (
           <div>
               {console.log(this.props)}
           </div>
        )
    }
    
}

function mapStateToProps(state) {
    const { projects } = state
    return { ProjectList: projects.fetchProjects }
  }


export default connect(mapStateToProps, fetchProjects)(ProjectList);
