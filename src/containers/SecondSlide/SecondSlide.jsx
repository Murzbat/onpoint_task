import React, {Component} from 'react';
import './SecondSlide.css';
import { IceCube } from '../../components/IceCube/IceCube';
export const SecondSlide = (props) => {
    let translate = (props.current > 1) ? 'translate3d(0,-70px, 1px)' 
    : (props.current < 1) ? 'translate3d(0,70px, 1px)' : 'translate3d(0, 0px, 1px)';
    const styleTranslate = {
      transform: translate,
      transition: '0.5s'
    }
    return (
    <div className='second-block' data-page="1">
        <div className='second-block-title'>Основа терапии —<br/>патогенез СД2</div>
        <IceCube  id='1' top='33' left='877'/>
        <IceCube  id='2' top='161' left='82'/>
        <IceCube  id='3' top='442' left='232'/>
        <IceCube  id='4' top='585' left='713'/>
    </div>
    )
}