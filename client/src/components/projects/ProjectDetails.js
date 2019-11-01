import React, { Component } from 'react';
import Slider from '../utils/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import CursorAwareButton from '../utils/CursorAwareButton';

class ProjectDetails extends Component {  
  
   componentDidUpdate(){
       if(this.props.showProjectId !== this.props.project._id){
         
           this.render();
       }
     
   }
   
    
    render() {
        const {name, tags, description, images, url, gitUrl}  = this.props.project;
         return(
            <div className={this.props.showProjectId === this.props.project._id ? 'project-details selected' : 'project-details'} >
                <div className="project-content">
                    <div className="project-title">
                        <h1>{name}</h1>
                    </div>
                    <div className="project-tags">
                        <span>technologies used : </span>
                        {tags.map((item, i) => {
                            return(<span key={i}>{item}</span>)
                        })}
                    
                    </div>
                    <div className="project-body"> 
                        {description}
                        <div className="cta">  
                            {url.length > 0 && 
                            <CursorAwareButton 
                                defaultColor={"#1e1d28"} 
                                activeColor={"#fe9b34"}
                                onClick={() => window.open(url, "_blank")} 
                                icon={<FontAwesomeIcon  icon={faExternalLinkAlt} />} 
                            >
                            <div className="inner-text">website</div>
                            </CursorAwareButton>  }       
                            
                            <CursorAwareButton 
                                activeColor={"white"} 
                                defaultColor={"#fe9b34"} 
                                onClick={() => window.open(gitUrl, "_blank")} 
                                icon={<FontAwesomeIcon  icon={faCodeBranch} />} 
                            >          
                                <div className="inner-text">code</div>
                            </CursorAwareButton>
                        
                        </div>
                        <Slider type="project" data={images} /> 
                    </div>
                </div>
            </div>
        )
    }
    
}
export default ProjectDetails;