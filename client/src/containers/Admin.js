import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchProjects} from '../actions/index';

import ProjectList from './../components/projects/ProjectList';
import ProjectNewForm from './../components/projects/ProjectNewForm';
import LoaderCard from './../components/LoaderCards';
import { isUndefined } from 'util';
import ProjectDetails from '../components/projects/ProjectDetails';


class Admin extends Component {
    constructor(props){
        super(props);
        
        // selectedProjectIndex : -1 = no project selected, insert project form
        this.state = {
            selectedProjectIndex: -1,
            selectedProject : undefined
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
        // // Handle when project not retreived yet
        // var selectedProjectForm = (<ProjectNewForm selectedProject={null} ></ProjectNewForm>);
        
        // if(this.props.projects !== undefined){
        //     var selectedProject = this.props.projects[this.state.selectedProjectIndex];
        //     selectedProjectForm = (
        //         <ProjectNewForm selectedProject={selectedProject} />
        //     )
        // }

        return(
            <div>
                 <div id="content" className="admin row">
                    <div className="col s12">Ugly Admin Interface</div>
                        <div className="content col m2 s12">
                            <h4>Job Editor</h4>
                            <LoaderCard isLoading={this.props.areProjectsLoading} numberOfCards={3}>
                                <ProjectList 
                                    projects={this.props.projects}
                                    onProjectClick={this.onProjectClick} 
                                    selectedProjectIndex={this.state.selectedProjectIndex} 
                                    enableEdits={true} 
                                />
                            </LoaderCard>
                        </div>
                        <div className="col s12 m3">
                            <LoaderCard isLoading={this.props.areProjectsLoading} numberOfCards={1}>
                                {isUndefined(this.props.projects) ? 
                                <ProjectNewForm /> : 
                                <ProjectNewForm selectedProject={this.props.projects[this.state.selectedProjectIndex]} />}
                            </LoaderCard>
                        </div>
                        <div className="col s12 m7">
                            <LoaderCard isLoading={this.props.areProjectsLoading} numberOfCards={1}>
                                {isUndefined(this.props.projects) ? 
                                <ProjectDetails /> : 
                                <ProjectDetails selectedProject={this.props.projects[this.state.selectedProjectIndex]} />}
                            </LoaderCard>
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
  
  export default connect(mapStateToProps, {fetchProjects})(Admin);