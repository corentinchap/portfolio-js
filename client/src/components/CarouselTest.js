import React, { Component } from 'react';
import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 2
}
 
class CarouselTest extends Component {
    render(){
    return (
            <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            >
            <img src="/images/abgefatz-article.png"/>
            <img src="/images/abgefatzt-dashboard.png"/>
            <img src="/images/abgefatzt-home.png"/>
            </Flickity>
        )
    }
}
 export default CarouselTest;