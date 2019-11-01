import React, { Component } from 'react';
import axios from 'axios';

class ProjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProjectIndex: 0
        }
    }
    
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
                    onClick={(e) => this.deleteProject(e, index)} 
                    className="project-delete-button z-depth-2">X</span>
                );

                if(index === this.props.selectedProjectIndex){
                    // We don't want the animated div on mobile
                    baseClasses += ' selected';
                }
                return(
                    <div key={project._id}>
                        <div className="col s12 m6"  data-cursor="action-see">
                            <div className={baseClasses} pj-index={index}>
                                {this.props.enableEdits ? editJsx : '' }
                                <div onClick={e => this.props.onProjectClick(e)} className="card-content">
                                    {project.name}
                                </div>
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
            <div id="projects-list" className="projects row">
                {this.renderList()}
            </div>
        )
    }
    
}


export default ProjectList;