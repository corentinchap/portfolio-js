import React, { Component } from 'react';

import ProjectList from './projects/ProjectList';
import ProjectDetails from './projects/ProjectDetails';
import Ressource from './utils/Ressource';

class WorkSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProjectIndex: 0,
            selectedProjectId: '5cc06b5d2197c42b1c7de3ce'
        };
        this.onProjectClickList = this.onProjectClickList.bind(this);

    }
        
    onProjectClickList(e){
        let targetIndex = e.target.parentNode.getAttribute('pj-index');

        document.querySelector('#projects-list .card.selected').classList.remove('selected');
        document.querySelector('#projects-list .card[pj-index="'+ targetIndex +'"]').classList.add('selected');

        this.changeProject(targetIndex);
    }

    changeProject = (projectArrayId) => {
        let projects = this.props.data.projects;
        if(projectArrayId === -1) {
            projectArrayId = projects.length -1;
        }
        else if(projectArrayId === projects.length){
            projectArrayId = 0;
        }

        this.setState({
            selectedProjectId: projects[projectArrayId]._id
        });

        return projectArrayId;
    }
  
   
    renderProjectDetails(){
        try{
            return this.props.projects.map((project,i) => {
                return ( 
                    <div key={i}>
                        <ProjectDetails project={project} showProjectId={this.state.selectedProjectId} ></ProjectDetails>
                    </div> 
                );
            });
        } catch(e) {
            console.log('Projects not available');
        }
    }

    render() {

        return (
                <div className="work-section">
                <div className="container fluid">
                    <div className="row">
                        <div className="col s12" >
                            <h1>click to see details on some of my projects</h1>
                            <Ressource isLoading={this.props.data.isLoading} numberOfCards={3}>
                                <ProjectList 
                                    projects={this.props.data.projects}
                                    onProjectClick={this.onProjectClickList} 
                                    selectedProjectIndex={this.state.selectedProjectIndex} 
                                    enableEdits={false} 
                                />
                            </Ressource>                          
                        </div>
                        <div className="col m12 right-align">
                            <Ressource isLoading={this.props.data.isLoading}   >
                                {this.props.data.projects.map((project,i) => {
                                    return ( 
                                        <div key={i}>
                                            <ProjectDetails project={project} showProjectId={this.state.selectedProjectId} ></ProjectDetails>
                                        </div> 
                                    );
                                })}
                            </Ressource>                           
                                   
                        </div>

                    </div>
                </div>
               
            </div>
        )
    }
}

export default WorkSection;
