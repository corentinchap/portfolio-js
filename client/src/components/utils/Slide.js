import React from 'react';
import TestimonialSlide from './TestimonialSlide';
import ProjectSlide from './ProjectSlide';

function Slide(props) {
    
        switch(props.type){
            case "testimonial":
                return(<TestimonialSlide display={props.display} data={props.data} />);
                
            case "project":
                return(<ProjectSlide display={props.display} data={props.data} />);
                
            default:
                break;
        }
          
}


export default Slide