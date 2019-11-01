import React from 'react';

function TestimonialSlide(props) {
        const {author, authorOccupation, projectUrl, quote, avatar} = props.data;
    
        return(
            <div className={"testimonial" + (props.display ? " show" : "")} >
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
    
}

export default TestimonialSlide