import './CursorAwareButton.css';
import React, { Component } from 'react';


class CursorAwareButton extends Component {

    
    
    buttonMouseInteraction(e){
        var top=0, left=0;
        var elem = e.target;
        while(elem){
            top = top + parseInt(elem.offsetTop);
            left = left + parseInt(elem.offsetLeft);
            elem = elem.offsetParent;
        }
    
        let relX = e.pageX - left;
        let relY = e.pageY - top;

        let span = e.target.querySelector('span')
        if(span)
            span.setAttribute('style', 'top:'+relY+'px;left:'+relX+'px;')
    }

 
    render() {
        return (
            <a onMouseEnter={this.buttonMouseInteraction} 
               onMouseLeave={this.buttonMouseInteraction}
            className="btn-cursor btn-6" data-cursor="hover" href="#">
               {this.props.text}<span></span>
            </a>
        )
    }

   
}

export default CursorAwareButton;