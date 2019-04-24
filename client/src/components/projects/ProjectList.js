import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';
import axios from 'axios';

const API_URL = "http://localhost:5000";

class ProjectList extends Component {
    componentDidMount(){
        this.props.fetchProjects();
    }

    removeProjectDOM(index) {
        document.getElementById('delete-card-' + index).parentElement.remove();
    }

    deleteProject(e, id, index){
        e.preventDefault();

        axios.post(API_URL + `/api/projects/delete/`+ id)
        .then((data) => {
            this.removeProjectDOM(index);                 
        })
        .catch((err) => {
            alert("Error deleting project :" + err);
        });
        
       
    }

    renderList(){
        if(this.props.projects) return this.props.projects.map((project, index) => {
            return(
            <div className="card" key={project._id}>
            <span id={'delete-card-' + index} onClick={(e) => this.deleteProject(e, project._id, index)} className="project-delete-button z-depth-2">X</span>
                <div onClick={(e) => this.props.onProjectClick(e, index)} className="card-content">
                    {project.name}
                </div>
            </div>
      
        );
        });
        
       
    }

    render() {
        
        return (
           <div>
            <div id="projects-list" className="row projects">
                {this.renderList()}
            </div>
           </div>
        )
    }
    
}

function mapStateToProps({projects}) {
    return { projects }
}


export default connect(mapStateToProps, {fetchProjects})(ProjectList);