import React, { Component } from 'react';
import './AboutSection.css';

import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="title col s6"><h1>about</h1></div>
                        <div className="content col s6">
                            <div className="summary">
                            My name is Corentin, i’m a passionate developer
                            <div className="social-contact">
                                <div className="social">
                                    <span><img alt="LinkedIn" src={linkedin} /></span>
                                    <span><img alt="Github" src={github}/></span>
                                </div>
                                <button className="btn btn-1 btn-1e">Contact me</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutSection;