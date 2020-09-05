import React, { Component } from "react";
import "./ThirdSlide.css";
import { FirstBlock } from "./FirstBlock/FirstBlock";
import { SecondBlock } from "./SecondBlock/SecondBlock";
import { ThirdBlock } from "./ThirdBlock/ThirdBlock";
// import { Scroller } from "../../components/Scroller/Scroller";
// import horizontalScroll from '../../scrollService';
 
export default class ThirdSlide extends Component {
  state = { sliderValue: 0 };
 
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
 
  handleChange = (e) => {
    this.setState({sliderValue: e.target.value});
  };
 
  handleMouseDown = (e) => {
    const n = Math.round(e.target.value)
    const x = window.innerWidth*n;
 
    this.setState({sliderValue: n});
    this.myRef.current.children[n].scrollIntoView({behavior: 'smooth'});
    // this.myRef.current.scrollTo(x,0);
  };
  render() {
  console.log(this.state.sliderValue)

    return (
      <div className="third-block" data-page="2">
        <div className="slides-wrapper" ref={this.myRef}>
          <FirstBlock />
          <SecondBlock />
          <ThirdBlock />
          
        
          
        </div>
        <div
            style={{
              // background: "white",
              // position: "fixed",
              display:  (this.props.current == 2) ? 'block': 'none',
              // bottom: 30,
              left: 205
              
            }}
            className = 'slider-container'
          >
            <input
              min="0"
              max="2"
              step="0.01"
              onChange={this.handleChange}
              onTouchEnd={this.handleMouseDown}
              value={this.state.sliderValue}
              type="range"
              className = "slider"
              style = {{background:'-webkit-linear-gradient(left ,#d1eaff 0%,#d1eaff '+this.state.sliderValue*50+'%,#435063 '+this.state.sliderValue*50+'%, #435063 100%)'}}
            />
            <div className='scroller-points'>
            <span>1988</span>
            <span>2009</span>
            <span>2016</span>
          </div>
        </div>
        
      </div>
    );
  }
}