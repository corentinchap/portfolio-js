import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';
import LoaderCard from '../components/utils/LoaderCards';
import M from 'materialize-css';
import PrevArrow from '../components/utils/PrevArrow';
import NextArrow from '../components/utils/NextArrow';

class WorkSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProjectIndex: 0,
            selectedProjectId: '5cc06b5d2197c42b1c7de3ce'
        };
        this.onProjectClick = this.onProjectClick.bind(this);
        this.onProjectClickList = this.onProjectClickList.bind(this);
        this.changeProject = this.changeProject.bind(this);

    }
    componentDidUpdate(){
        if(this.state.selectedProjectIndex === 2){
            M.Collapsible.init(document.querySelectorAll('.collapsible'));
        }
       
        
    }
    
    componentDidMount(){
        this.props.fetchProjects();
        
    }

    changeProject(projectArrayId){
        if(projectArrayId === -1) {
            projectArrayId = this.props.projects.length -1;
        }
        else if(projectArrayId === this.props.projects.length){
            projectArrayId = 0;
        }

        this.setState({
            selectedProjectId: this.props.projects[projectArrayId]._id
        });

        return projectArrayId;
    }

    onProjectClick(e,nextPjId){      
        nextPjId = this.changeProject(nextPjId);

        document.querySelector('#projects-list .card.selected').classList.toggle('selected');
        document.querySelector('#projects-list .card[pj-index="' + nextPjId + '"]').classList.toggle('selected');
     
        document.querySelector('#projects-list .card[pj-index="' + nextPjId + '"]').classList.add('selected');

        window.scroll({ 
            top: document.querySelector('.project-details.selected .project-title').offsetTop, 
            left: 0, 
            behavior: 'smooth' 
          });     
    }

    onProjectClickList(e){
        let targetIndex = e.target.parentNode.getAttribute('pj-index');
        document.querySelector('#projects-list .card.selected').classList.remove('selected');
        document.querySelector('#projects-list .card[pj-index="'+targetIndex+'"]').classList.add('selected');

        this.changeProject(targetIndex);
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
    }catch(e){
        console.log('error while mapping projects');
        console.log(e);
    }
    }

    render() {

        return (
                <div className="work-section">
                <div className="container fluid">
                    <div className="row">
                        <div className="col s12" >
                            <h1>some of my projects</h1>
                            <LoaderCard isLoading={this.props.areProjectsLoading} numberOfCards={3}>
                                <ProjectList 
                                    projects={this.props.projects}
                                    onProjectClick={this.onProjectClickList} 
                                    selectedProjectIndex={this.state.selectedProjectIndex} 
                                    enableEdits={false} 
                                />
                            </LoaderCard>                          
                        </div>
                        <div className="col m12 right-align displayContens">                              
                           {!this.props.areProjectsLoading ? this.renderProjectDetails() : ''}          
                        </div>
                        <div className="project-switch-button_container">
                            <PrevArrow content="previous project" onClick={(e) => this.onProjectClick(e,parseInt(document.querySelector('#projects-list .card.selected').getAttribute('pj-index')) - 1)}/>
                            <NextArrow content="next project" onClick={(e) => this.onProjectClick(e,parseInt(document.querySelector('#projects-list .card.selected').getAttribute('pj-index')) + 1)}/>            
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
