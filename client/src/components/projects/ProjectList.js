import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';


class ProjectList extends Component {
    componentDidMount(){
        this.props.fetchProjects();
        console.log(this.props.projects);
    }

    renderList(){
        if(this.props.projects) return this.props.projects.map(project => {
            return(
            
            <div className="card" key={project._id}>
                <div className="card-content">
                    {project.name}
                </div>
            </div>
      
        );
        });
        
       
    }

    render() {
        
        return (
           <div>
               
                    <div className="row projects">
                        {this.renderList()}
                    </div>
 
           </div>
        )
    }
    
}

function mapStateToProps({projects}) {
    return { projects }
}


export default connect(mapStateToProps, {fetchProjects})(ProjectList);