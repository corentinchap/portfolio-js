import React, { Component } from 'react';



class ProjectList extends Component {
    componentWillMount(){
        this.setState('FETCH_PROJECTS');        
    }

    render() {
        const projects = this.props.fetchProjects();
        console.log(this.props.fetchProjects());
        return (
            <h1>Project 1</h1>
        )
    }
}

export default connect(null, actions)(ProjectList);
