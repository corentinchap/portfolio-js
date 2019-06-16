import React, { Component } from 'react';
import AboutSection from './AboutSection';
import WorkSection from '../containers/WorkSection';
import './styles/Landing.scss';
import Cursor from './utils/Cursor';
import ContactModal from './utils/ContactModal';
import FooterComponent from './FooterComponent';
import Testimonials from './Testimonials';
// import CarouselTest from './CarouselTest';
import CursorAwareButton from './utils/CursorAwareButton'
import Skillset from './Skillset';


class Landing extends Component {
    
    render() {
        return (
            <div className="landing z-depth-5">
                <Cursor listenerElement={document} />
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