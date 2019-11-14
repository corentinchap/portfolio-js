import React, { Component } from 'react';
import Carousel from "./utils/Carousel";
import Ressouce from './utils/Ressource';
import '../styles/Testimonials.scss';

class Testimonials extends Component { 
    
    render() {
        return (
            <div className="container testimonials">
                <h1>What my clients says about me</h1>              
                <Ressouce isLoading={this.props.data.isLoading}>
                    <Carousel id="testimonials" autoHeightRefSelector=".testimonial-quote" autoHeightOffset="50" >
                        {this.props.data.testimonials.map((testimonial, index) => {
                            const {quote, author, authorOccupation, projectUrl, avatar} = testimonial;
                            return(
                                <div key={index} className="testimonial">
                                    <blockquote className="testimonial-quote">
                                        <span dangerouslySetInnerHTML={{__html: quote}} />                            
                                        <div className="testimonial-author"> 
                                            – {author}
                                            <span>{authorOccupation}</span>
                                        </div>
                                        <div className="website-link">{projectUrl}</div>
                                    </blockquote>
                                    <div className="testimonial-picture hide-on-med-and-down">
                                        <img src={avatar} alt="testimonial-avatar"></img>
                                    </div>
                                </div>    
                            )
                       
                        })}
                       
                    </Carousel> 
                </Ressouce>              
            </div>
        )
    }
   
}

export default Testimonials
