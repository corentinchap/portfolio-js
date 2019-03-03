import React, { Component } from 'react';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section valign-wrapper row">
                <div className="title valign-wrapper col s6"><h1>about</h1></div>
                <div className="content col s6">
                    <div className="summary">
                    My name is Corentin, i’m a passionate developer
                    <div className="social-contact">
                        <div className="social">
                            <span><img alt="LinkedIn" src=""></img></span>
                            <span><img alt="Github" src=""></img></span>
                            <span><img alt="insta" src=""></img></span>
                        </div>
                        <button>Hire me</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutSection;