import React, { Component } from 'react';
import AboutSection from './AboutSection';
import WorkSection from '../containers/WorkSection';
import './Landing.css';

class Landing extends Component {

    componentDidMount(){
        this.initCustomCursor();
    }
    
    render() {
        return (
            <div className="landing">
                <AboutSection />
                <WorkSection />

                <div id="cursor">
                      <div id="circle"></div>
                  </div>
            </div>
        )
    }

    initCustomCursor(){
        var cursor = document.getElementById('cursor');
        var off = 10;
        let cursor_enablers = document.getElementsByClassName('cursor-active');
        let activate_cursor = false;

        document.addEventListener('mousemove',e => {                
            setTimeout(() => {
                
                if(e.target.id !== 'cursor'){
                    activate_cursor = false;
                    if(e.target.className.includes('cursor-active'))
                    {
                        activate_cursor = true;
                    } else {
                        
                        if(e.target.parentNode.className.includes('cursor-active')){
                            activate_cursor = true;
                        }

                    }

                }
            }, 300);
            
            console.log(activate_cursor);
            cursor.setAttribute('style','top: '+(e.pageY-off)+'px; left:'+(e.pageX-off)+'px;');
            if(activate_cursor)
                cursor.setAttribute('class', 'cursor-enabled');
            else
                cursor.removeAttribute('class', 'cursor-enabled');
        });
        

         document.addEventListener('click', () => {
            cursor.classList.add('expend');

            setTimeout(() => {
                cursor.classList.remove('expend');
            }, 500);
         })

    }
}

export default Landing;