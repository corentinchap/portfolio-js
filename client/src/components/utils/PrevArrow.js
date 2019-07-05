import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function PrevArrow(props) {
    const {onClick, content} = props;
    return (
        <span data-cursor="hover"  className="control-left" onClick={onClick} >
            <span data-cursor="hover"> 
                <FontAwesomeIcon icon={faArrowLeft} /> 
            </span>
            <span className="hide-on-small-down">{content}</span> 
        </span>    
    );
  }

export default PrevArrow;