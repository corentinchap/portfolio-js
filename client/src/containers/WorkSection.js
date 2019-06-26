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
    
    async onProjectClick(i){
        // let _this = this;
        // // this.setState({selectedProjectIndex: i});
        // await this.fadeOut(document.querySelector('.project-details'))
        // setTimeout(
        //     this.fadeIn(document.querySelector('.project-details'))
        //     ,2000
        // );
        
        document.querySelector('.project-details').classList.add('fadeOut');

        setTimeout(() => {
            document.querySelector('.project-details').classList.remove('fadeOut');
            document.querySelector('.project-details').classList.add('fadeIn');
            this.setState({selectedProjectIndex: i});
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

     async fadeOut(el){
         el.style.opacity = 1;
      
        (function fade() {
          if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
          if(el.stylle.opacity === 0){
              return true
          }
        })();
      };
      
      fadeIn(el, display){
        el.style.opacity = 0;
        el.style.display = display || "block";
      
        (function fade() {
          var val = parseFloat(el.style.opacity);
          if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }
        })();
      };
   
}

function mapStateToProps(state) {
    return {
        projects: state.projects.list,
        areProjectsLoading: state.projects.isLoading
    }
}

export default connect(mapStateToProps, {fetchProjects})(WorkSection);
