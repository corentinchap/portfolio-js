import React, { Component } from 'react';
import CursorAwareButton from './utils/CursorAwareButton';
import '../styles/AboutSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

class AboutSection extends Component {

    scrollToForm(){
        window.scrollBy({ 
            top: document.getElementById('root').scrollHeight, 
            left: 0, 
            behavior: 'smooth' 
          });
    }
    
    render() {
        return (
            <div className="about-section">
                <div className="container">
                    <div className="row flex">
                        <div className="title valign-wrapper col m6 hide-on-small-only">
                        <div className="profile-picture">
                            <img src="/images/programming_code_2.svg" alt="avatar"></img>
                        </div>
                        </div>
                        <div className="content valign-wrapper col s12 m6">
                            <div className="summary">
                                <div className="summary-text">
                                    Corentin Chapatte
                                </div>
                                <div className="summary-subtext">
                                    junior full-stack developer
                                </div>
                                <div className="social-contact">
                                    <div className="social" data-cursor="hover">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                                            <img  alt="LinkedIn" src={linkedin} />
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap">
                                            <img alt="Github" src={github}/>
                                        </a>
                                    </div>
                                    <div className="contact wrap">                
                                       <CursorAwareButton onClick={this.scrollToForm} defaultColor={"#fff"} activeColor={"#174ffc"} >
                                           Get in touch
                                       </CursorAwareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="scroll-indicator" ><FontAwesomeIcon icon={faArrowDown} /></span>
            </div>
        )
    }
}
export default AboutSection;