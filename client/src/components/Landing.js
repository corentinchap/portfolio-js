import React, { Component } from 'react';
import AboutSection from './AboutSection';
import WorkSection from '../containers/WorkSection';
import './Landing.css';
import Cursor from './utils/Cursor';
import ContactModal from './utils/ContactModal';
import FooterComponent from './FooterComponent';

class Landing extends Component {
    
    render() {
        return (
            <div className="landing">
                <AboutSection />
                <WorkSection />
                <FooterComponent />
                <Cursor />
                <ContactModal />
            </div>
        )
    }

   
}

export default Landing;