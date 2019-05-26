import React, { Component } from 'react';
import './Cursor.css';

class Cursor extends Component {
    constructor(props){
        super(props);
        this.state = {
            cursorType: 'ring'
        }
    }
    componentDidMount(){
        this.initCustomCursor();
    }
    
    render() {
        return (
            <div id="cursor" data-cursor={this.state.cursorType}>
                <div className="wrapper">
                    <span className="cursor-ring"></span>
                    <span className="cursor-hover"></span>
                    <span className="cursor-action">
                        <span>show</span>
                    </span>
                </div>
            </div>
        )
    }
    
    initCustomCursor(){
        let cursor = document.getElementById('cursor');
        let off = 26;

        let currentElement; // prevent click event to fire the cursor pseudo-elemnet
        let previousState;


        document.addEventListener('mousemove',e => {         
             let left = e.pageX -off;
             let top = e.pageY-window.scrollY -off; 

            cursor.setAttribute('style','top: '+top+'px; left:'+left+'px;');

            setTimeout(() => {
                previousState = this.state.cursorType;
                    //check wether the cursor is on something that is interactable
                    if(e.target.hasAttribute('data-cursor'))
                    {
                        currentElement = e.target;
                        this.setState({cursorType: e.target.getAttribute('data-cursor')})
                    }
                    else{
                        // Default to ring
                        if(this.state.cursorType !== 'ring'){
                            this.setState({
                                cursorType: 'ring'
                            })
                        }
                    } 
                    
                    // enable hover state for my interactive buttons
                    if(e.target.classList.contains('btn-cursor')){
                        e.target.classList.add('active');
                    }else{
                        if(previousState === 'hover'){
                            // btn can be null when hovering links that dont interact neither active class
                            if(document.body.contains(document.querySelector('.active')))
                                document.querySelector('.active').classList.toggle('active')
                            
                        }
                    }
               
            }, 300);

        });
        

         document.addEventListener('mousedown', e => {
            if(e.target.className === 'cursor-enabled'){
                currentElement.click();
            }
            cursor.classList.add('expend');

            setTimeout(() => {
                cursor.classList.remove('expend');
            }, 1000);
         })

    }
}

export default Cursor;