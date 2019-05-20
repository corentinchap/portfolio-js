import React, { Component } from 'react';
import './Cursor.css';
import { isNullOrUndefined } from 'util';

class Cursor extends Component {

    componentDidMount(){
        this.initCustomCursor();
    }
    
    render() {
        return (
            <div id="cursor"></div>
        )
    }

    initCustomCursor(){
        let cursor = document.getElementById('cursor');
        let off = 10;
        let activate_cursor = false;

        let currentElement; // prevent click event to fire the cursor pseudo-elemnet

        document.addEventListener('mousemove',e => {                
            setTimeout(() => {
                
                if(e.target.id !== 'cursor'){
                    activate_cursor = false;
                    if(e.target.className.includes('cursor-active'))
                    {
                        activate_cursor = true;
                        currentElement = e.target;
                    } else {
                        if(!isNullOrUndefined(e.target.parentNode)){
                            try{
                                if(e.target.parentNode.className.includes('cursor-active')){
                                    activate_cursor = true;
                                    currentElement = e.target;
                                }
                            } catch(e) {
                                console.log(e);
                            }
                            
                        }
                        

                    }

                }
            }, 300);
            
            cursor.setAttribute('style','top: '+(e.pageY-off)+'px; left:'+(e.pageX-off)+'px;');
            if(activate_cursor)
                cursor.setAttribute('class', 'cursor-enabled');
            else
                cursor.removeAttribute('class', 'cursor-enabled');
        });
        

         document.addEventListener('click', e => {
            if(e.target.className === 'cursor-enabled'){
                currentElement.click();
            }
            cursor.classList.add('expend');

            setTimeout(() => {
                cursor.classList.remove('expend');
            }, 500);
         })

    }
}

export default Cursor;