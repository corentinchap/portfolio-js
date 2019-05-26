import React, { Component } from 'react';



class LoaderCards extends Component {
    
    renderConditionnalLoader(){
        if(this.props.isLoading)
        {
            var cards = [];
            for(var i=0;i<this.props.numberOfCards;i++)
            {
                cards.push(
                    <div key={i} data-cursor="action" className="card-panel">
                        <div className="animated-loader">&nbsp;</div>
                    </div>
                );
            }
            return cards;
        }
        else{
            return this.props.children;
        }
    }

    render() {
        return(
            <div>
             {this.renderConditionnalLoader()} 
            </div>
        )
    }
}
  
export default LoaderCards