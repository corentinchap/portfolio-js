import React, { Component } from 'react';

class ProjectDetails extends Component {  
  
   componentDidUpdate(){
       if(this.props.showProjectId !== this.props.project._id){
         
           this.renderBody();
       }
     
   }
    renderTags(tags){
        // tags can be array, empty string or string comma separated
        
        let output = '';
        if(typeof tags !== 'string' && typeof tags !== 'object'){
            return
        }   

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
    
    renderBody(){
        return(
            <div className={this.props.showProjectId === this.props.project._id ? 'project-details selected' : 'project-details'} >
                <div className="project-content">
                <div className="project-title">
                    <h1>{this.props.project.name}</h1>
                </div>
                <div className="project-tags"
                    dangerouslySetInnerHTML={{__html: this.renderTags(this.props.project.tags)}}>
                
                </div>
                <div className="project-body" 
                    dangerouslySetInnerHTML={{ __html: this.props.project.body}}>
                    {this.__html}
                </div>
            </div>
        </div>  
        )
    }
    render() {
         
         return(
           this.renderBody()
        )
    }
    
}
export default ProjectDetails;