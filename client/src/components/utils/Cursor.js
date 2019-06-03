import React, { Component } from 'react';
import './Cursor.css';

class Cursor extends Component {
    constructor(props){
        super(props);
        this.state = {
            cursorType: 'ring',
            target : undefined,
            cursorElement: undefined        }
    }
    componentDidMount(){
        this.setState({
            cursorElement : document.getElementById('cursor')
        });
        this.addDocumentListener();
    }

    addDocumentListener(){       

        this.props.listenerElement.addEventListener('mousemove',e => {                    
            this.setCursorPosition(e);
        });

        this.props.listenerElement.addEventListener('mousedown', e => {
           this.handleClick(e);
         })

    }

    setCursorPosition(e){
        
        let off = 26;

        let left = e.pageX -off;
        let top = e.pageY-window.scrollY -off; 

        let previousState;

        this.state.cursorElement.setAttribute('style','top: '+top+'px; left:'+left+'px;');

        setTimeout(() => {
            previousState = this.state.cursorType;
                //check wether the cursor is on something that is interactable
                if(e.target.hasAttribute('data-cursor'))
                {
                    this.setState({
                        cursorType: e.target.getAttribute('data-cursor'),
                        target: e.target                        
                    })
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
    

    handleClick(e){

        this.state.cursorElement.classList.add('expend');

        setTimeout(() => {
            this.state.cursorElement.classList.remove('expend');
        }, 500);
    }
}

export default Cursor;