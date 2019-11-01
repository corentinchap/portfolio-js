import React, { Component } from 'react';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import Cursor from '../components/utils/Cursor';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Skillset from '../components/Skillset';

import { connect } from 'react-redux';
import {fetchTestimonials, fetchSkillsets, fetchProjects} from '../actions';

import '../styles/Landing.scss';

class Landing extends Component {
    componentDidMount(){
        this.props.fetchTestimonials();
        this.props.fetchSkillsets();
        this.props.fetchProjects();
    }
  
    render() {
        let viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        return (
            <div className="landing z-depth-5">
                <AboutSection />
                <WorkSection data={this.props.projects} />
                <Testimonials data={this.props.testimonials} />
                <Skillset data={this.props.skillsets} />
                <Footer />
                {viewportW >= 1020 ? <Cursor listenerElement={document} /> : ''}
            </div>
        )
    }
   
}

const mapStateToProps = (state) => {
    return { 
        testimonials: state.testimonials,
        skillsets: state.skillsets,
        projects: state.projects
    }
}

export default connect(mapStateToProps, {fetchTestimonials, fetchSkillsets, fetchProjects})(Landing);
