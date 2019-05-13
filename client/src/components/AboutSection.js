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
                        <div className="title col s6">
                            <h1>about</h1>
                        <div className="profile-picture">
                            <img src="/images/avatar.png" alt="avatar"></img>
                        </div>
                        </div>
                        <div className="content col s6">
                            <div className="summary">
                                <div className="summary-text">
                                Corentin Chapatte
                                </div>
                                <div className="social-contact">
                                    <div className="social">
                                        <span><img alt="LinkedIn" src={linkedin} /></span>
                                        <span><img alt="Github" src={github}/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-ball"></div>
            </div>
        )
    }
}
export default AboutSection;