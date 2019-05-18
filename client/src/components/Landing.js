import React, { Component } from 'react';
import AboutSection from './AboutSection';
import WorkSection from '../containers/WorkSection';
import './Landing.css';
import Cursor from './Cursor';

class Landing extends Component {
    
    render() {
        return (
            <div className="landing">
                <AboutSection />
                <WorkSection />
                <Cursor />
            </div>
        )
    }

   
}

export default Landing;