import React from 'react';
import '../styles/Skillset.scss';
import Ressource from './utils/Ressource';

function Skillsets (props){
   const {isLoading, skillsets} = props.data;

    function Skillset(props){
        const {title, text, techs, imageUrl} = props.skill;
        let i = props.index;
        return (
            <div {...props} >
            <div className="row flex">       
                <div className={'skillset-text s12 m6 l6 col ' + (i%2 === 0  ? 'push-l6' : '')}>
                    <h4>{title}</h4>
                    <div dangerouslySetInnerHTML={{__html: text}} />
                    <div className="techs">      
                        {techs && techs.map((tech, i) => <span data-cursor="hover" key={i}><img alt={tech.alt} title={tech.alt} src={tech.logoUrl}></img></span>)}                            
                    </div>
                    
                </div>
                <div className={'skillset-image valign-wrapper s12 m6 l6 col ' + (i%2 === 0 ? 'pull-l6' : '')}>
                    <img className={i%2 === 0 ? 'left' : ''} src={imageUrl} alt={title}></img>
                </div>                        
            </div>   
            <hr />  
            </div>  
        )
    }

    return (
            <div className="skillsets container">
                <h1>Skillset</h1>    
                <Ressource isLoading={isLoading}>
                    {
                        skillsets.map((skill, i) => 
                        <Skillset skill={skill} index={i} key={i}/>     
                        )       
                    }
                </Ressource>
                
            </div>

    )
}
Skillsets.defaultProps = {
    data: {
        isLoading: true,
        skillsets: []
    }
}
export default Skillsets;