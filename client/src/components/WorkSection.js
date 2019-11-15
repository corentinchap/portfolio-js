import React, { Component } from 'react';

// import ProjectList from './projects/ProjectList';
import ProjectDetails from './projects/ProjectDetails';
import Ressource from './utils/Ressource';
import Carousel from './utils/Carousel';

class WorkSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProjectIndex: 0,
        };
    }
   
    onProjectClick = (index) => {
        this.setState({
            selectedProjectIndex: index
        })
    }
  
    render() {

        return (
                <div className="work-section container">
                    <h1>Explore what I do</h1>
                    <div className="project-details">
                        <Ressource isLoading={this.props.data.isLoading} >
                            <Carousel id="project-carousel" autoHeightRefSelector={".project-content"} autoHeightOffset="25" >
                            {this.props.data.projects.map((project,i) => {
                                return ( 
                                    <React.Fragment key={i}>
                                        <ProjectDetails project={project} ></ProjectDetails>
                                    </React.Fragment>
                                );
                            })}
                            </Carousel>                                   
                        </Ressource>         
                </div>
               
            </div>
        )
    }
}

export default WorkSection;
