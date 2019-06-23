import React, { Component } from 'react';
import AboutSection from './AboutSection';
import WorkSection from '../containers/WorkSection';
import './styles/Landing.scss';
import Cursor from './utils/Cursor';
import ContactModal from './utils/ContactModal';
import FooterComponent from './FooterComponent';
import Testimonials from './Testimonials';
import Skillset from './Skillset';


class Landing extends Component {
    
    render() {
        let viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        return (
            <div className="landing z-depth-5">
                {viewportW >= 1020 ? <Cursor listenerElement={document} /> : ''}
                <AboutSection />
                <WorkSection />
                <Testimonials intervalCarousel={8000}/>
                <Skillset />
                <FooterComponent />           
                <ContactModal />
            </div>
        )
    }

   
}

export default Landing;