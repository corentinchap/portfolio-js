import React, { Component } from 'react';
import CursorAwareButton from './utils/CursorAwareButton';
import '../styles/AboutSection.scss';

import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import freecodecamp from '../img/freecodecamp.svg';
import codewars from '../img/codewars.png';
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
                <div className="about-section--clip">
                <div className="container">
                    <div className="row flex">
                        <div className="title valign-wrapper col m6">
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
                                        <a title="boring but useful social media" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                                            <img  alt="LinkedIn" src={linkedin} />
                                        </a>
                                        <a title="GitHub the code sharing platform" target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap">
                                            <img alt="Github" src={github}/>
                                        </a>
                                        <a title="codewars coding game" target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/corentinchap">
                                            <img alt="Codewars" style={{filter:'invert(1)'}} src={codewars}/>
                                        </a>
                                        <a title="freeCodeCamp training certifications" target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/fcc8a8b0848-a68e-4580-9f1d-4a680861d3f1">
                                            <img alt="FreeCodeCamp" style={{filter:'invert(1)',height:'100%'}} src={freecodecamp}/>
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
                <div className="about-pattern"></div>
                </div>
                
              
            </div>
        )
    }
}
export default AboutSection;