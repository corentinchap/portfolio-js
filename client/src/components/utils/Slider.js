import React, { Component } from 'react';
import Arrow from './Arrow';
import '../../styles/Slider.scss';

class Slider extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            selected: 0,
            nbrSlide: 0
        }
        
    }

    slide = (wrapper, items, prev, next) => {
        let posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100,
            slides = items.getElementsByClassName('project-content'),
            slidesLength = slides.length,
            slideSize = items.getElementsByClassName('project-content')[0].offsetWidth,
            firstSlide = slides[0],
            lastSlide = slides[slidesLength - 1],
            cloneFirst = firstSlide.cloneNode(true),
            cloneLast = lastSlide.cloneNode(true),
            index = 0,
            allowShift = true;
        
            items.appendChild(cloneFirst);
            items.insertBefore(cloneLast, firstSlide);
            wrapper.classList.add('loaded');
    }

    render() {
        
        return(
            <div className="slider">
            <div className="slider-wrapper">
            <Arrow direction="right" onClick={this.nextSlide} />
                {this.props.childrens.map((children, index) => {
                    return(
                        <Slide onDragStart={this.onDragStart} onDrag={this.onDrag} display={true} key={index} children={children} /> 
                    );                
                })} 
            <Arrow direction="left" onClick={this.prevSlide} />
                

            </div>
            </div>
        )
   
    }
}

Slider.defaultProps = {
    childrens: []
}


const Slide = (props) => {
    return(
        <div className={"slide-wrapper"  + (props.display ? " show" : "")} onDrag={props.onDrag} onDragStart={props.onDragStart} onDragEnd={props.onDragEnd}>
            {props.children}
        </div>
    )
          
}
export default Slider;