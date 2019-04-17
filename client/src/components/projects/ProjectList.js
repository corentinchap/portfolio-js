import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';


class ProjectList extends Component {
    componentDidMount(){
        this.props.fetchProjects();
    }

    renderList(){
        if(this.props.projects) return this.props.projects.map(project => {
            return(
            <div className="col s6" key={project._id}>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <img alt="" className="activator" src="https://via.placeholder.com/250" />
                
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{project.name}<i className="material-icons right">more_vert</i></span>
                <p><a href="/">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>{project.body}</p>
                </div>
            </div>
        </div>
        );
        });
        
       
    }

    render() {
        
        return (
           <div>
               <div className="content col s6">
                    <div className="row projects">
                        {this.renderList()}
                    </div>
                </div>
           </div>
        )
    }
    
}

function mapStateToProps({projects}) {
    return { projects }
}


export default connect(mapStateToProps, {fetchProjects})(ProjectList);