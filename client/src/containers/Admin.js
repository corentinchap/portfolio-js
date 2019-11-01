import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchProjects, adminUpdatePreview } from '../actions/index';

import ProjectList from './../components/projects/ProjectList';
import ProjectNewForm from './../components/projects/ProjectNewForm';
import Ressource from '../components/utils/Ressource';
import ProjectDetails from '../components/projects/ProjectDetails';
import { isUndefined } from 'util';


class Admin extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            currentProject: undefined
        };

        this.onProjectClick = this.onProjectClick.bind(this);

    }

    componentDidMount(){
        this.props.fetchProjects();
    }
    
    onProjectClick(i){
        this.setState({currentProject : this.props.projects[i]});

        this.props.adminUpdatePreview(this.props.projects[i]);
    }


    render() {
        return(
            <div>
                 <div id="content" className="admin row">
                    <div className="col s12">Ugly Admin Interface</div>
                        <div className="content col m2 s12">
                            <h4>Job Editor</h4>
                            <Ressource isLoading={this.props.areProjectsLoading} numberOfCards={3}>
                                <ProjectList 
                                    projects={this.props.projects}
                                    currentProject={this.props.currentProject}
                                    onProjectClick={this.onProjectClick} 
                                    enableEdits={true} 
                                />
                            </Ressource>
                        </div>
                    
                        <div className="col s12 m10">
                            <Ressource isLoading={this.props.areProjectsLoading} numberOfCards={1}>
                                <ProjectDetails selectedProject={this.props.currentProject} />
                            </Ressource>
                        </div>

                        <div className="col s12 m12">
                            <Ressource isLoading={this.props.areProjectsLoading} numberOfCards={1}>
                                {isUndefined(this.props.projects) ? 
                                <ProjectNewForm /> : 
                                <ProjectNewForm 
                                selectedProject={this.state.currentProject} 
                                />}
                            </Ressource>
                        </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { projects, admin } = state;
 
    return { 
        projects: projects.list,
        areProjectsLoading: projects.isLoading,
        currentProject: admin.lastest
    }
}

export default connect(mapStateToProps, {fetchProjects, adminUpdatePreview})(Admin);