import React, { Component } from 'react';
import Slider from "react-slick";
import PrevArrow from './utils/PrevArrow.js';
import NextArrow from './utils/NextArrow.js';
import './styles/Testimonials.scss';


const testimonials = [
    {
        author: 'Fanny Zambaz',
        project : 'fannyzambaz.ch',
        quote: 'I had no previous experience in website development, and I <b>fully trusted</b> Corentin to imagine and create my professional website. Some major changes were necessary after a few years, and Corentin rapidly took the matter into hands. <br>Today I manage my website myself, but should I need help, he is always here to sort it out. He has done a <b>brilliant work<b/>, and continues to do so.',
        avatar: 'images/testimonials-woman-1.svg'
    },
    {
        author: 'Philipp Reiss',
        project : 'abgefatz.de',
        quote: "Corentin Chapatte has been assisting me throughout the entire process of creating and maintaining my own webpage <i>'abgefatzt.de'</i>.<br><br> He was  and is a <b> very reliable </b>consultant in all of my programming related issues." +
        "Since the beginning of this business relationship Mr. Chapatte always proved to be a <b>reliable partner and a precious consultant</b> in terms of customization and perfectionating.<br><br>Furthermore his <b>deep knowledge</b> of Computing- and IT-related topics has been a consistent source of valuable information. I wish him all the best for his private and profesionnal life.",
        avatar: 'images/testimonials-men-1.svg'
    },
    {
        author: 'Aurélie Gross',
        project: 'instinctmaman.be/',
        quote: 'Corentin was an <b>absolute pleasure</b> to work with on our e-commerce site.<br><br> He definitely exceeded our tasks by fixing the issues extremely <b>quickly and efficiently</b>. He is completely professional and I would work with him again in a heartbeat.',
        avatar: 'images/testimonials-woman-2.svg'
    }
]

class Testimonials extends Component {
   
   
 
    render() {
        var settings = {
            fade: true,
            infinite: true,
            adaptiveHeight: true,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
          };
        return (
            <div className="testimonials">
            <div className="container">
                <div className="row">
                    <h1>What people says about me</h1>
                    <div className="col m12 s12 relative">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial">
                                <blockquote className="testimonial-quote">
                                    <span dangerouslySetInnerHTML={{__html: testimonial.quote}} />                            
                                    <cite> – {testimonial.author}</cite>
                                    <div className="website-link">{testimonial.project}</div>
                                </blockquote>
                                <div className="testimonial-picture hide-on-med-and-down">
                                    <img src={testimonial.avatar} alt="testimonial-avatar"></img>
                                </div>
                                
                            </div>                 
                        ))}
                    </Slider>                      
                        
                    </div>
                </div>
                
                
            </div>
        </div>
        )
    }

   
}

export default Testimonials
