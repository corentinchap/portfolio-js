import React, { Component } from 'react';
import './AboutSection.css';

import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="container">
                    <div className="row flex">
                        <div className="title valign-wrapper col s6">
                        <div className="profile-picture">
                            <img src="/images/avatar.png" alt="avatar"></img>
                        </div>
                        </div>
                        <div className="content valign-wrapper col s6">
                            <div className="summary">
                                <div className="summary-text">
                                Corentin Chapatte
                                </div>
                                <div className="social-contact">
                                    <div className="social">
                                        <a target="_blank" className="cursor-active" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn"><img alt="LinkedIn" src={linkedin} /></a>
                                        <a target="_blank" className="cursor-active" rel="noopener noreferrer" href="https://github.com/corentinchap"><img alt="Github" src={github}/></a>
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