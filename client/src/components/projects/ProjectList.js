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
   
    render() {     
        return (
            <div id="projects-list" className="projects row">
                {this.props.projects.map((project, index) => {
                    let baseClasses = 'card';
                    
                    if(index === this.props.selectedProjectIndex)
                        baseClasses += ' selected';
                    return(
                        <React.Fragment key={project._id}>
                            <div className="col s12 m6"  data-cursor="action-see">
                                <div className={baseClasses}>
                                    <div onClick={() => this.props.onProjectClick(index)} className="card-content">
                                        {project.name}
                                    </div>
                                </div>   
                            </div>
                        </React.Fragment>
                    );
                })
                }
            </div>
        )
    }
    
}


export default ProjectList;