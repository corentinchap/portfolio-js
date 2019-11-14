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
                <div className="work-section">
                <div className="container fluid">
                    <div className="row">
                        {/* <div className="col s12" >
                            <h1>click to see details on some of my projects</h1>
                            <Ressource isLoading={this.props.data.isLoading} numberOfCards={3}>
                                <ProjectList 
                                    projects={this.props.data.projects}
                                    onProjectClick={this.onProjectClick} 
                                    selectedProjectIndex={this.state.selectedProjectIndex} 
                                    enableEdits={false} 
                                />
                            </Ressource>                          
                        </div> */}
                        <div className="col m12">
                            <h1>Explore some of my projects</h1>
                            <div className="project-details">
                                <Ressource isLoading={this.props.data.isLoading} >
                                    <Carousel id="project-carousel" autoHeightRefSelector={".project-content"} autoHeightOffset="15" >
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
                    </div>
                </div>
               
            </div>
        )
    }
}

export default WorkSection;
