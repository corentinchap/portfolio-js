import React, { Component } from 'react';
import axios from 'axios';

class ProjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProjectI: 0,
            pushStatus: 'push-m' + this.props.selectedProjectIndex * 4
        }
        this.onProjectClick = this.onProjectClick.bind(this);
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

    onProjectClick(index,e){
        this.props.onProjectClick(index);
        
    
        var child = e.target.parentNode;
        var parent = child.parentNode.parentNode;
        
        var i = Array.prototype.indexOf.call(parent.children, child.parentNode);

        this.setState({
            pushStatus: ' push-m' + i*4
        })
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
                    <div className="col s12 m4" key={project._id}>
                        <div className={baseClasses} >
                            {this.props.enableEdits ? editJsx : '' }
                            <div data-cursor="action" onClick={(e) => this.onProjectClick(index,e)} className="card-content">
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
            <div className="row animated-selector">
                <div className={'col s12 m4 ' + this.state.pushStatus}>
                        <div className="card">
                            <div className="card-content">
                            &nbsp;
                            </div>
                        </div>   
                    </div>
            </div>
           </div>
        )
    }
    
}


export default ProjectList;