import React, { Component } from 'react';
import AboutSection from './AboutSection';
import WorkSection from '../containers/WorkSection';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <AboutSection />
                <WorkSection />
            </div>
        )
    }
}

export default Landing;