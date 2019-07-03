import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NextArrow(props) {
    const {onClick, content} = props;
    return (
        <span data-cursor="hover" className="control-right" onClick={onClick}> 
            {content}
            <span data-cursor="hover">  
            <FontAwesomeIcon  icon={faArrowRight} /> 
            </span>
        </span>
    );
  }

export default NextArrow;