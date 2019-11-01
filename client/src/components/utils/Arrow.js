import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Arrow(props) {
    const {onClick, content, direction} = props;

    if(direction === "left")
        return (
            <span data-cursor="action-prev"  className="control-left" onClick={onClick} >
                <i><FontAwesomeIcon icon={faArrowLeft} /> </i>
                <span className="hide-on-small-down">{content}</span> 
            </span>    
        );
    else if(direction === "right")
        return (
            <span data-cursor="action-next" className="control-right" onClick={onClick}> 
                <span className="hide-on-small-down">{content}</span> 
                <i><FontAwesomeIcon  icon={faArrowRight} /></i> 
            </span>
        );
  }

export default Arrow;