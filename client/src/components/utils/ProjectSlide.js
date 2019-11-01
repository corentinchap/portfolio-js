import React from 'react';

function ProjectSlide(props) {
        const {url, titleUrl} = props.data;

        return(
            <div className={"browser-frame z-depth-3"  + (props.display ? " show" : "")}>
                <div className="browser-controls">
                    <div className="window-controls"> 
                        <span className="close"></span> 
                        <span className="minimise"></span> 
                        <span className="maximise"></span> 
                    </div> 
                    <span className="url-bar white-container">{titleUrl}</span>
                </div> 
                <img src={url} alt="undefined" />
            </div>    
        )
    
}

export default ProjectSlide