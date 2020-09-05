import React from 'react';
import './ThirdBlock.css'
import { IceCube } from '../../../components/IceCube/IceCube';


export const ThirdBlock = () => {
  return (
    <div className='third-slide horizontal-slide'>
      <div className='third-slide-title'>Звенья патогенеза СД2</div>
      <div className='third-slide-box'></div>
      <IceCube id='11' top='109' left='-5'/>
      <IceCube id='12' top='212' left='936'/>
      <IceCube id='13' top='588' left='153'/>
    </div>
  )
}

