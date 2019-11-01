import React, { Component } from 'react';
import Slide from './Slide';
import Arrow from './Arrow';
import '../../styles/Slider.scss';

class Slider extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            selected: 0,
            nbrSlide: this.props.data.length - 1
        }
        
    }

 

    nextSlide = () => {
        let selected = this.state.selected;
        if(selected === this.state.nbrSlide)
        {
            this.setState({
                selected: 0
            });
        }
        else{
            this.setState({
                selected: selected+1
            });
        }
    }

    prevSlide = () => {
        let selected = this.state.selected;
        if(selected === 0)
        {
            this.setState({
                selected: this.state.nbrSlide
            });
        }
        else{
            this.setState({
                selected: selected-1
            });
        }
    }

    renderSelector = () => {
        var output = [];
        var i;
        for(i = 0; i < this.props.data.length ;i++){
            output.push(this.selectable(i));
        }
        return (
            <ul className="selector">
                {output}
            </ul>
        );
    }

    selectable = (key) => {
        return(
            <li className={key === this.state.selected ? "selected" : ""} key={key} onClick={() => this.setState({selected:key})}></li>
        )
    }

    render() {
        if(this.props.data.length !== 0)
            return(
                <div className="slider">
                <div className="slider-wrapper">
                <Arrow direction="right" onClick={this.nextSlide} />
                    {typeof this.props.data != "undefined" && 
                    this.props.data.map((item, index) => {
                        if(index === this.state.selected)
                            return(
                                <Slide display={true} key={index} type={this.props.type} data={item} /> 
                            );
                        else
                            return(
                                <Slide display={false} key={index} type={this.props.type} data={item} /> 
                            );
                    })} 
                    <Arrow direction="left" onClick={this.prevSlide} />
                    
                    {this.renderSelector()}

                </div>
                </div>
            )
        else
            return(
                <div></div>
            );
    }
}

Slider.defaultProps = {
    type: "testimonial"
}

export default Slider