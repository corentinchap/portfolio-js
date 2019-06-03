import React, { Component } from 'react';
import CursorAwareButton from './utils/CursorAwareButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faUserTie, faEnvelope} from '@fortawesome/free-solid-svg-icons';


class ContactForm extends Component {
    submitForm(){

    }
    

    render() {

        return (
           
            <div className="row">
                <form className="col s12">
                    <h3>Drop me a message !</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <i class="material-icons prefix"><FontAwesomeIcon icon={faUserTie} /></i>
                            <input id="full_name" type="text" className="validate" />
                            <label for="full_name">Full name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i id="mail-icon" class="material-icons email prefix"><FontAwesomeIcon id={'email-icon'} icon={faEnvelope} /></i>
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix"><FontAwesomeIcon icon={faPen} /></i>
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Message content</label>
                        </div>

                        <div class="input-field col s12">
                            <CursorAwareButton onClick={this.submitForm} text={'Send'} />
                        </div>
                    </div>
                </form>
            </div>

        )
    }

   
}

export default ContactForm;