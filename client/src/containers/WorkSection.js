import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';
import LoaderCard from '../components/utils/LoaderCards';

import './WorkSection.css';
import { isUndefined } from 'util';

class WorkSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProject : undefined,
            selectedProjectIndex: 0
        };
        this.onProjectClick = this.onProjectClick.bind(this);

    }
    
    componentDidMount(){
        this.props.fetchProjects();
    }
    
    onProjectClick(i){
        this.setState({selectedProjectIndex: i});
    }

    render() {

        return (
                <div className="work-section">
                <div className="container fluid">
                    <div className="row no-bottom-margin">
                        <div className="col s12">
                            <h1>Some of my Work</h1>
                        </div>
                        <div className="col s12" >
                            <LoaderCard isLoading={this.props.areProjectsLoading} numberOfCards={3}>
                                <ProjectList 
                                    projects={this.props.projects}
                                    onProjectClick={this.onProjectClick} 
                                    selectedProjectIndex={this.state.selectedProjectIndex} 
                                    enableEdits={false} 
                                />
                            </LoaderCard>
                            
                        </div>
                        
                        <div className="col m12 title right-align">               
                            <LoaderCard isLoading={this.props.areProjectsLoading} numberOfCards={1}> 
                                {isUndefined(this.props.projects) ?
                                    <ProjectDetails /> :
                                    <ProjectDetails selectedProject={this.props.projects[this.state.selectedProjectIndex]} />
                                } 
                            </LoaderCard>            
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }

   
}

function mapStateToProps(state) {
    return {
        projects: state.projects.list,
        areProjectsLoading: state.projects.isLoading
    }
}

export default connect(mapStateToProps, {fetchProjects})(WorkSection);
