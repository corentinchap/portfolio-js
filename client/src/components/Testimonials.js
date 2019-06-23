import React, { Component } from 'react';
import Slider from "react-slick";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Testimonials.scss';


const testimonials = [
    {
        author: 'Fanny Zambaz',
        project : 'fannyzambaz.ch',
        quote: 'I am very happy with the website and the work he has done. It’s such a pleasure to see the site look exactly like I wanted it to be. The great this is he\'s not only <b> knowledgable </b>, but he\'s also a great person to work with',
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
function PrevArrow(props) {
    const {onClick} = props;
    return (
        <span onClick={onClick} 
        className="control-left" >  
            <FontAwesomeIcon icon={faArrowLeft} /> 
        </span>
    );
  }

  function NextArrow(props) {
    const {onClick} = props;
    return (
        <span onClick={onClick} 
        className="control-right" >  
            <FontAwesomeIcon icon={faArrowRight} /> 
        </span>
    );
  }

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
            <div className="testimonials" onMouseUp={() => {return false}}>
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
