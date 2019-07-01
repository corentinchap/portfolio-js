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
            {content} 
        </span>    
    );
  }

export default PrevArrow;