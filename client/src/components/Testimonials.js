import React, { Component } from 'react';
import {Carousel} from 'react-materialize';
import M from "materialize-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const testimonials = [
    {
        author: 'Fanny Zambaz',
        project : 'fannyzambaz.ch',
        quote: 'I feel really lucked out on finding Corentin. He is a great developer and very <b>easy</b> to work with. It’s great to find a developer who is <b> professional, efficient, sensitive to deadlines and always willing to help. </b>',
        avatar: 'images/testimonials-woman-1.svg'
    },
    {
        author: 'Philipp Reiss',
        project : 'abgefatz.de',
        quote: 'I am very happy with the website and the work you have done. It’s such a pleasure to see the site look exactly like I wanted it to be. I know I have praised you already, but it’s not often that I work with a programmer as good as you',
        avatar: 'images/testimonials-men-1.svg'
    },
    {
        author: 'Aurélie Gross',
        project: 'instinctmaman.be/',
        quote: 'Corentin was an absolute pleasure to work with on our e-commerce site. He definitely exceeded our tasks by fixing the issues extremely quickly and efficiently. He has the technical expertise to handle any problem. He is completely professional and we would work with her again in a heartbeat.',
        avatar: 'images/testimonials-woman-2.svg'
    }
]

class Testimonials extends Component {
   

    componentDidMount(){
        M.AutoInit();
        this.setState({
            carousel : M.Carousel.getInstance(document.getElementById('carousel-1'))
        });

        this.interval = setInterval(() => {
            this.carouselTrigger('next');
          }, this.props.intervalCarousel);
       
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    carouselTrigger(direction){
        if(this.state)
        {
            if(direction === 'prev'){
                this.state.carousel.prev();
            }
            else if(direction === 'next')
                this.state.carousel.next();
        }
       
    }
    renderHtmlContent(html){
        return html;
    }
    render() {

        return (
            <div className="testimonials">
            <div className="container">
                <div className="row">
                    <h1>What people says about me</h1>
                    <div className="col m12 s12 relative">
                        <span className="control-left hide-on-med-and-down" onClick={e => this.carouselTrigger('prev')}>  <FontAwesomeIcon icon={faArrowLeft} /> </span>
                            <Carousel carouselId="carousel-1" options={{fullWidth: true}} >                
                                {testimonials.map((testimonial, i) => (
                                        <div key={i} className="testimonial">
                                            <blockquote className="testimonial-quote">
                                                <span dangerouslySetInnerHTML={{__html: this.renderHtmlContent(testimonial.quote)}} />                            
                                                <cite> – {testimonial.author}</cite>
                                                <div className="website-link">{testimonial.project}</div>
                                            </blockquote>
                                            
                                            <img className="hide-on-med-and-down" src={testimonial.avatar} alt="testimonial-avatar"></img>
                                        </div>                 
                                ))}
                            </Carousel>
                        <span className="control-right hide-on-med-and-down" onClick={ e => this.carouselTrigger('next')}>  <FontAwesomeIcon icon={faArrowRight} /> </span>
                    </div>
                </div>
                
                
            </div>
        </div>
        )
    }

   
}

export default Testimonials
