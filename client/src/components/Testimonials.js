import React, { Component } from 'react';
import Slider from "./utils/Slider";
import Ressouce from './utils/Ressource';
import '../styles/Testimonials.scss';

class Testimonials extends Component { 
 
    render() {
        return (
            <div className="container  testimonials">
                <h1>What my clients says about me</h1>              
                <Ressouce isLoading={this.props.data.isLoading}>
                    <Slider type="testimonial" data={this.props.data.testimonials} /> 
                </Ressouce>              
            </div>
        )
    }
   
}

export default Testimonials
