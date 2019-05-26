import React, { Component } from 'react';
import axios from 'axios';

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
   
    renderList(){   
        try{
            return this.props.projects.map((project, index) => {
                var baseClasses = 'card';
                var editJsx = (
                    <span id={'delete-card-' + index} 
                    onClick={(e) => this.deleteProject(e, project._id, index)} 
                    className="project-delete-button z-depth-2">X</span>
                );

                if(index === this.props.selectedProjectIndex){
                    baseClasses += ' selected';
                    
                }
                return(
                    <div className="col s6 m3" key={project._id}>
                        <div className={baseClasses} >
                            {this.props.enableEdits ? editJsx : '' }
                            <div data-cursor="action" onClick={(e) => this.props.onProjectClick(index)} className="card-content">
                                {project.name}
                            </div>
                        </div>   
                    </div>
                );
            });             
       
        }
        catch(e){
            console.log('Error while mappings projects' + e);
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