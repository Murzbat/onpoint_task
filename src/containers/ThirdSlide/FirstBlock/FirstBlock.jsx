import React from 'react';
import './FirstBlock.css'
import { IceCube } from '../../../components/IceCube/IceCube';

export const FirstBlock = () => {
  return (
    <div className='first-slide horizontal-slide'>
      <div className='first-slide-title'>Звенья патогенеза СД2</div>
      <div className='first-slide-box'></div>
      <IceCube id='5' top='112' left='911'/>
      <IceCube id='6' top='227' left='666'/>
      <IceCube id='7' top='554' left='21'/>
    </div>
  )
}
