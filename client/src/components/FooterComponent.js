import React, { Component } from 'react';
import ContactForm from './utils/ContactForm';

import './styles/FooterComponent.scss';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
class FooterComponent extends Component {
    
    render() {
        return (
          <footer className="footer">
              <div className="container">
              <div className="row">
                <div className="col center m12 l6">
                <h3>Stalk my social media</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                    <div className="social-links">
                        
                        <img className="social-icon" data-cursor="action" alt="LinkedIn" src={linkedin} />            
                        <div className="social-text" data-cursor="action">
                             +Corentin Chapatte
                        </div>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap" alt="github">
                    <div className="social-links">  

                        <img className="social-icon" data-cursor="action" alt="Github" src={github}/>    
                        <div className="social-text" data-cursor="action" >
                             @corentinchap
                        </div>
                    </div>
                </a>
                </div>
                <div className="col m12 l6">
                    <ContactForm />
                </div>
              </div>
              </div>
          </footer>
        )
    }

   
}

export default FooterComponent;