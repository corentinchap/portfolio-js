import React, { Component } from 'react';
import CursorAwareButton from './utils/CursorAwareButton';
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
                                <div className="summary-subtext">
                                    a full-stack developer
                                </div>
                                <div className="social-contact">
                                    <div className="social">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                                            <img data-cursor="hover" alt="LinkedIn" src={linkedin} />
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap">
                                            <img data-cursor="hover" alt="Github" src={github}/>
                                        </a>
                                    </div>
                                    <div className="contact wrap">                
                                       <CursorAwareButton text={'Hire me'} />
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