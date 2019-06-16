import React, { Component } from 'react';
import {connect} from 'react-redux';

import CursorAwareButton from './utils/CursorAwareButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faUserTie, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";


class ContactForm extends Component {
    constructor(props){
        super(props);
        this.setState({
            full_name: '',
            email: '',
            message: '',
            captcha: false,
        })
    }

    handleChange(event) {
        this.setState( {...this.state, [event.target.name]: event.target.value});
        
    }

    submitForm(event, form){
        console.log(form)
       // this.props.sendContactMail(form);
       event.preventDefault();

    }
    

    render() {

        return (
           
            <div className="row">
                <form className="col s12" onSubmit={this.submitForm}>
                    <h3>Drop me a message !</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faUserTie} /></i>
                            <input name="full_name" id="full_name" type="text" handleChange={this.handleChange} className="validate" />
                            <label htmlFor="full_name">Full name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i id="mail-icon" className="material-icons email prefix"><FontAwesomeIcon id={'email-icon'} icon={faEnvelope} /></i>
                            <input name="email" id="email" type="email" handleChange={this.handleChange} className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faPen} /></i>
                            <textarea name="message" id="textarea1" handleChange={this.handleChange} className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Message content</label>
                        </div>

                        <div className="input-field col s6">
                            {/* <ReCAPTCHA sitekey={process.env.GOOGLE_SITE_KEY} onChange={this.handleChange}/> */}
                        </div>
                        <div className="input-field col s6">
                            <CursorAwareButton onClick={this.submitForm} defaultColor='#fff' activeColor="#fe9b34" text={'Send'} />
                        </div>
                    </div>
                </form>
            </div>

        )
    }

   
}

export default connect(null, null)(ContactForm);