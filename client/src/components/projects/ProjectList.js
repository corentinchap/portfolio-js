import React, { Component } from 'react';
import axios from 'axios';
import {isNullOrUndefined} from 'util';

class ProjectList extends Component {
    removeProjectDOM(index) {
        document.getElementById('delete-card-' + index).parentElement.remove();
    }

    deleteProject(e, id, index){
        e.preventDefault();

        axios.post(`/api/projects/delete/`+ id)
        .then((data) => {
            this.removeProjectDOM(index);                 
        })
        .catch((err) => {
            alert("Error deleting project :" + err);
        });
        
       
    }
    renderListWithEdit(){

        if(!isNullOrUndefined(this.props.projects)) 
            return this.props.projects.map((project, index) => {
                var selected = 'card cursor-active';
                if(project === this.props.currentProject){
                    selected += ' selected';
                    
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

        try{
            return this.props.projects.map((project, index) => {
                var selected = 'card cursor-active';
                if(index === this.props.selectedProject){
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
        catch{
            console.log('Error while mappings projects');
        }
    }

    render() {     
        return (
           <div>
            <div id="projects-list" className="row projects">
                {this.props.enableEdits ? this.renderListWithEdit() : this.renderList()}
            </div>
           </div>
        )
    }
    
}


export default ProjectList;