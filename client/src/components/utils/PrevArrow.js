import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function PrevArrow(props) {
    const {onClick} = props;
    return (
        <span onClick={onClick} 
        className="control-left" >  
            <FontAwesomeIcon icon={faArrowLeft} /> 
        </span>
    );
  }

export default PrevArrow;