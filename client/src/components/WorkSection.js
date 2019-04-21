import React, { Component } from 'react';
import ProjectList from './projects/ProjectList';
import './WorkSection.css';

class WorkSection extends Component {
    

    render() {
        return (
                <div className="work-section">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6" >
                            <ProjectList />
                        </div>
                        
                        <div className="title right-align col s6"><h1>Work</h1></div>
                    </div>
                </div>
               
            </div>
        )
    }

   
}
export default WorkSection;

