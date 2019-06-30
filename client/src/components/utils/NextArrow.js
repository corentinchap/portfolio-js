import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function NextArrow(props) {
    const {onClick} = props;
    return (
        <span onClick={onClick} 
        className="control-right" >  
            <FontAwesomeIcon icon={faArrowRight} /> 
        </span>
    );
  }

export default NextArrow;