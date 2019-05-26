import React, { Component } from 'react';
import './FooterComponent.css';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import CursorAwareButton from './utils/CursorAwareButton'

class FooterComponent extends Component {
    
    render() {
        return (
          <footer className="footer">
              <div className="row">
                <div className="col center m6">
                    <h1>Check me out on social media</h1>
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
          </footer>
        )
    }

   
}

export default FooterComponent;