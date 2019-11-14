import React, {Component} from 'react';
import '../../styles/Carousel.scss';

const CarouselLeftArrow = (props) => {
  const {onClick} = props;
 
    return (
      <button onClick={onClick} data-cursor="action-prev" className="control prev"></button>
    );
  
}

const CarouselRightArrow = (props) => {
  return (
    <button onClick={props.onClick} data-cursor="action-next" className="control next"></button>
  );
  
}

const CarouselSlide = (props) => {
    return (
        <div className={props.isActive ? "r-slide activ" : "r-slide"} style={props.style}>  
          {props.slide}   
        </div>
    )
}

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      threshold: 100,
      index: 0,
      allowShift: true,
      cloneFirst: React.cloneElement(this.props.children[this.props.children.length - 1]),
      cloneLast: React.cloneElement(this.props.children[0]),
      currentHeight: 0
    };    

    this.posX1 = 0;
    this.posX2 = 0;
    this.slides = this.props.children;
    this.slidesLength = 0;
    this.slideWidth = "100%";
    this.posInitial = 0;
    this.posFinal = 0;
    this.items = "";
    
  }
  componentDidMount(){
    this.items = document.getElementById(this.props.id + "-slides");
    this.slidesLength = this.slides.length;
    this.slideWidth = document.querySelector("#" + this.props.id + " .wrapper").clientWidth + 1;

    this.calculateHeight(this.getCurrentSlide());
  }

  componentDidUpdate(){
    this.calculateHeight(this.getCurrentSlide());
  }


  getCurrentSlide = () => {
    let container = document.getElementById(this.props.id + "-slides")
    if(container){
      return container.querySelector(".r-slide.activ " + this.props.autoHeightRefSelector)
    }
    
  }

  calculateHeight = (currentSlide) => {
    if(currentSlide && this.state.currentHeight !== currentSlide.clientHeight){
      this.setState(() => ({
        currentHeight: currentSlide.clientHeight
      })); 
    }
  }

  dragStart = (e) => {
    e = e || window.event;
    e.preventDefault();
    
    this.posInitial = this.items.offsetLeft;
   
    if (e.type === 'touchstart') {
      this.posX1 = e.touches[0].clientX;
    } else {
      this.posX1 = e.clientX;
      document.onmouseup = this.dragEnd;
      document.onmousemove = this.dragAction;
    }
  }

  dragAction = (e) => {
    e = e || window.event;
    
    if (e.type === 'touchmove') {
      this.posX2 = this.posX1 - e.touches[0].clientX;
      this.posX1 = e.touches[0].clientX;
    } else {
      this.posX2 = this.posX1 - e.clientX;
      this.posX1 = e.clientX;
    }
    this.items.style.left = (this.items.offsetLeft - this.posX2) + "px";
  }

  dragEnd = (e) => {
    this.posFinal = this.items.offsetLeft;
    if (this.posFinal - this.posInitial < -this.state.threshold) {
      this.shiftSlide(1, 'drag');
    } else if (this.posFinal - this.posInitial > this.state.threshold) {
      this.shiftSlide(-1, 'drag');
    } else {
      this.items.style.left = (this.posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  shiftSlide = (dir, action) => {

    this.items.classList.add('shifting');

    if (this.state.allowShift) {
      if (!action) { this.posInitial = this.items.offsetLeft; }

      if (dir === 1) {
        this.items.style.left = (this.posInitial - this.slideWidth) + "px";
        this.setState((prev) => {
          prev.index++
        });      
      } else if (dir === -1) {
        this.items.style.left = (this.posInitial + this.slideWidth) + "px";
        this.setState((prev) => {
          prev.index--
        });      
      }
    };
    
    this.setState({allowShift : false});
  }
  
  checkIndex = () => {
    this.items.classList.remove('shifting');

    if (this.state.index === -1) {
      this.items.style.left = -(this.slidesLength * this.slideWidth) + "px";
      let index = this.slidesLength - 1;
      this.setState({index});
    }

    if (this.state.index === this.slidesLength) {
      this.items.style.left = -(1 * this.slideWidth) + "px";
      this.setState({index:0});
    }
    
    this.setState({allowShift: true});
  }

  render() {
   let currSlideHeight = parseInt(this.state.currentHeight) + parseInt(this.props.autoHeightOffset);
    return (
      <div id={this.props.id} className="r-slider" style={{height: currSlideHeight}}>
        <div className="wrapper">
          <div onMouseDown={(e) => this.dragStart(e)} 
            onTouchStart={(e) => this.dragStart(e)} id={this.props.id + "-slides"} className="r-slides"
            onTouchEnd={(e) => this.dragStart(e)}
            onTouchMove={(e) => this.dragStart(e)}
            onTransitionEnd={this.checkIndex}
            style={{left: Number.isInteger(this.slideWidth) ? -this.slideWidth : 0}}
            >
            <div className="r-slide" style={{width: this.slideWidth}}>
            {this.state.cloneFirst}
            </div>
            {this.props.children.map((slide, index) =>
              <CarouselSlide
                key={index}
                isActive={index === this.state.index}
                slide={slide}
                style={{width: this.slideWidth}}
              />
            )}
            <div className="r-slide" style={{width: this.slideWidth}}>
              {this.state.cloneLast}
            </div>
          </div>
        </div>

        <CarouselLeftArrow onClick={e => this.shiftSlide(-1)} />
        <CarouselRightArrow onClick={e => this.shiftSlide(1)} />

      </div>
    );
  }
}
Carousel.defaultProps = {
  id: "r-slides",
  autoHeightRefSelector: ".testimonial-quote",
  autoHeightOffset: 0
}

// Render Carousel component
export default Carousel;