import React, { Component } from 'react';
import { isNullOrUndefined } from 'util';

class ProjectDetails extends Component {  
    renderTags(tags){
        let output = '';
        if(!isNullOrUndefined(tags)){
            tags.forEach(tag => {
                output += '<span>' + String(tag) +'</span>';
            });
        }
        
        return output
    }
    render() {
        return (        
        <div className="project-details z-depth-1">
            <div className="project-content">
            <div className="project-title">
                <h5>{this.props.selectedProject.name}</h5>
            </div>
            <div className="project-tags"
                dangerouslySetInnerHTML={{__html: this.renderTags(this.props.selectedProject.tags)}}>
            
            </div>
            <div className="project-body" 
                dangerouslySetInnerHTML={{ __html: this.props.selectedProject.body}}>
                {this.__html}
            </div>
            </div>
        </div>  
        )
    }
    
}
ProjectDetails.defaultProps = {
    selectedProject : {
        name: '',
        tags: '',
        body: ''
    }
}
export default ProjectDetails;