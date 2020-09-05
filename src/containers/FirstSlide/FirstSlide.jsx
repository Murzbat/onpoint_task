import React, { Component } from 'react';
import './FirstSlide.css';
import DownPage from '../../components/DownPage/DownPage';
import { Circle } from '../../components/Circle/Circle';

export default class FirstSlide extends Component{
    render () {
        const translate = (this.props.current > 0) ? 'translate3d(0,-70px, 1px)' : 'translate3d(0, 0px, 1px)'
        const styleTranslate = {
          transform: translate,
          transition: '0.5s'
        }

    return (
        
        <div className = 'first-slide-image' data-page="0">
            <div style={styleTranslate} className='headline-text'>Всегда ли цели терапии СД2<br/>на поверхности?</div>
                <Circle />
            
            <DownPage/>
        
        </div>
        
    
    )
    }

}