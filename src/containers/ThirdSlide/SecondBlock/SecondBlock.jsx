import React from 'react';
import './SecondBlock.css'
import { IceCube } from '../../../components/IceCube/IceCube';


export const SecondBlock = () => {
  
  return (
    <div className='second-slide horizontal-slide'>
      <div className='second-slide-title'>Смертельный октет</div>
      <div className='second-slide-box'></div>
      <IceCube id='8' top='94' left='474'/>
      <IceCube id='9' top='239' left='46'/>
      <IceCube id='10' top='571' left='899'/>
    </div>
  )
}

