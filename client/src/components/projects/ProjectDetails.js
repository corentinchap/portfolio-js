import React, { Component } from 'react';


class ProjectDetails extends Component {  
    renderTags(tags){
        // tags can be array, empty string or string comma separated
        let output = '';
      
        if(typeof tags == 'string' & tags.indexOf(',') > -1){
            tags = tags.split(',');
        }
        
        if(typeof tags == 'object'){
            tags.forEach(tag => {
                output += '<span>' + String(tag) +'</span>';
            });
        }

        return output
    }
    render() {
        return (        
        <div className="project-details">
            <div className="project-content">
            <div className="project-title">
                <h1>{this.props.selectedProject.name}</h1>
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