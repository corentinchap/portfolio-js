import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000";

class ProjectList extends Component {
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
    renderListWithEdit(){

        if(this.props.projects) return this.props.projects.map((project, index) => {
            var selected = 'card';
            if(index === this.props.selectedProjectIndex){
                selected += 'selected';
                
            }
            return(
            <div className={selected} key={project._id}>
            <span id={'delete-card-' + index} onClick={(e) => this.deleteProject(e, project._id, index)} className="project-delete-button z-depth-2">X</span>
                <div onClick={(e) => this.props.onProjectClick(index)} className="card-content">
                    {project.name}
                </div>
            </div>
    
            );
        });
    }
    renderList(){
        

    if(this.props.enableEdits)
    {
        this.renderListWithEdit()
    }
    else{
        if(this.props.projects) return this.props.projects.map((project, index) => {
            var selected = 'card';
            if(index === this.props.selectedProjectIndex){
                selected += ' selected';
            }

            return(
            <div className={selected} key={project._id}>
                <div onClick={(e) => this.props.onProjectClick(index)} className="card-content">
                    {project.name}
                </div>
            </div>
    
            );
        });
    }        
       
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


export default ProjectList;