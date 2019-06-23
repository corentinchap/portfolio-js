import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';
import LoaderCard from '../components/utils/LoaderCards';
import M from 'materialize-css';

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
    componentDidUpdate(){
        if(this.state.selectedProjectIndex === 2){
            M.Collapsible.init(document.querySelectorAll('.collapsible'));
        }
    }
    
    componentDidMount(){
        this.props.fetchProjects();
    }
    
    onProjectClick(i){
        //this.setState({selectedProjectIndex: i});
        document.querySelector('.project-details').classList.add('fadeOut');

        setTimeout(() => {
            document.querySelector('.project-details').classList.remove('fadeOut');
            document.querySelector('.project-details').classList.add('fadeIn');
        }, 500);    
    
        document.querySelector('.project-details').classList.remove('fadeIn');
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

    fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 40);
    }

    unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 40);
    }
   
}

function mapStateToProps(state) {
    return {
        projects: state.projects.list,
        areProjectsLoading: state.projects.isLoading
    }
}

export default connect(mapStateToProps, {fetchProjects})(WorkSection);
